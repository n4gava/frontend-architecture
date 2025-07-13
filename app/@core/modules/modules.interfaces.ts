import { Container } from "inversify";

export interface IModule {
  register(container: Container): void;
}
