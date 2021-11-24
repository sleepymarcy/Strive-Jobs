import { ADD_TO_FAV, REMOVE_FROM_FAV } from '../actions'
import { initialState } from '../store'

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAV:
            return {
                ...state,
                fav: {
                    ...state.fav,
                    content: [...state.fav.content, action.payload],
                }
            }
    case REMOVE_FROM_FAV:
        return {
            ...state,
            fav: {
                ...state.fav,
                content: state.cart.content.filter((el, i) => i !== action.payload),
            },
        }
        default:
            return state
    }
}

export default mainReducer