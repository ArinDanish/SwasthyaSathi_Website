"use client";

import { useEffect, useState } from "react";
import ContactForm from "@/components/ContactForm";

type BlogPost = {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  slug: string | null;
};

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [blogStatus, setBlogStatus] = useState<
    "loading" | "success" | "error"
  >("loading");

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const response = await fetch("/api/blogs");

        if (!response.ok) {
          throw new Error("Failed to load blog posts");
        }

        const data = (await response.json()) as { blogs: BlogPost[] };
        setBlogPosts(data.blogs);
        setBlogStatus("success");
      } catch (error) {
        console.error("Error loading blog posts:", error);
        setBlogStatus("error");
      }
    };

    loadBlogs();
  }, []);

  return (
    <section className="bg-[--sand] py-16 md:py-24">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <p className="eyebrow mb-4">Get in touch</p>
          <h1 className="section-title">Let&apos;s talk about your clinic</h1>
          <p className="section-subtitle">
            Tell us a bit about how your clinic runs today — we&apos;ll come back
            with a setup that fits, not a generic demo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10">
          {/* Contact details */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-[--line] p-7">
              <h3 className="font-mono text-xs uppercase tracking-wider text-[--ash] mb-2">
                Email
              </h3>
              <a
                href="mailto:contact@swasthyasathi.com"
                className="font-display text-lg font-semibold text-[--ink] hover:text-[--teal]"
              >
                contact@swasthyasathi.com
              </a>
            </div>
            <div className="bg-white rounded-2xl border border-[--line] p-7">
              <h3 className="font-mono text-xs uppercase tracking-wider text-[--ash] mb-2">
                Response time
              </h3>
              <p className="font-display text-lg font-semibold text-[--ink]">
                Within one business day
              </p>
            </div>
            <div className="bg-[--ink] text-[--sand] rounded-2xl p-7">
              <h3 className="font-mono text-xs uppercase tracking-wider text-[--coral] mb-2">
                For existing clinics
              </h3>
              <p className="text-[--sage]/80 text-sm leading-relaxed">
                Already using Swasthya Sathi? Reach your account manager
                directly through the in-app support panel for the fastest
                response.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl border border-[--line] p-7 md:p-9">
            {formStatus === "success" && (
              <div className="mb-6 bg-[--sage] text-[--teal-deep] rounded-xl px-5 py-4 text-sm font-medium">
                Message sent. We&apos;ll be in touch within one business day.
              </div>
            )}
            {formStatus === "error" && (
              <div className="mb-6 bg-[--coral]/10 text-[--coral] rounded-xl px-5 py-4 text-sm font-medium">
                Something went wrong sending your message. Please try again.
              </div>
            )}
            <ContactForm setFormStatus={setFormStatus} />
          </div>
        </div>

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
      </div>
    </section>
  );
}
