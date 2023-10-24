import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";

const projects = [
    {
        name: "Fortinet",
        role: "Software Developer",
        image: "/fortinet.jpg",
        link: "https://www.fortinet.com/",
        skills: [
            { skill: "React" },
            { skill: "Kubernetes" },
            { skill: "Python" },
        ],
    },
    {
        name: "Sierra Wireless",
        role: "Firmware Engineer Co-Op",
        image: "/sierra-wireless.jpg",
        link: "https://www.sierrawireless.com/",
        skills: [{ skill: "Python" }, { skill: "PyTest" }, { skill: "Gerrit" }],
    },
    {
        name: "Sierra Wireless",
        role: "Software Engineer Co-Op",
        image: "/sierra-wireless.jpg",
        link: "https://www.sierrawireless.com/",
        skills: [
            { skill: "Python" },
            { skill: "Selenium" },
            { skill: "Jenkins" },
        ],
    },
    {
        name: "Tantalus Systems",
        role: "Software Verification Engineer Co-Op",
        image: "/tantalus-systems.jpg",
        link: "https://www.tantalus.com/",
        skills: [{ skill: "C" }, { skill: "Bash" }],
    },
];

const WorkSection = () => {
    return (
        <section id="work">
            <h1 className="my-10 text-center font-bold text-4xl">
                Work Experience
                <hr className="w-6 h-1 mx-auto my-4 bg-sky-500 border-0 rounded"></hr>
            </h1>

            <div className="flex flex-col space-y-28">
                {projects.map((work, idx) => {
                    return (
                        <div key={idx}>
                            <SlideUp offset="-300px 0px -300px 0px">
                                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12 text-center items-center justify-end">
                                    <div>
                                        <Link href={work.link}>
                                            <Image
                                                src={work.image}
                                                alt=""
                                                width={160}
                                                height={160}
                                                className="rounded-xl shadow-xl hover:opacity-70"
                                            />
                                        </Link>
                                    </div>
                                    <div className="mt-8 md:w-1/2 text-center md:text-left">
                                        <h1 className="text-4xl font-bold mb-6">
                                            {work.name}
                                        </h1>
                                        <p className="text-xl leading-7 mb-4 text-neutral-600  dark:text-neutral-400 ">
                                            {work.role}
                                        </p>
                                        <div className="flex flex-row justify-center md:justify-start items-center space-x-4">
                                            {work.skills.map((item, idx) => {
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
                                    </div>
                                </div>
                            </SlideUp>
                        </div>
                    );
                })}
            </div>
            <div className="mt-32 mb-32">
            </div>
        </section>
    );
};

export default WorkSection;
