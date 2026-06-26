"use client";

import { useEffect, useState } from "react";

type BlogPost = {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
};

export default function BlogSection() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [blogStatus, setBlogStatus] = useState<
    "loading" | "success" | "error"
  >("loading");

  useEffect(() => {
    const controller = new AbortController();

    const loadBlogs = async () => {
      try {
        const response = await fetch("/api/blogs", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Failed to load blog posts");
        }

        const data = (await response.json()) as { blogs: BlogPost[] };
        setBlogPosts(data.blogs);
        setBlogStatus("success");
      } catch (error) {
        if (controller.signal.aborted) {
          return;
        }

        console.error("Error loading blog posts:", error);
        setBlogStatus("error");
      }
    };

    loadBlogs();

    return () => controller.abort();
  }, []);

  return (
    <div className="mt-20 md:mt-24">
      <div className="max-w-2xl mb-10">
        <p className="eyebrow mb-4">From the blog</p>
        <h2 className="section-title">Ideas for calmer clinic days</h2>
        <p className="section-subtitle">
          Notes on patient flow, clinical operations, and using AI where it
          actually saves time.
        </p>
      </div>

      {blogStatus === "loading" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white border border-[--line] rounded-2xl p-6 min-h-64 animate-pulse"
            >
              <div className="h-3 w-24 bg-[--sage] rounded mb-6" />
              <div className="h-6 w-4/5 bg-[--sage] rounded mb-4" />
              <div className="space-y-3">
                <div className="h-3 w-full bg-[--sage] rounded" />
                <div className="h-3 w-5/6 bg-[--sage] rounded" />
                <div className="h-3 w-2/3 bg-[--sage] rounded" />
              </div>
            </div>
          ))}
        </div>
      )}

      {blogStatus === "error" && (
        <div className="bg-white border border-[--line] rounded-2xl p-6 text-[--ash]">
          Blog posts are unavailable right now.
        </div>
      )}

      {blogStatus === "success" && blogPosts.length === 0 && (
        <div className="bg-white border border-[--line] rounded-2xl p-6 text-[--ash]">
          No blog posts have been added yet.
        </div>
      )}

      {blogStatus === "success" && blogPosts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white border border-[--line] rounded-2xl p-6 flex flex-col min-h-64"
            >
              <div className="flex items-center justify-between gap-4 mb-5">
                <p className="font-mono text-[0.68rem] uppercase tracking-wider text-[--coral]">
                  {post.category}
                </p>
                <span className="text-xs text-[--ash] whitespace-nowrap">
                  {post.readTime}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold leading-tight text-[--ink] mb-3">
                {post.title}
              </h3>
              <p className="text-sm leading-relaxed text-[--ash] flex-1">
                {post.excerpt}
              </p>
              <button
                type="button"
                className="mt-6 self-start text-sm font-semibold text-[--teal] hover:text-[--teal-deep] transition-colors"
              >
                Read article
              </button>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
