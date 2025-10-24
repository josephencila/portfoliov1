import Image from "next/image";
import { notFound } from "next/navigation";

import { serverClientConfig } from "@/lib/configs/supabase/server-client.config";

import { IProjectPage, TProjectList, TTechnologies } from "@/app/(site)/projects/_types";

import ListComponent from "@/components/shared/list.component";

const SiteProjectsPage = async ({ params }: IProjectPage) => {
    const { slug } = await params;

    const supabase = await serverClientConfig();

    const { data: project, error: projectError } = await supabase
        .from("projects")
        .select('*')
        .eq("slug", slug)
        .single<TProjectList>()

    if (!project) notFound()
    if (projectError) throw projectError;

    const { data: technologies, error: technologiesError } = await supabase
        .from("technologies")
        .select('*')
        .in("id", project?.technologies)

    if (technologiesError) throw technologiesError;

    return (
        <div className="flex flex-col px-6 py-8 gap-6 ">
            <div className="grid grid-rows-2 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-4">
                    <h1 className="uppercase text-3xl md:text-4xl font-bold">
                        {project.title}
                    </h1>
                    <hr className="bg-neutral-300" />
                    <span className="uppercase">Stack:</span>
                    <ListComponent
                        data={technologies as TTechnologies[]}
                        as="ul"
                        className="flex flex-row gap-2 flex-wrap"
                        renderItem={(tech) => (
                            <li key={tech.id} className="uppercase">
                                {tech.name}
                            </li>
                        )}
                    />
                </div>
                <div>
                    <p className="text-base font-medium md:text-lg uppercase leading-relaxed text-neutral-600 dark:text-neutral-300 max-w-2xl ">
                        {project.description}
                    </p>
                </div>
            </div>
            <div>
                <div className="relative aspect-video overflow-hidden rounded-md border border-transparent group">
                    <Image
                        priority
                        src="https://placehold.co/900x600"
                        alt={project.slug}
                        fill
                        className="object-cover grayscale transition-all duration-500 ease-in-out group-hover:grayscale-0 hover:-translate-y-2"
                    />
                </div>
            </div>
        </div>
    );
}

export default SiteProjectsPage