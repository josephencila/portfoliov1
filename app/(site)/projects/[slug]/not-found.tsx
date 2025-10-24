"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

const ProjectsNotFound = () => {

    const params = useParams();
    const slug = params?.slug;

    return (
        <div className="flex flex-col items-center justify-center h-[80vh] text-center text-neutral-400">
            <h1 className="text-2xl font-semibold ">404</h1>
            <h2 className="text-lg font-medium mb-4">Sorry! No result found.</h2>
            <p>We couldn&apos;t find any matches for {`"${slug}"`}</p>
            <Link
                href="/"
                className="mt-4 px-4 py-2 text-sm font-semibold rounded-md bg-neutral-800 text-white hover:bg-neutral-700 transition"
            >
                Go back
            </Link>
        </div>
    );
}

export default ProjectsNotFound