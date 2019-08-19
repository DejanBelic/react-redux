import { ADD_ARTICLE, FOUND_BAD_WORD, DATA_REQUESTED } from '../constants/action-types';
 
export function addArticle(payload) {
    return {
        type: ADD_ARTICLE,
        payload
    }
}

export function foundBadWord(payload) {
    return {
        type: FOUND_BAD_WORD,
        payload
    }
}

export function getData() {
    return {
        type: DATA_REQUESTED
    }
}
