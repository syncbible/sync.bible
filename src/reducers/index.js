import { createRouterReducer } from "@lagunovsky/redux-react-router";
import crossReferences from "./cross-references";
import currentReference from "./current-reference";
import data from "./data";
import list from "./list";
import reference from "./reference";
import referenceSelectorMobile from "./reference-selector-mobile";
import scrollChapter from "./scroll-chapter";
import searchAdvanced from "./search-advanced";
import searchForm from "./search-form";
import searchResults from "./search-results";
import searchSelect from "./search-select";
import searchTerms from "./search-terms";
import settings from "./settings";
import trays from "./trays";
import userInterface from "./user-interface";
import wordDetails from "./word-details";
import sidebar from "./sidebar";
import similarReferences from "./similar-references";
import referenceInfo from "./reference-info";

export default (history) => {
  return {
    router: createRouterReducer(history),
    crossReferences,
    currentReference,
    data,
    list,
    reference,
    referenceInfo,
    referenceSelectorMobile,
    scrollChapter,
    searchAdvanced,
    searchForm,
    searchResults,
    searchSelect,
    searchTerms,
    settings,
    sidebar,
    trays,
    userInterface,
    wordDetails,
    similarReferences,
  };
};
