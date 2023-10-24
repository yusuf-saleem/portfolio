import React from "react";
import Image from "next/image";

const skills = [
    { skill: "JavaScript" },
    { skill: "React" },
    { skill: "Node.js" },
    { skill: "Python" },
    { skill: "C" },
    { skill: "Kubernetes" },
    { skill: "Docker" },
    { skill: "Git" },
];

const AboutSection = () => {
    return (
        <section id="about">
            <div className="my-12 pb-12 md:pt-16 md:pb-48">
                <h1 className="text-center font-bold text-4xl">
                    About Me
                    <hr className="w-6 h-1 mx-auto my-4 bg-sky-500 border-0 rounded"></hr>
                </h1>

                <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
                    <div className="md:w-1/2 ">
                        <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                            Get to know me!
                        </h1>
                        <p>
                            Hi, my name is Yusuf and I am a{" "}
                            <span className="font-bold">
                                {"highly ambitious"}
                            </span>
                            ,
                            <span className="font-bold">
                                {" self-motivated"}
                            </span>
                            , and
                            <span className="font-bold">{" driven"}</span>{" "}
                            software engineer based in Vancouver, Canada.
                        </p>
                        <br />
                        <p>
                            I graduated from Simon Fraser University, British
                            Columbia in 2022 with a BS in Computer Science and
                            have been working as an engineer ever since.
                        </p>
                        <br />
                        <p>
                            I enjoy gaming, building websites, and studying
                            Japanese. I am always looking for ways to leverage
                            my hobbies to help others.
                        </p>
                        <br />
                        <p>
                            I believe that learning{" "}
                            <span className="font-bold text-sky-500">
                                never stops.
                            </span>{" "}
                            I continually seek ways to push my technical 
                            boundaries while also fostering my creative expression.
                            I'm enthusiastic about my career path ahead and am
                            always open to new opportunities.🙂
                        </p>
                    </div>
                    <div className="text-center md:w-1/2 md:text-left">
                        <h1 className="text-2xl font-bold mb-6">My Skills</h1>
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
