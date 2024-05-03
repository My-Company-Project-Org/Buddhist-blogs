import React, { FC } from "react";
import ModalCategories from "../../ModalCategories";
import ModalTags from "../../ModalTags";
import { DEMO_POSTS } from "@/data/posts";
import { PostDataType, TaxonomyType } from "@/data/types";
import { DEMO_CATEGORIES, DEMO_TAGS } from "@/data/taxonomies";
import { DEMO_AUTHORS } from "@/data/authors";
import Pagination from "@/components/Pagination/Pagination";
import ButtonPrimary from "@/components/Button/ButtonPrimary";
import ArchiveFilterListBox from "@/components/ArchiveFilterListBox/ArchiveFilterListBox";
import SectionSubscribe2 from "@/components/SectionSubscribe2/SectionSubscribe2";
import Card11 from "@/components/Card11/Card11";
import BackgroundSection from "@/components/BackgroundSection/BackgroundSection";
import SectionGridCategoryBox from "@/components/SectionGridCategoryBox/SectionGridCategoryBox";
import ButtonSecondary from "@/components/Button/ButtonSecondary";
import SectionSliderNewAuthors from "@/components/SectionSliderNewAthors/SectionSliderNewAuthors";
import Image from "next/image";
import { Directus } from "@directus/sdk";

const PageArchive = async (href: { params: { slug: string[] } }) => {
  const FILTERS = [
    { name: "Most Recent" },
    { name: "Curated by Admin" },
    { name: "Most Appreciated" },
    { name: "Most Discussed" },
    { name: "Most Viewed" },
  ];

  const directus = new Directus(process.env.NEXT_PUBLIC_API_URL as string, {
    auth: {
      staticToken: process.env.ADMIN_TOKEN as string,
    },
  });

  const getAllCategories = async () => {
    try {
      const categories = await directus.items("posts_categories").readByQuery({
        filter: {
          categories_id: {
            href: {
              _eq: `/archive/${href.params.slug[0]}`,
            },
          },
        },
        fields: [
          "*",
          "categories_id.href",
          "categories_id.thumbnail",
          "posts_id.author",
          "posts_id.href",
          "posts_id.id",
          "posts_id.title",
          "posts_id.categories.*",
          "posts_id.featuredImage",
          // "posts.posts_id*"
        ],
      });

      return categories.data as TaxonomyType[];
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw error;
    }
  };

  const postsData = await getAllCategories();

  const posts = postsData.map((item) => item.posts_id);

  // const posts = postsData.filter((_, i) => i < 16);

  return (
    <div className={`nc-PageArchive`}>
      {/* HEADER */}
      <div className="w-full px-2 mx-auto xl:max-w-screen-2xl">
        <div className="relative aspect-w-16 aspect-h-13 sm:aspect-h-9 lg:aspect-h-8 xl:aspect-h-5 rounded-3xl md:rounded-[40px] overflow-hidden z-0">
          <Image
            alt="archive"
            fill
            src={postsData[0].categories_id.thumbnail}
            className="object-cover w-full h-full rounded-3xl md:rounded-[40px]"
            sizes="(max-width: 1280px) 100vw, 1536px"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-30">
            <h2 className="inline-block text-5xl font-semibold align-middle md:text-7xl ">
              {href.params.slug[0]}
            </h2>
            <span className="block mt-4 text-neutral-300">
              Article {postsData.length}
            </span>
          </div>
        </div>
      </div>
      {/* ====================== END HEADER ====================== */}

      <div className="container pt-10 pb-16 space-y-16 lg:pb-28 lg:pt-20 lg:space-y-28">
        <div>
          <div className="flex flex-col sm:justify-between sm:flex-row">
            <div className="flex space-x-2.5 rtl:space-x-reverse">
              {/* <ModalCategories categories={DEMO_CATEGORIES} />
              <ModalTags tags={DEMO_TAGS} /> */}
            </div>
            <div className="block w-full my-4 border-b border-neutral-300 dark:border-neutral-500 sm:hidden"></div>
            <div className="flex justify-end">
              {/* <ArchiveFilterListBox lists={FILTERS} /> */}
            </div>
          </div>

          {/* LOOP ITEMS */}
          <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 lg:mt-10">
            {posts.map((post) => (
              <Card11 key={post.id} post={post} />
            ))}
          </div>

          {/* PAGINATIONS */}
          <div className="flex flex-col mt-12 space-y-5 lg:mt-16 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
            {/* <Pagination />
            <ButtonPrimary>Show me more</ButtonPrimary> */}
          </div>
        </div>

        {/* MORE SECTIONS */}
        {/* === SECTION 5 === */}
        {/* <div className="relative py-16">
          <BackgroundSection />
          <SectionGridCategoryBox
            categories={DEMO_CATEGORIES.filter((_, i) => i < 10)}
          />
          <div className="mx-auto mt-10 text-center md:mt-16">
            <ButtonSecondary loading>Show me more</ButtonSecondary>
          </div>
        </div> */}

        {/* === SECTION 5 === */}
        {/* <SectionSliderNewAuthors
          heading="Top elite authors"
          subHeading="Discover our elite writers"
          authors={DEMO_AUTHORS.filter((_, i) => i < 10)}
        /> */}

        {/* SUBCRIBES */}
        <SectionSubscribe2 />
      </div>
    </div>
  );
};

export default PageArchive;
