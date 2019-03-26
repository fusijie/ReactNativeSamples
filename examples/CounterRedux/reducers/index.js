/*
 * @Author: JackyFu
 * @Date: 2019-03-26 09:18:29
 * @Last Modified by:   JackyFu
 * @Last Modified time: 2019-03-26 09:18:29
 */
import { combineReducers } from "redux";

import { ADD_COUNTER, MiNUS_COUNTER } from "../actions/index";

const initState = 0;

function calculate(state = initState, action) {
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
