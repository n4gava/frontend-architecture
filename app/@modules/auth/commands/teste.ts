import { injectable } from "inversify";

@injectable()
export class Teste {
    number: number = 0;

    teste() {
        return "hello world";
    }
}