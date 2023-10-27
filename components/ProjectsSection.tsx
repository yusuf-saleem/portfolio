import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
    {
        name: "Tensai",
        description:
            "An AI infused language learning app for guaging users' language comprehension ability.",
        image: "/tensai.png",
        skills: [
            { skill: "React.js" },
            { skill: "Node.js" },
            { skill: "Supabase" },
        ],
        github: "https://github.com/yusuf-saleem/tensai",
        link: "https://tensai.netlify.app/",
    },
];

const ProjectsSection = () => {
    return (
        <section id="projects">
            <h1 className="my-10 text-center font-bold text-4xl">
                Projects
                <hr className="w-6 h-1 mx-auto my-4 bg-sky-500 border-0 rounded"></hr>
            </h1>

            <div className="flex flex-col space-y-28">
                {projects.map((project, idx) => {
                    return (
                        <div key={idx}>
                            <SlideUp offset="-300px 0px -300px 0px">
                                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12 text-center items-center">
                                    <div className=" md:w-1/2">
                                        <Link href={project.link}>
                                            <Image
                                                src={project.image}
                                                alt=""
                                                width={1000}
                                                height={1000}
                                                className="rounded-xl shadow-xl hover:opacity-70"
                                            />
                                        </Link>
                                    </div>
                                    <div className="mt-8 md:w-1/2 text-center md:text-left">
                                        <h1 className="text-4xl font-bold mb-6">
                                            {project.name}
                                        </h1>
                                        <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-row justify-center md:justify-start items-center space-x-4 mb-4">
                                            {project.skills.map((item, idx) => {
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
                                        <div className="flex flex-row items-center space-x-4 justify-center md:justify-start">
                                            <Link
                                                href={project.github}
                                                target="_blank"
                                            >
                                                <BsGithub
                                                    size={30}
                                                    className="hover:-translate-y-1 transition-transform cursor-pointer"
                                                />
                                            </Link>
                                            <Link
                                                href={project.link}
                                                target="_blank"
                                            >
                                                <BsArrowUpRightSquare
                                                    size={30}
                                                    className="hover:-translate-y-1 transition-transform cursor-pointer"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SlideUp>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default ProjectsSection;
