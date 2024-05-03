// import { Route } from "@/routers/types";
import { StaticImageData } from "next/image";

//  ######  CustomLink  ######## //
export interface CustomLink {
  label: string;
  href: String;
  targetBlank?: boolean;
}

//  ##########  PostDataType ######## //
export interface TaxonomyType {
  posts_id: any;
  slice(arg0: number, arg1: number): unknown;
  categories_id: any;
  id: string | number;
  name: string;
  href: String;
  count?: number | string;
  thumbnail?: string | StaticImageData;
  desc?: string;
  color?: TwMainColor | string;
  taxonomy: "category" | "tag";
}

export interface PostAuthorType {
  id: string | number;
  firstName: string;
  lastName: string;
  displayName: string;
  avatar: string | StaticImageData;
  bgImage?: string | StaticImageData;
  email?: string;
  count: number | string;
  desc: string;
  jobName: string;
  href: String;
}

export interface PostDataType {
  id: string | number;
  author: PostAuthorType;
  date: string;
  href: String;
  categories: TaxonomyType[];
  title: string;
  featuredImage: string | StaticImageData;
  desc?: string;
  like: {
    count: number | string;
    isLiked: boolean | string;
  };
  bookmark: {
    count: number | string;
    isBookmarked: boolean | string;
  };
  commentCount: number | string;
  viewdCount: number | string;
  readingTime: number | string;
  postType: "standard" | "video" | "gallery" | "audio";
  videoUrl?: string;
  audioUrl?: string | string[];
  galleryImgs?: string[];
}

export type TwMainColor =
  | "pink"
  | "green"
  | "yellow"
  | "red"
  | "indigo"
  | "blue"
  | "purple"
  | "gray";
