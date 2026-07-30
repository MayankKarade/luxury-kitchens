const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const dynamic = "force-dynamic";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return Response.json(
      { status: 0, message: "Missing service slug" },
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
    const url = new URL(`${API_BASE_URL}/service-detail`);
    url.searchParams.set("slug", slug);

    const response = await fetch(url, { cache: "no-store" });
    const data = await response.json().catch(() => null);

    return Response.json(
      data || { status: 0, message: "Unable to fetch service detail" },
      { status: response.status },
    );
  } catch (error) {
    return Response.json(
      { status: 0, message: "Unable to fetch service detail" },
      { status: 502 },
    );
  }
}
