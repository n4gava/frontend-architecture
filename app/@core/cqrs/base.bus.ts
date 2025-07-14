import { Container } from "inversify";
import { IHandler } from "./handler.interfaces";

/* eslint-disable @typescript-eslint/no-explicit-any */
export abstract class BaseBus {
    abstract name: string;
    constructor(private readonly container: Container) { }
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
        const handlerType = this.handlers.get(command.constructor.name);
        if (!handlerType) {
            throw new Error(`Handler not found for ${this.name}: ${command.constructor.name}`);
        }

        const handler: IHandler<T> = this.container.get(handlerType);
        return (await handler.execute(command)) as TResponse;
    }
}
