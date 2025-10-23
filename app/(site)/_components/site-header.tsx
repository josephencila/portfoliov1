"use client"

import Link from "next/link"
import { Icon } from "@iconify/react"
import { MainLogo } from "@/public/assets/svgs"

import { useTheme } from "next-themes"
import { useToggleStore } from "@/store/useToggleStore"

import { siteNavigations } from "@/lib/constants/navigations"

import ListComponent from "@/components/shared/list.component"

export default function SiteHeader() {
    const { theme, setTheme } = useTheme()
    const { toggleOn } = useToggleStore()

    const handleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <header>
            <nav className="h-full px-6">
                <ul className="flex flex-row items-center justify-between  h-full gap-4 border-b border-neutral-300">
                    <li className="flex flex-row justify-center items-center w-full ">
                        <Link href="/" className="flex flex-row gap-2 items-center w-full group">
                            <MainLogo className=" w-10 h-10 pt-2 fill-neutral-900 hover:fill-neutral-800 dark:fill-neutral-50 dark:hover:fill-neutral-100 transition-colors" />
                            <span className="uppercase text-xl font-semibold hidden md:block text-neutral-900 hover:text-neutral-800 dark:text-neutral-50 dark:hover:text-neutral-100 transition-colors">
                                {process.env.NEXT_PUBLIC_NAME}
                            </span>
                        </Link>
                    </li>
                    <li className="flex flex-row gap-6">
                        <ListComponent
                            className="flex-row gap-4 hidden md:flex"
                            data={siteNavigations}
                            renderItem={((navigations) => (
                                <Link
                                    key={navigations.id}
                                    href={navigations.href}
                                    className="uppercase font-semibold transition-colors duration-300 delay-75 text-neutral-900 dark:text-neutral-100 hover:text-indigo-400 dark:hover:text-indigo-400"
                                >
                                    {navigations.name}
                                </Link>
                            ))}
                        />
                        <div className="flex flex-row gap-4">
                            <button onClick={handleTheme} className="cursor-pointer">
                                <Icon icon="material-symbols:ev-shadow-outline" className="w-6 h-6 text-neutral-900 dark:text-neutral-100   " />
                            </button>
                            <button onClick={toggleOn} className="cursor-pointer md:hidden">
                                <Icon icon="icomoon-free:menu" className="w-6 h-6 text-neutral-900 dark:text-neutral-100   " />
                            </button>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
