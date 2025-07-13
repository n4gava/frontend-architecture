import { IModule } from "@/app/@core/modules/modules.interfaces";
import { Container } from "inversify";
import { TesteCommand, TesteCommandHandler } from "./commands/teste.command";
import { Teste } from "./commands/teste";
import { CommandBus } from "@/app/@core/cqrs/command.bus";


export class AuthModule implements IModule {
    register(container: Container): void {
        container.bind<Teste>(Teste).toSelf();
        const commandBus = container.get<CommandBus>(CommandBus);
        commandBus.register(TesteCommand, TesteCommandHandler);
        container.bind<TesteCommandHandler>(TesteCommandHandler).toSelf();
    }
}
