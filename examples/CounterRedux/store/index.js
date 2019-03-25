import { createStore } from "redux";

import reducers from "../reducers/index";

const initState = {
    num: 0
};

let store = createStore(reducers, initState);

export default store;
