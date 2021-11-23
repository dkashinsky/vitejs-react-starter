export enum CounterActionType {
    Increment = '[Counter] Increment',
    Decrement = '[Counter] Decrement',
    Reset = '[Counter] Reset',
}

type Action<T> = () => { type: T };
type PayloadAction<T, P> = (payload: P) => { type: T, payload: P };

export const decrementCounter: Action<typeof CounterActionType.Decrement> = () => ({
    type: CounterActionType.Decrement,
});

export const incrementCounter: Action<typeof CounterActionType.Increment> = () => ({
    type: CounterActionType.Increment,
});

export const resetCounter: PayloadAction<typeof CounterActionType.Reset, number> = (resetValue: number) => ({
    type: CounterActionType.Reset,
    payload: resetValue,
});

export type CounterAction =
    | ReturnType<typeof incrementCounter>
    | ReturnType<typeof decrementCounter>
    | ReturnType<typeof resetCounter>;
