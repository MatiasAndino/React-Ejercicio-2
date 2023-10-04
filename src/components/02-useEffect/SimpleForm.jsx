import React, {useEffect, useState} from 'react';
import { Message } from './Message';
import './effect.css';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
    });

    const {name, email} = formState;

    useEffect(() => {

    })

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value,
        })
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr />
            <div className="form-group">
                <input 
                    type="text" 
                    name="name"
                    className="form-control"
                    placeholder="coords"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div>
            <div className="form-group">
                <input 
                    type="email" 
                    name="email"
                    className="form-control"
                    placeholder="Email@Example.com"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>

            { (name === 'coords') && <Message />}
        </>
    )
}