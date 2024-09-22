import React from "react";
import NcImage from "@/components/NcImage/NcImage";
import SingleHeader from "@/components/PostPage/SingleHeader";
import SingleContent from "@/components/PostPage/SingleContent";
import directus from "@/lib/directus";

// import SingleRelatedPosts from "@/components/PostPage/SingleRelatedPosts";

const PostPage = async ({
  params: { slug, lang },
}: {
  params: {
    slug: string;
    lang: string;
  };
}) => {
  const getPostsDetails = async () => {
    try {
      const post = await directus.items("post").readByQuery({
        filter: {
          slug: {
            _eq: slug,
          },
        },
        fields: [
          "slug",
          "title",
          "date_created",
          "description",
          "author.displayName",
          "author.slug",
          "author.avatar",
          "categories.category_id.*",
          "author.avatar.id",
          "image",
          "body",
        ],
      });

      return post.data;
    } catch (error) {
      console.log(error);
      throw new Error("Error fetching posts");
    }
  };

  const post = (await getPostsDetails()) || [];

  // console.log(post);

  return (
    <>
      {post.map((post) => (
        <>
          <div className={`nc-PageSingle pt-8 lg:pt-16`}>
            <header className="container rounded-xl">
              <div className="max-w-screen-md mx-auto">
                <SingleHeader post={post} />
              </div>
            </header>

            {/* FEATURED IMAGE */}
            <NcImage
              alt="single"
              containerClassName="container my-10 sm:my-12"
              className="w-full rounded-xl"
              src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${post.image}?key=optimised`}
              width={630}
              height={375}
              sizes="(max-width: 1024px) 100vw, 800px"
            />
          </div>

          <div>
            {/* SINGLE MAIN CONTENT */}
            <div className="container mt-10">
              <SingleContent post={post} />
            </div>

            {/* RELATED POSTS */}
            {/* <SingleRelatedPosts /> */}
          </div>
        </>
      ))}
    </>
  );
};

export default PostPage;
