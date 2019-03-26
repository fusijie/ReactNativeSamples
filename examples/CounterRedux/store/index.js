/*
 * @Author: JackyFu
 * @Date: 2019-03-26 09:17:41
 * @Last Modified by:   JackyFu
 * @Last Modified time: 2019-03-26 09:17:41
 */
import { createStore } from "redux";

import reducers from "../reducers/index";

let store = createStore(reducers);

export default store;
