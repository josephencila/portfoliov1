import { cookies } from 'next/headers'
import { createServerClient } from '@supabase/ssr'
import { clientKeysConfig } from '@/lib/configs/supabase/client-keys.config'

const keys = clientKeysConfig()

export async function serverClientConfig() {
    const { url, anonKey } = keys

    const cookieStore = await cookies()

    const supabase = createServerClient(
        url,
        anonKey,
        {
            cookies: {
                getAll() {
                    return cookieStore.getAll();
                },
                setAll(cookiesToSet) {
                    try {
                        cookiesToSet.forEach(({ name, value, options }) =>
                            cookieStore.set(name, value, options)
                        );
                    } catch (error) {
                        console.error(error);
                    }
                }
            }
        }
    )
    return supabase
}
