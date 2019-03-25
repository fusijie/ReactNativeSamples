import { createStore } from "redux";

import reducers from "../reducers/index";

const initState = {
    todos: [
        { id: 1, title: "吃早饭", status: true },
        { id: 2, title: "打篮球", status: false },
        { id: 3, title: "修电脑", status: false }
    ],
    filter: "All" //"All"|"Undo"|"Finish"
};

let store = createStore(reducers, initState);

export default store;
