import { ADD_NOTE, DELETE_NOTE, UPDATE_NOTE } from "../actionTypes";

const initialState = [
    {
        id: '1',
        title: 'Title 1',
        message: 'Message 1',
        labels: [
            {
                id: '1',
                value: 'Label 1',
            }
        ]
    },
    {
        id: '2',
        title: 'Title 2',
        message: 'Message 2',
        labels: [
            {
                id: '2',
                value: 'Label 2',
            }
        ]
    },
];

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_NOTE:
            return [
                ...state,
                { ...action.payload }
            ]
        case DELETE_NOTE:
            return state.filter(note => note.id !== action.id);
        case UPDATE_NOTE:
            return state.map((note) => {
                if (note.id === action.id) {
                    return {
                        ...note,
                        labels: action.labels,
                        message: action.message,
                        title: action.title,
                    }
                }
                return note;
            });
        default:
            return state
    }
}