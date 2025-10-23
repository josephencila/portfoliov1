
export default function SiteHero() {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="uppercase text-3xl md:text-4xl font-bold">
                Hi! I&apos;m Joseph
            </h1>
            <p className="text-base font-medium md:text-lg uppercase leading-relaxed text-neutral-600 dark:text-neutral-300 max-w-2xl ">
                {process.env.NEXT_PUBLIC_DESCRIPTION_1}
            </p>
        </div>
    )
}
