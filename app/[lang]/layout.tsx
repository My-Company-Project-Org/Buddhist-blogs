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
import "./globals.css";
import "@/styles/index.scss";
import { Poppins } from "next/font/google";
import Head from "next/head";
// import Footer from "@/components/navigation/footer";
// import Navigation from "@/components/navigation/navigation";
import siteConfig from "@/config/site";
import { getDictionary } from "@/lib/getDictionary";
import { Inter } from "next/font/google";
import Script from "next/script";
import SiteHeader from "../../components/Navigation/SiteHeader";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const generateMetadata = async ({
  params: { lang },
}: {
  params: { lang: string };
}) => {
  // Get the Dictionary based on Lang
  const dictionary = await getDictionary(lang);
  // console.log(dictionary);

  return {
    title: siteConfig.siteName, // Generate dynamic title
    description: dictionary.footer.description, // Use dynamic description from dictionary
    openGraph: {
      title: siteConfig.siteName,
      description: dictionary.footer.description,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}`,
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
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}`,
      languages: {
        "en-US": `${process.env.NEXT_PUBLIC_SITE_URL}/en`,
        "de-DE": `${process.env.NEXT_PUBLIC_SITE_URL}/de`,
      },
    },
  };
};

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export default async function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}) {
  const metadata = await generateMetadata({ params: { lang } }); // Await generateMetadata

  return (
    <html lang="en" className={poppins.className}>
      <body className="">
        <div className="bg-[#f8f8f8] text-base dark:bg-neutral-900/95 text-neutral-900 dark:text-neutral-200">
          <SiteHeader />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
