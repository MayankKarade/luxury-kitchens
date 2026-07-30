const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const dynamic = "force-dynamic";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return Response.json(
      { status: 0, message: "Missing product slug" },
      { status: 400 },
    );
  }

  if (!API_BASE_URL) {
    return Response.json(
      { status: 0, message: "Missing API base URL" },
      { status: 500 },
    );
  }

  try {
    const endpointPaths = ["product_detail", "product-detail"];
    let lastData = null;
    let lastStatus = 502;

    for (const endpointPath of endpointPaths) {
      const url = new URL(`${API_BASE_URL}/${endpointPath}`);
      url.searchParams.set("slug", slug);

      const response = await fetch(url, { cache: "no-store" });
      const data = await response.json().catch(() => null);

      lastData = data;
      lastStatus = response.status;

      if (response.ok) {
        return Response.json(data, { status: response.status });
      }
    }

    return Response.json(
      lastData || { status: 0, message: "Unable to fetch product detail" },
      { status: lastStatus },
    );
  } catch (error) {
    return Response.json(
      { status: 0, message: "Unable to fetch product detail" },
      { status: 502 },
    );
  }
}
