/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container } from "inversify";

export type HandlerClass<T = any> = new (...args: any[]) => T;

export interface IModule {
  commands: HandlerClass[];
  queries: HandlerClass[];

  register(container: Container): void;
}
