export const ADD_FEATURES = 'ADD_FEATURES';
export const REMOVE_FEATURES = 'REMOVE_FEATURES';

export function addFeatures(each) {
    console.log("Inside Action ", each)
    return {type: ADD_FEATURES, payload: each}
}

export function removeFeatures(each) {
    return {
        type: REMOVE_FEATURES,
        payload: each
    }
}