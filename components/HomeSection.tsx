"use client";
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";
import { LanguageProvider, useLanguage } from "@/context/LanguageProvider";

const HomeSection = () => {
    const { lang, setLang } = useLanguage();
    const localization = require(`../locales/${lang}/home.json`);

    return (
        <section id="home">
            <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
                <div className="md:mt-2 md:w-1/2">
                    <Image
                        src="/headshot.jpg"
                        alt=""
                        width={325}
                        height={325}
                        className="rounded-full shadow-2xl"
                    />
                </div>
                <div className="md:mt-2 md:w-3/5">
                    <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
                        {localization.greeting}
                    </h1>
                    <p className="text-lg mt-4 mb-6 md:text-2xl">
                        {localization.intro1}
                        <span className="font-semibold text-sky-600">
                            {localization.intro2}
                        </span>
                        {localization.intro3}
                    </p>
                    <Link
                        to="career"
                        className="text-neutral-100 font-semibold px-6 py-3 bg-sky-600 rounded shadow hover:bg-sky-700 mr-4"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >
                        {localization.career}
                    </Link>
                    <Link
                        to="projects"
                        className="text-neutral-100 font-semibold px-6 py-3 bg-sky-600 rounded shadow hover:bg-sky-700"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >
                        {localization.projects}
                    </Link>
                </div>
            </div>
            <div className="flex flex-row items-center text-center justify-center">
                <HiArrowDown size={35} className="animate-bounce" />
            </div>
        </section>
    );
};

export default HomeSection;
