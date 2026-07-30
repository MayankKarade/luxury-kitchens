const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const dynamic = "force-dynamic";

export async function GET() {
  if (!API_BASE_URL) {
    return Response.json(
      { status: 0, message: "Missing API base URL" },
      { status: 500 },
    );
  }

  try {
    const response = await fetch(`${API_BASE_URL}/service`, {
      cache: "no-store",
    });
    const data = await response.json().catch(() => null);

    return Response.json(
      data || { status: 0, message: "Unable to fetch services" },
      { status: response.status },
    );
  } catch (error) {
    return Response.json(
      { status: 0, message: "Unable to fetch services" },
      { status: 502 },
    );
  }
}
