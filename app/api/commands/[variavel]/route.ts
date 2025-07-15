import { CommandBus } from "@/app/@core/cqrs/queries/command.bus";
import { TesteCommand } from "@/app/@modules/auth/commands/teste.command";
import { container } from "@/app/@modules/startup";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
    req: NextRequest,
    context: { params: Promise<{ variavel: string }> }
) {
    const { variavel } = await context.params;
    const body = await req.json();
    
    const commandBus = container.get<CommandBus>(CommandBus);
    const resultado = await commandBus.execute(new TesteCommand(variavel));

    // exemplo de log
    console.log("Recebido:", body);
    console.log("Variavel:", variavel);
    console.log("Resultado:", resultado);

    // lógica aqui...
    return NextResponse.json({ message: "Recebido com sucesso!", data: resultado, variavel });
}
