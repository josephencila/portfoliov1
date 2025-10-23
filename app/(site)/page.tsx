import SiteHero from "@/app/(site)/_components/site-hero"
import SiteProjects from "@/app/(site)/_components/site-projects"

const SitePage = () => {
    return (
        <div className="px-6 py-8 bg-white dark:bg-black">
            <SiteHero />
            <SiteProjects />
        </div>
    )
}

export default SitePage