import { internalContainer } from "../@core/container/container";
import { ModulesRegister } from "../@core/modules/modules.register";
import { AuthModule } from "./auth/auth.module";

export const container = internalContainer;
const modules = [new AuthModule()];
const modulesRegister = new ModulesRegister(modules);
await modulesRegister.register(container);
