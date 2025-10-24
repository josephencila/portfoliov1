import Image from "next/image";

import { IProjectPage } from "@/app/(site)/projects/_types";
import { projectList } from "@/lib/constants/mock-data";

import ListComponent from "@/components/shared/list.component";

const SiteProjectsPage = async ({ params }: IProjectPage) => {
    const { slug } = await params;
    return (
        <div className="flex flex-col px-6 py-8 gap-6 ">
            <div className="grid grid-rows-2 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-4">
                    <h1 className="uppercase text-3xl md:text-4xl font-bold">
                        Adtocarto
                    </h1>
                    <hr className="bg-neutral-300" />
                    <span className="uppercase">Stack:</span>
                    <ListComponent
                        data={projectList.slice(0, 1)}
                        as="ul"
                        renderItem={(project) => (
                            <ListComponent
                                key={project.id}
                                data={project.technologies}
                                as="li"
                                className="flex flex-row gap-2 flex-wrap uppercase"
                                renderItem={(tech) => (
                                    <div>
                                        {tech.name}
                                    </div>
                                )}
                            />
                        )}
                    />
                </div>
                <div>
                    <p className="text-base font-medium md:text-lg uppercase leading-relaxed text-neutral-600 dark:text-neutral-300 max-w-2xl ">
                        A minimalist eCommerce web app built to showcase seamless product browsing, cart management, and checkout — designed for speed, simplicity, and scalability.
                    </p>
                </div>
            </div>
            <div>
                <div className="relative aspect-video overflow-hidden rounded-md border border-transparent group">
                    <Image
                        priority
                        src="https://placehold.co/900x600"
                        alt={slug}
                        fill
                        className="object-cover grayscale transition-all duration-500 ease-in-out group-hover:grayscale-0 hover:-translate-y-2"
                    />
                </div>
            </div>
        </div>
    );
}

export default SiteProjectsPage