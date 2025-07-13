import { Container } from "inversify";
import { IModule } from "../modules/modules.interfaces";
import { CommandBus } from "./command.bus";

export class CqrsModule implements IModule {
    register(container: Container): void {
        container.bind<CommandBus>(CommandBus).toConstantValue(new CommandBus(container));
    }
}
