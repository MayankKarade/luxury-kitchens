"use client";

import { useEffect, useMemo, useState } from "react";

import { getPolicyEndpoint, normalizePolicyData } from "@/lib/legalPolicy";
import LegalPage from "./LegalPage";

function hasPolicyContent(policy) {
  return Boolean(policy?.contentHtml || policy?.sections?.length);
}

export default function LegalPolicyClient({ type, fallbackPolicy }) {
  const emptyPolicy = useMemo(
    () => ({
      ...fallbackPolicy,
      contentHtml: "",
      sections: [],
    }),
    [fallbackPolicy],
  );
  const [policy, setPolicy] = useState(emptyPolicy);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const endpoint = getPolicyEndpoint(type);
    const controller = new AbortController();

    if (!endpoint) {
      queueMicrotask(() => setStatus("error"));
      return undefined;
    }

    const fetchPolicy = async () => {
      try {
        const response = await fetch(endpoint, {
          cache: "no-store",
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Policy API request failed");
        }

        const data = await response.json();
        const nextPolicy = normalizePolicyData(data, type, emptyPolicy);

        if (!hasPolicyContent(nextPolicy)) {
          throw new Error("Policy API returned no content");
        }

        setPolicy(nextPolicy);
        setStatus("success");
      } catch (error) {
        if (error.name === "AbortError") {
          return;
        }

        setPolicy(emptyPolicy);
        setStatus("error");
      }
    };

    fetchPolicy();

    return () => controller.abort();
  }, [emptyPolicy, type]);

  return <LegalPage {...policy} status={status} />;
}
