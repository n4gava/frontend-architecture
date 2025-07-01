import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/auth/login");
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-12">
      <pre className="text-xs font-mono p-3 rounded border max-h-64 overflow-auto">
        {JSON.stringify(data.user, null, 2)}
      </pre>
    </div>
  );
}
