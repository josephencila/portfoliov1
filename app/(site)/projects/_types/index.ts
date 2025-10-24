export interface IProjectPage {
    params: Promise<{ slug: string }>;
}

export type TTechnologies = {
    id: string
    icon: string
    name: string
}
export type TProjectList = {
    id: string
    slug: string;
    title: string
    description: string;
    duration: string;
    category: string;
    demo_url: string;
    repo_url: string
    technologies: string[];
}
