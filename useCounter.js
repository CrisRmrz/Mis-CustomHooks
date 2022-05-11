import { useState } from "react"

export const useCounter = ( initialState = 50 ) => {

    const [state, setState] = useState(initialState);

    const Sumar = ()=> {
        setState( state + 1 );
    }

    const Restar = ()=> {
        setState( state -1 );
    }

    const Resetear = ()=> {
        setState( initialState );
    }

    return({
        state,
        Sumar,
        Restar,
        Resetear
    })

}





/*
import { useState } from "react"

export const useCounter = ( initialState = 10 ) => {

    const [state, setState] = useState(initialState);

    const increment = ( factor = 1 )=> {
        setState( state + factor );
    }

    const decrement = ( factor = 1 )=> {
        setState( state - factor );
    }

    const resetear = ()=> {
        setState( 0 );
    }

    return {
        state,
        increment,
        decrement,
        resetear
    };

}
*/