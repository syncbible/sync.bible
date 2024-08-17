const ROUTER_ON_LOCATION_CHANGED = "@@router/ON_LOCATION_CHANGED";
import { getReferenceFromHash, getHashFromAction } from "../lib/reference.js";

const initialState = [];

const scrollChapter = (state = initialState, action) => {
  switch (action.type) {
    case ROUTER_ON_LOCATION_CHANGED:
      if ("undefined" === typeof action.payload.location) {
        return state;
      }
      const hash = getHashFromAction(action);

      return getReferenceFromHash(hash);

    case "SET_SCROLL_CHAPTER":
      const newState = [...state],
        book = action.book,
        chapter = action.chapter,
        index = action.index;

      newState[index] = { book, chapter };
      return newState;

    case "SET_SCROLL_CHAPTER_SYNCED":
      return state.map(() => {
        return { book: action.book, chapter: action.chapter };
      });

    case "REMOVE_COLUMN":
      const removedState = [...state];
      removedState.splice(action.index, 1);
      return removedState;

    case "SET_ALL_SCROLL_CHAPTERS":
      return action.chapters.map((reference) => reference);

    default:
      return state;
  }
};

export default scrollChapter;
