import { z } from "zod";

const pathSchema = z.object({
    site: z.object({
        home: z.string().min(1),
        about: z.string().min(1),
        contact: z.string().min(1),
        projects: z.string().min(1).includes(":slug"),
    }),
});

const pathsConfig = pathSchema.parse({
    site: {
        home: "/",
        about: "/about",
        contact: "/contact",
        projects: "/projects/:slug",
    },

} satisfies z.infer<typeof pathSchema>);

export default pathsConfig;
