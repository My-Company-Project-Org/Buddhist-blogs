// import Footer from "@/components/navigation/footer";
// import Navigation from "@/components/navigation/navigation";
// import siteConfig from "@/config/site";
// import { getDictionary } from "@/lib/getDictionary";
// import { Inter } from "next/font/google";
// import Script from "next/script";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

// export const generateMetadata = async ({
//   params: { lang },
// }: {
//   params: { lang: string };
// }) => {
//   // Get the Dicitionary based on Lang
//   const dicitionary = await getDictionary(lang);

//   return {
//     title: {
//       template: "%s | " + siteConfig.siteName,
//       default: siteConfig.siteName,
//     },
//     description: dicitionary.footer.description,
//     openGraph: {
//       title: siteConfig.siteName,
//       description: dicitionary.footer.description,
//       url: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}`,
//       siteName: siteConfig.siteName,
//       images: [
//         {
//           url: "https://bhwaya.com/opengraph-image.png",
//           width: 1200,
//           height: 628,
//         },
//       ],
//       locale: lang,
//       type: "website",
//     },
//     alternates: {
//       canonical: `${process.env.NEXT_PUBLIC_SITE_URL}`,
//       languages: {
//         "en-US": `${process.env.NEXT_PUBLIC_SITE_URL}/en`,
//         "de-DE": `${process.env.NEXT_PUBLIC_SITE_URL}/de`,
//       },
//     },
   
//   };
// };

// export default function RootLayout({
//   children,
//   params: { lang },
// }: {
//   children: React.ReactNode;
//   params: {
//     lang: string;
//   };
// }) {
//   return (
//     <html lang={lang}>
//       {/* Google Analytics Script */}
//       <Script
//         strategy="afterInteractive"
//         src="https://www.googletagmanager.com/gtag/js?id=G-Z4YJZ1BJ3V"
//       ></Script>

//       <Script id="google-analytics">{`  window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());
//   gtag('config', 'G-Z4YJZ1BJ3V');`}</Script>
//       <body className={inter.className}>
//         {/* @ts-expect-error Async Server Component */}
//         <Navigation locale={lang} />
//         <div className="pt-10 min-h-[calc(100vh-300px)]">{children}</div>
//         {/* @ts-expect-error Async Server Component */}
//         <Footer locale={lang} />
//       </body>
//     </html>
//   );
// }


import Head from 'next/head'; // Import Head component for managing metadata
import Footer from "@/components/navigation/footer";
import Navigation from "@/components/navigation/navigation";
import siteConfig from "@/config/site";
import { getDictionary } from "@/lib/getDictionary";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const generateMetadata = async ({
  params: { lang },
}: {
  params: { lang: string };
}) => {
  // Get the Dictionary based on Lang
  const dictionary = await getDictionary(lang);

  return {
    title: ${dictionary.title} | ${siteConfig.siteName}, // Generate dynamic title
    description: dictionary.footer.description, // Use dynamic description from dictionary
    openGraph: {
      title: siteConfig.siteName,
      description: dictionary.footer.description,
      url: ${process.env.NEXT_PUBLIC_SITE_URL}/${lang},
      siteName: siteConfig.siteName,
      images: [
        {
          url: "https://bhwaya.com/opengraph-image.png",
          width: 1200,
          height: 628,
        },
      ],
      locale: lang,
      type: "website",
    },
    alternates: {
      canonical: ${process.env.NEXT_PUBLIC_SITE_URL},
      languages: {
        "en-US": ${process.env.NEXT_PUBLIC_SITE_URL}/en,
        "de-DE": ${process.env.NEXT_PUBLIC_SITE_URL}/de,
      },
    },
    /* Verification for Google Search Console */
    verification: {
      google: "OtqwDrZLV7iy8f2yLayVgO7Puz1YYFvCbOV9TQiysQY",
    },
  };
};

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}) {
  return (
    <>
      <Head>
        {/* Metadata */}
        <title>{generateMetadata(lang).title}</title>
        <meta name="description" content={generateMetadata(lang).description} />
        {/* Open Graph */}
        <meta property="og:title" content={generateMetadata(lang).openGraph.title} />
        <meta property="og:description" content={generateMetadata(lang).openGraph.description} />
        <meta property="og:url" content={generateMetadata(lang).openGraph.url} />
        <meta property="og:site_name" content={generateMetadata(lang).openGraph.siteName} />
        <meta property="og:type" content={generateMetadata(lang).openGraph.type} />
        {/* Verification for Google Search Console */}
        <meta name="google-site-verification" content={generateMetadata(lang).verification.google} />
        {/* Language Alternates */}
        <link rel="canonical" href={generateMetadata(lang).alternates.canonical} />
        {Object.entries(generateMetadata(lang).alternates.languages).map(([key, value]) => (
          <link key={key} rel="alternate" hrefLang={key} href={value} />
        ))}
      </Head>

      {/* Google Analytics Script */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-Z4YJZ1BJ3V"
      ></Script>

      <Script id="google-analytics">{`  
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-Z4YJZ1BJ3V');
      `}</Script>

      <body className={inter.className}>
        {/* @ts-expect-error Async Server Component */}
        <Navigation locale={lang} />
        <div className="pt-10 min-h-[calc(100vh-300px)]">{children}</div>
        {/* @ts-expect-error Async Server Component */}
        <Footer locale={lang} />
      </body>
    </>
  );
}
