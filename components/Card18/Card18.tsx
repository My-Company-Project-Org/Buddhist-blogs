import React, { FC } from "react";
import PostCardSaveAction from "@/components/PostCardSaveAction/PostCardSaveAction";
import { PostDataType } from "@/data/types";
import PostCardLikeAndComment from "@/components/PostCardLikeAndComment/PostCardLikeAndComment";
import CategoryBadgeList from "@/components/CategoryBadgeList/CategoryBadgeList";
import PostTypeFeaturedIcon from "@/components/PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import PostFeaturedMedia from "@/components/PostFeaturedMedia/PostFeaturedMedia";
import Link from "next/link";
import Image from "next/image";

export interface Card18Props {
  className?: string;
  ratio?: string;
  titleClass?: string;
  post: PostDataType;
  hoverClass?: string;
  showCategories?: boolean;
}

const Card18: FC<Card18Props> = ({
  className = "h-full",
  titleClass = "text-lg ",
  ratio = "aspect-w-4 sm:aspect-w-3 aspect-h-3",
  post,
  hoverClass = "",
  showCategories = true,
}) => {
  const { title, href, featuredImage, categories, postType } = post;

  const renderMeta = () => {
    return (
      <div className="inline-flex items-center text-xs text-neutral-300">
        <h2 className={`block font-semibold text-white ${titleClass}`}>
          {title}
        </h2>
      </div>
    );
  };

  return (
    <div
      className={`nc-Card18 relative flex flex-col group rounded-xl overflow-hidden ${hoverClass} ${className}`}
    >
      <div className="absolute inset-x-0 top-0 p-3 flex items-center justify-between transition-all opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 duration-300">
        <PostCardLikeAndComment className="relative" />
        <PostCardSaveAction className="relative" />
      </div>
      <div className={`flex items-start relative w-full ${ratio}`}></div>
      {postType === "audio" ? (
        <div className="absolute inset-0">
          <PostFeaturedMedia post={post} />
        </div>
      ) : (
        <Link href={href}>
          <Image
            sizes="(max-width: 600px) 480px, 800px"
            alt="featured"
            className="object-cover w-full h-full rounded-xl"
            src={featuredImage}
            fill
          />
          <PostTypeFeaturedIcon
            className="absolute top-3 left-3 group-hover:hidden"
            postType={postType}
            wrapSize="w-7 h-7"
            iconSize="w-4 h-4"
          />
          <span className="absolute inset-0 transition-opacity bg-black opacity-0 bg-opacity-10 group-hover:opacity-100"></span>
        </Link>
      )}
      <Link
        href={href}
        className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black opacity-80"
      ></Link>
      <div className="absolute inset-x-0 bottom-0 flex flex-col flex-grow p-6">
        <Link href={href} className="absolute inset-0"></Link>
        {showCategories && (
          <div className="mb-3">
            <CategoryBadgeList categories={categories} />
          </div>
        )}
        {renderMeta()}
      </div>
    </div>
  );
};

export default Card18;
