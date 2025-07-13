// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ICommandHandler<TCommand extends new (...args: any[]) => any> {
    execute(request: TCommand): Promise<unknown>;
}
