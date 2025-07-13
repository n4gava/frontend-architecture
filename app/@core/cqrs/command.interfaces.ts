// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ICommandHandler<TCommand> {
    execute(request: TCommand): Promise<unknown>;
}
