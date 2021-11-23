import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from '../actions/counter';
import { RootState } from '../store';

const Counter: React.FC = () => {
    const dispatch = useDispatch();
    const count = useSelector((state: RootState) => state.counter.count);

    return (
        <div>
            <p>Count: {count}</p>
            <button type="button" onClick={() => dispatch(incrementCounter())}>Increment</button>
            <button type="button" onClick={() => dispatch(decrementCounter())}>Decrement</button>
            <button type="button" onClick={() => dispatch(resetCounter(0))}>Reset</button>
        </div>
    );
};

export default Counter;
