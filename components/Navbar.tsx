"use client";
import React from "react";
import { useState } from "react";
import { Link } from "react-scroll/modules";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { LanguageProvider, useLanguage } from "@/context/LanguageProvider";

interface NavItem {
    label: string;
    page: string;
}

export default function Navbar() {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;
    const pathname = usePathname();
    const [navbar, setNavbar] = useState(false);
    const { lang, setLang } = useLanguage();
    const localization = require(`../locales/${lang}/navbar.json`);

    const NAV_ITEMS: Array<NavItem> = [
        {
            label: localization.home,
            page: "home",
        },
        {
            label: localization.about,
            page: "about",
        },
        {
            label: localization.career,
            page: "career",
        },
        // {
        //     label: localization.projects,
        //     page: "projects",
        // },
    ];

    return (
        <header className="w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600">
            <div className="justify-between md:items-center md:flex">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <div className="container flex items-center space-x-2">
                            <h2 className="text-2xl font-bold">
                                <Link to="home">Yusuf Saleem</Link>
                            </h2>
                        </div>

                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <IoMdClose size={30} />
                                ) : (
                                    <IoMdMenu size={30} />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            {NAV_ITEMS.map((item, idx) => {
                                return (
                                    <Link
                                        key={idx}
                                        to={item.page}
                                        className={
                                            "block lg:inline-block text-neutral-900  hover:text-neutral-500 dark:text-neutral-100"
                                        }
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={500}
                                        onClick={() => setNavbar(!navbar)}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            })}
                            <div className="flex items-end">
                                {currentTheme === "dark" ? (
                                    <button
                                        onClick={() => setTheme("light")}
                                        className="bg-slate-100 p-2 rounded-xl w-12 h-12 overflow-hidden whitespace-nowrap mr-2 flex flex items-center justify-center"
                                    >
                                        <RiSunLine size={28} color="black" />
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => setTheme("dark")}
                                        className="bg-slate-100 p-2 rounded-xl w-12 h-12 overflow-hidden whitespace-nowrap mr-2 flex flex items-center justify-center"
                                    >
                                        <RiMoonFill size={28} />
                                    </button>
                                )}
                                {lang === "en" ? (
                                    <button
                                        onClick={() => setLang("jp")}
                                        className="bg-transparent border-2 border-slate-100 p-2 rounded-xl w-12 h-12 overflow-hidden whitespace-nowrap"
                                    >
                                        <p className="text-4">EN</p>
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => setLang("en")}
                                        className="bg-transparent border-2 border-slate-100 p-2 rounded-xl w-12 h-12 overflow-hidden whitespace-nowrap"
                                    >
                                        <p className="text-112">JP</p>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
