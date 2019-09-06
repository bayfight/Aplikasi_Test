import {
    ADD_LABEL,
    DELETE_LABEL,
    UPDATE_LABEL,
} from '../actionTypes';

export function addLabel(payload) {
    return { type: ADD_LABEL, payload }
}

export function deleteLabel(id) {
    return { type: DELETE_LABEL, id }
}

export function updateLabel(id, value) {
    return { type: UPDATE_LABEL, id, value }
}