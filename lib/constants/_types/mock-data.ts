export type TSocialList = {
    id: string;
    name: string;
    url: string;
    icon: string;
}


export type TTechnologies = {
    id: string
    icon: string
    name: string
}

export interface IProjectList {
    id: string
    slug: string
    title: string
    description: string
    category: string
    year: string
    demo_url: string
    repo_url: string
    image_url: string
    technologies: TTechnologies[]
}