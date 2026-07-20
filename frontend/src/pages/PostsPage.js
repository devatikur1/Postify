import React from "react";
import Post from "../components/posts/Post";

export default function PostsPage() {
  return (
    <section className="w-full h-full overflow-hidden *:overflow-hidden">
      <header></header>
      <ul className="w-full flex flex-col md:flex-row gap-4">
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
      </ul>
    </section>
  );
}
