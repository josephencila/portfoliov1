import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createServerClient } from '@supabase/ssr'
import { clientKeysConfig } from '@/lib/configs/supabase/client-keys.config'

const keys = clientKeysConfig()


export async function middlewareClientConfig(request: NextRequest) {
    const { url, anonKey } = keys


    let response = NextResponse.next({
        request,
    })

    const supabase = createServerClient(
        url,
        anonKey,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll()
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
                    response = NextResponse.next({
                        request,
                    })
                    cookiesToSet.forEach(({ name, value, options }) =>
                        response.cookies.set(name, value, options)
                    )
                }
            }
        }
    )

    const { data: { user } } = await supabase.auth.getUser()

    const { pathname } = request.nextUrl
    const requestUrl = request.nextUrl.clone()

    if (!user && pathname.startsWith("/workspace")) {
        requestUrl.pathname = "/"
        return NextResponse.redirect(requestUrl)
    }

    return response
}
