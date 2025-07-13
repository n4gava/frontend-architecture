import { Container } from "inversify";
import { AuthModule } from "./auth/auth.module";
import { CqrsModule } from "../@core/cqrs/cqrs.module";

export class Modules {
    modules = [new CqrsModule(), new AuthModule()];

    async register(container: Container) {
        await Promise.all(this.modules.map((module) => module.register(container)));
    }
}
