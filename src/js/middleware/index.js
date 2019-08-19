import { ADD_ARTICLE } from '../constants/action-types';
import { foundBadWord } from '../actions/index';
const forbiddenWords = ["spam", "money"];


export function forbiddenWordsMiddleware({ dispatch }) {
    return function(next) {
      return function(action) {
        if (action.type === ADD_ARTICLE) {
          
          const foundWord = forbiddenWords.filter(word =>
            action.payload.title.includes(word)
          );
          if (foundWord.length) {
            return dispatch(foundBadWord(action.payload.title));
          }
        }
        return next(action);
      };
    };
  }