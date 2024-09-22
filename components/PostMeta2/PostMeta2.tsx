import React, { FC } from "react";
import Avatar from "@/components/Avatar/Avatar";
import { PostDataType } from "@/data/types";
// import { DEMO_POSTS } from "@/data/posts";
import Link from "next/link";
import { format } from "date-fns";

// const metaDemo: PostMeta2Props["meta"] = DEMO_POSTS[0];

export interface PostMeta2Props {
  className?: string;
  post: PostDataType;
  hiddenCategories?: boolean;
  size?: "large" | "normal";
  avatarRounded?: string;
}

const PostMeta2: FC<PostMeta2Props> = ({
  className = "leading-none",
  post,
  hiddenCategories = false,
  size = "normal",
  avatarRounded,
}) => {
  const { date_created, author, categories, readingTime } = post;

  const authorHref = { pathname: `/en/author/${author.slug}` };

  const formattedDate = format(new Date(date_created), "MMM d, yyyy");

  const authorImg = author.avatar;

  return (
    <div
      className={`nc-PostMeta2 flex items-center flex-wrap text-neutral-700 text-left dark:text-neutral-200 ${
        size === "normal" ? "text-xs" : "text-sm"
      } ${className}`}
    >
      <Link
        href={authorHref}
        className="flex items-center space-x-2 rtl:space-x-reverse"
      >
        <Avatar
          radius={avatarRounded}
          sizeClass={
            size === "normal"
              ? "h-6 w-6 text-sm"
              : "h-10 w-10 sm:h-11 sm:w-11 text-xl"
          }
          imgUrl={authorImg.id}
          userName={author.displayName}
        />
      </Link>
      <div className="ms-3">
        <div className="flex items-center">
          <Link href={authorHref} className="block font-semibold">
            {author.displayName}
          </Link>

          {!hiddenCategories && (
            <>
              <span className="mx-2 font-semibold">·</span>
              <div className="ms-0">
                <span className="text-xs">🏷 </span>
                {categories.map((cat, index) => (
                  <Link key={cat.id} href={cat.href} className="font-semibold">
                    {cat.name}
                    {index < categories.length - 1 && <span>, </span>}
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
        <div className="text-xs mt-[6px]">
          <span className="text-neutral-700 dark:text-neutral-300">
            {formattedDate}
          </span>
          <span className="mx-2 font-semibold">·</span>
          <span className="text-neutral-700 dark:text-neutral-300">
            Pending min read
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostMeta2;
