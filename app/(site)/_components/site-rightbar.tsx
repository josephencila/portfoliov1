"use client"

import Link from "next/link"
import { Icon } from "@iconify/react"
import { MainLogo } from "@/public/assets/svgs"

import { useTheme } from "next-themes"
import { useToggleStore } from "@/store/useToggleStore"

import { siteNavigations } from "@/lib/constants/navigations"

import ListComponent from "@/components/shared/list.component"


export default function SiteRightbar() {

    const { theme, setTheme } = useTheme()
    const { toggleOff } = useToggleStore()

    const handleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <aside className="bg-white dark:bg-black px-6 left-0 right-0 bottom-0 top-0 fixed grid grid-rows-[64px_1fr]">
            <div className="flex flex-row justify-center items-center w-full border-b border-neutral-300 ">
                <Link href="/" className="flex flex-row gap-2 items-center w-full group">
                    <MainLogo className=" w-10 h-10 pt-2 fill-neutral-900 hover:fill-neutral-800 dark:fill-neutral-50 dark:hover:fill-neutral-100 transition-colors" />
                    <span className="uppercase text-xl font-semibold hidden md:block text-neutral-900 hover:text-neutral-800 dark:text-neutral-50 dark:hover:text-neutral-100 transition-colors">
                        Joseph Encila
                    </span>
                </Link>

                <div className="flex flex-row gap-4">
                    <button onClick={handleTheme} className="cursor-pointer">
                        <Icon icon="material-symbols:ev-shadow-outline" className="w-6 h-6 text-neutral-900 dark:text-neutral-100   " />
                    </button>
                    <button onClick={toggleOff} className="cursor-pointer md:hidden">
                        <Icon icon="rivet-icons:close" className="w-6 h-6 text-neutral-900 dark:text-neutral-100   " />
                    </button>
                </div>
            </div >
            <ListComponent
                className="flex flex-col gap-4  py-8"
                data={siteNavigations}
                renderItem={((navigations) => (
                    <Link
                        onClick={toggleOff}
                        key={navigations.id}
                        href={navigations.href}
                        className="uppercase font-semibold transition-colors duration-300 delay-75 text-neutral-900 dark:text-neutral-100 hover:text-indigo-400 dark:hover:text-indigo-400"
                    >
                        {navigations.name}
                    </Link>
                ))}
            />
        </aside>
    )
}
