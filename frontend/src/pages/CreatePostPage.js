import React, { useState } from "react";
import { ImagePlus } from "lucide-react";

export default function CreatePostPage() {
  // 🔹 All state
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [coverImg, setCoverImg] = useState(null);
  const [tags, setag] = useState([]);

  return (
    <section className="min-h-screen py-10 text-textPrimary">
      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            Create <span className="text-accent">Post</span>
          </h1>

          <p className="mt-2 text-textDark">
            Share your knowledge and ideas with the Postify community.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6 rounded-2xl border border-border bg-bgSoft p-6 shadow-xl shadow-shadow/20">
          {/* Title */}
          <div>
            <label className="mb-2 block text-sm font-medium text-textMuted">
              Post Title
            </label>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter your post title..."
              className="w-full rounded-xl border border-border bg-surfaceHard px-4 py-3 text-textPrimary placeholder:text-textDark outline-none transition-all duration-200 hover:border-hover focus:border-accent"
            />
          </div>

          {/* Cover Image */}
          <div>
            <label className="mb-2 block text-sm font-medium text-textMuted">
              Cover Image
            </label>

            <label
              htmlFor="coverImage"
              className="group flex h-60 w-full cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border bg-surfaceHard transition-all duration-200 hover:border-accent hover:bg-hover overflow-hidden"
            >
              {coverImg ? (
                <img
                  className="w-full object-cover"
                  src={URL.createObjectURL(coverImg)}
                  alt=""
                />
              ) : (
                <>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accentSoft text-accent transition-transform duration-200 group-hover:scale-110">
                    <ImagePlus size={30} />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold">
                    Upload Cover Image
                  </h3>

                  <p className="mt-2 text-center text-sm text-textDark">
                    Click to choose an image from your device
                  </p>

                  <span className="mt-5 rounded-lg bg-accent px-5 py-2 text-sm font-medium text-white transition-all duration-200 group-hover:bg-accentHover">
                    Choose Image
                  </span>
                </>
              )}

              <input
                id="coverImage"
                onChange={(e) => setCoverImg(e.target.files[0])}
                type="file"
                accept="image/*"
                className="hidden"
              />
            </label>
          </div>

          {/* Tags */}
          <div>
            <label className="mb-2 block text-sm font-medium text-textMuted">
              Tags
            </label>

            <input
              type="text"
              value={tags}
              onChange={(e) => {
                console.log(e);
                console.log(e.target.value);
                setag(e.target.value);
              }}
              placeholder="React, Javascript, Ai"
              className="w-full rounded-xl border border-border bg-surfaceHard px-4 py-3 text-textPrimary placeholder:text-textDark outline-none transition-all duration-200 hover:border-hover focus:border-accent"
            />

            <p className="mt-2 text-xs text-textDark">
              Separate tags using commas.
              <kbd className="text-accent"> (,)</kbd>
            </p>
          </div>

          {/* Description */}
          <div>
            <label className="mb-2 block text-sm font-medium text-textMuted">
              Description
            </label>

            <textarea
              rows={8}
              value={des}
              onChange={(e) => setDes(e.target.value)}
              placeholder="Write your post here..."
              className="w-full resize-none rounded-xl border border-border bg-surfaceHard px-4 py-3 text-textPrimary placeholder:text-textDark outline-none transition-all duration-200 hover:border-hover focus:border-accent"
            />
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-border pt-6">
            <p className="text-sm text-textDark">
              Make sure your content follows the community guidelines.
            </p>

            <button
              type="submit"
              className="rounded-xl bg-accent px-6 py-3 font-semibold text-white transition-all duration-200 hover:bg-accentHover active:scale-95"
            >
              Publish Post
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
