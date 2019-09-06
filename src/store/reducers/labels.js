import { ADD_LABEL, DELETE_LABEL, UPDATE_LABEL } from "../actionTypes";

const initialState = [
    { id: '1', value: 'Label 1' },
    { id: '2', value: 'Label 2' },
    { id: '3', value: 'Label 3' }
];

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_LABEL:
            return [
                ...state,
                { ...action.payload }
            ]
        case DELETE_LABEL:
            return state.filter(label => label.id !== action.id);
        case UPDATE_LABEL:
            return state.map((label) => {
                if (label.id === action.id) {
                    return {
                        ...label,
                        value: action.value,
                    }
                }
                return label;
            });
        default:
            return state
    }
}