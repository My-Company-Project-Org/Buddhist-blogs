"use client";

import React from "react";
import ButtonClose from "@/components/ButtonClose/ButtonClose";
import Logo from "@/components/Logo/Logo";
import { Disclosure } from "@/app/[lang]/headlessui";
import { NavItemType } from "./NavigationItem";
import { NAVIGATION_DEMO_2 } from "@/data/navigation";
import ButtonPrimary from "@/components/Button/ButtonPrimary";
import SocialsList from "@/components/SocialsList/SocialsList";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import SwitchDarkMode from "@/components/SwitchDarkMode/SwitchDarkMode";
import Link from "next/link";

export interface NavMobileProps {
  data?: NavItemType[];
  onClickClose?: () => void;
}

const NavMobile: React.FC<NavMobileProps> = ({
  data = NAVIGATION_DEMO_2,
  onClickClose,
}) => {
  const _renderMenuChild = (
    item: NavItemType,
    itemClass = " pl-3 text-neutral-900 dark:text-neutral-200 font-medium "
  ) => {
    return (
      <ul className="pb-1 text-base nav-mobile-sub-menu ps-6">
        {item.children?.map((i, index) => (
          <Disclosure key={index} as="li">
            <Link
              href={{
                pathname: i.href || undefined,
              }}
              className={`flex text-sm rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 mt-0.5 pe-4 ${itemClass}`}
            >
              <span
                className={`py-2.5 ${!i.children ? "block w-full" : ""}`}
                onClick={onClickClose}
              >
                {i.name}
              </span>
              {i.children && (
                <span
                  className="flex items-center flex-grow"
                  onClick={(e) => e.preventDefault()}
                >
                  <Disclosure.Button
                    as="span"
                    className="flex justify-end flex-grow"
                  >
                    <ChevronDownIcon
                      className="w-4 h-4 ms-2 text-slate-500"
                      aria-hidden="true"
                    />
                  </Disclosure.Button>
                </span>
              )}
            </Link>
            {i.children && (
              <Disclosure.Panel>
                {_renderMenuChild(
                  i,
                  "ps-3 text-slate-600 dark:text-slate-400 "
                )}
              </Disclosure.Panel>
            )}
          </Disclosure>
        ))}
      </ul>
    );
  };

  const _renderItem = (item: NavItemType, index: number) => {
    return (
      <Disclosure
        key={index}
        as="li"
        className="text-slate-900 dark:text-white"
      >
        <Link
          className="flex w-full items-center py-2.5 px-4 font-medium uppercase tracking-wide text-sm hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
          href={{
            pathname: item.href || undefined,
          }}
        >
          <span
            className={!item.children ? "block w-full" : ""}
            onClick={onClickClose}
          >
            {item.name}
          </span>
          {item.children && (
            <span
              className="flex-grow block"
              onClick={(e) => e.preventDefault()}
            >
              <Disclosure.Button
                as="span"
                className="flex justify-end flex-grow"
              >
                <ChevronDownIcon
                  className="w-4 h-4 ms-2 text-neutral-500"
                  aria-hidden="true"
                />
              </Disclosure.Button>
            </span>
          )}
        </Link>
        {item.children && (
          <Disclosure.Panel>{_renderMenuChild(item)}</Disclosure.Panel>
        )}
      </Disclosure>
    );
  };

  const renderMagnifyingGlassIcon = () => {
    return (
      <svg
        width={22}
        height={22}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 22L20 20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  const renderSearchForm = () => {
    return (
      <form
        action=""
        method="POST"
        className="flex-1 text-slate-900 dark:text-slate-200"
      >
        <div className="flex items-center h-full px-4 py-2 space-x-1 bg-slate-50 dark:bg-slate-800 rtl:space-x-reverse rounded-xl">
          {renderMagnifyingGlassIcon()}
          <input
            type="search"
            placeholder="Type and press enter"
            className="w-full text-sm bg-transparent border-none focus:outline-none focus:ring-0 "
          />
        </div>
        <input type="submit" hidden value="" />
      </form>
    );
  };

  return (
    <div className="w-full h-screen py-2 overflow-y-auto transition transform bg-white divide-y-2 shadow-lg ring-1 dark:ring-neutral-700 dark:bg-neutral-900 divide-neutral-100 dark:divide-neutral-800">
      <div className="px-5 py-6">
        <Logo />
        <div className="flex flex-col mt-5 text-sm text-slate-600 dark:text-slate-300">
          <span>
            Discover the most outstanding articles on all topics of life. Write
            your stories and share them
          </span>

          <div className="flex items-center justify-between mt-4">
            <SocialsList itemClass="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full text-xl" />
            <span className="block">
              <SwitchDarkMode className="bg-neutral-100 dark:bg-neutral-800" />
            </span>
          </div>
        </div>
        <span className="absolute p-1 end-2 top-2">
          <ButtonClose onClick={onClickClose} />
        </span>

        <div className="mt-5">{renderSearchForm()}</div>
      </div>
      <ul className="flex flex-col px-2 py-6 space-y-1 rtl:space-x-reverse">
        {data.map(_renderItem)}
      </ul>
      <div className="flex items-center justify-between px-5 py-6 space-x-2 rtl:space-x-reverse">
        <ButtonPrimary className="!px-10 relative">
          Buy this template
          <a
            href="https://themeforest.net/item/ncmaz-blog-news-magazine-nextjs-template/44412092"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0"
          ></a>
        </ButtonPrimary>
      </div>
    </div>
  );
};

export default NavMobile;
