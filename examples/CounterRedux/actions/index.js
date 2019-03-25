export const ADD_COUNTER = "ADD_COUNTER";

export const MiNUS_COUNTER = "MiNUS_COUNTER";

export function addCounter() {
    return { type: ADD_COUNTER };
}

export function minusCounter() {
    return { type: MiNUS_COUNTER };
}
