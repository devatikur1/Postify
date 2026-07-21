import React from "react";
import { ArrowRight } from "lucide-react";

export default function Post({ title, image, author, date }) {
  return (
    <li className="group overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-boxHover">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="space-y-5 p-5">
        <h2
          title={title}
          className="line-clamp-2 text-xl font-semibold leading-8 text-textPrimary transition-colors group-hover:text-accent"
        >
          {title}
        </h2>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-border pt-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-base font-semibold text-white">
              {author?.charAt(0)?.toUpperCase()}
            </div>

            <div>
              <p className="text-sm font-medium text-textPrimary">{author}</p>

              <time className="text-xs text-textDark">{date}</time>
            </div>
          </div>

          <button className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-accent transition-all hover:bg-accentSoft group-hover:gap-2">
            Read
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </li>
  );
}
