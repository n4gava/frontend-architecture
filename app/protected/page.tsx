import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { resolve } from "../@core/container/container";
import { TesteCommand } from "../@modules/auth/commands/teste.command";
import { CommandBus } from "../@core/cqrs/command.bus";

export default async function ProtectedPage() {
  const { commandBus } = resolve(CommandBus);
  const supabase = await createClient();

  const valor = await commandBus.execute(new TesteCommand("Hello from protected page!"));

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/auth/login");
  }
  const session = await supabase.auth.getSession();

  return (
    <div className="flex-1 w-full flex flex-col gap-12">
      <pre className="text-xs font-mono p-3 rounded border max-h-64 overflow-auto">
        {JSON.stringify(data.user, null, 2)}
      </pre>
      <div>Token: {session.data.session?.access_token}</div>
      <div>Valor do comando: {valor}</div>
    </div>
  );
}
