import Link from "next/link"
import { Icon } from "@iconify/react"

import ListComponent from "@/components/shared/list.component"

import { socialList } from "@/lib/constants/mock-data"


export default function SiteFooter() {

    const date = new Date()
    const year = date.getFullYear()

    return (
        <footer className="bg-white dark:bg-black px-6">
            <div className="grid grid-cols-2  border-t border-neutral-300 h-full">
                <div className="flex flex-row items-center gap-1 ">
                    <span className="mb-1">@</span>
                    <p className="uppercase text-sm md:text-base "> {year} {process.env.NEXT_PUBLIC_ABBR_NAME}</p>
                </div>
                <ListComponent
                    as="ul"
                    className="flex flex-row gap-2 items-center justify-end"
                    data={socialList}
                    renderItem={(social) => (
                        <li key={social.id}>
                            <Link href={social.url}>
                                <Icon icon={social.icon} className="w-6 h-6 text-neutral-900 dark:text-neutral-100   " />
                            </Link>
                        </li>
                    )}
                />
            </div>
        </footer>
    )
}
