/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container } from "inversify";

export const internalContainer = new Container({ autobind: true });

type Constructor<T = any> = new (...args: any[]) => T;

type ResolvedMap<T extends Constructor[]> = {
    [K in keyof T as T[K] extends Constructor
    ? Uncapitalize<InstanceType<T[K]>["constructor"]["name"]>
    : never]: T[K] extends Constructor ? InstanceType<T[K]> : never;
};

export function resolve<T extends Constructor[]>(...constructors: T): ResolvedMap<T> {
    const result: Record<string, any> = {};

    for (const ctor of constructors) {
        const name = ctor.name;
        const key = name.charAt(0).toLowerCase() + name.slice(1);
        result[key] = internalContainer.get(ctor);
    }

    return result as ResolvedMap<T>;
}