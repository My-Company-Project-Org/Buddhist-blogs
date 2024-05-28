// import React from "react";
// import SectionMagazine10 from "@/components/Sections/SectionMagazine10";
// import SectionMagazine9 from "@/components/Sections/SectionMagazine9";
// import SectionAds from "@/components/Sections/SectionAds";
// import SectionMagazine2 from "@/components/Sections/SectionMagazine2";
// import SectionMagazine11 from "@/components/Sections/SectionMagazine11";
// import SectionLatestPosts from "@/components/Sections/SectionLatestPosts";
// import { Directus } from "@directus/sdk";
// import { PostDataType } from "@/data/types";

// const PageHomeDemo6 = async () => {
//   const directus = new Directus(process.env.NEXT_PUBLIC_API_URL as string, {
//     auth: {
//       staticToken: process.env.ADMIN_TOKEN as string,
//     },
//   });

//   const getAllPosts = async () => {
//     try {
//       const posts = await directus.items("posts").readByQuery({
//         fields: [
//           "*",
//           "categories.categories_id.name",
//           "categories.categories_id.color",
//           "categories.categories_id.count",
//           "categories.categories_id.href",
//           "categories.categories_id.thumbnail",
//           "author.avatar",
//           "author.bgImage",
//           "author.desc",
//           "author.email",
//           "author.href",
//           "author.displayName",
//           "author.date",
//         ],
//       });

//       const restructuredPosts = posts.data!.map(({ categories, ...post }) => ({
//         ...post,
//         categories: categories.map(
//           ({
//             categories_id,
//           }: {
//             categories_id: {
//               color: string;
//               name: string;
//               count: number;
//               href: string;
//               thumbnail: string;
//             };
//           }) => ({
//             color: categories_id.color,
//             name: categories_id.name,
//             count: categories_id.count,
//             href: categories_id.href,
//             thumbnail: categories_id.thumbnail,
//           })
//         ),
//       }));
//       console.log(restructuredPosts);
//       return restructuredPosts as PostDataType[];
//     } catch (error) {
//       console.error("Error fetching posts:", error);
//       throw error;
//     }
//   };

//   const posts = await getAllPosts();

//   console.log(posts);

//   const MAGAZINE1_POSTS = posts.filter((_, i) => i >= 8 && i < 16);
//   const MAGAZINE2_POSTS = posts.filter((_, i) => i >= 0 && i < 7);

//   // console.log(MAGAZINE1_POSTS);
//   // console.log(MAGAZINE2_POSTS);

//   return (
//     <div className="nc-PageHomeDemo6 relative [ nc-section-rounded-md ]">
//       <div className="relative overflow-hidden">
//         <div className="container relative">
//           <SectionMagazine10 posts={MAGAZINE1_POSTS} />

//           <SectionMagazine9
//             gapClassName="gap-6"
//             className="pt-16 lg:pt-24"
//             posts={posts.filter((_, i) => i >= 6 && i < 18)}
//           />

//           {/* <SectionAds className="pt-16 lg:pt-24" /> */}
//           {/*
//           <SectionMagazine2
//             className="pt-16 lg:pt-24"
//             heading="Latest Articles"
//             posts={MAGAZINE2_POSTS}
//           /> */}

//           {/* === SECTION 11 === */}
//           {/* <SectionMagazine11 className="py-16 lg:py-24" /> */}
//         </div>

//         {/* === SECTION 11 === */}
//         {/* <div className="dark bg-neutral-900 dark:bg-black dark:bg-opacity-20 text-neutral-100">
//           <div className="container relative">
//             <SectionLatestPosts
//               heading="Latest Articles"
//               className="py-16 lg:py-24"
//               post={posts.filter((_, i) => i > 5 && i < 18)}
//               gridClass="sm:grid-cols-2"
//             />
//           </div>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default PageHomeDemo6;

import React from "react";
// import SectionLargeSlider from "@/components/SectionLargeSlider/SectionLargeSlider";
import BackgroundSection from "@/components/BackgroundSection/BackgroundSection";
import SectionSliderNewAuthors from "@/components/SectionSliderNewAthors/SectionSliderNewAuthors";
import {
  DEMO_POSTS,
  DEMO_POSTS_AUDIO,
  DEMO_POSTS_GALLERY,
  DEMO_POSTS_VIDEO,
} from "@/data/posts";
import { DEMO_CATEGORIES } from "@/data/taxonomies";
import { DEMO_AUTHORS } from "@/data/authors";
import SectionSliderNewCategories from "@/components/SectionSliderNewCategories/SectionSliderNewCategories";
import SectionSliderPosts from "@/components/Sections/SectionSliderPosts";
import SectionMagazine1 from "@/components/Sections/SectionMagazine1";
import SectionAds from "@/components/Sections/SectionAds";
import SectionMagazine7 from "@/components/Sections/SectionMagazine7";
import SectionGridPosts from "@/components/Sections/SectionGridPosts";
import SectionMagazine8 from "@/components/Sections/SectionMagazine8";
import SectionMagazine9 from "@/components/Sections/SectionMagazine9";
import SectionGridAuthorBox from "@/components/SectionGridAuthorBox/SectionGridAuthorBox";
import SectionBecomeAnAuthor from "@/components/SectionBecomeAnAuthor/SectionBecomeAnAuthor";
import SectionSubscribe2 from "@/components/SectionSubscribe2/SectionSubscribe2";
import SectionVideos from "@/components/Sections/SectionVideos";
// import SectionLatestPosts from "@/components/Sections/SectionLatestPosts";
import SectionMagazine2 from "@/components/Sections/SectionMagazine2";

//
const MAGAZINE1_POSTS = DEMO_POSTS.filter((_, i) => i >= 8 && i < 16);
const MAGAZINE2_POSTS = DEMO_POSTS.filter((_, i) => i >= 0 && i < 7);
//

const PageHome = ({}) => {
  return (
    <div className="relative nc-PageHome">
      <div className="container relative">
        {/* <SectionLargeSlider
          className="pt-10 pb-16 md:py-16 lg:pb-28 lg:pt-20"
          posts={DEMO_POSTS?.filter((_, i) => i < 3)}
        /> */}

        <div className="relative py-16">
          <BackgroundSection />
          <SectionSliderNewAuthors
            heading="Newest authors"
            subHeading="Say hello to future creator potentials"
            authors={DEMO_AUTHORS.filter((_, i) => i < 10)}
          />
        </div>

        <SectionSliderNewCategories
          className="py-16 lg:py-28"
          heading="Top trending topics"
          subHeading="Discover 233 topics"
          categories={DEMO_CATEGORIES.filter((_, i) => i < 10)}
          categoryCardType="card4"
        />

        <div className="relative py-16">
          <BackgroundSection />
          <SectionSliderPosts
            postCardName="card9"
            heading="Explore latest audio articles"
            subHeading="Click on the icon to enjoy the music or podcast 🎧"
            posts={DEMO_POSTS_AUDIO.filter((_, i) => i > 3 && i < 10)}
          />
        </div>

        <SectionMagazine1 className="py-16 lg:py-28" posts={MAGAZINE1_POSTS} />

        <SectionAds />

        <SectionMagazine7
          className="py-16 lg:py-28"
          posts={DEMO_POSTS_GALLERY.filter((_, i) => i < 6)}
        />
      </div>

      <div className="dark bg-neutral-900 dark:bg-black dark:bg-opacity-20 text-neutral-100">
        <div className="container relative">
          <SectionGridPosts
            className="py-16 lg:py-28"
            headingIsCenter
            postCardName="card10V2"
            heading="Explore latest video articles"
            subHeading="Hover on the post card and preview video 🥡"
            posts={DEMO_POSTS_VIDEO.filter((_, i) => i > 5 && i < 12)}
            gridClass="md:grid-cols-2 lg:grid-cols-3"
          />
        </div>
      </div>

      <div className="container ">
        <SectionMagazine8
          className="py-16 lg:py-28"
          posts={DEMO_POSTS_AUDIO.filter((_, i) => i < 6)}
        />

        <div className="relative py-16">
          <BackgroundSection />
          <SectionMagazine9
            posts={DEMO_POSTS_AUDIO.filter((_, i) => i >= 6 && i < 15)}
          />
        </div>

        <SectionGridAuthorBox
          className="py-16 lg:py-28"
          authors={DEMO_AUTHORS.filter((_, i) => i < 10)}
        />

        <div className="relative py-16">
          <BackgroundSection />
          <SectionBecomeAnAuthor />
        </div>

        <SectionMagazine2
          className="py-16 lg:py-24"
          heading="Life styles 🎨 "
          posts={MAGAZINE2_POSTS}
        />

        <div className="relative py-16">
          <BackgroundSection />
          <SectionSliderPosts
            postCardName="card11"
            heading="More design articles"
            subHeading="Over 1118 articles "
            posts={DEMO_POSTS.filter(
              (p, i) => i > 3 && i < 25 && p.postType === "standard"
            )}
          />
        </div>

        <SectionSubscribe2 className="pt-16 lg:pt-28" />

        <SectionVideos className="py-16 lg:py-28" />

        {/* <SectionLatestPosts className="pb-16 lg:pb-28" /> */}
      </div>
    </div>
  );
};

export default PageHome;
