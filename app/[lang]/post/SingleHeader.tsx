"use client";

import React, { FC } from "react";
// import CategoryBadgeList from "@/components/CategoryBadgeList/CategoryBadgeList";
import SingleTitle from "./SingleTitle";
// import PostMeta2 from "@/components/PostMeta2/PostMeta2";
// import SingleMetaAction2 from "./SingleMetaAction2";
// import { DEMO_CATEGORIES } from "@/data/taxonomies";
// import { PostDataType } from "@/data/types";

export interface SingleHeaderProps {
  hiddenDesc?: boolean;
  titleMainClass?: string;
  className?: string;
  post?: any;
}

const SingleHeader: FC<SingleHeaderProps> = ({
  titleMainClass,
  hiddenDesc = false,
  className = "",
  post,
}) => {
  const {
    title,
    slug,
    readingTime,
    description,
    category,
    postType,
    image,
    body,
  } = post;
  return (
    <>
      <div className={`nc-SingleHeader ${className}`}>
        <div className="space-y-5">
          {/* <CategoryBadgeList
            itemClass="!px-3"
            categories={[DEMO_CATEGORIES[1]]}
          /> */}
          <SingleTitle mainClass={titleMainClass} title={title} />

          <span className="block pb-1 text-base text-neutral-500 md:text-lg dark:text-neutral-400">
            {description}
          </span>

          <div className="w-full border-b border-neutral-200 dark:border-neutral-700"></div>
          {/* <div className="flex flex-col justify-between space-y-5 sm:flex-row sm:items-end sm:space-y-0 sm:space-x-5 rtl:space-x-reverse">
            <PostMeta2
              size="large"
              className="flex-shrink-0 leading-none"
              hiddenCategories
              avatarRounded="rounded-full shadow-inner"
            />
            <SingleMetaAction2 />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default SingleHeader;
