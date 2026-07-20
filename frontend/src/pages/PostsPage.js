import React from "react";
import Post from "../components/posts/Post";

export default function PostsPage() {
  return (
    <section className="relative min-h-screen bg-bg text-textPrimary">
      {/* Hero */}
      <section className="border-b border-border bg-gradient-to-b from-surface to-bg">
        <div className="mx-auto max-w-7xl px-6 py-14 text-center">
          <h1 className="text-4xl font-bold">
            Welcome to <span className="text-accent">Postify</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-textDark">
            Discover inspiring articles, programming tutorials, AI updates, and
            stories from developers around the world.
          </p>
        </div>
      </section>

      {/* Posts */}
      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Latest Posts</h2>

          <span className="rounded-full bg-surface px-4 py-2 text-sm text-textMuted border border-border">
            2 Articles
          </span>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Post
            title="How AI is Changing Modern Software Development"
            image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
            description="Learn how AI tools are transforming developer workflows, improving productivity, and shaping the future of software engineering."
            author="John Doe"
            date="Jul 19, 2026"
          />

          <Post
            title="How AI is Changing Modern Software Development"
            image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
            description="Learn how AI tools are transforming developer workflows, improving productivity, and shaping the future of software engineering."
            author="John Doe"
            date="Jul 19, 2026"
          />

          <Post
            title="How AI is Changing Modern Software Development"
            image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
            description="Learn how AI tools are transforming developer workflows, improving productivity, and shaping the future of software engineering."
            author="John Doe"
            date="Jul 19, 2026"
          />
          <Post
            title="How AI is Changing Modern Software Development"
            image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
            description="Learn how AI tools are transforming developer workflows, improving productivity, and shaping the future of software engineering."
            author="John Doe"
            date="Jul 19, 2026"
          />

          <Post
            title="How AI is Changing Modern Software Development"
            image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
            description="Learn how AI tools are transforming developer workflows, improving productivity, and shaping the future of software engineering."
            author="John Doe"
            date="Jul 19, 2026"
          />

          <Post
            title="How AI is Changing Modern Software Development"
            image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
            description="Learn how AI tools are transforming developer workflows, improving productivity, and shaping the future of software engineering."
            author="John Doe"
            date="Jul 19, 2026"
          />
        </div>
      </main>
    </section>
  );
}
