const highlightWord = (state = [], action) => {
  switch (action.type) {
    case "HIGHLIGHT_WORD":
      return action.lemmas;

    default:
      return state;
  }
};

export default highlightWord;
