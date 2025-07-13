import { IModule } from "@/app/@core/modules/modules.interfaces";
import { Container } from "inversify";
import { TesteCommandHandler } from "./commands/teste.command";
import { Teste } from "./commands/teste";


export class AuthModule implements IModule {
    commands = [TesteCommandHandler];
    queries = [];
    
    register(container: Container): void {
        container.bind<Teste>(Teste).toSelf();
    }
}
