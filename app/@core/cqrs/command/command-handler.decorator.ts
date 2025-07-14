/* eslint-disable @typescript-eslint/no-explicit-any */
import { injectable } from "inversify";
import "reflect-metadata";

export function CommandHandler(command: new (...args: any[]) => any): ClassDecorator {
    return (target) => {
        injectable()(target as unknown as { new (...args: any[]): any });
        Reflect.defineMetadata("command", command, target);
    };
}