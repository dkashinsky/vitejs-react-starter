import { CounterAction, CounterActionType } from "../actions/counter";

const INITIAL_STATE = {
    count: 0,
};

type CounterState = typeof INITIAL_STATE;

export default function (state: CounterState = INITIAL_STATE, action: CounterAction): CounterState {
    switch (action.type) {
        case CounterActionType.Decrement:
            return { ...state, count: state.count - 1 };
        case CounterActionType.Increment:
            return { ...state, count: state.count + 1 };
        case CounterActionType.Reset:
            return { ...state, count: action.payload};
        default:
            return state;
    }
}
