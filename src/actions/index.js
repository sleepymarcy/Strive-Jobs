export const REMOVE_FROM_FAV = 'REMOVE_FROM_FAV';
export const ADD_TO_FAV = 'ADD_TO_FAV';

export const addToFavAction = (companyToAdd) => ({
    type: ADD_TO_FAV,
    payload: companyToAdd
})

export const removeFromFavAction = (companyToRemove) => ({
    type: REMOVE_FROM_FAV,
    payload: indexToRemove
})