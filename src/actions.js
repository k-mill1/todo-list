export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CLEAR_ALL = 'CLEAR_ALL';
export const EDIT_ITEM = 'EDIT_ITEM';
export const TOGGLE_ITEM = 'TOGGLE_ITEM';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export function setVisibilityFilter(filter) {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }
}

let nextItemId = 0
export function addItem(text) {
    return {
        type: ADD_ITEM,
        id: nextItemId++,
        text
    }
}

export function toggleItem(id) {
    return {
        type: TOGGLE_ITEM,
        id
    }
}

export function editItem(id, text) {
    return {
        type: EDIT_ITEM,
        id,
        text
    }
}

export function removeItem(id) {
    return {
        type: REMOVE_ITEM,
        id
    }
}

export function clearAll() {
    return {
        type: CLEAR_ALL
        
    }
}