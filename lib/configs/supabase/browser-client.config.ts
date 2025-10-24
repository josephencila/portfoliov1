import { createBrowserClient } from "@supabase/ssr";
import { clientKeysConfig } from "@/lib/configs/supabase/client-keys.config";

export function browserClientConfig() {
    const { url, anonKey } = clientKeysConfig()

    return createBrowserClient(url, anonKey);
}
