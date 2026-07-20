import React from "react";
import { ArrowRight } from "lucide-react";

export default function Post({ title, image, description, author, date }) {
  return (
    <li className="group overflow-hidden rounded-2xl border border-border bg-surface shadow-lg shadow-shadow/20 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-boxHover">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-70" />
      </div>
      
      {/* Content */}
      <div className="space-y-4 p-5">
        <h2
          title={title}
          className="line-clamp-2 text-xl font-semibold leading-snug text-textPrimary"
        >
          {title}
        </h2>

        {description && (
          <p
            title={description}
            className="line-clamp-3 text-sm leading-6 text-textDark"
          >
            {description}
          </p>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-border pt-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white">
              {author?.charAt(0)}
            </div>

            <div>
              <p className="text-sm font-medium text-textMuted">{author}</p>
              <time className="text-xs text-textDark">{date}</time>
            </div>
          </div>

          <button className="flex items-center gap-1 text-sm font-medium text-accent transition-all group-hover:gap-2">
            Read
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </li>
  );
}
