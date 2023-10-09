import React, { useState } from "react";
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'

import '../../index.css';

export const RealExampleRef = () => {
    const [ show, setShow ] = useState( true )

    return (
        <>
            <h1>REAL EXAMPLE REF</h1>
            <hr />

            {show && <MultipleCustomHooks />}

            <button
                className="btn btn-primary mt-3"
                onClick={() => setShow( !show )}
            >
                SHOW/HIDE
            </button>
        </>
    )
}