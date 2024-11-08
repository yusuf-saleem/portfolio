"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import { LanguageProvider, useLanguage } from "@/context/LanguageProvider";

const skills = [
    { skill: "Python" },
    { skill: "React.js" },
    { skill: "Node.js" },
    { skill: "C" },
    { skill: "Kubernetes" },
    { skill: "Docker" }
];

const AboutSection = () => {
    const { lang, setLang } = useLanguage();
    const localization = require(`../locales/${lang}/about.json`);

    return (
        <section id="about">
            <div className="my-12 pb-12 md:pt-16 md:pb-48">
                <h1 className="text-center font-bold text-4xl">
                    {localization.about_me}
                    <hr className="w-6 h-1 mx-auto my-4 bg-sky-500 border-0 rounded"></hr>
                </h1>

                <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
                    <div className="md:w-1/2 ">
                        <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                            {localization.know_me}
                        </h1>
                        <p>
                            {localization.p1_1}
                            <span className="font-bold">
                                {localization.p1_2}
                            </span>
                            {localization.p1_3}
                        </p>
                        <br />
                        <p>{localization.p2}</p>
                        <br />
                        <p>{localization.p3}</p>
                        <br />
                        <p>
                            {localization.p4_1}
                            <span className="font-bold text-sky-500">
                                {localization.p4_2}
                            </span>
                            {localization.p4_3}
                        </p>
                    </div>
                    <div className="text-center md:w-1/2 md:text-left">
                        <h1 className="text-2xl font-bold mb-6">
                            {localization.my_skills}
                        </h1>
                        <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                            {skills.map((item, idx) => {
                                return (
                                    <p
                                        key={idx}
                                        className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                                    >
                                        {item.skill}
                                    </p>
                                );
                            })}
                        </div>
                        <Image
                            src="/cartoon.png"
                            alt=""
                            width={325}
                            height={300}
                            className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
