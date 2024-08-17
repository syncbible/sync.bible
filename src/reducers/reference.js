const ROUTER_ON_LOCATION_CHANGED = "@@router/ON_LOCATION_CHANGED";

import {
  getReferenceText,
  getReferenceFromHash,
  getHashFromAction,
} from "../lib/reference.js";

const getReferenceFromAction = (reference, version) => {
  const book = reference.book.replace(/\%20/gi, " "),
    chapter = parseInt(reference.chapter),
    verse = reference.verse ? parseInt(reference.verse) : 1,
    endVerse = reference.verse ? parseInt(reference.endVerse) : null;

  return { book, chapter, verse, endVerse, version };
};

const reference = (state = [], action) => {
  switch (action.type) {
    case ROUTER_ON_LOCATION_CHANGED:
      const hash = getHashFromAction(action);
      timer = new Date();

      const referenceFromHash = getReferenceFromHash(hash);
      if (!referenceFromHash) {
        return state;
      }

      document.title = getReferenceText(referenceFromHash[0]) + " | sync.bible";

      return referenceFromHash;

    case "SET_REFERENCE":
      const setReferenceState = [...state];
      setReferenceState[action.index] = getReferenceFromAction(
        action.reference,
        setReferenceState[action.index].version
      );
      return setReferenceState;

    // I suspect this isn't used.
    case "ADD_COLUMN":
      console.log("oh look this is used after all!");
      const addedState = [...state];
      const addedColumn = Object.assign({}, state[state.length - 1]);
      addedState.push(addedColumn);
      return addedState;

    case "REMOVE_COLUMN":
      const removedState = [...state];
      removedState.splice(action.index, 1);
      return removedState;

    default:
      return state;
  }
};

export default reference;
