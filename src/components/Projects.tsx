'use client';

import { headerItems } from "@/constants/constant";
import { projects } from "@/models/project"; // Import the `projects` object
import Image from "next/image";

const Projects: React.FC = () => {
    return (
        <section 
            id={headerItems.projects.page} 
            className="flex flex-col text-center justify-center items-center my-40"
        >
            <h1 className="text-6xl my-6">Projects</h1>
            <div className="flex break-words flex-wrap text-center justify-center items-center">
                {Object.keys(projects).map((project, index) => (
                    <Image 
                        src={projects[project].image} 
                        alt={project}
                        width={300}
                        height={300}
                        key={index}
                        className="mt-4 md:m-1 cursor-pointer"
                    />
                ))}
            </div>
        </section>
    )
}

export default Projects;
