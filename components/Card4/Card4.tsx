import React, { FC } from "react";
// import PostCardSaveAction from "@/components/PostCardSaveAction/PostCardSaveAction";
import { PostDataType } from "@/data/types";
import CardAuthor2 from "@/components/CardAuthor2/CardAuthor2";
import CategoryBadgeList from "@/components/CategoryBadgeList/CategoryBadgeList";
import Image from "next/image";
import Link from "next/link";

export interface Card4Props {
  className?: string;
  post: PostDataType;
}

const Card4: FC<Card4Props> = ({ className = "h-full", post }) => {
  const { title, href, featuredImage, categories, author, date, readingTime } =
    post;

  return (
    <div
      className={`nc-Card4 relative flex flex-col group bg-white dark:bg-neutral-900 rounded-3xl ${className}`}
    >
      <span className="relative flex-shrink-0 block w-full overflow-hidden aspect-w-16 aspect-h-9 rounded-t-xl">
        <Image
          fill
          className="object-cover"
          alt=""
          sizes="(max-width: 600px) 480px, 800px"
          src={featuredImage}
        />
      </span>

      <Link href={href} className="absolute inset-0"></Link>

      <div className="flex flex-col flex-grow p-4">
        <div className="space-y-2.5 mb-4">
          <CategoryBadgeList categories={categories} />
          <h2 className="block text-base font-semibold nc-card-title text-neutral-900 dark:text-neutral-100 ">
            <Link href={href} className="line-clamp-2" title={title}>
              {title}
            </Link>
          </h2>
        </div>
        <div className="flex items-end justify-between mt-auto">
          <CardAuthor2 readingTime={readingTime} date={date} author={author} />
          {/* <PostCardSaveAction hidenReadingTime /> */}
        </div>
      </div>
    </div>
  );
};

export default Card4;
