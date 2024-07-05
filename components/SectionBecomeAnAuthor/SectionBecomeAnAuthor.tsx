import React, { FC } from "react";
import rightImgDemo from "@/images/BecomeAnAuthorImg.png";
import ButtonPrimary from "@/components/Button/ButtonPrimary";
import Image, { StaticImageData } from "next/image";
import { getDictionary } from "@/lib/getDictionary";

export interface SectionBecomeAnAuthorProps {
  className?: string;
  rightImg?: string | StaticImageData;
  locale: string;
}

const SectionBecomeAnAuthor: FC<SectionBecomeAnAuthorProps> = async ({
  className = "",
  rightImg = rightImgDemo,
  locale,
}) => {
  const dictionary = await getDictionary(locale);

  return (
    <div
      className={`nc-SectionBecomeAnAuthor relative flex flex-col lg:flex-row items-center  ${className}`}
    >
      <div className="flex-shrink-0 mb-14 lg:mb-0 lg:mr-10 lg:w-2/5">
        <span className="text-xs font-medium tracking-wider uppercase text-neutral-400">
          {dictionary.heroSection.heroOne}
        </span>
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
          Become an author and share your great stories
        </h2>
        <span className="block mt-8 text-neutral-500 dark:text-neutral-400">
          Become an author you can earn extra income by writing articles. Read
          and share new perspectives on just about any topic. Everyone’s
          welcome.
        </span>
        <ButtonPrimary className="mt-8">
          {dictionary.heroSection.heroButton}
        </ButtonPrimary>
      </div>
      <div className="flex-grow">
        <Image
          alt="hero"
          sizes="(max-width: 768px) 100vw, 50vw"
          src={rightImg}
        />
      </div>
    </div>
  );
};

export default SectionBecomeAnAuthor;
