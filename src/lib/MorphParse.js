/**
 * @fileOverview MorphCodes is a summary of Hebrew morphology codes.
 * @version 1.2
 * @author David
 */
var morphCodes = {
  partOfSpeech: {
    A: "Adjective",
    C: "Conjunction",
    D: "Adverb",
    N: "Noun",
    P: "Pronoun",
    R: "Preposition",
    S: "Suffix",
    T: "Particle",
    V: "Verb",
  },
  adjectiveType: {
    a: "adjective",
    c: "cardinal number",
    g: "gentilic",
    o: "ordinal number",
    x: "",
  },
  conjunctionType: {
    c: "conjunctive",
    v: "vav consecutive",
  },
  nounType: {
    c: "common",
    g: "gentilic",
    p: "proper name",
    x: "",
  },
  pronounType: {
    d: "demonstrative",
    f: "indefinite",
    i: "interrogative",
    p: "personal",
    r: "relative",
    x: "",
  },
  suffixType: {
    d: "directional he",
    h: "paragogic he",
    n: "paragogic nun",
    p: "pronominal",
    x: "",
  },
  particleType: {
    a: "affirmation",
    d: "definite article",
    e: "exhortation",
    i: "interrogative",
    j: "interjection",
    m: "demonstrative",
    n: "negative",
    o: "direct object marker",
    p: "definite article with inseparable preposition",
    r: "relative",
  },
  verbStemHebrew: {
    q: "qal",
    N: "niphal",
    p: "piel",
    P: "pual",
    h: "hiphil",
    H: "hophal",
    t: "hithpael",
    o: "polel",
    O: "polal",
    r: "hithpolel",
    m: "poel",
    M: "poal",
    k: "palel",
    K: "pulal",
    Q: "qal passive",
    l: "pilpel",
    L: "polpal",
    f: "hithpalpel",
    D: "nithpael",
    j: "pealal",
    i: "pilel",
    u: "hothpaal",
    c: "tiphil",
    v: "hishtaphel",
    w: "nithpalel",
    y: "nithpoel",
    z: "hithpoel",
    x: "",
  },
  verbStemAramaic: {
    q: "peal",
    Q: "peil",
    u: "hithpeel",
    N: "niphal",
    p: "pael",
    P: "ithpaal",
    M: "hithpaal",
    a: "aphel",
    h: "haphel",
    s: "saphel",
    e: "shaphel",
    H: "hophal",
    i: "ithpeel",
    t: "hishtaphel",
    v: "ishtaphel",
    w: "hithaphel",
    o: "polel",
    z: "ithpoel",
    r: "hithpolel",
    f: "hithpalpel",
    b: "hephal",
    c: "tiphel",
    m: "poel",
    l: "palpel",
    L: "ithpalpel",
    O: "ithpolel",
    G: "ittaphal",
    x: "",
  },
  verbAspect: {
    a: "infinitive absolute",
    c: "infinitive construct",
    h: "cohortative",
    i: "imperfect",
    j: "jussive",
    p: "perfect",
    q: "sequential perfect",
    r: "participle active",
    s: "participle passive",
    v: "imperative",
    w: "sequential imperfect",
    x: "",
  },
  adjCase: {
    a: "accusative",
    n: "nominative",
    x: "",
  },
  person: {
    1: "first person",
    2: "second person",
    3: "third person",
    x: "",
  },
  gender: {
    b: "both",
    c: "common",
    f: "feminine",
    m: "masculine",
    x: "",
  },
  number: {
    d: "dual",
    p: "plural",
    s: "singular",
    x: "",
  },
  state: {
    a: "absolute",
    c: "construct",
    d: "determined",
  },
  language: {
    H: "Hebrew",
    A: "Aramaic",
  },
};

/**
 * @fileOverview MorphParse is a parser for morphology codes,
 * based on MorphCodes.js.
 * @version 1.2
 * @author David
 */
export function MorphParse() {
  var language;
  /**
   * Parses the given code.
   * @param {string} code A morph code
   * @returns (string} The morphology
   */
  this.Parse = function (code) {
    language = code.charAt(0);
    code = code.substr(1);
    var parts = code.split("/");
    var morph = parseCode(parts[0]);
    for (var i = 1; i < parts.length; i++) {
      morph += ", " + parseCode(parts[i]);
    }
    return morph;
  };

  var parseCode = function (code) {
    var pos = code.charAt(0);
    var morph = morphCodes.partOfSpeech[pos];
    if (code.length > 1) {
      switch (pos) {
        case "A":
          morph += " " + parseAdjective(code);
          break;
        case "C":
          morph += " " + parseConjunction(code);
          break;
        case "N":
          morph += " " + parseNoun(code);
          break;
        case "P":
          morph += " " + parsePronoun(code);
          break;
        case "S":
          morph += " " + parseSuffix(code);
          break;
        case "T":
          morph += " " + parseParticle(code);
          break;
        case "V":
          morph += " " + parseVerb(code);
          break;
        default:
          morph += " Unknown part of speech in " + code;
      }
    }
    return morph;
  };

  var parseAdjective = function (code) {
    var morph = morphCodes.adjectiveType[code.charAt(1)];
    if (code.length > 2) {
      morph += " " + parseGender(code, 2);
    }
    return morph;
  };

  var parseConjunction = function (code) {
    var morph = morphCodes.conjunctionType[code.charAt(1)];
    return morph;
  };

  var parseNoun = function (code) {
    var morph = morphCodes.nounType[code.charAt(1)];
    if (code.length > 2) {
      morph += " " + parseGender(code, 2);
    }
    return morph;
  };

  var parsePronoun = function (code) {
    var morph = morphCodes.pronounType[code.charAt(1)];
    if (code.length > 2) {
      morph += " " + parseCase(code);
    }
    return morph;
  };

  var parseSuffix = function (code) {
    var morph = morphCodes.suffixType[code.charAt(1)];
    if (code.length > 2) {
      morph += " " + parsePerson(code, 2);
    }
    return morph;
  };

  var parseParticle = function (code) {
    var morph = morphCodes.particleType[code.charAt(1)];
    return morph;
  };

  var parseVerb = function (code) {
    var morph;
    if (language === "H") {
      morph = morphCodes.verbStemHebrew[code.charAt(1)];
    } else {
      morph = morphCodes.verbStemAramaic[code.charAt(1)];
    }
    if (code.length > 2) {
      morph += " " + parseAspect(code);
    }
    return morph;
  };

  var parseAspect = function (code) {
    var morph = morphCodes.verbAspect[code.charAt(2)];
    if (code.length > 3) {
      morph += " " + parsePerson(code, 3);
    }
    return morph;
  };

  var parseCase = function (code) {
    var morph = morphCodes.adjCase[code.charAt(2)];
    if (morph === undefined) {
      morph = parsePerson(code, 2);
    } else if (code.length > 3) {
      morph += " " + parsePerson(code, 3);
    }
    return morph;
  };

  var parsePerson = function (code, pos) {
    var morph = morphCodes.person[code.charAt(pos)];
    if (morph === undefined) {
      morph = parseGender(code, pos);
    } else {
      pos++;
      if (code.length > pos) {
        morph += " " + parseGender(code, pos);
      }
    }

    return morph;
  };

  var parseGender = function (code, pos) {
    var morph = morphCodes.gender[code.charAt(pos)];
    pos++;
    if (code.length > pos) {
      morph += " " + parseNumber(code, pos);
    }
    return morph;
  };

  var parseNumber = function (code, pos) {
    var morph = morphCodes.number[code.charAt(pos)];
    pos++;
    if (code.length > pos) {
      morph += " " + parseState(code, pos);
    }
    return morph;
  };

  var parseState = function (code, pos) {
    var morph = morphCodes.state[code.charAt(pos)];
    return morph;
  };
}
