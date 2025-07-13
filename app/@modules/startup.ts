import { internalContainer } from "../@core/container/container";
import { Modules } from "./modules";

export const container = internalContainer;
const modules = new Modules();
await modules.register(container);
