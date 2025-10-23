"use client"
import { useEffect } from "react"

import { useToggleStore } from "@/store/useToggleStore"
import useScreenSize from "@/lib/hooks/use-screen-size"

import SiteHeader from "@/app/(site)/_components/site-header"
import SiteRightbar from "@/app/(site)/_components/site-rightbar"

const SiteLayout = ({ children }: { children: React.ReactNode }) => {

    const { isToggled, toggleOff } = useToggleStore()
    const { width } = useScreenSize()

    useEffect(() => {
        if (width >= 768) {
            toggleOff()
        }
    }, [width, toggleOff])

    return (
        <div className='min-h-full h-auto w-full bg-c-light-bg-1 dark:bg-c-dark-bg-1 flex flex-col items-center  transition-all ease-in-out'>
            <div className='min-h-dvh h-full w-full max-w-7xl bg-white dark:bg-black ease-in-out  grid grid-cols-1 grid-rows-[64px_1fr]'>
                <SiteHeader />
                {isToggled && <SiteRightbar />}
                <main className='flex flex-col h-full '>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default SiteLayout