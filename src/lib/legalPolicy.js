import { API_ENDPOINTS } from "@/config";

const endpoints = {
  privacy: API_ENDPOINTS.Policy?.privacy,
  terms: API_ENDPOINTS.Policy?.terms,
  return: API_ENDPOINTS.Policy?.return,
};

const policyKeys = {
  privacy: ["privacy_policy", "privacyPolicy", "privacy", "policy"],
  terms: [
    "terms_policy",
    "termsPolicy",
    "terms_conditions",
    "terms_condition",
    "terms",
    "policy",
  ],
  return: [
    "return_policy",
    "returnPolicy",
    "refund_policy",
    "return_refund",
    "return_and_refund",
    "return",
    "returns",
    "refund",
    "policy",
  ],
};

const contentKeys = [
  "option_value",
  "content",
  "description",
  "details",
  "body",
  "text",
  "html",
  "page_content",
  "policy_content",
  "privacy_policy",
  "terms_policy",
  "return_policy",
  "refund_policy",
  "return_refund",
];

function isPlainObject(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function firstMeaningfulItem(value) {
  if (!Array.isArray(value)) {
    return value;
  }

  return value.find(Boolean) || null;
}

function hasRenderableFields(value) {
  if (!isPlainObject(value)) {
    return false;
  }

  return Boolean(
    value.sections ||
      value.section ||
      value.title ||
      value.heading ||
      value.updated_at ||
      value.updatedAt ||
      contentKeys.some((key) => typeof value[key] === "string"),
  );
}

function unwrapPolicyPayload(value, type) {
  if (!value) {
    return null;
  }

  if (typeof value === "string") {
    return value;
  }

  if (Array.isArray(value)) {
    return firstMeaningfulItem(value);
  }

  if (!isPlainObject(value)) {
    return null;
  }

  for (const key of ["data", "result", "response"]) {
    if (value[key]) {
      return unwrapPolicyPayload(value[key], type);
    }
  }

  if (hasRenderableFields(value)) {
    return value;
  }

  for (const key of policyKeys[type] || []) {
    if (value[key]) {
      return unwrapPolicyPayload(value[key], type);
    }
  }

  return value;
}

function getStringValue(source, keys) {
  if (!isPlainObject(source)) {
    return "";
  }

  for (const key of keys) {
    if (typeof source[key] === "string" && source[key].trim()) {
      return source[key].trim();
    }
  }

  return "";
}

function formatDate(value) {
  if (!value) {
    return "";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return String(value);
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function containsHtml(value) {
  return /<\/?[a-z][\s\S]*>/i.test(value);
}

function splitParagraphs(value) {
  return String(value)
    .split(/\n{2,}|\r\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

function mapApiSections(value) {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .map((section, index) => {
      if (typeof section === "string") {
        return {
          title: `Section ${index + 1}`,
          body: splitParagraphs(section),
        };
      }

      if (!isPlainObject(section)) {
        return null;
      }

      const sectionBody = section.body || section.content || section.description;
      const body = Array.isArray(sectionBody)
        ? sectionBody.filter(Boolean).map(String)
        : splitParagraphs(sectionBody || "");

      if (body.length === 0) {
        return null;
      }

      return {
        title:
          section.title ||
          section.heading ||
          section.name ||
          `Section ${index + 1}`,
        body,
      };
    })
    .filter(Boolean);
}

export function getPolicyEndpoint(type) {
  return endpoints[type];
}

export function normalizePolicyData(responseData, type, fallback) {
  const payload = unwrapPolicyPayload(responseData, type);

  if (!payload) {
    return fallback;
  }

  if (typeof payload === "string") {
    return containsHtml(payload)
      ? { ...fallback, contentHtml: payload, sections: [] }
      : {
          ...fallback,
          sections: [{ title: fallback.eyebrow, body: splitParagraphs(payload) }],
        };
  }

  const sections = mapApiSections(
    payload.sections || payload.section || payload.body,
  );
  const content = getStringValue(payload, contentKeys);
  const title = getStringValue(payload, ["title", "heading", "name"]);
  const updatedAt = formatDate(
    payload.updated_at ||
      payload.updatedAt ||
      payload.last_updated ||
      payload.lastUpdated ||
      payload.date ||
      payload.created_at,
  );

  if (sections.length > 0) {
    return {
      ...fallback,
      title: title || fallback.title,
      updatedAt: updatedAt || fallback.updatedAt,
      sections,
    };
  }

  if (content) {
    return {
      ...fallback,
      title: title || fallback.title,
      updatedAt: updatedAt || fallback.updatedAt,
      contentHtml: containsHtml(content) ? content : "",
      sections: containsHtml(content)
        ? []
        : [{ title: title || fallback.eyebrow, body: splitParagraphs(content) }],
    };
  }

  return fallback;
}

export async function getLegalPolicy(type, fallback) {
  const endpoint = getPolicyEndpoint(type);

  if (!endpoint) {
    return fallback;
  }

  try {
    const response = await fetch(endpoint, { cache: "no-store" });

    if (!response.ok) {
      return fallback;
    }

    const data = await response.json();

    return normalizePolicyData(data, type, fallback);
  } catch (error) {
    return fallback;
  }
}
