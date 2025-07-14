import { IHandler } from "@/app/@core/cqrs/handler.interfaces";
import { Teste } from "./teste";
import { CommandHandler } from "@/app/@core/cqrs/command/command-handler.decorator";

export class TesteCommand {
    constructor(public readonly data: string) { }
}

@CommandHandler(TesteCommand)
export class TesteCommandHandler implements IHandler<TesteCommand> {
    constructor(public teste: Teste) {
        this.teste = teste;
    }

    async execute(command: TesteCommand): Promise<unknown> {
        return this.teste.teste() + " " + command.data;
    }
}