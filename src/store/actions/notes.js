import {
    ADD_NOTE,
    DELETE_NOTE,
    UPDATE_NOTE,
} from '../actionTypes';

export function addNote(payload) {
    return { type: ADD_NOTE, payload }
}

export function deleteNote(id) {
    return { type: DELETE_NOTE, id }
}

export function updateNote(id, labels, message, title) {
    return { type: UPDATE_NOTE, id, labels, message, title }
}