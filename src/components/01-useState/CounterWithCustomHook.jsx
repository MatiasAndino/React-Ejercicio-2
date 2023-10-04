import React from 'react';
import { useCounter } from '../../hooks/useCounter';

export const CounterWithCustomHook = () => {
    const INITIAL_VALUE = 0;
    const {state, increment, decrement, reset} = useCounter(INITIAL_VALUE);

    return (
        <>
            <h1>Counter With Hook: { state }</h1>
            <hr />
            <button onClick={ () => increment(2) } className='btn'>+ 2</button>
            <button onClick={ reset } className='btn'>reset</button>
            <button onClick={ () => decrement(2) } className='btn'>- 2</button>
        </>
    )
}