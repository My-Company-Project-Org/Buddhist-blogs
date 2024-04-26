import siteConfig from "@/config/site";
import directus from "@/lib/directus";
import { getDictionary } from "@/lib/getDictionary";
import { notFound } from "next/navigation";
import { cache } from "react";
import SingleHeader from "../SingleHeader";
import NcImage from "@/components/NcImage/NcImage";
import SingleContent from "../SingleContent";

// Get Post Data
const getPostData = cache(async (postSlug: string, locale: string) => {
  try {
    const post = await directus.items("post").readByQuery({
      filter: {
        slug: {
          _eq: postSlug,
        },
      },
      fields: [
        "*",
        "category.id",
        "category.title",
        "auhtor.id",
        "author.first_name",
        "author.last_name",
        "translations.*",
        "category.translations.*",
      ],
    });

    const postData = post?.data?.[0];

    if (locale === "en") {
      return postData;
    } else {
      const localisedPostData = {
        ...postData,
        title: postData?.translations?.[0]?.title,
        description: postData?.translations?.[0]?.description,
        body: postData?.translations?.[0]?.body,
        category: {
          ...postData?.category,
          title: postData?.category?.translations?.[0]?.title,
        },
      };

      return localisedPostData;
    }
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching post");
  }
});

// Generate Metadata Function
export const generateMetadata = async ({
  params: { slug, lang },
}: {
  params: {
    slug: string;
    lang: string;
  };
}) => {
  // Get Post Data from Directus
  const post = await getPostData(slug, lang);

  return {
    title: post?.title,
    description: post?.description,
    openGraph: {
      title: post?.title,
      description: post?.description,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/post/${slug}`,
      siteName: post?.title,
      /* images: [
        {
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/post/${slug}/opengraph-image.png`,
          width: 1200,
          height: 628,
        },
      ], */
      locale: lang,
      type: "website",
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/post/${slug}`,
      languages: {
        "en-US": `${process.env.NEXT_PUBLIC_SITE_URL}/en/post/${slug}`,
        "de-DE": `${process.env.NEXT_PUBLIC_SITE_URL}/de/post/${slug}`,
      },
    },
  };
};

// Generate Static Params Function
export const generateStaticParams = async () => {
  /* return DUMMY_POSTS.map((post) => {
    return {
      slug: post.slug,
    };
  }); */
  try {
    const posts = await directus.items("post").readByQuery({
      filter: {
        status: {
          _eq: "published",
        },
      },
      fields: ["slug"],
    });

    const params = posts?.data?.map((post) => {
      return {
        slug: post.slug as string,
        lang: "en",
      };
    });

    const localisedParams = posts?.data?.map((post) => {
      return {
        slug: post.slug as string,
        lang: "de",
      };
    });

    // Concat Localised and Regular Params
    const allParams = params?.concat(localisedParams ?? []);

    return allParams || [];
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching posts");
  }
};

const Page = async ({
  params,
}: {
  params: {
    slug: string;
    lang: string;
  };
}) => {
  /*   const post = DUMMY_POSTS.find((post) => post.slug === params.slug); */

  const locale = params.lang;
  const postSlug = params.slug;

  const post = await getPostData(postSlug, locale);

  /* Structured Data for Google */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    image: `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}/post/${postSlug}/opengraph-image.png`,
    author: post.author.first_name + " " + post.author.last_name,
    genre: post.category.title,
    publisher: siteConfig.siteName,
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/post/${postSlug}`,
    datePublished: new Date(post.date_created).toISOString(),
    dateCreated: new Date(post.date_created).toISOString(),
    dateModified: new Date(post.date_updated).toISOString(),
    description: post.description,
    articleBody: post.body,
  };

  // If there is no post found, return 404
  if (!post) {
    notFound();
  }

  const dictionary = await getDictionary(locale);

  return (
    <>
      {/* Add JSON-LD to your page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
          width={1260}
          height={750}
          sizes="(max-width: 1024px) 100vw, 1280px"
        />

        <div className="container mt-10">
          <SingleContent post={post} />
        </div>
      </div>
    </>
  );
};

export default Page;
