import { Container } from "inversify";
import { Modules } from "./modules";

export const container = new Container({autobind: true});
const modules = new Modules();
await modules.register(container);
