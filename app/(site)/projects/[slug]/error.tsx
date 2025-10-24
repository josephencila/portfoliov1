"use client";

import Link from "next/link";

const ProjectsError = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[80vh] text-center text-neutral-400">
            <h1 className="text-2xl font-semibold mb-2">Something went wrong.</h1>
            <Link
                href="/"
                className="mt-4 px-4 py-2 text-sm font-semibold rounded-md bg-neutral-800 text-white hover:bg-neutral-700 transition"
            >
                Go back
            </Link>
        </div>
    );
}

export default ProjectsError