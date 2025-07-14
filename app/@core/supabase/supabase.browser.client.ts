import { createBrowserClient as supabaseCreateBrowserClient } from "@supabase/ssr";

export function createSupabaseBrowserClient() {
    return supabaseCreateBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    );
}
