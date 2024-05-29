"use client";

import React, { FC } from "react";
import { PostDataType } from "@/data/types";
import GallerySlider from "./GallerySlider";
import MediaVideo from "./MediaVideo";
import PostTypeFeaturedIcon from "@/components/PostTypeFeaturedIcon/PostTypeFeaturedIcon";
import MediaAudio from "./MediaAudio";
import Link from "next/link";
import Image from "next/image";

export interface PostFeaturedMediaProps {
  className?: string;
  post: PostDataType;
  isHover?: boolean;
}

const PostFeaturedMedia: FC<PostFeaturedMediaProps> = ({
  className = "w-full h-full aspect-video",
  post,
  isHover = false,
}) => {
  const { postType, videoUrl, galleryImgs, audioUrl, slug, image } = post;

  const isPostMedia = () => postType === "video" || postType === "audio";

  const renderGallerySlider = () => {
    if (!galleryImgs) return null;
    return (
      <GallerySlider
        href={slug}
        galleryImgs={galleryImgs}
        className="absolute inset-0 z-10"
        galleryClass="absolute inset-0"
        ratioClass="absolute inset-0"
      />
    );
  };

  const renderContent = () => {
    // GALLERY
    if (postType === "gallery") {
      return renderGallerySlider();
    }

    // VIDEO
    if (postType === "video" && !!videoUrl && isHover) {
      return <MediaVideo isHover videoUrl={videoUrl} />;
    }

    // AUDIO
    if (postType === "audio" && !!audioUrl) {
      return <MediaAudio post={post} />;
    }

    // ICON
    return isPostMedia() ? (
      <span className="absolute inset-0 flex items-center justify-center ">
        <PostTypeFeaturedIcon
          className="transition-transform transform cursor-pointer hover:scale-105"
          postType={postType}
        />
      </span>
    ) : null;
  };

  return (
    <div className={`nc-PostFeaturedMedia relative ${className}`}>
      {postType !== "gallery" && (
        <Image
          alt="featured"
          fill
          className="object-cover"
          src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${image}?key=optimised`}
          sizes="(max-width: 600px) 480px, 800px"
        />
      )}
      {renderContent()}
      {postType !== "gallery" && (
        <Link
          href={slug}
          className={`block absolute inset-0 ${
            !postType || postType === "standard"
              ? "bg-black/20 transition-opacity opacity-0 group-hover:opacity-100"
              : ""
          }`}
        />
      )}
    </div>
  );
};

export default PostFeaturedMedia;
