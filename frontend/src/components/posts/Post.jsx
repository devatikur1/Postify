import React from "react";

export default function Post({ title, image, description, author, date }) {
  return (
    <li className="group w-full max-w-[320px] overflow-hidden rounded-lg border border-border bg-surface transition-all duration-200 hover:bg-boxHover">
      {/* Image */}
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="space-y-2 p-3">
        <h2
          title={title}
          className="line-clamp-2 text-lg font-semibold text-textPrimary"
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

        {(author || date) && (
          <div className="flex items-center justify-between border-t border-border pt-2 text-xs text-textDark">
            <span className="truncate hover:text-accent cursor-pointer transition-all">{author}</span>
            <time>{date}</time>
          </div>
        )}
      </div>
    </li>
  );
}
