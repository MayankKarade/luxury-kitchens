import { API_ENDPOINTS } from "@/config";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const response = await fetch(API_ENDPOINTS.Blog.blogsList, {
      cache: "no-store",
    });
    const data = await response.json();

    return Response.json(data, { status: response.status });
  } catch (error) {
    return Response.json(
      { status: 0, message: "Unable to fetch blogs" },
      { status: 502 },
    );
  }
}
