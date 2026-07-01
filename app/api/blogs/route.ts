import { NextResponse } from "next/server";
import { client } from "@/lib/sanity";

export const dynamic = "force-dynamic";

// Fetches all published posts, newest first.
const QUERY = `*[_type == "blogPost" && defined(publishedAt)] | order(publishedAt desc) {
  "id": _id,
  category,
  title,
  excerpt,
  readTime,
  "slug": slug.current
}`;

export async function GET() {
  try {
    const blogs = await client.fetch(QUERY);
    return NextResponse.json({ blogs });
  } catch (err) {
    console.error("Blogs route error:", err);
    return NextResponse.json({ error: "Failed to load blogs" }, { status: 500 });
  }
}