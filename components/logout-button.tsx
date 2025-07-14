"use client";

import { createSupabaseBrowserClient } from "@/app/@core/supabase/supabase.browser.client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();

  const logout = async () => {
    const supabase = createSupabaseBrowserClient();
    await supabase.auth.signOut();
    router.push("/auth/login");
  };

  return <Button onClick={logout}>Logout</Button>;
}
