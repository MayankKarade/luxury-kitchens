import { API_ENDPOINTS } from "@/config";

export const dynamic = "force-dynamic";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return Response.json(
      { status: 0, message: "Missing blog slug" },
      { status: 400 },
    );
  }

  try {
    const url = new URL(API_ENDPOINTS.Blog.blogDetail);
    url.searchParams.set("slug", slug);

    const response = await fetch(url, { cache: "no-store" });
    const data = await response.json();

    return Response.json(data, { status: response.status });
  } catch (error) {
    return Response.json(
      { status: 0, message: "Unable to fetch blog detail" },
      { status: 502 },
    );
  }
}
