export interface IHandler<T> {
    execute(request: T): Promise<unknown>;
}
