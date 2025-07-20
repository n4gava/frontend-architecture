import { Container } from "inversify";
import { IModule } from "./modules.interfaces";
import { CommandBus } from "../cqrs/command/command.bus";
import { CqrsModule } from "../cqrs/cqrs.module";

export class ModulesRegister {
    constructor(private readonly modules: IModule[] = []) {

    }

    private readonly baseModules: IModule[] = [new CqrsModule()]

    async register(container: Container) {
        const modulesToRegister = [...this.baseModules, ...this.modules];
        for (const appModule of modulesToRegister) {
            if (appModule.register) {
                appModule.register(container);
            }
        }

        const commandBus = container.get<CommandBus>(CommandBus);
        for (const appModule of modulesToRegister) {
            const commandHandlers = appModule.commands || [];
            for (const commandHandler of commandHandlers) {
                const command = Reflect.getMetadata("command", commandHandler);
                commandBus.register(command, commandHandler);
            }
        }
    }
}