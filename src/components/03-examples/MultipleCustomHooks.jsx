import React from 'react';
import '../02-useEffect/effect.css';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter2';

export const MultipleCustomHooks = () => {
    
    
    const { counter, increment } = useCounter( 1 );

    const { loading, data } = useFetch( `https://pokeapi.co/api/v2/pokemon/${ counter }` );

    const { name, order } = !!data && data;

    return (
        <div>
            <h1>API</h1>
            <hr />

            
            {
                loading
                ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    ) 
                : 
                    (
                        <blockquote className='blockquote text-center'>
                            <p className='mb-0'>{ name }</p>
                            <hr />
                            <footer className='blockquote-footer'>{ order }</footer>
                        </blockquote>
                    )
            }

            <button onClick={ increment } className='btn btn-primary'>NEXT</button>

        </div>
    )
}