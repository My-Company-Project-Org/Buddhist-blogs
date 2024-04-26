import React, { FC } from "react";
import NcImage from "@/components/NcImage/NcImage";
// import PostCardMeta from "@/components/PostCardMeta/PostCardMeta";
// import PostCardSaveAction from "@/components/PostCardSaveAction/PostCardSaveAction";
import { PostDataType } from "@/data/types";
// import PostCardLikeAndComment from "@/components/PostCardLikeAndComment/PostCardLikeAndComment";
// import CategoryBadgeList from "@/components/CategoryBadgeList/CategoryBadgeList";
// import PostTypeFeaturedIcon from "@/components/PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import Link from "next/link";

export interface Card3Props {
  className?: string;
  posts: PostDataType;
  locale: string;
}

const Card3: FC<Card3Props> = ({ className = "h-full", posts, locale }) => {
  const {
    title,
    slug,
    readingTime,
    description,
    category,
    postType,
    image,
    body,
  } = posts;

  return (
    <div
      className={`nc-Card3 relative flex flex-row items-center group ${className}`}
    >
      <div className="flex flex-col flex-grow">
        <div className="space-y-3.5">
          {/* <CategoryBadgeList category={category} /> */}
          <Link href={`/${locale}/post/${slug}`} className="block">
            <h2
              className={`nc-card-title block font-medium sm:font-semibold text-neutral-900 dark:text-neutral-100 text-sm sm:text-base xl:text-lg`}
            >
              <span className="line-clamp-2" title={title}>
                {title}
              </span>
            </h2>
            <div className="hidden sm:block sm:mt-2">
              <span className="text-sm text-neutral-500 dark:text-neutral-400 line-clamp-2">
                {description}
              </span>
            </div>
          </Link>

          {/* <PostCardMeta meta={{ ...post }} /> */}
        </div>
        {/* <div className="flex flex-wrap items-center justify-between mt-5">
          <PostCardLikeAndComment />
          <PostCardSaveAction readingTime={readingTime} />
        </div> */}
      </div>

      <div
        className={`block flex-shrink-0 w-24 sm:w-36 md:w-44 xl:w-56 ms-3 sm:ms-6 rounded-3xl overflow-hidden z-0 mb-5 sm:mb-0`}
      >
        <Link
          href={`/${locale}/post/${slug}`}
          className="relative block w-full h-0 aspect-h-1 aspect-w-1"
        >
          <NcImage
            containerClassName="absolute inset-0"
            src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${image}?key=optimised`}
            fill
            alt={title}
          />
          <span>
            {/* <PostTypeFeaturedIcon
              className="absolute left-2 bottom-2"
              postType={postType}
              wrapSize="w-8 h-8"
              iconSize="w-4 h-4"
            /> */}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Card3;
