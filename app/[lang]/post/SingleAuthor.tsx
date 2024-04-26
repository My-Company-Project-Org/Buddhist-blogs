// import Avatar from "@/components/Avatar/Avatar";
import { DEMO_AUTHORS } from "@/data/authors";
import { PostAuthorType } from "@/data/types";
import Link from "next/link";
import React, { FC } from "react";

export interface SingleAuthorProps {
  author?: PostAuthorType;
}

const SingleAuthor: FC<SingleAuthorProps> = ({ author = DEMO_AUTHORS[1] }) => {
  return (
    <div className="flex nc-SingleAuthor">
      {/* <Link href={author.href}>
        <Avatar
          imgUrl={author.avatar}
          userName={author.displayName}
          sizeClass="h-12 w-12 text-lg sm:text-xl sm:h-24 sm:w-24"
        />
      </Link>
      <div className="flex flex-col max-w-lg ml-3 sm:ml-5">
        <span className="text-xs tracking-wider uppercase text-neutral-400">
          WRITTEN BY
        </span>
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-200">
          <Link href={author.href}>{author.displayName}</Link>
        </h2>
        <span className="block mt-1 text-sm text-neutral-500 sm:text-base dark:text-neutral-300">
          {author.desc}
          <Link
            className="ml-1 font-medium text-primary-6000"
            href={author.href}
          >
            Read more
          </Link>
        </span>
      </div> */}
    </div>
  );
};

export default SingleAuthor;
