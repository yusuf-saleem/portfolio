"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { LanguageProvider, useLanguage } from "@/context/LanguageProvider";

const CertificationSection = () => {
    const { lang, setLang } = useLanguage();
    const localization = require(`../locales/${lang}/certification.json`);

    const certifications = [
        {
            name: localization.aws_cloud_practitioner,
            issuer: "Amazon Web Services",
            image: "/aws-cloud-practitioner.png",
            link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/71edee6c4a8c4951b3e4eaa7ac030c86",
            issueDate: localization.mar_2024,
            expiryDate: "Mar 2027",
        }
    ];

    return (
        <section id="certifications">
            <h1 className="my-10 text-center font-bold text-4xl">
                {localization.certifications}
                <hr className="w-6 h-1 mx-auto my-4 bg-sky-500 border-0 rounded"></hr>
            </h1>

            <div className="flex flex-col space-y-28">
                {certifications.map((cert, idx) => {
                    return (
                        <div key={idx}>
                            <SlideUp offset="-300px 0px -300px 0px">
                                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12 text-center items-center justify-end">
                                    <div>
                                        <Link href={cert.link}>
                                            <Image
                                                src={cert.image}
                                                alt=""
                                                width={160}
                                                height={160}
                                                className="rounded-xl"
                                                style={{ backgroundColor: 'transparent' }}
                                            />
                                        </Link>
                                    </div>
                                    <div className="mt-8 md:w-1/2 text-center md:text-left">
                                        <h1 className="text-4xl font-bold mb-6">
                                            {cert.name}
                                        </h1>
                                        <p className="text-xl leading-7 mb-4 text-neutral-600  dark:text-neutral-400 ">
                                            {cert.issuer}
                                        </p>
                                        <div className="flex flex-row justify-center md:justify-start items-center space-x-4">
                                            <p
                                                key={idx}
                                                className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                                            >
                                                {cert.issueDate}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SlideUp>
                        </div>
                    );
                })}
            </div>
            <div className="mt-32 mb-32"></div>
        </section>
    );
};

export default CertificationSection;
