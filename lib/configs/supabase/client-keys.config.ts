import { z } from "zod";


const {
    NEXT_PUBLIC_SUPABASE_URL: url,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: anonKey,
    NEXT_PUBLIC_DEV_BASE_URL: devBaseURL
} = process.env

export function clientKeysConfig() {

    return z
        .object({
            url: z.string().min(1),
            anonKey: z.string().min(1),
            devBaseURL: z.string().min(1),
        })
        .parse({
            url,
            anonKey,
            devBaseURL,
        });
}
