
import { CommandBus } from "@/app/@core/cqrs/command/command.bus";
import { TesteCommand } from "@/app/@modules/auth/commands/teste.command";
import { container } from "@/app/@modules/startup";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const body = await req.json();

    console.log("------------------------------------");
    const commandBus = container.get<CommandBus>(CommandBus);
    const resultado = await commandBus.execute(new TesteCommand("teste"));

    // exemplo de log
    console.log("Recebido:", body);
    console.log("Resultado:", resultado);

    // lógica aqui...
    return NextResponse.json({ message: "Recebido com sucesso!", data: resultado });
}
