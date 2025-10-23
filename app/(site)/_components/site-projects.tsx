import ListComponent from "@/components/shared/list.component";

import SiteProjectCard from "@/app/(site)/_components/site-project-card";
import { projectList } from "@/lib/constants/mock-data";

export default function SiteProjects() {
    return (
        <div className='pt-10 h-auto '>
            <div className='flex flex-col gap-6 w-full'>
                <ListComponent
                    as="ul"
                    className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:gap-8 list-none p-0"
                    data={projectList.slice(-6)}
                    renderItem={(project) => (
                        <SiteProjectCard key={project.id} project={project} />
                    )}
                />
            </div>
        </div>
    )
}
