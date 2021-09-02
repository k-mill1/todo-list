import { combineReducers } from 'redux';
import {
    VisibilityFilters,
    ADD_ITEM,
    REMOVE_ITEM,
    CLEAR_ALL,
    TOGGLE_ITEM,
    SET_VISIBILITY_FILTER,
} from './actions.js';

function visibilityFilterReducer(state = VisibilityFilters.SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}
const initialState = []

function itemReducer(state = [], action) {
    let lastId = 0
    if (JSON.stringify(state) !== "[]"){
        lastId = state[state.length - 1].id + 1
    }
    switch (action.type) {
        case ADD_ITEM:      
            return [
                ...state,
                {
                    id: lastId,
                    description: action.text,
                    completed: false
                }
            ]
        case REMOVE_ITEM:
            return state.filter((value) => {
                return action.id !== value.id;
            })  
        case TOGGLE_ITEM:
            return state.map((item) => {
                if (item.id === action.id) {
                    return Object.assign({}, item, {
                        completed: !item.completed
                    })
                } return item
            })
        case CLEAR_ALL:
            return initialState

        default:
            return state
    }
}

export const rootReducer = combineReducers({
    visibilityFilter: visibilityFilterReducer,
    items: itemReducer,
})