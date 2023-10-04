import React, {useState} from 'react';

export const CounterApp = () => {
    const [state, setState] = useState({
        counter0: 0,
        counter10: 10,
        counter20: 20,
        counter30: 30,
    });

    const {counter0, counter10, counter20, counter30} = state;

    function counter0add() {
        setState({
            ...state,
            counter0: counter0 + 1,
        })
    }

    function counter10add() {
        setState({
            ...state,
            counter10: counter10 + 1,
        })
    }


    return (
        <>
        <h1>COUNTER0: {counter0}</h1>
        <h1>COUNTER10: {counter10}</h1>
        <hr />
        <button onClick={counter0add}>COUNTER0 + 1</button>
        <button onClick={counter10add}>COUNTER10 + 1</button>
        </>
    )
}