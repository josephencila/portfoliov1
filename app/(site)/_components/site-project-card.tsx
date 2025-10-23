import Image from "next/image";
import Link from "next/link";
import { IProjectList } from "@/lib/constants/_types/mock-data";

export default function SiteProjectCard({ project }: { project: IProjectList }) {
    return (
        <li className="h-full">
            <Link href={`/projects/${project.slug}`} className="group block h-full">
                <div className="flex flex-col h-full">
                    <Image
                        priority
                        src={"https://placehold.co/900x600"}
                        alt={project.title}
                        width={900}
                        height={600}
                        className="mb-4 hover:-translate-y-2 rounded-md grayscale transition-all duration-500 ease-in-out group-hover:grayscale-0 border border-transparent"
                    />
                    <div>
                        <h3 className="uppercase text-base font-medium xl:text-xl transition-colors duration-300 delay-75 group-hover:text-indigo-400 group-hover:dark:text-indigo-400 text-neutral-900  dark:text-neutral-50">
                            {project.title}
                        </h3>
                        <p className="uppercase mt-1 text-sm md:mt-2 xl:text-base text-neutral-900  dark:text-neutral-50">
                            {project.description}
                        </p>
                    </div>
                </div>
            </Link>
        </li>
    )
}
