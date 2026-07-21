import React, { useEffect, useState } from "react";
import Post from "../components/posts/Post";
import axios from "axios";

export default function PostsPage() {
  // 🔹 All  State
  const [posts, setPost] = useState([]);

  // 🔹 Get All post
  useEffect(() => {
    axios.get("http://localhost:3000/").then((res) => {
      setPost(res.data.posts);
    });
  }, []);

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
          {posts?.map((post) => (
            <Post
              key={post._id}
              title={post.caption}
              image={post.image}
              author="John Doe"
              date="Jul 19, 2026"
            />
          ))}
        </div>
      </main>
    </section>
  );
}
