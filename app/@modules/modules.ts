import { Container } from "inversify";
import { AuthModule } from "./auth/auth.module";
import { CqrsModule } from "../@core/cqrs/cqrs.module";
import { CommandBus } from "../@core/cqrs/command.bus";

export class Modules {
    modules = [new CqrsModule(), new AuthModule()];

    async register(container: Container) {
        for (const appModule of this.modules) {
            if (appModule.register) {
                appModule.register(container);
            }
        }

        const commandBus = container.get<CommandBus>(CommandBus);
        for (const appModule of this.modules) {
            const commandHandlers = appModule.commands || [];
            for (const commandHandler of commandHandlers) {
                const command = Reflect.getMetadata("command", commandHandler);
                commandBus.register(command, commandHandler);
            }
        }
    }
}
