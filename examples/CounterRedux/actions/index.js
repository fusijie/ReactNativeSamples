/*
 * @Author: JackyFu
 * @Date: 2019-03-26 09:23:05
 * @Last Modified by:   JackyFu
 * @Last Modified time: 2019-03-26 09:23:05
 */
export const ADD_COUNTER = "ADD_COUNTER";

export const MiNUS_COUNTER = "MiNUS_COUNTER";

export function addCounter() {
    return { type: ADD_COUNTER };
}

export function minusCounter() {
    return { type: MiNUS_COUNTER };
}
