import { combineReducers } from "redux";

import { ADD_COUNTER, MiNUS_COUNTER } from "../actions/index";

function calculate(state = 0, action) {
    switch (action.type) {
        case ADD_COUNTER:
            return state + 1;
            break;
        case MiNUS_COUNTER:
            return state - 1;
            break;
        default:
            return state;
            break;
    }
}

const reducers = combineReducers({
    num: calculate
});

export default reducers;
