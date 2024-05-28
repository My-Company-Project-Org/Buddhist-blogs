import React from "react";
import BackgroundSection from "@/components/BackgroundSection/BackgroundSection";
import SectionSliderNewAuthors from "@/components/SectionSliderNewAthors/SectionSliderNewAuthors";
import { DEMO_POSTS, DEMO_POSTS_GALLERY } from "@/data/posts";
import { DEMO_CATEGORIES } from "@/data/taxonomies";
import { DEMO_AUTHORS } from "@/data/authors";
import SectionSliderNewCategories from "@/components/SectionSliderNewCategories/SectionSliderNewCategories";
import SectionAds from "@/components/Sections/SectionAds";
import SectionMagazine7 from "@/components/Sections/SectionMagazine7";
import SectionBecomeAnAuthor from "@/components/SectionBecomeAnAuthor/SectionBecomeAnAuthor";
import SectionSubscribe2 from "@/components/SectionSubscribe2/SectionSubscribe2";
import SectionVideos from "@/components/Sections/SectionVideos";
import SectionMagazine2 from "@/components/Sections/SectionMagazine2";
import directus from "@/lib/directus";
//import { PostAuthorType } from "@/data/types";

const MAGAZINE2_POSTS = DEMO_POSTS.filter((_, i) => i >= 0 && i < 7);

const PageHome = async ({}) => {
  const getAllAuthors = async () => {
    try {
      const authors = await directus.items("posts").readByQuery({
        fields: ["*"],
      });

      return authors;
    } catch (error) {
      console.log(error);
      throw new Error("Error fetching post");
    }
  };

  const authors = await getAllAuthors();

  return (
    <div className="relative nc-PageHome">
      <div className="container relative">
        <div className="relative py-16">
          <BackgroundSection />
          <SectionBecomeAnAuthor />
        </div>

        <div className="relative py-16">
          <BackgroundSection />
          {authors && authors.length > 0 ? (
            <SectionSliderNewAuthors
              heading="Newest authors"
              subHeading="Say hello to future creator potentials"
              author={authors}
            />
          ) : (
            <div>No authors available</div>
          )}
        </div>

        <SectionSliderNewCategories
          className="py-16 lg:py-28"
          heading="Top trending topics"
          subHeading="Discover 233 topics"
          categories={DEMO_CATEGORIES.filter((_, i) => i < 10)}
          categoryCardType="card4"
        />

        <SectionAds />

        <SectionMagazine7
          className="py-16 lg:py-28"
          posts={DEMO_POSTS_GALLERY.filter((_, i) => i < 6)}
        />
      </div>

      <div className="container ">
        <SectionMagazine2
          className="py-16 lg:py-24"
          heading="Life styles 🎨 "
          posts={MAGAZINE2_POSTS}
        />

        <SectionVideos className="py-16 lg:py-28" />

        <SectionSubscribe2 className="pt-16 lg:pt-28" />
      </div>
    </div>
  );
};

export default PageHome;
