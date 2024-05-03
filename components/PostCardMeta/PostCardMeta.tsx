import React, { FC } from "react";
import Avatar from "@/components/Avatar/Avatar";
import { PostDataType } from "@/data/types";
import Link from "next/link";

export interface PostCardMetaProps {
  className?: string;
  meta: Pick<PostDataType, "date" | "author">;
  hiddenAvatar?: boolean;
  avatarSize?: string;
}

const PostCardMeta: FC<PostCardMetaProps> = ({
  className = "text-xs leading-none",
  meta,
  hiddenAvatar = false,
  avatarSize = "h-7 w-7 text-sm",
}) => {
  const { date, author } = meta;

  return (
    <div
      className={`nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 ${className}`}
    >
      <Link
        href={author.href}
        className="relative flex items-center space-x-2 rtl:space-x-reverse"
      >
        {!hiddenAvatar && (
          <Avatar
            radius="rounded-full"
            sizeClass={avatarSize}
            imgUrl={author.avatar}
            userName={author.displayName}
          />
        )}
        <span className="block font-medium text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white">
          {author.displayName}
        </span>
      </Link>
      <>
        <span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">
          ·
        </span>
        <span className="font-normal text-neutral-500 dark:text-neutral-400">
          {date}
        </span>
      </>
    </div>
  );
};

export default PostCardMeta;
