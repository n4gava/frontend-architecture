import { ICommandHandler } from "@/app/@core/cqrs/command.interfaces";
import { CommandHandler } from "@/app/@core/cqrs/command-handler.decorator";
import { Teste } from "./teste";

export class TesteCommand {
    constructor(public readonly data: string) { }
}

@CommandHandler(TesteCommand)
export class TesteCommandHandler implements ICommandHandler<TesteCommand> {
    constructor(public teste: Teste) {
        this.teste = teste;
    }

    async execute(command: TesteCommand): Promise<unknown> {
        return this.teste.teste() + " " + command.data;
    }
}