import { 
    ADD_ARTICLE, 
    FOUND_BAD_WORD,
    DATA_LOADED
 } from '../constants/action-types';

const initialState = {
    articles: [],
    remoteArticles: [],
    badWords: null
}

function rootReducer (state = initialState, action) {
  
    switch(action.type) {
        case ADD_ARTICLE: {
            return {
            ...state,
            articles: state.articles.concat(action.payload)   
             }
        }
        case FOUND_BAD_WORD: {
            return {
                ...state,
                badWords: state.badWords = action.payload
            }
        }
        case DATA_LOADED: {
            return {
                ...state,
                remoteArticles: state.remoteArticles.concat(action.payload)
            }
        }
        default:
            return state;
    }
}

export default rootReducer;