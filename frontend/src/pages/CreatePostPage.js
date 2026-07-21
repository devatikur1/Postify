import React, { useEffect, useState } from "react";
import { ImagePlus, Loader2 } from "lucide-react";
import axios from "axios";

export default function CreatePostPage() {
  // 🔹 All state
  const [title, setTitle] = useState("");
  const [coverImg, setCoverImg] = useState(null);
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");

  const [loading, setLoading] = useState(false);
  const [isDisable, setIsDisable] = useState(true);

  // 🔹 Add Tag Fn
  const addTag = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();

      const tag = tagInput.trim().replace(",", "");

      if (!tag) return;

      if (tags.includes(tag)) {
        setTagInput("");
        return;
      }

      setTags([...tags, tag]);
      setTagInput("");
    }
  };

  // 🔹 Remove Tag Fn
  const removeTag = (tag) => {
    setTags(tags.filter((item) => item !== tag));
  };

  // 🔹 Check Disable
  useEffect(() => {
    setIsDisable(!title.trim() || !coverImg || tags.length === 0 || loading);
  }, [coverImg, loading, tags.length, title]);

  // 🔹 Handle create post fn
  async function CreatePost(e) {
    e.preventDefault();
    if (isDisable) return;
    setLoading(true);
    const formData = new FormData();
    console.log(formData);

    formData.append("image", coverImg);
    formData.append("caption", title);
    formData.append("tags", tags.join(", "));

    axios.post("http://localhost:3000/create-post", formData).then((res) => {
      console.log(res);
    });

    setTimeout(() => {
      setLoading(false);
      setCoverImg(null);
      setTitle("");
      setTags([]);
    }, 3000);
  }

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
        <form
          onSubmit={CreatePost}
          className="space-y-6 rounded-2xl border border-border bg-bgSoft p-6 shadow-xl shadow-shadow/20"
        >
          {/* Title */}
          <div>
            <label className="mb-2 block text-sm font-medium text-textMuted">
              Post Title
            </label>

            <input
              required
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
                required
                type="file"
                id="coverImage"
                accept="image/*"
                className="hidden"
                onChange={(e) => setCoverImg(e.target.files[0])}
              />
            </label>
          </div>

          {/* Tags */}
          <div>
            <label className="mb-2 block text-sm font-medium text-textMuted">
              Tags
            </label>

            <div className="flex min-h-[52px] flex-wrap items-center gap-2 rounded-xl border border-border bg-surfaceHard px-3 py-2 transition-all duration-200 hover:border-hover focus-within:border-accent">
              {tags.map((tag) => (
                <div
                  key={tag}
                  className="flex items-center gap-2 rounded-lg bg-accentSoft px-3 py-1 text-sm text-accent"
                >
                  <span>#{tag}</span>

                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="text-base hover:text-error"
                  >
                    ×
                  </button>
                </div>
              ))}

              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={addTag}
                placeholder={tags.length ? "" : "React, JavaScript, AI"}
                className="flex-1 bg-transparent py-1 text-textPrimary placeholder:text-textDark outline-none"
              />
            </div>

            <p className="mt-2 text-xs text-textDark">
              Press <kbd className="text-accent">Enter</kbd> or{" "}
              <kbd className="text-accent">,</kbd> to add a tag.
            </p>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-border pt-6">
            <p className="text-sm text-textDark">
              Make sure your content follows the community guidelines.
            </p>

            <button
              type="submit"
              disabled={isDisable}
              className="rounded-xl bg-accent px-6 py-3 font-semibold text-white transition-all duration-200 hover:bg-accentHover active:scale-95 disabled:opacity-45 disabled:cursor-not-allowed"
            >
              {loading ? (
                <Loader2 className="animate-spin" />
              ) : (
                <>Publish Post</>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
