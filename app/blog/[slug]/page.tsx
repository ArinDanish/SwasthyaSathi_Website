import { client } from "@/lib/sanity";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface BlogPost {
  title: string;
  category: string;
  readTime: string;
  publishedAt: string;
  body: any;
  coverImageUrl: string | null;
}

const POST_QUERY = `*[_type == "blogPost" && slug.current == $slug][0]{
  title,
  category,
  readTime,
  publishedAt,
  body,
  "coverImageUrl": coverImage.asset->url
}`;

async function getPost(slug: string): Promise<BlogPost | null> {
  return client.fetch(POST_QUERY, { slug });
}

const ptComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="leading-relaxed mb-5" style={{ color: "#3a5876" }}>
        {children}
      </p>
    ),
    h2: ({ children }) => (
      <h2
        className="font-display font-bold text-2xl mt-10 mb-4"
        style={{ color: "#0e2540" }}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        className="font-display font-bold text-xl mt-8 mb-3"
        style={{ color: "#0e2540" }}
      >
        {children}
      </h3>
    ),
  },
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  const date = new Date(post.publishedAt).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="py-16 md:py-24" style={{ background: "#ffffff" }}>
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/#blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold mb-8"
            style={{ color: "#1b4f9c" }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to all posts
          </Link>

          <p
            className="font-mono text-xs uppercase tracking-wider font-semibold mb-4"
            style={{ color: "#3eaee0" }}
          >
            {post.category}
          </p>

          <h1
            className="font-display font-bold leading-tight mb-4"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "#0e2540" }}
          >
            {post.title}
          </h1>

          <div
            className="flex items-center gap-3 text-sm mb-10 pb-8 border-b"
            style={{ color: "#5a7a96", borderColor: "#dcedf8" }}
          >
            <span>{date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>

          {post.coverImageUrl && (
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-10">
              <Image
                src={post.coverImageUrl}
                alt={post.title}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 700px"
              />
            </div>
          )}

          <div className="prose-content">
            <PortableText value={post.body} components={ptComponents} />
          </div>
        </div>
      </div>
    </article>
  );
}