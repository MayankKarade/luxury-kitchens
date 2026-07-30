import {
  findServiceDesignProduct,
  getServiceDesignProduct,
} from "@/components/service-designs/serviceDesignData";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const PRODUCT_LIST_ENDPOINTS = ["product"];
const PRODUCT_DETAIL_ENDPOINTS = ["product_detail", "product-detail"];

function getProductArray(data) {
  const product = data?.data?.product;

  if (Array.isArray(product)) {
    return product;
  }

  return product ? [product] : [];
}

async function fetchApiProducts(endpointPath, slug) {
  if (!API_BASE_URL) {
    return [];
  }

  try {
    const url = new URL(`${API_BASE_URL}/${endpointPath}`);
    url.searchParams.set("slug", slug);

    const response = await fetch(url, { cache: "no-store" });

    if (!response.ok) {
      return [];
    }

    const data = await response.json().catch(() => null);

    return getProductArray(data);
  } catch {
    return [];
  }
}

function productMatchesSlug(product, expectedSlug) {
  return (
    product?.slug === expectedSlug ||
    (product?.id !== undefined && String(product.id) === expectedSlug)
  );
}

async function findApiProduct(endpointPaths, slug, expectedSlug) {
  for (const endpointPath of endpointPaths) {
    const products = await fetchApiProducts(endpointPath, slug);
    const product = products.find((item) => productMatchesSlug(item, expectedSlug));

    if (product) {
      return product;
    }
  }

  return null;
}

function applyApiProduct(product, apiProduct, requestedSlug) {
  return {
    ...product,
    slug: apiProduct.slug || String(apiProduct.id || requestedSlug),
    title: apiProduct.heading || product.title,
    text: apiProduct.description || product.text,
    detailText: apiProduct.description || product.detailText,
    price: apiProduct.price || product.price,
    rating: apiProduct.rating || product.rating,
    image: apiProduct.image || product.image,
  };
}

export async function getExactServiceDesignProduct(service, serviceSlug, designSlug) {
  const staticProduct = findServiceDesignProduct(service, designSlug);

  if (staticProduct) {
    return getServiceDesignProduct(service, designSlug);
  }

  const apiListProduct = await findApiProduct(
    PRODUCT_LIST_ENDPOINTS,
    serviceSlug,
    designSlug,
  );

  if (!apiListProduct) {
    return null;
  }

  const apiDetailProduct =
    (await findApiProduct(PRODUCT_DETAIL_ENDPOINTS, designSlug, designSlug)) ||
    apiListProduct;
  const fallbackProduct = getServiceDesignProduct(service, designSlug);

  return applyApiProduct(fallbackProduct, apiDetailProduct, designSlug);
}
