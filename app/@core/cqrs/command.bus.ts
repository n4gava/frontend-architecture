import { ICommandHandler } from "./command.interfaces";
import { Container } from "inversify";

/* eslint-disable @typescript-eslint/no-explicit-any */
export class CommandBus {
    constructor(private readonly container: Container) {}
    private handlers = new Map<string, any>();

    register<T extends new (...args: any[]) => any>(
        commandType: T,
        handlerType: any
    ) {
        this.handlers.set(commandType.name, handlerType);
    }

    async execute<T extends new (...args: any[]) => any, TResponse = any>(
        command: InstanceType<T>
    ): Promise<TResponse> {
        console.log("command.constructor.name", command.constructor.name);
        const handlerType = this.handlers.get(command.constructor.name);
        if (!handlerType) {
            throw new Error(`Handler not found for command: ${command.constructor.name}`);
        }

        const handler: ICommandHandler<T> = this.container.get(handlerType);
        return (await handler.execute(command)) as TResponse;
    }
}
