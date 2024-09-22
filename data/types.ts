import { Route } from "@/routers/types";
import { StaticImageData } from "next/image";

//  ######  CustomLink  ######## //
export interface CustomLink {
  label: string;
  href: Route;
  targetBlank?: boolean;
}

//  ##########  PostDataType ######## //
export interface TaxonomyType {
  href: any;
  id: string | number;
  name: string;
  slug: Route;
  count?: number;
  thumbnail?: string | StaticImageData;
  description?: string;
  color?: TwMainColor | string;
  taxonomy: "category" | "tag";
}

export interface PostAuthorType {
  slug: Route;
  id: string | number;
  firstName: string;
  lastName: string;
  displayName: string;
  avatar: string | StaticImageData | any;
  bgImage?: string | StaticImageData;
  email?: string;
  count: number;
  description: string;
  jobName: string;
  href: Route;
}

export interface PostDataType {
  body(
    body: any,
    options: {
      replace: (domNode: any) => import("react").JSX.Element | undefined;
    }
  ): string | JSX.Element | JSX.Element[];
  map(
    arg0: (item: any, index: any) => string | JSX.Element | JSX.Element[]
  ): import("react").ReactNode;
  id: string | number;
  author: PostAuthorType;
  date_created: string;
  slug: Route;
  categories: TaxonomyType[];
  title: string;
  image: string | StaticImageData;
  description?: string;
  like: {
    count: number;
    isLiked: boolean;
  };
  bookmark: {
    count: number;
    isBookmarked: boolean;
  };
  commentCount: number;
  viewdCount: number;
  readingTime: number;
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
