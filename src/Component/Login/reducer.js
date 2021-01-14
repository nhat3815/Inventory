import React from 'react';
import State from './StateLogin'
const ReducerLogin =  (state = State, action) => {
    switch (action.type) {
        case "Login":
            return {
              ...state,
              isSup: !state.isSup,
            };
        default:
            return state
    }
}

export {ReducerLogin};