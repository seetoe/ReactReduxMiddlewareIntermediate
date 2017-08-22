import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    // redux promise sees incoming action and looks at payload
    // if payload is promise, redux promise stops the action entirely and
    // waits until promise resolves and then sends new action to reducer

    switch (action.type) {
        case FETCH_WEATHER:
            // concat instead push to return fresh array/state instead of mutating state
            // similar to state.concat();
            return [ action.payload.data, ...state ];
    }

    return state;
}