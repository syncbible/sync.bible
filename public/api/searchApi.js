var language;

javascripture.api.search = {
  types: ["word", "lemma", "morph"],
  results: {
    //helper object for storing results
    references: [], //used to create an array of references
    matches: {}, //used to keep track of which word has been matched when searching - for when you need to match more than one word
  },
  getReferences: function (parameters, data) {
    var self = this;
    self.parameters = parameters;
    self.data = data;
    this.lookForTerm();
    return self.results.references;
  },
  doesDataMatchTerm: function (type, data, term) {
    var self = this;
    data = data.toLowerCase();
    term = term.toLowerCase();
    if (data === term) {
      //exact match
      return true;
    }
    /*this get very complex
		if (data.indexOf( ' ' + term + ' ') > -1 ) { //part of a string
			return true;
		}
		if (data.indexOf( ' ' + term + ',') > -1 ) { //part of a string
			return true;
		}
		if (data.indexOf( ' ' + term + '.') > -1 ) { //part of a string
			return true;
		}
		if (data.indexOf( ' ' + term + ';') > -1 ) { //part of a string
			return true;
		}
		if (data.indexOf( ' ' + term + ':') > -1 ) { //part of a string
			return true;
		}
		if (data.indexOf( term + ' ') === 0 ) { //start of a string
			return true;
		}
		if (data.indexOf( ' ' + term) === 0 ) { //start of a string
			return true;
		}*/
    //skip this for lemma
    if (type !== "lemma" && !self.parameters.strict) {
      if (data.search(term) > -1) {
        return true;
      }
    }
    return false;
  },
  resetMatches: function () {
    this.results.matches = {};
  },
  addReference: function (bookName, chapterNumber, verseNumber) {
    // We could add more to the results object here, but for now we just need the reference.
    this.results.references.push({
      reference: bookName + "." + (chapterNumber + 1) + "." + (verseNumber + 1),
    });
  },
  lookForTerm: function () {
    var self = this;
    //if ( 'undefined' === typeof language ) {
    //	language = self.inferLanguage( self.parameters );
    //}

    var dataSource = self.data;
    self.results.references = [];
    self.resetMatches();

    var booksToSearch = allBooks;
    booksToSearch.forEach(function (bookName, bookNumber) {
      self.searchInABook(dataSource, bookName, bookNumber, booksToSearch);
    });
  },
  searchInABook: function (dataSource, bookName, bookNumber, booksToSearch) {
    var self = this,
      parameters = self.parameters,
      book = dataSource[bookName];

    //work out how many terms there are
    var termsLength = 0;
    for (var typeKey in self.types) {
      var type = self.types[typeKey],
        termString = parameters[type];

      if (termString !== undefined && termString !== "") {
        var terms = termString.split(" ");
        termsLength = termsLength + terms.length;
      }
    }

    book.forEach(function (chapter, chapterNumber) {
      if (
        parameters.range === "chapter" &&
        parameters.clusivity === "exclusive"
      ) {
        //only need to do this for exclusive searches
        self.resetMatches();
      }
      chapter.forEach(function (verse, verseNumber) {
        if (
          parameters.range === "verse" &&
          parameters.clusivity === "exclusive"
        ) {
          //only need to do this for exclusive searches
          self.resetMatches();
        }

        if (typeof verse === "string") {
          verse = verse.split(" ");
        }

        if (verse) {
          verse.forEach(function (word) {
            if (
              parameters.range === "word" &&
              parameters.clusivity === "exclusive"
            ) {
              //only need to do this for exclusive searches
              self.resetMatches();
            }

            var matchesLength, termString;

            //now loop through types
            self.types.forEach(function (type, typeKey) {
              //							var type = self.types[typeKey];
              termString = parameters[type];

              if (
                self.areTheTermStringAndWordObjectAreGoodToSearch(
                  termString,
                  word,
                  typeKey
                )
              ) {
                if (word[typeKey]) {
                  var terms = termString.split(" ");
                  if (typeof word === "string") {
                    wordTypes = word;
                  } else {
                    wordTypes = word[typeKey];
                  }
                  wordTypes = wordTypes.split(/ |\//); //because sometimes words have spaces in them and lemma/morph sometimes have slashes now

                  wordTypes.forEach(function (wordType) {
                    terms.forEach(function (term) {
                      if (self.doesDataMatchTerm(type, wordType, term)) {
                        if (parameters.clusivity === "exclusive") {
                          self.results.matches[term] = true;
                        } else {
                          self.addReference(
                            bookName,
                            chapterNumber,
                            verseNumber
                          );
                        }
                      }
                    });
                  });
                }
              }
            });

            //terms are combined for exclusive searches here
            if (parameters.clusivity === "exclusive") {
              matchesLength = 0;

              //						$.each(self.results.matches, function () {
              //							matchesLength++;
              //						});
              matchesLength = Object.keys(self.results.matches).length;

              if (matchesLength > 0 && matchesLength >= termsLength) {
                self.addReference(bookName, chapterNumber, verseNumber);
                self.resetMatches(); //not sure if resetting is the right thing to do here - need to work out how to count matches in the same verse mulipule times
              }
            }
          });
        }
      });
    });
    if (bookNumber === booksToSearch.length - 1) {
      //			self.deferred.resolve();
    }
  },
  standarizeWordEndings: function (word) {
    return word.replace(/ם/gi, "מ");
  },
  inferLanguage: function (parameters) {
    var language = "kjv";
    if (parameters.lemma.substr(0, 1) === "H") {
      language = "hebrew";
    }
    if (parameters.lemma.substr(0, 1) === "G") {
      language = "greek";
    }
    return language;
  },
  areTheTermStringAndWordObjectAreGoodToSearch: function (
    termString,
    wordObject,
    typeKey
  ) {
    return (
      termString !== undefined &&
      termString !== "" &&
      wordObject !== undefined &&
      typeof wordObject[typeKey] !== "undefined"
    ); //sometimes wordObjects are undefined in hebrew
  },
  countResults: function () {
    return this.results.references.length;
  },
};
