import { UseCase } from "@ddd/shared";

export default class Teste implements UseCase<void, string> {
    execute(): Promise<string> {
        return Promise.resolve("Caso de uso de teste no módulo de autenticação");
    }
}
