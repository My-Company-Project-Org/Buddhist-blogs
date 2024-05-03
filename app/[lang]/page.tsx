import React from "react";
import SectionMagazine10 from "@/components/Sections/SectionMagazine10";
import SectionMagazine9 from "@/components/Sections/SectionMagazine9";
import SectionAds from "@/components/Sections/SectionAds";
import SectionMagazine2 from "@/components/Sections/SectionMagazine2";
import SectionMagazine11 from "@/components/Sections/SectionMagazine11";
import SectionLatestPosts from "@/components/Sections/SectionLatestPosts";
import { Directus } from "@directus/sdk";
import { PostDataType } from "@/data/types";

const PageHomeDemo6 = async () => {
  const directus = new Directus(process.env.NEXT_PUBLIC_API_URL as string, {
    auth: {
      staticToken: process.env.ADMIN_TOKEN as string,
    },
  });

  const getAllPosts = async () => {
    try {
      const posts = await directus.items("posts").readByQuery({
        fields: [
          "*",
          "categories.categories_id.name",
          "categories.categories_id.color",
          "categories.categories_id.count",
          "categories.categories_id.href",
          "categories.categories_id.thumbnail",
          "author.avatar",
          "author.bgImage",
          "author.desc",
          "author.email",
          "author.href",
          "author.displayName",
          "author.date",
        ],
      });

      const restructuredPosts = posts.data!.map(({ categories, ...post }) => ({
        ...post,
        categories: categories.map(
          ({
            categories_id,
          }: {
            categories_id: {
              color: string;
              name: string;
              count: number;
              href: string;
              thumbnail: string;
            };
          }) => ({
            color: categories_id.color,
            name: categories_id.name,
            count: categories_id.count,
            href: categories_id.href,
            thumbnail: categories_id.thumbnail,
          })
        ),
      }));
      // console.log(restructuredPosts);
      return restructuredPosts as PostDataType[];
    } catch (error) {
      console.error("Error fetching posts:", error);
      throw error;
    }
  };

  const posts = await getAllPosts();

  // console.log(posts);

  const MAGAZINE1_POSTS = posts.filter((_, i) => i >= 8 && i < 16);
  const MAGAZINE2_POSTS = posts.filter((_, i) => i >= 0 && i < 7);

  // console.log(MAGAZINE1_POSTS);
  // console.log(MAGAZINE2_POSTS);

  return (
    <div className="nc-PageHomeDemo6 relative [ nc-section-rounded-md ]">
      <div className="relative overflow-hidden">
        <div className="container relative">
          <SectionMagazine10 posts={MAGAZINE1_POSTS} />

          {/* <SectionMagazine9
            gapClassName="gap-6"
            className="pt-16 lg:pt-24"
            posts={posts.filter((_, i) => i >= 6 && i < 18)}
          /> */}

          {/* <SectionAds className="pt-16 lg:pt-24" /> */}
          {/* 
          <SectionMagazine2
            className="pt-16 lg:pt-24"
            heading="Latest Articles"
            posts={MAGAZINE2_POSTS}
          /> */}

          {/* === SECTION 11 === */}
          {/* <SectionMagazine11 className="py-16 lg:py-24" /> */}
        </div>

        {/* === SECTION 11 === */}
        {/* <div className="dark bg-neutral-900 dark:bg-black dark:bg-opacity-20 text-neutral-100">
          <div className="container relative">
            <SectionLatestPosts
              heading="Latest Articles"
              className="py-16 lg:py-24"
              post={posts.filter((_, i) => i > 5 && i < 18)}
              gridClass="sm:grid-cols-2"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default PageHomeDemo6;
