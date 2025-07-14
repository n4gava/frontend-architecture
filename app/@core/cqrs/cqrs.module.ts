import { Container } from "inversify";
import { IModule } from "../modules/modules.interfaces";
import { CommandBus } from "./queries/command.bus";
import { QueryBus } from "./command/query.bus";

export class CqrsModule implements IModule {
    commands = []
    queries = []
    register(container: Container): void {
        container.bind<CommandBus>(CommandBus).toConstantValue(new CommandBus(container));
        container.bind<QueryBus>(QueryBus).toConstantValue(new QueryBus(container));
    }
}
