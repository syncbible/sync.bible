var bible = {};
bible.Data = {};
bible.Data.books = [
	[ 'Genesis', 'Gen', 'Ge' ],
	[ 'Exodus', 'Exod', 'Ex' ],
	[ 'Leviticus', 'Lev', 'Le' ],
	[ 'Numbers', 'Num', 'Nu' ],
	[ 'Deuteronomy', 'Deut', 'Deu', 'De' ],
	[ 'Joshua', 'Josh', 'Jos', 'Jo' ],
	[ 'Judges', 'Judg', 'Jud', 'Jdg', 'Jg' ],
	[ 'Ruth', 'Ruth', 'Rut', 'Ru' ],
	[
		'I Samuel',
		'1Sam',
		'1 Samuel',
		'1 Sam',
		'1 Sa',
		'1Sa',
		'I Sam',
		'I Sa',
		'1S',
	],
	[
		'II Samuel',
		'2Sam',
		'2 Samuel',
		'2 Sam',
		'2 Sa',
		'2Sa',
		'II Sam',
		'II Sa',
		'2S',
	],
	[
		'I Kings',
		'1Kgs',
		'1 Kings',
		'1 Kin',
		'1Kin',
		'1 Ki',
		'1Ki',
		'I Kin',
		'I Ki',
		'1K',
	],
	[
		'II Kings',
		'2Kgs',
		'2 Kings',
		'2 Kin',
		'2Kin',
		'2 Ki',
		'2Ki',
		'II Kin',
		'II Ki',
		'2K',
	],
	[
		'I Chronicles',
		'1Chr',
		'1 Chronicles',
		'1 Chr',
		'1 Ch',
		'1Ch',
		'I Chr',
		'I Ch',
		'1C',
	],
	[
		'II Chronicles',
		'2Chr',
		'2 Chronicles',
		'2 Chr',
		'2 Ch',
		'2Ch',
		'II Chr',
		'II Ch',
		'2C',
	],
	[ 'Ezra', 'Ezra', 'Ezr', 'Ea' ],
	[ 'Nehemiah', 'Neh', 'Ne' ],
	[ 'Esther', 'Esth', 'Est', 'Es' ],
	[ 'Job', 'Job', 'Jb' ],
	[ 'Psalms', 'Ps', 'Psalm', 'Psa', 'Ps' ],
	[ 'Proverbs', 'Prov', 'Pro', 'Pr' ],
	[ 'Ecclesiastes', 'Eccl', 'Ecc', 'Ec' ],
	[ 'Song of Solomon', 'Song', 'Song of Songs', 'Songs', 'SOS', 'SS' ],
	[ 'Isaiah', 'Isa', 'Is' ],
	[ 'Jeremiah', 'Jer', 'Jr' ],
	[ 'Lamentations', 'Lam', 'La' ],
	[ 'Ezekiel', 'Ezek', 'Eze', 'El' ],
	[ 'Daniel', 'Dan', 'Da' ],
	[ 'Hosea', 'Hos', 'Ho' ],
	[ 'Joel', 'Joel', 'Jl' ],
	[ 'Amos', 'Amos', 'Am' ],
	[ 'Obadiah', 'Oba', 'Obad', 'Ob' ],
	[ 'Jonah', 'Jon', 'Jh' ],
	[ 'Micah', 'Mic', 'Mi' ],
	[ 'Nahum', 'Nah', 'Na' ],
	[ 'Habakkuk', 'Hab', 'Hk' ],
	[ 'Zephaniah', 'Zep', 'Zeph', 'Zp' ],
	[ 'Haggai', 'Hag', 'Hi' ],
	[ 'Zechariah', 'Zech', 'Zec', 'Zc' ],
	[ 'Malachi', 'Mal', 'Ml' ],
	[ 'Matthew', 'Matt', 'Mat', 'Mt' ],
	[ 'Mark', 'Mar', 'Mk' ],
	[ 'Luke', 'Luk', 'Lu' ],
	[ 'John', 'Joh', 'Jn' ],
	[ 'Acts', 'Acts', 'Act', 'Ac' ],
	[ 'Romans', 'Rom', 'Ro' ],
	[
		'I Corinthians',
		'1Cor',
		'1 Corinthians',
		'1 Cor',
		'1 Co',
		'1Co',
		'I Cor',
		'I Co',
		'1a',
	],
	[
		'II Corinthians',
		'2Cor',
		'2 Corinthians',
		'2 Cor',
		'2 Co',
		'2Co',
		'II Cor',
		'II Co',
		'2a',
	],
	[ 'Galatians', 'Gal', 'Ga' ],
	[ 'Ephesians', 'Eph', 'Ep' ],
	[ 'Philippians', 'Phil', 'Phi', 'Pp' ],
	[ 'Colossians', 'Col', 'Co' ],
	[
		'I Thessalonians',
		'1Thess',
		'1 Thessalonians',
		'1 Thess',
		'1 Thes',
		'1Thes',
		'1 The',
		'1The',
		'1 Th',
		'1Th',
		'I Thess',
		'I The',
		'I Th',
		'1T',
	],
	[
		'II Thessalonians',
		'2Thess',
		'2 Thessalonians',
		'2 Thess',
		'2 Thes',
		'2Thes',
		'2 The',
		'2The',
		'2 Th',
		'2Th',
		'II Thess',
		'II The',
		'II Th',
		'2T',
	],
	[
		'I Timothy',
		'1Tim',
		'1 Timothy',
		'1 Tim',
		'1 Ti',
		'1Ti',
		'I Tim',
		'I Ti',
		'1m',
	],
	[
		'II Timothy',
		'2Tim',
		'2 Timothy',
		'2 Tim',
		'2 Ti',
		'2Ti',
		'II Tim',
		'II Ti',
		'2m',
	],
	[ 'Titus', 'Tit', 'Ti' ],
	[ 'Philemon', 'Phile', 'Philm', 'Phlm', 'Pn' ],
	[ 'Hebrews', 'Heb', 'He' ],
	[ 'James', 'Jas', 'Jam', 'Jm' ],
	[ 'I Peter', '1Pet', '1 Peter', '1 Pet', '1Pe', 'I Pet', 'I Pe', '1P' ],
	[ 'II Peter', '2Pet', '2 Peter', '2 Pet', '2Pe', 'II Pet', 'II Pe', '2P' ],
	[
		'I John',
		'1John',
		'1 John',
		'1 Jn',
		'1Jn',
		'1 Jo',
		'1Jo',
		'I Jo',
		'I Jn',
		'1J',
	],
	[
		'II John',
		'2John',
		'2 John',
		'2 Jn',
		'2Jn',
		'2 Jo',
		'2Jo',
		'II Jo',
		'II Jn',
		'2J',
	],
	[
		'III John',
		'3John',
		'3 John',
		'3 Jn',
		'3Jn',
		'3 Jo',
		'3Jo',
		'III Jo',
		'III Jn',
		'3J',
	],
	[ 'Jude', 'Jude', 'Jd' ],
	[ 'Revelation of John', 'Rev', 'Revelation', 'Apocalypse', 'Re' ],
];
//TODO - use the arrays above
bible.Data.otBooks = [
	'Genesis',
	'Exodus',
	'Leviticus',
	'Numbers',
	'Deuteronomy',
	'Joshua',
	'Judges',
	'Ruth',
	'I Samuel',
	'II Samuel',
	'I Kings',
	'II Kings',
	'I Chronicles',
	'II Chronicles',
	'Ezra',
	'Nehemiah',
	'Esther',
	'Job',
	'Psalms',
	'Proverbs',
	'Ecclesiastes',
	'Song of Solomon',
	'Isaiah',
	'Jeremiah',
	'Lamentations',
	'Ezekiel',
	'Daniel',
	'Hosea',
	'Joel',
	'Amos',
	'Obadiah',
	'Jonah',
	'Micah',
	'Nahum',
	'Habakkuk',
	'Zephaniah',
	'Haggai',
	'Zechariah',
	'Malachi',
];
bible.Data.ntBooks = [
	'Matthew',
	'Mark',
	'Luke',
	'John',
	'Acts',
	'Romans',
	'I Corinthians',
	'II Corinthians',
	'Galatians',
	'Ephesians',
	'Philippians',
	'Colossians',
	'I Thessalonians',
	'II Thessalonians',
	'I Timothy',
	'II Timothy',
	'Titus',
	'Philemon',
	'Hebrews',
	'James',
	'I Peter',
	'II Peter',
	'I John',
	'II John',
	'III John',
	'Jude',
	'Revelation of John',
];
bible.Data.allBooks = bible.Data.otBooks.concat( bible.Data.ntBooks );
bible.Data.bookNamesByLanguage = {
	original: [
		'בראשית',
		'שמות',
		'ויקרא',
		'במדבר',
		'דברים',
		'יהושע',
		'שפטים',
		'רות',
		'שמואל א',
		'שמואל ב',
		'מלכים א',
		'מלכים ב',
		'דברי הימים א',
		'דברי הימים ב',
		'עזרא',
		'נחמיה',
		'אסתר',
		'איוב',
		'תהילים',
		'משלי',
		'קהלת',
		'שיר השירים',
		'ישעה',
		'ירמיה',
		'איכה',
		'יחזקאל',
		'דניאל',
		'הושע',
		'יואל',
		'עמוס',
		'עבדיה',
		'יונה',
		'מיכה',
		'נחום',
		'חבקוק',
		'צפניה',
		'חגי',
		'זכריה',
		'מלאכי',
		'Ματθαίος',
		'Μαρκος',
		'Λουκας',
		'Ιωαννης',
		'Πραξεις',
		'Ρωμαιους',
		'Α Κορινθίους',
		'Β Κορινθίους',
		'Γαλατες',
		'Εφεσιους',
		'Φιλιππησιους',
		'Κολοσσαεις',
		'Α Θεσσαλονικεις',
		'Β Θεσσαλονικεις',
		'Α Τιμοθεο',
		'Β Τιμοθεο',
		'Τιτο',
		'Φιλημονα',
		'Εβραιους',
		'Ιακωβου',
		'Α Πετρου',
		'Β Πετρου',
		'Α Ιωαννη',
		'Β Ιωαννη',
		'Γ Ιωαννη',
		'Ιουδα',
		'Αποκαλυψη του Ιωαννη',
	],
	af: [
		// Ou Testament
		'Genesis',
		'Eksodus',
		'Levitikus',
		'Numeri',
		'Deuteronomium',
		'Josua',
		'Rigters',
		'Rut',
		'1 Samuel',
		'2 Samuel',
		'1 Konings',
		'2 Konings',
		'1 Kronieke',
		'2 Kronieke',
		'Esra',
		'Nehemia',
		'Ester',
		'Job',
		'Psalms',
		'Spreuke',
		'Prediker',
		'Hooglied',
		'Jesaja',
		'Jeremia',
		'Klaagliedere',
		'Esegiël',
		'Daniël',
		'Hosea',
		'Joël',
		'Amos',
		'Obadja',
		'Jona',
		'Miga',
		'Nahum',
		'Habakuk',
		'Sefanja',
		'Haggai',
		'Sagaria',
		'Maleagi',

		// Nuwe Testament
		'Matteus',
		'Markus',
		'Lukas',
		'Johannes',
		'Handelinge',
		'Romeine',
		'1 Korintiërs',
		'2 Korintiërs',
		'Galasiërs',
		'Efesiërs',
		'Filippense',
		'Kolossense',
		'1 Tessalonisense',
		'2 Tessalonisense',
		'1 Timoteus',
		'2 Timoteus',
		'Titus',
		'Filemon',
		'Hebreërs',
		'Jakobus',
		'1 Petrus',
		'2 Petrus',
		'1 Johannes',
		'2 Johannes',
		'3 Johannes',
		'Judas',
		'Openbaring',
	],
	ar: [
		'تكوين',
		'خروج',
		'لاويين',
		'عدد',
		'تثنية',
		'يشوع',
		'قضاة',
		'راعوث',
		'1 صموئيل',
		'2 صموئيل',
		'1 ملوك',
		'2 ملوك',
		'1 اخبار',
		'2 اخبار',
		'عزرا',
		'نحميا',
		'استير',
		'ايوب',
		'مزامير',
		'امثال',
		'جامعة',
		'نشيد الانشاد',
		'اشعياء',
		'ارميا',
		'مراثي',
		'حزقيال',
		'دانيال',
		'هوشع',
		'يوئيل',
		'عاموس',
		'عوبديا',
		'يونان',
		'ميخا',
		'ناحوم',
		'حبقوق',
		'صفنيا',
		'حجى',
		'زكريا',
		'ملاخي',
		'متى',
		'مرقس',
		'لوقا',
		'يوحنا',
		'اعمال',
		'رومية',
		'1 كورنثوس',
		'2 كورنثوس',
		'غلاطية',
		'افسس',
		'فيلبي',
		'كولوسي',
		'1 تسالونيكي',
		'2 تسالونيكي',
		'1 تيموثاوس',
		'2 تيموثاوس',
		'تيطس',
		'فليمون',
		'عبرانيين',
		'يعقوب',
		'1بطرس',
		'2بطرس',
		'1 يوحنا',
		'2 يوحنا',
		'3 يوحنا',
		'يهوذا',
		'رؤيا',
	],
	az: [
		'یارادیلیش',
		'چیخیش',
		'لاوئلی‌لر',
		'سایلار',
		'تثنئیه',
		'یوشَع',
		'داورلر',
		'روت',
		'۱سمویئل',
		'۲سمویئل',
		'۱پادشاهلار',
		'۲پادشاهلار',
		'۱سالنامه‌لر',
		'۲سالنامه‌لر',
		'عِزرا',
		'نِحِمیا',
		'اِستِر',
		'اَیّوب',
		'مزمورلار',
		'مثل‌لر کئتابی',
		'واعئظ',
		'نغمه‌لر',
		'اِشَعیا',
		'اِرِمیا',
		'مرثئیه‌لر',
		'حِزِقیال',
		'دانیال',
		'هوشَع',
		'یوعِل',
		'عاموس',
		'عوبَدیا',
		'یونوس',
		'مئکا',
		'ناحوم',
		'حَبَقوق',
		'صِفَنیا',
		'حَجّه‌ی',
		'زِکَرئیّا',
		'مَلاکی',
		'متّا',
		'مرقوس',
		'لوقا',
		'یوحنّا',
		'حوارئلر',
		'روملو‌لارا',
		'۱قورئنتلی‌لره',
		'۲قورئنتلی‌لره',
		'قالاتئیالی‌لارا',
		'اِفِسوسلولارا',
		'فئلئپئلی‌لره',
		'کولوسلولارا',
		'۱تسالونئکلی‌لره',
		'۲تسالونئکلی‌لره',
		'۱تئموتاعوسا',
		'۲تئموتاعوسا',
		'تئطوسا',
		'فئلئمونا',
		'عئبرانئلره',
		'یعقوب',
		'۱پطروس',
		'۲پطروس',
		'۱یوحنّا',
		'۲یوحنّا',
		'۳یوحنّا',
		'یهودا',
		'وحی',
	],
	bea: bible.Data.allBooks,
	be: [
		'БЫЦЦЁ',
		'ВЫХАД',
		'ЛЯВІТ',
		'ЛІКІ',
		'ДРУГІ ЗАКОН',
		'ІСУСА',
		'СУДЗЬДЗЯЎ',
		'РУТ',
		'1 ЦАРСТВАЎ',
		'2 ЦАРСТВАЎ',
		'3 ЦАРСТВАЎ',
		'4 ЦАРСТВАЎ',
		'1 ЛЕТАПІСАЎ',
		'2 ЛЕТАПІСАЎ',
		'ЭЗДРЫ',
		'НЭЭМІІ',
		'ЭСТЭР',
		'ЁВА',
		'ПСАЛТЫР',
		'ВЫСЛОЎІ',
		'ЭКЛЕЗІЯСТА',
		'ПЕСЬНЯ',
		'ІСАІ',
		'ЕРАМІІ',
		'ПЛАЧ',
		'ЕЗЭКІІЛЯ',
		'ДАНІІЛА',
		'АСІІ',
		'АМОСА',
		'МІХЕЯ',
		'ЁІЛЯ',
		'АЎДЗЕЯ',
		'ЁНЫ',
		'НАВУМА',
		'АБАКУМА',
		'САФОНА',
		'АГЕЯ',
		'ЗАХАРЫІ',
		'МАЛАХІІ',
		'МАЦЬВЕЯ',
		'МАРКА',
		'ЛУКАША',
		'ЯНА',
		'ДЗЕІ',
		'ЯКАВА',
		'1 ПЯТРА',
		'2 ПЯТРА',
		'1 ЯНА',
		'2 ЯНА',
		'3 ЯНА',
		'ЮДЫ',
		'РЫМЛЯНАЎ',
		'1 КАРЫНФЯНАЎ',
		'2 КАРЫНФЯНАЎ',
		'ГАЛЯТАЎ',
		'ЭФЭСЯНАЎ',
		'ПІЛІПЯНАЎ',
		'КАЛАСЯНАЎ',
		'1 ФЕСАЛОНІКІЙЦАЎ',
		'2 ФЕСАЛОНІКІЙЦАЎ',
		'1 ЦІМАФЕЯ',
		'2 ЦІМАФЕЯ',
		'ЦІТА',
		'ФІЛІМОНА',
		'ГАБРЭЯЎ',
		'АДКРЫЦЦЁ',
	],
	bg: [
		'Битие',
		'Изход',
		'Левит',
		'Числа',
		'Второзаконие',
		'Исус Навиев',
		'Съдии',
		'Рут',
		'1 Царе',
		'2 Царе',
		'3 Царе',
		'4 Царе',
		'1 Летописи',
		'2 Летописи',
		'Ездра',
		'Неемия',
		'Естир',
		'Йов',
		'Псалми',
		'Притчи',
		'Еклесиаст',
		'Песен на песните',
		'Исая',
		'Еремия',
		'Плач Еремиев',
		'Езекил',
		'Данаил',
		'Осия',
		'Иоил',
		'Амос',
		'Авдий',
		'Йон',
		'Михей',
		'Наум',
		'Авакум',
		'Софоний',
		'Агей',
		'Захария',
		'Малахия',
		'Матей',
		'Марко',
		'Лука',
		'Йоан',
		'Деяния',
		'Яков',
		'1 Петрово',
		'2 Петрово',
		'1 Йоаново',
		'2 Йоаново',
		'3 Йоаново',
		'Юда',
		'Римляни',
		'1 Коринтяни',
		'2 Коринтяни',
		'Галатяни',
		'Ефесяни',
		'Филипяни',
		'Колосяни',
		'1 Солунци',
		'2 Солунци',
		'1 Тимотей',
		'2 Тимотей',
		'Тит',
		'Филимон',
		'Евреи',
		'Откровение',
	],
	br: [
		'Geneliezh',
		'Ermaeziadeg',
		'Leviegezh',
		'Niveroù',
		'Adlezenn',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'Salmoù',
		'Krennlavarioù',
		'',
		"Kanenn ar C'hanennoù",
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'Mazhev',
		'Mark',
		'Lukaz',
		'Yann',
		'Oberoù an Ebestel',
		'Romaned',
		'1 Korintiz',
		'2 Korintiz',
		'Galated',
		'Efeziz',
		'Filipiz',
		'Koloseiz',
		'1 Tesalonikiz',
		'2 Tesalonikiz',
		'1 Timote',
		'2 Timote',
		'Tit',
		'Filemon',
		'Hebreed',
		'Jakez',
		'1 Pêr',
		'2 Pêr',
		'1 Yann',
		'2 Yann',
		'3 Yann',
		'Jud',
		'Diskuliadur',
	],
	bss: [
		// Old Testament (English)
		'Genesis',
		'Exodus',
		'Leviticus',
		'Numbers',
		'Deuteronomy',
		'Joshua',
		'Judges',
		'Ruth',
		'1 Samuel',
		'2 Samuel',
		'1 Kings',
		'2 Kings',
		'1 Chronicles',
		'2 Chronicles',
		'Ezra',
		'Nehemiah',
		'Esther',
		'Job',
		'Psalms',
		'Proverbs',
		'Ecclesiastes',
		'Song of Solomon',
		'Isaiah',
		'Jeremiah',
		'Lamentations',
		'Ezekiel',
		'Daniel',
		'Hosea',
		'Joel',
		'Amos',
		'Obadiah',
		'Jonah',
		'Micah',
		'Nahum',
		'Habakkuk',
		'Zephaniah',
		'Haggai',
		'Zechariah',
		'Malachi',

		// New Testament (Akoose)
		'Matyo',
		'Makɔsɛ',
		'Lukasɛ',
		'Jɔnɛ',
		'Mbɛltéd',
		'Roma',
		'1 Kɔrinto',
		'2 Kɔrinto',
		'Galesia',
		'Efɛsus',
		'Filipi',
		'Kolose',
		'1 Tɛsalonika',
		'2 Tɛsalonika',
		'1 Timoti',
		'2 Timoti',
		'Titus',
		'Filɛmɔn',
		'Hibru',
		'Jemsɛ',
		'1 Petro',
		'2 Petro',
		'1 Jɔnɛ',
		'2 Jɔnɛ',
		'3 Jɔnɛ',
		'Judɛ',
		'Mam ḿme mɛb́ɛnléd',
	],
	ceb: [
		'Genesis',
		'Exodus',
		'Leviticus',
		'Numero',
		'Deuteronomio',
		'Josue',
		'Hukom',
		'Ruth',
		'1 Samuel',
		'2 Samuel',
		'1 Mga Hari',
		'2 Mga Hari',
		'1 Cronica',
		'2 Cronica',
		'Ezra',
		'Nehemias',
		'Ester',
		'Job',
		'Salmo',
		'Panultihon',
		'Magwawali',
		'Awit ni Solomon',
		'Isaias',
		'Jeremias',
		'Pagbangotan',
		'Ezekiel',
		'Daniel',
		'Hosea',
		'Joel',
		'Amos',
		'Obadia',
		'Jonas',
		'Micas',
		'Nahum',
		'Habakuk',
		'Zefanias',
		'Haggai',
		'Zacarias',
		'Malakias',
		'Mateo',
		'Marcos',
		'Lucas',
		'Juan',
		'Binuhatan',
		'Roma',
		'1 Corinto',
		'2 Corinto',
		'Galacia',
		'Efeso',
		'Filipos',
		'Colosas',
		'1 Tesalonica',
		'2 Tesalonica',
		'1 Timoteo',
		'2 Timoteo',
		'Tito',
		'Filemon',
		'Hebreo',
		'Santiago',
		'1 Pedro',
		'2 Pedro',
		'1 Juan',
		'2 Juan',
		'3 Juan',
		'Judas',
		'Gipadayag',
	],
	chr: [
		// Old Testament
		'ᎨᏁᏏᏏ',
		'ᎡᎧᏏᏚᏍ',
		'ᎴᏫᏘᎩᏍ',
		'ᏄᎺᎵ',
		'ᏗᏕᏪᏘᏃᎻ',
		'ᏦᏌ',
		'ᎵᎩᏘᏏ',
		'ᎷᏘ',
		'ᏌᏬᎻᏁᎵ 1',
		'ᏌᏬᎻᏁᎵ 2',
		'ᎪᎢᏂᎩ 1',
		'ᎪᎢᏂᎩ 2',
		'ᎪᎢᏂᎩ ᏣᏁᏍᎩ 1',
		'ᎪᎢᏂᎩ ᏣᏁᏍᎩ 2',
		'ᎡᏏᎳ',
		'ᏁᎮᎻᎠ',
		'ᎡᏍᏖᎵ',
		'ᏦᏇ',
		'ᏆᏏᎦ',
		'ᏍᏇᎩ',
		'ᏇᏗᎧ',
		'ᎰᎪᎵᏗ',
		'ᏣᏏᎠ',
		'ᏣᎴᎻᎠ',
		'ᎧᎦᎵᏗᏕᎵ',
		'ᎡᏎᎩᎡᎵ',
		'ᏓᏂᎡᎵ',
		'ᎰᏎᏯ',
		'ᏦᎵ',
		'ᎠᎼᏏ',
		'ᎣᏆᏣ',
		'ᏦᎾ',
		'ᎻᎦ',
		'ᏃᎻ',
		'ᎭᏆᏉᎩ',
		'ᏎᏩᏂᏯ',
		'ᎭᎦᎢ',
		'ᏌᎦᎵᎠ',
		'ᎹᎴᎦᎢ',

		// New Testament
		'ᎹᏘᎤᏏ',
		'ᎹᎩᏏ',
		'ᎷᎧᏏ',
		'ᏦᎯᎢᏁᏏ',
		'ᎲᏤᎵᏍᏗ',
		'ᎶᎺᎢᏂ',
		'1 ᎪᎵᏂᏘᏏ',
		'2 ᎪᎵᏂᏘᏏ',
		'ᎦᎴᏏᏯ',
		'ᎡᏈᏏᏯ',
		'ᏈᎵᏈᏁᏎ',
		'ᎪᎶᏏᏁᏎ',
		'1 ᏖᏌᎶᏂᏏᏁᏎ',
		'2 ᏖᏌᎶᏂᏏᏁᏎ',
		'1 ᏘᎻᏘᎤᏏ',
		'2 ᏘᎻᏘᎤᏏ',
		'ᏘᏚᏏ',
		'ᏈᎵᎻᏃᏂ',
		'ᎮᏇᎵ',
		'ᏣᎩᏆᏊᏏ',
		'1 ᏇᏚᏍ',
		'2 ᏇᏚᏍ',
		'1 ᏦᎯᏁᏏ',
		'2 ᏦᎯᏁᏏ',
		'3 ᏦᎯᏁᏏ',
		'ᏧᏓᏏ',
		'ᎤᏆᏏᎦ',
	],
	ckb: [
		'پەیدابوون',
		'دەرچوون',
		'لێڤییەکان',
		'سه‌رژمێری',
		'دواوتار',
		'یەشوع',
		'ڕابەران',
		'ڕائووس',
		'یەکەم ساموئێل',
		'دووەم ساموێل',
		'یەکەم پاشایان',
		'دووەم پاشایان',
		'یەکەم پوختەی مێژوو',
		'دووەم پوختەی مێژوو',
		'عەزرا',
		'نەحەمیا',
		'ئەستەر',
		'ئەیوب',
		'زەبوورەکان',
		'پەندەکانی سلێمان',
		'ژیرمه‌ندی',
		'گۆرانی گۆرانییه‌كان',
		'ئیشایا',
		'یه‌رمیا',
		'شینه‌كانی یه‌رمیا',
		'حزقیێل',
		'دانیال',
		'هۆشه‌ع',
		'یۆئێل',
		'ئامۆس',
		'عۆبه‌دیا',
		'یونس',
		'میخا',
		'ناحوم',
		'حه‌به‌قوق',
		'سه‌فه‌نیا',
		'حه‌گه‌ی',
		'زه‌كه‌ریا',
		'مه‌لاخی',
		'مەتا',
		'مەرقۆس',
		'لۆقا',
		'یۆحەنا',
		'کردار',
		'ڕۆما',
		'١ کۆرنسۆس',
		'٢ کۆرنسۆس',
		'گەلاتیا',
		'ئەفەسۆس',
		'فیلیپی',
		'کۆلۆسی',
		'١ سالۆنیكی',
		'٢ سالۆنیكی',
		'١ تیمۆساوس',
		'٢ تیمۆساوس',
		'تیتۆس',
		'فلیمۆن',
		'عیبرانییەکان',
		'یاقوب',
		'١ پەترۆس',
		'٢ پەترۆس',
		'١ یۆحەنا',
		'٢ یۆحەنا',
		'٣ یۆحەنا',
		'یەهوزا',
		'ئاشکراکردن',
	],
	cop: [
		'Ⲅⲉⲛⲉⲥⲓⲥ',
		'Ⲉⲝⲟⲇⲟⲥ',
		'Ⲗⲉⲩⲓⲧⲓⲕⲟⲛ',
		'ⲁⲣⲓⲑⲙⲟⲓ',
		'ⲇⲉⲩⲧⲉⲣⲟⲛⲟⲙⲓⲟⲛ',
		'Ⲹⲟⲥⲏ',
		'Ⲉⲱⲩⲇⲓⲧⲏⲥ',
		'Ⲙⲱⲑ',
		'Ⲩⲁⲓⲥⲙⲏⲏⲗ 1',
		'Ⲩⲁⲓⲥⲙⲏⲏⲗ 2',
		'Ⲓⲁⲑⲉⲙⲏⲗ 1',
		'Ⲓⲁⲑⲉⲙⲏⲗ 2',
		'Ⲭⲣⲟⲛⲓⲕⲱⲛ 1',
		'Ⲭⲣⲟⲛⲓⲕⲱⲛ 2',
		'Ⲉⲥⲣⲁ',
		'Ⲛⲉⲏⲙⲓⲁⲥ',
		'Ⲉⲥⲑⲏⲣ',
		'Ⲓⲱⲃ',
		'Ⲩⲁⲯⲁⲗⲙⲟⲥ',
		'Ⲡⲣⲟⲃⲟⲓ',
		'Ⲉⲕⲗⲏⲥⲓⲁⲥⲧⲏⲥ',
		'ⲀⲛⲘⲉⲣⲟⲥ',
		'Ⲓⲏⲥⲁⲓⲁⲥ',
		'Ⲓⲉⲣⲉⲙⲓⲁⲥ',
		'Ⲙⲟⲩⲛⲑⲟⲥ',
		'Ⲉⲍⲉⲭⲓⲏⲗ',
		'Ⲇⲁⲛⲓⲏⲗ',
		'Ⲩⲟⲥⲏ',
		'Ⲓⲱⲏⲗ',
		'Ⲁⲙⲱⲥ',
		'Ⲟⲃⲁⲇⲓⲁⲥ',
		'Ⲓⲱⲛⲁⲥ',
		'Ⲙⲓⲭⲁⲓⲁⲥ',
		'Ⲛⲁⲟⲩⲙ',
		'Ⲁⲃⲁⲕⲟⲩⲙ',
		'Ⲥⲟⲫⲟⲛⲓⲁⲥ',
		'Ⲏⲅⲅⲁⲓⲟⲥ',
		'Ⲍⲁⲭⲁⲣⲓⲁⲥ',
		'Ⲙⲁⲗⲁⲭⲓⲁⲥ',
		'ⲘⲀⲦⲐⲈⲞⲚ',
		'ⲘⲀⲢⲔⲞⲚ',
		'Ⲗⲟⲩⲕⲁⲛ',
		'ⲒⲰⲀⲚⲚⲎⲚ',
		'ⲚⲒⲠ̀ⲢⲀⲜⲒⲤ',
		'Ⲡⲣⲟⲥ Ⲣⲱⲙⲉⲟⲥ',
		'Ⲡⲣⲟⲥ Ⲕⲟⲣⲓⲛⲑⲓⲟⲥ ⲁ̅',
		'Ⲡⲣⲟⲥ Ⲕⲟⲣⲓⲛⲑⲓⲟⲥ ⲃ̅',
		'Ⲡⲣⲟⲥ Ⲅⲁⲕⲁⲧⲏⲥ',
		'Ⲡⲣⲟⲥ Ⲉ̇ⲫⲉⲥⲓⲟⲩⲥ',
		'Ⲡⲣⲟⲥ Ⲫⲓⲕⲓⲡⲡⲟⲓⲥ',
		'Ⲡⲣⲟⲥ Ⲕⲟⲕⲁⲥⲥⲓⲁⲥ',
		'Ⲡⲣⲟⲥ Ⲑⲉⲥⲥⲁⲕⲟⲛⲓⲏⲏ ⲁ̅',
		'Ⲡⲣⲟⲥ Ⲑⲉⲥⲥⲁⲕⲟⲛⲓⲏⲏ ⲃ̅',
		'Ⲡⲣⲟⲥ Ⲧⲓⲙⲟⲑⲉⲟⲥ ⲁ̅',
		'Ⲡⲣⲟⲥ Ⲧⲓⲙⲟⲑⲉⲟⲥ ⲃ̅',
		'Ⲡⲣⲟⲥ Ⲧⲓⲧⲟⲥ',
		'Ⲡⲣⲟⲥ Ⲫⲓⲗⲏⲙⲱⲛ',
		'Ⲡⲣⲟⲥ Ϩⲉⲃⲣⲉⲟⲥ',
		'Ⲓⲁⲕⲱⲃⲟⲥ',
		'Ⲡⲉⲧⲣⲟⲥ ⲁ̅',
		'Ⲡⲉⲧⲣⲟⲥ ⲃ̅',
		'Ⲓⲱⲁⲛⲛⲏⲥ ⲁ̅',
		'Ⲓⲱⲁⲛⲛⲏⲥ ⲃ̅',
		'Ⲓⲱⲁⲛⲛⲏⲥ ⲅ̅',
		'Ⲓⲟⲩⲇⲁⲥ',
		'Ϯⲁ̀ⲡⲟⲕⲁⲗⲩⲙⲯⲓⲥ',
	],
	cs: [
		'Genesis',
		'Exodus',
		'Leviticus',
		'Numeri',
		'Deuteronomium',
		'Jozue',
		'Soudců',
		'Rút',
		'1 Samuel',
		'2 Samuel',
		'1 Královská',
		'2 Královská',
		'1 Letopisů',
		'2 Letopisů',
		'Ezdráš',
		'Nehemiáš',
		'Ester',
		'Job',
		'Žalmy',
		'Přísloví',
		'Kazatel',
		'Píseň',
		'Izaiáš',
		'Jeremiáš',
		'Pláč',
		'Ezechiel',
		'Daniel',
		'Ozeáš',
		'Joel',
		'Amos',
		'Abdiáš',
		'Jonáš',
		'Micheáš',
		'Nahum',
		'Abakuk',
		'Sofoniáš',
		'Ageus',
		'Zachariáš',
		'Malachiáš',
		'Matouš',
		'Marek',
		'Lukáš',
		'Jan',
		'Skutky',
		'Římanům',
		'1 Korintským',
		'2 Korintským',
		'Galatským',
		'Efeským',
		'Filipským',
		'Koloským',
		'1 Tesalonickým',
		'2 Tesalonickým',
		'1 Timoteus',
		'2 Timoteus',
		'Titus',
		'Filemon',
		'Židům',
		'Jakub',
		'1 Petr',
		'2 Petr',
		'1 Jan',
		'2 Jan',
		'3 Jan',
		'Juda',
		'Zjevení',
	],
	cu: [
		'Genezis',
		'Exodus',
		'Levitikus',
		'Numeri',
		'Deuteronómium',
		'Jozua',
		'Sudcov',
		'Rút',
		'Prvá Samuelova',
		'Druhá Samuelova',
		'Prvá kráľov',
		'Druhá kráľov',
		'Prvá kroník',
		'Druhá kroník',
		'Ezdráš',
		'Nehemiáš',
		'Ester',
		'Jób',
		'Žalmy',
		'Príslovia',
		'Kohelet — Kazateľ',
		'Veľpieseň',
		'Izaiáš',
		'Jeremiáš',
		'Náreky',
		'Ezechiel',
		'Daniel',
		'Ozeáš',
		'Joel',
		'Amos',
		'Abdiáš',
		'Jonáš',
		'Micheáš',
		'Nahum',
		'Habakuk',
		'Sofoniáš',
		'Aggeus',
		'Zachariáš',
		'Malachiáš',
		'Matúš',
		'Marek',
		'Lukáš',
		'Ján',
		'Skutky apoštolov',
		'Rimanom',
		'Prvý Korinťanom',
		'Druhý Korinťanom',
		'Galaťanom',
		'Efezanom',
		'Filipanom',
		'Kolosanom',
		'Prvý Tesaloničanom',
		'Druhý Tesaloničanom',
		'Prvý Timotejovi',
		'Druhý Timotejovi',
		'Títovi',
		'Filemonovi',
		'Hebrejom',
		'Jakubov',
		'Prvý Petrov',
		'Druhý Petrov',
		'Prvý Jánov',
		'Druhý Jánov',
		'Tretí Jánov',
		'Júdov',
		'Zjavenie Jána',
	], // Pretty sure these are wrong
	cy: [
		// Hen Destament (Old Testament)
		'Genesis',
		'Exodus',
		'Lefiticus',
		'Numeri',
		'Deuteronomium',
		'Josua',
		'Barnwyr',
		'Ruth',
		'1 Samuel',
		'2 Samuel',
		'1 Brenhinoedd',
		'2 Brenhinoedd',
		'1 Cronicl',
		'2 Cronicl',
		'Esra',
		'Nehemeia',
		'Esther',
		'Job',
		'Salmau',
		'Diarhebion',
		'Pregethwr',
		'Caneuon Solomon',
		'Eseia',
		'Jeremeia',
		'Galarnadau',
		'Eseciel',
		'Daniel',
		'Hosea',
		'Joel',
		'Amos',
		'Obadeia',
		'Jona',
		'Micha',
		'Nahum',
		'Habacuc',
		'Seffaneia',
		'Hagai',
		'Sechareia',
		'Maleachi',

		// Testament Newydd (New Testament)
		'Mathew',
		'Marc',
		'Luc',
		'Ioan',
		'Actau',
		'Rhufeiniaid',
		'1 Corinthiaid',
		'2 Corinthiaid',
		'Galatiaid',
		'Effesiaid',
		'Philipiaid',
		'Colosiaid',
		'1 Thesaloniaid',
		'2 Thesaloniaid',
		'1 Timotheus',
		'2 Timotheus',
		'Titus',
		'Philemon',
		'Hebreaid',
		'Iago',
		'1 Pedr',
		'2 Pedr',
		'1 Ioan',
		'2 Ioan',
		'3 Ioan',
		'Jwdas',
		'Datguddiad',
	],
	da: [
		'1. Mosebog',
		'2. Mosebog',
		'3. Mosebog',
		'4. Mosebog',
		'5. Mosebog',
		'Josvabogen',
		'Dommerbogen',
		'Ruths Bog',
		'1. Samuelsbog',
		'2. Samuelsbog',
		'1. Kongebog',
		'2. Kongebog',
		'1. Krønikebog',
		'2. Krønikebog',
		'Ezras Bog',
		'Nehemiasʼ Bog',
		'Esters Bog',
		'Jobs Bog',
		'Salmernes Bog',
		'Ordsprogenes Bog',
		'Prædikerens Bog',
		'Højsangen',
		'Esajasʼ Bog',
		'Jeremiasʼ Bog',
		'Klagesangene',
		'Ezekiels Bog',
		'Daniels Bog',
		'Hoseasʼ Bog',
		'Joels Bog',
		'Amosʼ Bog',
		'Obadiasʼ Bog',
		'Jonasʼ Bog',
		'Mikas Bog',
		'Nahums Bog',
		'Habakkuks Bog',
		'Zefaniasʼ Bog',
		'Haggajs Bog',
		'Zakariasʼ Bog',
		'Malakiasʼ Bog',
		'Mattæusevangeliet',
		'Markusevangeliet',
		'Lukasevangeliet',
		'Johannesevangeliet',
		'Apostlenes Gerninger',
		'Romerbrevet',
		'1. Korinterbrev',
		'2. Korinterbrev',
		'Galaterbrevet',
		'Efeserbrevet',
		'Filipperbrevet',
		'Kolossenserbrevet',
		'1. Thessalonikerbrev',
		'2. Thessalonikerbrev',
		'1. Timoteusbrev',
		'2. Timoteusbrev',
		'Titusbrevet',
		'Filemonbrevet',
		'Hebræerbrevet',
		'Jakobs Brev',
		'1. Petersbrev',
		'2. Petersbrev',
		'1. Johannesʼ Brev',
		'2. Johannesʼ Brev',
		'3. Johannesʼ Brev',
		'Judasʼ brev',
		'Johannesʼ Åbenbaring',
	],
	de: [
		'1. Mose',
		'2. Mose',
		'3. Mose',
		'4. Mose',
		'5. Mose',
		'Josua',
		'Richter',
		'Rut',
		'1. Samuel',
		'2. Samuel',
		'1. Könige',
		'2. Könige',
		'1. Chronik',
		'2. Chronik',
		'Esra',
		'Nehemia',
		'Ester',
		'Hiob',
		'Psalm',
		'Sprüche',
		'Prediger',
		'Hohelied',
		'Jesaja',
		'Jeremia',
		'Klagelieder',
		'Hesekiel',
		'Daniel',
		'Hosea',
		'Joel',
		'Amos',
		'Obadja',
		'Jona',
		'Micha',
		'Nahum',
		'Habakuk',
		'Zephanja',
		'Haggai',
		'Sacharja',
		'Maleachi',
		'Matthäus',
		'Markus',
		'Lukas',
		'Johannes',
		'Apostelgeschichte',
		'Römer',
		'1. Korinther',
		'2. Korinther',
		'Galater',
		'Epheser',
		'Philipper',
		'Kolosser',
		'1. Thessalonicher',
		'2. Thessalonicher',
		'1. Timotheus',
		'2. Timotheus',
		'Titus',
		'Philemon',
		'Hebräer',
		'Jakobus',
		'1. Petrus',
		'2. Petrus',
		'1. Johannes',
		'2. Johannes',
		'3. Johannes',
		'Judas',
		'Offenbarung',
	],
	el: [
		'ΓΕΝΕΣΙΣ',
		'ΕΞΟΔΟΣ',
		'ΛΕΥΙΤΙΚΟΝ',
		'ΑΡΙΘΜΟΙ',
		'ΔΕΥΤΕΡΟΝΟΜΙΟΝ',
		'ΙΗΣΟΥΣ ΤΟΥ ΝΑΥΗ',
		'ΚΡΙΤΑΙ',
		'ΡΟΥΘ',
		'Α΄ ΣΑΜΟΥΗΛ (ή ΒΑΣΙΛΕΙΩΝ Α΄)',
		'Β΄ ΣΑΜΟΥΗΛ (ή ΒΑΣΙΛΕΙΩΝ Β΄)',
		'Α΄ ΒΑΣΙΛΕΩΝ (ή ΒΑΣΙΛΕΙΩΝ Γ΄)',
		'Β΄ ΒΑΣΙΛΕΩΝ (ή ΒΑΣΙΛΕΙΩΝ Δ΄)',
		'Α΄ ΧΡΟΝΙΚΩΝ (Ή ΠΑΡΑΛΕΙΠΟΜΕΝΩΝ Α΄)',
		'Β΄ ΧΡΟΝΙΚΩΝ (Ή ΠΑΡΑΛΕΙΠΟΜΕΝΩΝ Β΄)',
		'ΕΣΔΡΑΣ (ή Β΄ ΕΣΔΡΑΣ)',
		'ΝΕΕΜΙΑΣ',
		'ΕΣΘΗΡ',
		'ΙΩΒ',
		'ΨΑΛΜΟΙ',
		'ΠΑΡΟΙΜΙΑΙ',
		'ΕΚΚΛΗΣΙΑΣΤΗΣ',
		'ΑΣΜΑ ΑΣΜΑΤΩΝ',
		'ΗΣΑΪΑΣ',
		'ΙΕΡΕΜΙΑΣ',
		'ΘΡΗΝΟΙ',
		'ΙΕΖΕΚΙΗΛ',
		'ΔΑΝΙΗΛ',
		'ΩΣΗΕ',
		'ΙΩΗΛ',
		'ΑΜΩΣ',
		'ΟΒΔΙΟΥ',
		'ΙΩΝΑΣ',
		'ΜΙΧΑΙΑΣ',
		'ΝΑΟΥΜ',
		'ΑΒΒΑΚΟΥΜ',
		'ΣΟΦΟΝΙΑΣ',
		'ΑΓΓΑΙΟΣ',
		'ΖΑΧΑΡΙΑΣ',
		'ΜΑΛΑΧΙΑΣ',
		'ΚΑΤΑ ΜΑΤΘΑΙΟΝ',
		'ΚΑΤΑ ΜΑΡΚΟΝ',
		'ΚΑΤΑ ΛΟΥΚΑΝ',
		'ΚΑΤΑ ΙΩΑΝΝΗΝ',
		'ΠΡΑΞΕΙΣ ΑΠΟΣΤΟΛΩΝ',
		'ΠΡΟΣ ΡΩΜΑΙΟΥΣ',
		'ΠΡΟΣ ΚΟΡΙΝΘΙΟΥΣ Α΄',
		'ΠΡΟΣ ΚΟΡΙΝΘΙΟΥΣ Β΄',
		'ΠΡΟΣ ΓΑΛΑΤΑΣ',
		'ΠΡΟΣ ΕΦΕΣΙΟΥΣ',
		'ΠΡΟΣ ΦΙΛΙΠΠΗΣΙΟΥΣ',
		'ΠΡΟΣ ΚΟΛΟΣΣΑΕΙΣ',
		'ΠΡΟΣ ΘΕΣΣΑΛΟΝΙΚΕΙΣ Α΄',
		'ΠΡΟΣ ΘΕΣΣΑΛΟΝΙΚΕΙΣ Β΄',
		'Α΄ ΠΡΟΣ ΤΙΜΟΘΕΟΝ',
		'Β΄ ΠΡΟΣ ΤΙΜΟΘΕΟΝ',
		'ΠΡΟΣ ΤΙΤΟΝ',
		'ΠΡΟΣ ΦΙΛΗΜΟΝΑ',
		'ΠΡΟΣ ΕΒΡΑΙΟΥΣ',
		'ΙΑΚΩΒΟΥ',
		'Α΄ ΠΕΤΡΟΥ',
		'Β΄ ΠΕΤΡΟΥ',
		'Α΄ ΙΩΑΝΝΟΥ',
		'Β΄ ΙΩΑΝΝΟΥ',
		'Γ΄ ΙΩΑΝΝΟΥ',
		'ΙΟΥΔΑ',
		'ΑΠΟΚΑΛΥΨΗ ΙΩΑΝΝΟΥ',
	],
	en: [
		'Genesis',
		'Exodus',
		'Leviticus',
		'Numbers',
		'Deuteronomy',
		'Joshua',
		'Judges',
		'Ruth',
		'I Samuel',
		'II Samuel',
		'I Kings',
		'II Kings',
		'I Chronicles',
		'II Chronicles',
		'Ezra',
		'Nehemiah',
		'Esther',
		'Job',
		'Psalm',
		'Proverbs',
		'Ecclesiastes',
		'Song of Songs',
		'Isaiah',
		'Jeremiah',
		'Lamentations',
		'Ezekiel',
		'Daniel',
		'Hosea',
		'Joel',
		'Amos',
		'Obadiah',
		'Jonah',
		'Micah',
		'Nahum',
		'Habakkuk',
		'Zephaniah',
		'Haggai',
		'Zechariah',
		'Malachi',
		'Matthew',
		'Mark',
		'Luke',
		'John',
		'Acts',
		'Romans',
		'I Corinthians',
		'II Corinthians',
		'Galatians',
		'Ephesians',
		'Philippians',
		'Colossians',
		'I Thessalonians',
		'II Thessalonians',
		'I Timothy',
		'II Timothy',
		'Titus',
		'Philemon',
		'Hebrews',
		'James',
		'I Peter',
		'II Peter',
		'I John',
		'II John',
		'III John',
		'Jude',
		'Revelation',
	],
	enm: [
		'Genesis',
		'Exodus',
		'Leviticus',
		'Numbers',
		'Deuteronomy',
		'Joshua',
		'Judges',
		'Ruth',
		'1 Kings',
		'2 Kings',
		'3 Kings',
		'4 Kings',
		'1 Paralipomenon',
		'2 Paralipomenon',
		'Ezra',
		'Nehemiah',
		'Esther',
		'Job',
		'Psalms',
		'Proverbs',
		'Ecclesiastes',
		'Songes of Songes',
		'Isaiah',
		'Jeremiah',
		'Lamentations',
		'Ezechiel',
		'Daniel',
		'Osee',
		'Joel',
		'Amos',
		'Abdias',
		'Jonas',
		'Mychee',
		'Naum',
		'Abacuk',
		'Sofonye',
		'Aggey',
		'Sacarie',
		'Malachie',
		'Matheu',
		'Mark',
		'Luke',
		'John',
		'Dedis of Apostlis',
		'Romaynes',
		'1 Corinthis',
		'2 Corinthis',
		'Galathies',
		'Effesies',
		'Filipensis',
		'Colosencis',
		'1 Thessalonycensis',
		'2 Thessalonycensis',
		'1 Tymothe',
		'2 Tymothe',
		'Tite',
		'Filemon',
		'Ebrews',
		'James',
		'1 Petre',
		'2 Petre',
		'1 Joon',
		'2 Joon',
		'3 Joon',
		'Judas',
		'Apocalips',
	],
	eo: [
		'Genezo',
		'Eliro',
		'Levidoj',
		'Nombroj',
		'Readmono',
		'Josuo',
		'Juĝistoj',
		'Rut',
		'1 Samuel',
		'2 Samuel',
		'1 Reĝoj',
		'2 Reĝoj',
		'1 Kroniko',
		'2 Kroniko',
		'Ezra',
		'Neĥemja',
		'Ester',
		'Ijob',
		'Psalmaro',
		'Sentencoj',
		'Predikanto',
		'Alt Kanto',
		'Jesaja',
		'Jeremia',
		'Plorkanto',
		'Jeĥezkel',
		'Daniel',
		'Hoŝea',
		'Joel',
		'Amos',
		'Obadja',
		'Jona',
		'Miĥa',
		'Naĥum',
		'Ĥabakuk',
		'Cefanja',
		'Ĥagaj',
		'Zeĥarja',
		'Malaĥi',
		'Mateo',
		'Marko',
		'Luko',
		'Johano',
		'Agoj',
		'Romanoj',
		'1 Korintanoj',
		'2 Korintanoj',
		'Galatoj',
		'Efesanoj',
		'Filipianoj',
		'Koloseanoj',
		'1 Tesalonikanoj',
		'2 Tesalonikanoj',
		'1 Timoteo',
		'2 Timoteo',
		'Tito',
		'Filemon',
		'Hebreoj',
		'Jakobo',
		'1 Petro',
		'2 Petro',
		'1 Johano',
		'2 Johano',
		'3 Johano',
		'Judas',
		'Apokalipso',
	],
	es: [
		'GÉNESIS',
		'ÉXODO',
		'LEVÍTICO',
		'NÚMEROS',
		'DEUTERONOMIO',
		'JOSUÉ',
		'JUECES',
		'RUT',
		'1 SAMUEL',
		'2 SAMUEL',
		'1 REYES',
		'2 REYES',
		'1 CRÓNICAS',
		'2 CRÓNICAS',
		'ESDRAS',
		'NEHEMÍAS',
		'ESTER',
		'JOB',
		'SALMOS',
		'PROVERBIOS',
		'ECLESIASTÉS',
		'CANTARES',
		'ISAÍAS',
		'JEREMÍAS',
		'LAMENTACIONES',
		'EZEQUIEL',
		'DANIEL',
		'OSEAS',
		'JOEL',
		'AMÓS',
		'ABDÍAS',
		'JONÁS',
		'MIQUEAS',
		'NAHUM',
		'HABACUC',
		'SOFONÍAS',
		'AGEO',
		'ZACARÍAS',
		'MALAQUÍAS',
		'MATEO',
		'MARCOS',
		'LUCAS',
		'JUAN',
		'HECHOS',
		'ROMANOS',
		'1 CORINTIOS',
		'2 CORINTIOS',
		'GÁLATAS',
		'EFESIOS',
		'FILIPENSES',
		'COLOSENSES',
		'1 TESALONICENSES',
		'2 TESALONICENSES',
		'1 TIMOTEO',
		'2 TIMOTEO',
		'TITO',
		'FILEMÓN',
		'HEBREOS',
		'SANTIAGO',
		'1 PEDRO',
		'2 PEDRO',
		'1 JUAN',
		'2 JUAN',
		'3 JUAN',
		'JUDAS',
		'APOCALIPSIS',
	],
	et: [
		// Vana Testament (Old Testament)
		'1. Moosese',
		'2. Moosese',
		'3. Moosese',
		'4. Moosese',
		'5. Moosese',
		'Joosua',
		'Kohtumõistjate',
		'Rutt',
		'1. Saamueli',
		'2. Saamueli',
		'1. Kuningate',
		'2. Kuningate',
		'1. Ajaraamat',
		'2. Ajaraamat',
		'Esra',
		'Nehemja',
		'Ester',
		'Iiob',
		'Psalmid',
		'Õpetussõnad',
		'Koguja',
		'Laulude Laul',
		'Jesaja',
		'Jeremija',
		'Nutulaulud',
		'Hesekiel',
		'Taaniel',
		'Hoosea',
		'Joel',
		'Aamos',
		'Obadja',
		'Joona',
		'Miika',
		'Nahum',
		'Habakuk',
		'Sefanja',
		'Haggai',
		'Sakarja',
		'Malakia',

		// Uus Testament (New Testament)
		'Matteuse',
		'Markuse',
		'Luuka',
		'Johannese',
		'Apostlite teod',
		'Roomlastele',
		'1. Korintlastele',
		'2. Korintlastele',
		'Galaatlastele',
		'Efeslastele',
		'Filiplastele',
		'Koloslastele',
		'1. Tessalooniklastele',
		'2. Tessalooniklastele',
		'1. Timoteosele',
		'2. Timoteosele',
		'Tiitusele',
		'Fileemonile',
		'Heebrealastele',
		'Jaakobuse',
		'1. Peetruse',
		'2. Peetruse',
		'1. Johannese',
		'2. Johannese',
		'3. Johannese',
		'Juuda',
		'Ilmutusraamat',
	],
	eu: [
		// Itun Zaharra (Old Testament)
		'Hasiera',
		'Irteera',
		'Lebitarrak',
		'Zenbakiak',
		'Deuteronomioa',
		'Josue',
		'Epaileak',
		'Ruth',
		'1 Samuel',
		'2 Samuel',
		'1 Erregeak',
		'2 Erregeak',
		'1 Kronikak',
		'2 Kronikak',
		'Esdras',
		'Nehemias',
		'Ester',
		'Job',
		'Salmoak',
		'Esaera Zaharrak',
		'Kohelet',
		'Abesti Ederrena',
		'Isaias',
		'Jeremias',
		'Negar Kantuak',
		'Ezekiel',
		'Daniel',
		'Hoseas',
		'Joel',
		'Amos',
		'Abdias',
		'Jonas',
		'Mikeas',
		'Nahum',
		'Habakuk',
		'Sofonias',
		'Ageo',
		'Zekarias',
		'Malaquias',

		// Itun Berria (New Testament)
		'Mateo',
		'Markos',
		'Lukas',
		'Joanes',
		'Apostoluen Egintzak',
		'Erromatarrei',
		'1 Korintoarrei',
		'2 Korintoarrei',
		'Galaziarrei',
		'Efesiarrei',
		'Filipoarrei',
		'Kolosiarrei',
		'1 Tesalonikarrei',
		'2 Tesalonikarrei',
		'1 Timoteori',
		'2 Timoteori',
		'Titori',
		'Filemoni',
		'Hebrearrei',
		'Santiago',
		'1 Pedro',
		'2 Pedro',
		'1 Joan',
		'2 Joan',
		'3 Joan',
		'Judas',
		'Apokalipsia',
	],
	fa: [
		'پدایش',
		'خروج',
		'لاویان',
		'اعداد',
		'تشنیه',
		'یوشع',
		'داوران',
		'روت',
		'اول سموییل',
		'دوم سموییل',
		'اول پادشاهان',
		'دوم پادشاهان',
		'اول تواریخ',
		'دوم تواریخ',
		'عزرا',
		'نحمیا',
		'استر',
		'ایوب',
		'مزامیر',
		'امثال',
		'جامعه',
		'غزل غزلها',
		'اشعیا',
		'ارمیا',
		'مراثی ارمیا',
		'حزقیال',
		'دانیال',
		'هوشع',
		'یوییل',
		'عاموس',
		'عوبدیا',
		'یونس',
		'میکاه',
		'ناحوم',
		'حبقوق',
		'صفنیا',
		'حخی',
		'زکریا',
		'ملاکی',
		'متی',
		'مرقس',
		'لوقا',
		'یوحنا',
		'اعمال رسولان',
		'رومیان',
		'اول قرنتیان',
		'دوم قرنتیان',
		'علاطیان',
		'افسیان',
		'فلیپیان',
		'کولسیان',
		'اول تسالونیکیان',
		'دوم تسالونیکیان',
		'اول تیموتایوس',
		'دوم تیموتایوس',
		'تیطوس',
		'فلیمون',
		'عبرانیان',
		'یعقوب',
		'اول پطرس',
		'دوم پطرس',
		'اول یحنا',
		'دوم یحنا',
		'سوم یحانا',
		'یهودا',
		'مکاشفه',
	],
	fi: [
		'1. Mooseksen kirja',
		'2. Mooseksen kirja',
		'3. Mooseksen kirja',
		'4. Mooseksen kirja',
		'5. Mooseksen kirja',
		'Joosua',
		'Tuomarien Kirja',
		'Ruut',
		'1. Samuelin kirja',
		'2. Samuelin kirja',
		'1. Kuningasten kirja',
		'2. Kuningasten kirja',
		'1. Aikakirja',
		'2. Aikakirja',
		'Esra',
		'Nehemia',
		'Ester',
		'Job',
		'Psalmit',
		'Sananlaskut',
		'Saarnaaja',
		'Korkea veisu',
		'Jesaja',
		'Jeremia',
		'Valitusvirret',
		'Hesekiel',
		'Daniel',
		'Hoosea',
		'Jooel',
		'Aamos',
		'Obadja',
		'Joona',
		'Miika',
		'Naahum',
		'Habakuk',
		'Sefanja',
		'Haggai',
		'Sakarja',
		'Malakia',
		'Matteus',
		'Markus',
		'Luukas',
		'Johannes',
		'Apostolien teot',
		'Roomalaiskirje',
		'1. Korinttilaiskirje',
		'2. Korinttilaiskirje',
		'Galatalaiskirje',
		'Efesolaiskirje',
		'Filippiläiskirje',
		'Kolossalaiskirje',
		'1. Tessalonikalaiskirje',
		'2. Tessalonikalaiskirje',
		'1. Timoteuskirje',
		'2. Timoteuskirje',
		'Tituskirje',
		'Filemonkirje',
		'Heprealaiskirje',
		'Jaakobin kirje',
		'1. Pietarin kirje',
		'2. Pietarin kirje',
		'1. Johanneksen kirje',
		'2. Johanneksen kirje',
		'3. Johanneksen kirje',
		'Juudaksen kirje',
		'Ilmestyskirja',
	],
	fr: [
		'Genèse',
		'Exode',
		'Lévitique',
		'Nombres',
		'Deutéronome',
		'Josué',
		'Juges',
		'Ruth',
		'1 Samuel',
		'2 Samuel',
		'1 Rois',
		'2 Rois',
		'1 Chroniques',
		'2 Chroniques',
		'Esdras',
		'Néhémie',
		'Esther',
		'Job',
		'Psaumes',
		'Proverbes',
		'Ecclésiaste',
		'Cantique des Cantiques',
		'Ésaïe',
		'Jérémie',
		'Lamentations',
		'Ézéchiel',
		'Daniel',
		'Osée',
		'Joël',
		'Amos',
		'Abdias',
		'Jonas',
		'Michée',
		'Nahum',
		'Habacuc',
		'Sophonie',
		'Aggée',
		'Zacharie',
		'Malachie',
		'Matthieu',
		'Marc',
		'Luc',
		'Jean',
		'Actes',
		'Romains',
		'1 Corinthiens',
		'2 Corinthiens',
		'Galates',
		'Éphésiens',
		'Philippiens',
		'Colossiens',
		'1 Thessaloniciens',
		'2 Thessaloniciens',
		'1 Timothée',
		'2 Timothée',
		'Tite',
		'Philémon',
		'Hébreux',
		'Jacques',
		'1 Pierre',
		'2 Pierre',
		'1 Jean',
		'2 Jean',
		'3 Jean',
		'Jude',
		'Apocalypse',
	],
	ga: [
		'Genesis',
		'Exodus',
		'Lebhiticus',
		'Uibhreacha',
		'Deuteronomi',
		'Iosua',
		'Breitheamhuin',
		'Rut',
		'I Samuel',
		'II Samuel',
		'I Riogh',
		'II Riogh',
		'I Croinicoibh',
		'II Croiniclibh',
		'Esra',
		'Nehemia',
		'Ester',
		'Job',
		'Psailm',
		'Seanraite',
		'Ecclesiastes',
		'Caintic Sholaimh',
		'Isaiah',
		'Ieremiah',
		'Triabhuin',
		'Esechiel',
		'Daniel',
		'Hosea',
		'Ioel',
		'Amos',
		'Obadiah',
		'Jonah',
		'Micah',
		'Nahum',
		'Habaccuc',
		'Sephaniah',
		'Haggai',
		'Sechariah',
		'Malachi',
		'Matha',
		'Marcus',
		'Lúcas',
		'Eóin',
		'Gníomhartha',
		'Romhánach',
		'I Ccorintiánach',
		'II Ccorintiánach',
		'Galatiánach',
		'Hephesiánach',
		'Bhphilippiánach',
		'Ccolossianach',
		'I Ttessalonicanach',
		'II Ttessalonicanach',
		'I Timóteuis',
		'II Timóteuis',
		'Tituis',
		'Philémoin',
		'Neabhruidheach',
		'Sheamuis',
		'I Pheadair',
		'II Pheadair',
		'I Eóin',
		'II Eóin',
		'III Eóin',
		'Iudais',
		'Taisbeanadh',
	],
	gd: [
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'Marcus',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
	],
	gez: [
		'የማቴዎስ ወንጌል',
		'የማርቆስ ወንጌል',
		'የሉቃስ ወንጌል',
		'የዮሐንስ ወንጌል',
		'የሐዋርያት ሥራ',
		'ወደ ሮሜ ሰዎች',
		'፩ኛ ወደ ቆሮንቶስ ሰዎች',
		'፪ኛ ወደ ቆሮንቶስ ሰዎች',
		'ወደ ገላትያ ሰዎች',
		'ወደ ኤፌሶን ሰዎች',
		'ወደ ፊልጵስዩስ ሰዎች',
		'ወደ ቆላስይስ ሰዎች',
		'፩ኛ ወደ ተሰሎንቄ ሰዎች',
		'፪ኛ ወደ ተሰሎንቄ ሰዎች',
		'፩ኛ ወደ ጢሞቴዎስ',
		'፪ኛ ወደ ጢሞቴዎስ',
		'ወደ ቲቶ',
		'ወደ ፊልሞና',
		'ወደ ዕብራውያን',
		'የያዕቆብ መልእክት',
		'፩ኛ የጴጥሮስ መልእክት',
		'፪ኛ የጴጥሮስ መልእክት',
		'፩ኛ የዮሐንስ መልእክት',
		'፪ኛ የዮሐንስ መልእክት',
		'፫ኛ የዮሐንስ መልእክት',
		'የይሁዳ መልእክት',
		'የዮሐንስ ራእይ',
		'ኦሪት ዘፍጥረት',
		'ኦሪት ዘጸአት',
		'ኦሪት ዘሌዋውያን',
		'ኦሪት ዘኍልቍ',
		'ኦሪት ዘዳግም',
		'መጽሐፈ ኢያሱ ወልደ ነዌ',
		'መጽሐፈ መሳፍንት',
		'መጽሐፈ ሩት',
		'መጽሐፈ ሳሙኤል ቀዳማዊ',
		'መጽሐፈ ሳሙኤል ካልዕ',
		'መጽሐፈ ነገሥት ቀዳማዊ',
		'መጽሐፈ ነገሥት ካልዕ',
		'መጽሐፈ ዜና መዋዕል ቀዳማዊ',
		'መጽሐፈ ዜና መዋዕል ካልዕ',
		'መጽሐፈ ዕዝራ',
		'መጽሐፈ ነህምያ',
		'መጽሐፈ አስቴር',
		'መጽሐፈ ኢዮብ',
		'መዝሙረ ዳዊት',
		'መጽሐፈ ምሳሌ',
		'መጽሐፈ መክብብ',
		'መኃልየ መኃልይ ዘሰሎሞን',
		'ትንቢተ ኢሳይያስ',
		'ትንቢተ ኤርምያስ',
		'ሰቆቃው ኤርምያስ',
		'ትንቢተ ሕዝቅኤል',
		'ትንቢተ ዳንኤል',
		'ትንቢተ ሆሴዕ',
		'ትንቢተ አሞጽ',
		'ትንቢተ ሚክያስ',
		'ትንቢተ ኢዮኤል',
		'ትንቢተ አብድዩ',
		'ትንቢተ ዮናስ',
		'ትንቢተ ናሆም',
		'ትንቢተ ዕንባቆም',
		'ትንቢተ ሶፎንያስ',
		'ትንቢተ ሐጌ',
		'ትንቢተ ዘካርያስ',
		'ትንቢተ ሚልክያ',
	],
	grc: [
		// Παλαιά Διαθήκη (Old Testament - Septuagint)
		'Γένεσις',
		'Ἔξοδος',
		'Λευιτικόν',
		'Ἀριθμοί',
		'Δευτερονόμιον',
		'Ἰησοῦς Ναυή',
		'Κριταί',
		'Ῥούθ',
		'Α´ Σαμουήλ',
		'Β´ Σαμουήλ',
		'Α´ Βασιλειῶν',
		'Β´ Βασιλειῶν',
		'Α´ Παραλειπομένων',
		'Β´ Παραλειπομένων',
		'Ἔσδρας Α´',
		'Ἔσδρας Β´ (Νεεμίας)',
		'Ἐσθήρ',
		'Ἰώβ',
		'Ψαλμοί',
		'Παροιμίαι',
		'Ἐκκλησιαστής',
		'Ἄσμα Ἀσμάτων',
		'Ἠσαΐας',
		'Ἱερεμίας',
		'Θρῆνοι',
		'Ἰεζεκιήλ',
		'Δανιήλ',
		'Ὡσηέ',
		'Ἰωήλ',
		'Ἀμώς',
		'Ὀβδίας',
		'Ἰωνᾶς',
		'Μιχαίας',
		'Ναούμ',
		'Ἀβακούμ',
		'Σοφονίας',
		'Ἀγγαῖος',
		'Ζαχαρίας',
		'Μαλαχίας',

		// Καινή Διαθήκη (New Testament)
		'Κατὰ Ματθαῖον',
		'Κατὰ Μᾶρκον',
		'Κατὰ Λουκᾶν',
		'Κατὰ Ἰωάννην',
		'Πράξεις Ἀποστόλων',
		'Πρὸς Ῥωμαίους',
		'Α´ Κορινθίους',
		'Β´ Κορινθίους',
		'Πρὸς Γαλάτας',
		'Πρὸς Ἐφεσίους',
		'Πρὸς Φιλιππησίους',
		'Πρὸς Κολοσσαεῖς',
		'Α´ Θεσσαλονικεῖς',
		'Β´ Θεσσαλονικεῖς',
		'Α´ Τιμόθεον',
		'Β´ Τιμόθεον',
		'Πρὸς Τίτον',
		'Πρὸς Φιλήμονα',
		'Πρὸς Ἑβραίους',
		'Ἰάκωβος',
		'Α´ Πέτρου',
		'Β´ Πέτρου',
		'Α´ Ἰωάννου',
		'Β´ Ἰωάννου',
		'Γ´ Ἰωάννου',
		'Ἰούδας',
		'Ἀποκάλυψις Ἰωάννου',
	],
	gv: [
		// Shenn Chonaant (Old Testament)
		'Genesis',
		'Exodus',
		'Levitick',
		'Yn Eearrooyn',
		'Yn Chiarroo Lioar Mosey',
		'Joshua',
		'Brecaryn',
		'Ruth',
		'1 Samuel',
		'2 Samuel',
		'1 Reeaghyn',
		'2 Reeaghyn',
		'1 Lioar ny Chronnaghyn',
		'2 Lioar ny Chronnaghyn',
		'Esra',
		'Nehemiah',
		'Esther',
		'Job',
		'Ny Psalmyn',
		'Coraghey',
		'Yn Drineyder',
		'Arran ny Arraneyn',
		'Isaiah',
		'Jeremiah',
		'Coyrleilaghyn',
		'Ezekiel',
		'Daniel',
		'Hosea',
		'Joel',
		'Amos',
		'Obadiah',
		'Jonas',
		'Micah',
		'Nahum',
		'Habakkuk',
		'Zephaniah',
		'Haggai',
		'Zechariah',
		'Malachi',

		// Conaant Noa (New Testament)
		'Noo Varkys',
		'Noo Lucays',
		'Noo Juan',
		'Obbraghyn ny Aspickyn',
		"Paul's Chaglym dys ny Romanaghyn",
		'1 Corinthianee',
		'2 Corinthianee',
		'Galatianee',
		'Ephesianee',
		'Philippianee',
		'Colossianee',
		'1 Thessalonianee',
		'2 Thessalonianee',
		'1 Timothy',
		'2 Timothy',
		'Titus',
		'Philemon',
		'Ebrewnaghyn',
		'Jamys',
		'1 Peddyr',
		'2 Peddyr',
		'1 Juan',
		'2 Juan',
		'3 Juan',
		'Judas',
		'Foillaght',
	],
	hbo: [
		'בראשית',
		'שמות',
		'ויקרא',
		'במדבר',
		'דברים',
		'יהושע',
		'שפטים',
		'שמואל א',
		'שמואל ב',
		'מלכים א',
		'מלכים ב',
		'ישעיה',
		'ירמיה',
		'יחזקאל',
		'הושע',
		'יואל',
		'עמוס',
		'עבדיה',
		'יונה',
		'מיכה',
		'נחום',
		'חבקוק',
		'צפניה',
		'חגי',
		'זכריה',
		'מלאכי',
		'תהלים',
		'משלי',
		'איוב',
		'שיר השירים',
		'רות',
		'איכה',
		'קהלת',
		'אסתר',
		'דניאל',
		'עזרא',
		'נחמיה',
		'דברי הימים א',
		'דברי הימים ב',
		'מתי',
		'מרקוס',
		'לוקס',
		'יוחנן',
		'מעשי השליחים',
		'אל הרומים',
		'הראשונה אל הקורינתים',
		'השניה אל הקורינתים',
		'אל הגלטים',
		'אל האפסים',
		'אל הפיליפים',
		'אל הקולוסים',
		'הראשונה אל התסלוניקים',
		'השניה אל התסלוניקים',
		'הראשונה אל טימותיאוס',
		'השניה אל טימותיאוס',
		'אל טיטוס',
		'אל פילימון',
		'אל העברים',
		'אגרת יעקב',
		'הראשונה לכיפא',
		'השניה לכיפא',
		'הראשונה ליוחנן',
		'השניה ליוחנן',
		'השלישית ליוחנן',
		'אגרת יהודה',
		'ההתגלות',
	],
	hi: [
		'उत्पत्ति',
		'निर्गमन',
		'लैव्यवस्था',
		'गिनती',
		'व्यवस्थाविवरण',
		'यहोशू',
		'न्यायियों',
		'रूत',
		'1 शमूएल',
		'2 शमूएल',
		'1 राजा',
		'2 राजा',
		'1 इतिहास',
		'2 इतिहास',
		'एज्रा',
		'नहेमायाह',
		'एस्तेर',
		'अय्यूब',
		'भजन संहिता',
		'नीतिवचन',
		'सभोपदेशक',
		'श्रेष्ठगीत',
		'यशायाह',
		'यिर्मयाह',
		'विलापगीत',
		'यहेजकेल',
		'दानिय्येल',
		'होशे',
		'योएल',
		'आमोस',
		'ओबद्दाह',
		'योना',
		'मीका',
		'नहूम',
		'हबक्कूक',
		'सपन्याह',
		'हाग्गै',
		'जकर्याह',
		'मलाकी',
		'मत्ती',
		'मरकुस',
		'लूका',
		'यूहन्ना',
		'प्रेरितों के काम',
		'रोमियो',
		'1 कुरिन्थियों',
		'2 कुरिन्थियों',
		'गलातियों',
		'इफिसियों',
		'फिलिप्पियों',
		'कुलुस्सियों',
		'1 थिस्सलुनीकियों',
		'2 थिस्सलुनीकियों',
		'1 तीमुथियुस',
		'2 तीमुथियुस',
		'तीतुस',
		'फिलेमोन',
		'इब्रानियों',
		'याकूब',
		'1 पतरस',
		'2 पतरस',
		'1 यूहन्ना',
		'2 यूहन्ना',
		'3 यूहन्ना',
		'यहूदा',
		'प्रकाशित वाक्य',
	],
	hlt: [
		'Suencuek',
		'Sunglatnah',
		'Thothuengnah',
		'Lampahnah',
		'Olrhaep',
		'Joshua',
		'Laitloekkung',
		'Ruth',
		'1 Samuel',
		'2 Samuel',
		'1 Manghai',
		'2 Manghai',
		'1 Khokhuen',
		'2 Khokhuen',
		'Ezra',
		'Nehemiah',
		'Esther',
		'Job',
		'Tingtoeng',
		'Olcueih',
		'Thuituen',
		'Solomon Laa',
		'Isaiah',
		'Jeremiah',
		'Rhaengsae',
		'Ezekiel',
		'Daniel',
		'Hosea',
		'Joel',
		'Amos',
		'Obadiah',
		'Jonah',
		'Micah',
		'Nahum',
		'Habakkuk',
		'Zephaniah',
		'Haggai',
		'Zechariah',
		'Malakhi',
		'Matthai',
		'Marku',
		'Luka',
		'Johan',
		'Caeltueih',
		'Rom',
		'1 Khawrin',
		'2 Khawrin',
		'Galati',
		'Ephisa',
		'Philipi',
		'Kolosa',
		'1 Thesalonika',
		'2 Thesalonika',
		'1 Timothy',
		'2 Timothy',
		'Titu',
		'Philimon',
		'Hebru',
		'Jame',
		'1 Peter',
		'2 Peter',
		'1 Johan',
		'2 Johan',
		'3 Johan',
		'Jude',
		'Olphong',
	],
	hr: [
		// Stari zavjet (Old Testament)
		'Postanak',
		'Izlazak',
		'Levitski zakonik',
		'Brojevi',
		'Ponovljeni zakon',
		'Jošua',
		'Suci',
		'Ruta',
		'1. Samuelova',
		'2. Samuelova',
		'1. Kraljevima',
		'2. Kraljevima',
		'1. Ljetopisa',
		'2. Ljetopisa',
		'Ezra',
		'Nehemija',
		'Estera',
		'Job',
		'Psalmi',
		'Mudre izreke',
		'Propovjednik',
		'Pjesma nad pjesmama',
		'Izaija',
		'Jeremija',
		'Tužaljke',
		'Ezekiel',
		'Daniel',
		'Hošea',
		'Joel',
		'Amos',
		'Obadija',
		'Jona',
		'Mihej',
		'Nahum',
		'Habakuk',
		'Sefanija',
		'Hagaj',
		'Zaharija',
		'Malahija',

		// Novi zavjet (New Testament)
		'Matej',
		'Marko',
		'Luka',
		'Ivan',
		'Djela apostolska',
		'Rimljanima',
		'1. Korinćanima',
		'2. Korinćanima',
		'Galaćanima',
		'Efežanima',
		'Filipljanima',
		'Kološanima',
		'1. Solunjanima',
		'2. Solunjanima',
		'1. Timoteju',
		'2. Timoteju',
		'Titu',
		'Filemonu',
		'Hebrejima',
		'Jakovljeva',
		'1. Petrova',
		'2. Petrova',
		'1. Ivanova',
		'2. Ivanova',
		'3. Ivanova',
		'Juda',
		'Otkrivenje',
	],
	ht: [
		'Jenèz',
		'Egzòd',
		'Levitik',
		'Nonb',
		'Detewonòm',
		'Jozye',
		'Jij',
		'Rit',
		'1 Samyèl',
		'2 Samyèl',
		'1 Wa',
		'2 Wa',
		'1 Kwonik',
		'2 Kwonik',
		'Esdras',
		'Neyemi',
		'Estè',
		'Jòb',
		'Sòm',
		'Pwovèb',
		'Eklezyas',
		'Kantik',
		'Ezayi',
		'Jeremi',
		'Lamantasyon',
		'Ezekyèl',
		'Danyèl',
		'Oze',
		'Jowèl',
		'Amòs',
		'Abdyas',
		'Jonas',
		'Miche',
		'Nawoum',
		'Abakik',
		'Sofoni',
		'Aje',
		'Zakari',
		'Malachi',
		'Tobi',
		'Jidit',
		'Estè (Grèk)',
		'1 Makabe',
		'2 Makabe',
		'Sajès',
		'Chirasid',
		'Barik',
		'Lèt Jeremi',
		'Danyèl (Grèk)',
		'Sizàn',
		'Bèl',
		'Matye',
		'Mak',
		'Lik',
		'Jan',
		'Travay',
		'Women',
		'1 Korent',
		'2 Korent',
		'Galat',
		'Efezyen',
		'Filipyen',
		'Kolosyen',
		'1 Tesalonisyen',
		'2 Tesalonisyen',
		'1 Timote',
		'2 Timote',
		'Tit',
		'Filemon',
		'Ebre',
		'Jak',
		'1 Pyè',
		'2 Pyè',
		'1 Jan',
		'2 Jan',
		'3 Jan',
		'Jid',
		'Revelasyon',
	],
	hu: [
		'1 Mózes',
		'2 Mózes',
		'3 Mózes',
		'4 Mózes',
		'5 Mózes',
		'Józsué',
		'Bírák',
		'Ruth',
		'1 Sámuel',
		'2 Sámuel',
		'1 Királyok',
		'2 Királyok',
		'1 Krónika',
		'2 Krónika',
		'Ezsdrás',
		'Nehémiás',
		'Eszter',
		'Jób',
		'Zsoltárok',
		'Példabeszédek',
		'Prédikátor',
		'Énekek',
		'Ésaiás',
		'Jeremiás',
		'Jeremiás siralmai',
		'Ezékiel',
		'Dániel',
		'Hóseás',
		'Jóel',
		'Ámós',
		'Abdiás',
		'Jónás',
		'Mikeás',
		'Náhum',
		'Habakuk',
		'Sofóniás',
		'Aggeus',
		'Zakariás',
		'Malakiás',
		'Máté',
		'Márk',
		'Lukács',
		'János',
		'Cselekedetek',
		'Róma',
		'1 Korinthus',
		'2 Korinthus',
		'Galátzia',
		'Efézus',
		'Filippi',
		'Kolossé',
		'1 Thessalonika',
		'2 Thessalonika',
		'1 Timótheus',
		'2 Timótheus',
		'Titus',
		'Filemon',
		'Zsidók',
		'Jakab',
		'1 Péter',
		'2 Péter',
		'1 János',
		'2 János',
		'3 János',
		'Júdás',
		'Jelenések',
	],
	hy: [
		'ԾՆՆԴՈՑØ',
		'ԵԼՔØ',
		'ՂԵՎՏԱԿԱՆØ',
		'ԹՎԵՐØ',
		'Բ ՕՐԵՆՔØ',
		'ՀԵՍՈՒØ',
		'ԴԱՏԱՎՈՐՆԵՐØ',
		'ՀՌՈՒԹØ',
		'Ա ԹԱԳԱՎՈՐՆԵՐԻØ',
		'Բ ԹԱԳԱՎՈՐՆԵՐԻØ',
		'Գ ԹԱԳԱՎՈՐՆԵՐԻØ',
		'Դ ԹԱԳԱՎՈՐՆԵՐԻØ',
		'Ա ՄՆԱՑՈՐԴԱՑØ',
		'Բ ՄՆԱՑՈՐԴԱՑØ',
		'ԵԶՐԱՍØ',
		'ՆԵԵՄԻԱØ',
		'ԵՍԹԵՐØ',
		'ՀՈԲØ',
		'ՍԱՂՄՈՍՆԵՐØ',
		'ԱՌԱԿՆԵՐØ',
		'ԺՈՂՈՎՈՂØ',
		'ԵՐԳ ԵՐԳՈՑØ',
		'ԵՍԱՅԻØ',
		'ԵՐԵՄԻԱØ',
		'ԵՐԵՄԻԱՅԻ ՈՂԲԵՐԸØ',
		'ԵԶԵԿԻԵԼØ',
		'ԴԱՆԻԵԼØ',
		'ՈՎՍԵԵØ',
		'ՀՈՎԵԼØ',
		'ԱՄՈՎՍØ',
		'ԱԲԴԻԱØ',
		'ՀՈՎՆԱՆØ',
		'ՄԻՔԻԱØ',
		'ՆԱՈՒՄØ',
		'ԱՄԲԱԿՈՒՄØ',
		'ՍՈՓՈՆԻԱØ',
		'ԱՆԳԵØ',
		'ԶԱՔԱՐԻԱØ',
		'ՄԱՂԱՔԻԱØ',
		'ՄատթեոսØ',
		'ՄարկոսØ',
		'ՂուկասØ',
		'ՀՈՎՀԱՆՆԵՍØ',
		'Գործք ԱռաքելոցØ',
		'ՀռոմեացիներինØ',
		'Ա ԿորնթացիներինØ',
		'Բ ԿորնթացիներինØ',
		'ԳաղատացիներինØ',
		'ԵփեսացիներինØ',
		'ՓիլիպպեցիներինØ',
		'ԿողոսացիներինØ',
		'Ա ԹեսաղոնիկեցիներինØ',
		'Բ ԹեսաղոնիկեցիներինØ',
		'Ա ՏիմոթեոսինØ',
		'Բ ՏիմոթեոսինØ',
		'ՏիտոսինØ',
		'ՓիլիմոնինØ',
		'ԵբրայեցիներինØ',
		'ՀակոբոսØ',
		'Ա ՊետրոսØ',
		'Բ ՊետրոսØ',
		'Ա ՀովհաննեսØ',
		'Բ ՀովհաննեսØ',
		'Գ ՀովհաննեսØ',
		'ՀուդաØ',
		'ՀայտնությունØ',
	],
	it: [
		'Genesi',
		'Esodo',
		'Levitico',
		'Numeri',
		'Deuteronomio',
		'Giosuè',
		'Giudici',
		'Rut',
		'1 Samuele',
		'2 Samuele',
		'1 Re',
		'2 Re',
		'1 Cronache',
		'2 Cronache',
		'Esdra',
		'Neemia',
		'Ester',
		'Giobbe',
		'Salmi',
		'Proverbi',
		'Qoelet',
		'Cantico dei Cantici',
		'Isaia',
		'Geremia',
		'Lamentazioni',
		'Ezechiele',
		'Daniele',
		'Osea',
		'Gioele',
		'Amos',
		'Abdia',
		'Giona',
		'Michea',
		'Naum',
		'Abacuc',
		'Sofonia',
		'Aggeo',
		'Zaccaria',
		'Malachia',
		'Matteo',
		'Marco',
		'Luca',
		'Giovanni',
		'Atti',
		'Romani',
		'1 Corinzi',
		'2 Corinzi',
		'Galati',
		'Efesini',
		'Filippesi',
		'Colossesi',
		'1 Tessalonicesi',
		'2 Tessalonicesi',
		'1 Timoteo',
		'2 Timoteo',
		'Tito',
		'Filèmone',
		'Ebrei',
		'Giacomo',
		'1 Pietro',
		'2 Pietro',
		'1 Giovanni',
		'2 Giovanni',
		'3 Giovanni',
		'Giuda',
		'Apocalisse',
	],
	ja: [
		'創世記',
		'出エジプト記',
		'レビ記',
		'民数記',
		'申命記',
		'ヨシュア記',
		'士師記',
		'ルツ記',
		'サムエル記上',
		'サムエル記下',
		'列王記上',
		'列王記下',
		'歴代誌上',
		'歴代誌下',
		'エズラ記',
		'ネヘミヤ記',
		'エステル記',
		'ヨブ記',
		'詩篇',
		'箴言',
		'伝道の書',
		'雅歌',
		'イザヤ書',
		'エレミヤ書',
		'哀歌',
		'エゼキエル書',
		'ダニエル書',
		'ホセア書',
		'ヨエル書',
		'アモス書',
		'オバデヤ書',
		'ヨナ書',
		'ミカ書',
		'ナホム書',
		'ハバクク書',
		'ゼパニヤ書',
		'ハガイ書',
		'ゼカリヤ書',
		'マラキ書',
		'マタイによる福音書',
		'マルコによる福音書',
		'ルカによる福音書',
		'ヨハネによる福音書',
		'使徒行伝',
		'ローマ人への手紙',
		'コリント人への第一の手紙',
		'コリント人への第二の手紙',
		'ガラテヤ人への手紙',
		'エペソ人への手紙',
		'ピリピ人への手紙',
		'コロサイ人への手紙',
		'テサロニケ人への第一の手紙',
		'テサロニケ人への第二の手紙',
		'テモテへの第一の手紙',
		'テモテへの第二の手紙',
		'テトスへの手紙',
		'ピレモンへの手紙',
		'ヘブル人への手紙',
		'ヤコブの手紙',
		'ペテロの第一の手紙',
		'ペテロの第二の手紙',
		'ヨハネの第一の手紙',
		'ヨハネの第二の手紙',
		'ヨハネの第三の手紙',
		'ユダの手紙',
		'ヨハネの黙示録',
	],
	kek: bible.Data.allBooks,
	kk: [
		'Жаратылыстың баст.',
		'Мысырдан шығу',
		'Леуіліктер',
		'Руларды санау',
		'Заңды қайталау',
		'Ешуа',
		'Билер',
		'Рут',
		'Патшалықтар 1-ж.',
		'Патшалықтар 2-ж.',
		'Патшалықтар 3-ж.',
		'Патшалықтар 4-ж.',
		'Шежірелер 1-ж.',
		'Шежірелер 2-ж.',
		'Езра',
		'Нехемия',
		'Естер',
		'Әйүп',
		'Забур жырлары',
		'Нақыл сөздер',
		'Уағыздаушы',
		'Таңдаулы ән',
		'Ишая',
		'Еремия',
		'Жоқтау',
		'Езекиел',
		'Даниял',
		'Ошия',
		'Амос',
		'Миха',
		'Жоел',
		'Абди',
		'Жүніс',
		'Нақұм',
		'Аббақұқ',
		'Софония',
		'Хаққай',
		'Зәкәрия',
		'Малахи',
		'Матай',
		'Марқа',
		'Лұқа',
		'Жохан',
		'Елшіл. істері',
		'Жақыптың хаты',
		'Петірдің 1-хаты',
		'Петірдің 2-хаты',
		'Жоханның 1-хаты',
		'Жоханның 2-хаты',
		'Жоханның 3-хаты',
		'Яһуданың хаты',
		'Римдіктерге хат',
		'Қорынттықт. 1-хат',
		'Қорынттықт. 2-хат',
		'Ғалаттықт. хат',
		'Ефестікт. хат',
		'Філіпілікт. хат',
		'Қолостықт. хат',
		'Салониқал. 1-хат',
		'Салониқал. 2-хат',
		'Тімотеге 1-хат',
		'Тімотеге 2-хат',
		'Титке хат',
		'Філимонға хат',
		'Еврейлерге хат',
		'Аян',
	],
	km: [
		// Old Testament (ពុទ្ធបុរី)
		'ចាប់ផ្តើម',
		'ចេញ',
		'លេវី',
		'ជំនួស',
		'កំណត់',
		'យ៉ូស្វា',
		'តុលាការ',
		'រ៉ូថ',
		'១ សាម៊ុយល',
		'២ សាម៊ុយល',
		'១ ព្រះរាជក្សត្រ',
		'២ ព្រះរាជក្សត្រ',
		'១ ព្រឹត្តិកម្ម',
		'២ ព្រឹត្តិកម្ម',
		'អេស្រា',
		'នេហេមា',
		'អេសថេរ',
		'យុប',
		'សាលុម',
		'ប្រាជ្ញាចិត្ត',
		'អ្នកជួបប្រទះ',
		'ចំរ៉ូញ',
		'អេសាយា',
		'យេរ៉េមីយ៉ា',
		'តុក្កតា',
		'ហ្សេគីល',
		'ដានីយ៉ែល',
		'ហូសេ',
		'យ៉ូអែល',
		'អាម៉ូស',
		'អូបាឌា',
		'យូណា',
		'ម៉ាឃេ',
		'ណាហ៊ុំ',
		'ហាប៉ាកូក',
		'សេហ្វានី',
		'ហ្គាៃ',
		'សាឃារ៉ា',
		'ម៉ាឡាគី',

		// New Testament (ព្រះគម្ពីរថ្មី)
		'ម៉ាថាយ',
		'ម៉ាកុស',
		'លុក្កាស់',
		'យ៉ូហាន',
		'សកម្មភាពរបស់អាពូស្ដល',
		'រូម',
		'១ កូរីនថូស',
		'២ កូរីនថូស',
		'ហ្គាឡាត',
		'អេហ្វេសុីយ៉ា',
		'ភីលីភី',
		'កូឡូស',
		'១ ធេសសាឡូនីខ',
		'២ ធេសសាឡូនីខ',
		'១ ទីមុទេ',
		'២ ទីមុទេ',
		'ទីទុស',
		'ផីលីមុន',
		'ហេប្រី',
		'យ៉ាកុប',
		'១ ពេត្រ',
		'២ ពេត្រ',
		'១ យូហាន',
		'២ យូហាន',
		'៣ យូហាន',
		'ជូដា',
		'បញ្ជាផ្តាច់ក្តី',
	],
	ko: [
		'창세기',
		'출애굽기',
		'레위기',
		'민수기',
		'신명기',
		'여호수아',
		'사사기',
		'룻기',
		'사무엘상',
		'사무엘하',
		'열왕기상',
		'열왕기하',
		'역대상',
		'역대하',
		'에스라',
		'느헤미야',
		'에스더',
		'욥기',
		'시편',
		'잠언',
		'전도서',
		'아가',
		'이사야',
		'예레미야',
		'예레미야애가',
		'에스겔',
		'다니엘',
		'호세아',
		'요엘',
		'아모스',
		'오바댜',
		'요나',
		'미가',
		'나훔',
		'하박국',
		'스바냐',
		'학개',
		'스가랴',
		'말라기',
		'마태복음',
		'마가복음',
		'누가복음',
		'요한복음',
		'사도행전',
		'로마서',
		'고린도전서',
		'고린도후서',
		'갈라디아서',
		'에베소서',
		'빌립보서',
		'골로새서',
		'데살로니가전서',
		'데살로니가후서',
		'디모데전서',
		'디모데후서',
		'디도서',
		'빌레몬서',
		'히브리서',
		'야고보서',
		'베드로전서',
		'베드로후서',
		'요한일서',
		'요한이서',
		'요한삼서',
		'유다서',
		'요한계시록',
	],
	kpl: bible.Data.allBooks, // TODO
	ksw: [
		// Old Testament (ကညီၣ်ဃါတၢ်)
		'ဖွားမြင်ခြင်း',
		'ထွက်ခြင်း',
		'ဝေးတော်',
		'စာရင်းတော်',
		'အတည်ပြု',
		'ယောရှွား',
		'တရားသူကြီး',
		'ရုသ',
		'၁ ဆာမွဲလ',
		'၂ ဆာမွဲလ',
		'၁ မင်းသား',
		'၂ မင်းသား',
		'၁ ထောက်ပြော',
		'၂ ထောက်ပြော',
		'အဲဇရာ',
		'နီဟမီးယား',
		'အက်သေ့တာ',
		'ဥဘ',
		'သီချင်းများ',
		'ပညာရှင်များ',
		'ရှင်ဘဝ',
		'သမ္မာဝတီ',
		'အေးရှာ',
		'ယဲရဲမိအာ',
		'ဖမ်းတားများ',
		'အိဇီကီယယ်',
		'ဒန္နီရယ်',
		'ဟိုးဆေ',
		'ဂျိုအဲလ်',
		'အမိုက်',
		'အိုဘဒိယ',
		'ယူနာ',
		'မိခါ',
		'နာဟုမ်း',
		'ဟာဘကူး',
		'စဲဖနီယား',
		'ဟဂါ',
		'ဇာခရိယာ',
		'မလခီယာ',

		// New Testament (သစ္စာစာအုပ်)
		'မက်သိယု',
		'မာတ်ကုစ်',
		'လုက',
		'ယိုဟန်',
		'မင်းတရားအမှု',
		'ရိုမိယာ',
		'၁ ကိုရိန်တံ',
		'၂ ကိုရိန်တံ',
		'ဂါလါတီယာ',
		'အဲဖီရှိုင်း',
		'ဖီလစ်ပိုင်',
		'ကိုလိုစီယာ',
		'၁ ထက်ဆလိုနီကာ',
		'၂ ထက်ဆလိုနီကာ',
		'၁ တီမိုးသာ',
		'၂ တီမိုးသာ',
		'တီတပ်',
		'ဖီလီမွန်',
		'ဟိဘရွေ့',
		'ယာကုပ်',
		'၁ ပီတာ',
		'၂ ပီတာ',
		'၁ ယိုဟန်',
		'၂ ယိုဟန်',
		'၃ ယိုဟန်',
		'ယူဒါ',
		'သတိပြုခြင်း',
	],
	la: [
		'Genesis',
		'Exodus',
		'Leviticus',
		'Numeri',
		'Deuteronomium',
		'Josue',
		'Judicum',
		'Ruth',
		'Regum I',
		'Regum II',
		'Regum III',
		'Regum IV',
		'Paralipomenon I',
		'Paralipomenon II',
		'Esdræ',
		'Nehemiæ',
		'Esther',
		'Job',
		'Psalmi',
		'Proverbia',
		'Ecclesiastes',
		'Canticum Canticorum',
		'Isaias',
		'Jeremias',
		'Lamentationes',
		'Ezechiel',
		'Daniel',
		'Osee',
		'Joël',
		'Amos',
		'Abdias',
		'Jonas',
		'Michæa',
		'Nahum',
		'Habacuc',
		'Sophonias',
		'Aggæus',
		'Zacharias',
		'Malachias',
		'Matthæus',
		'Marcus',
		'Lucas',
		'Joannes',
		'Actus Apostolorum',
		'ad Romanos',
		'ad Corinthios I',
		'ad Corinthios II',
		'ad Galatas',
		'ad Ephesios',
		'ad Philippenses',
		'ad Colossenses',
		'ad Thessalonicenses I',
		'ad Thessalonicenses II',
		'ad Timotheum I',
		'ad Timotheum II',
		'ad Titum',
		'ad Philemonem',
		'ad Hebræos',
		'Jacobi',
		'Petri I',
		'Petri II',
		'Joannis I',
		'Joannis II',
		'Joannis III',
		'Judæ',
		'Apocalypsis',
	],
	ln: bible.Data.allBooks, // TODO
	lt: [
		'Pradžios',
		'Išėjimo',
		'Kunigų',
		'Skaičių',
		'Pakartoto Įstatymo',
		'Jozuės',
		'Teisėjų',
		'Rūtos',
		'1 Samuelio',
		'2 Samuelio',
		'1 Karalių',
		'2 Karalių',
		'1 Metraščių',
		'2 Metraščių',
		'Ezros',
		'Nehemijo',
		'Esteros',
		'Jobo',
		'Psalmynas',
		'Patarlės',
		'Mokytojo',
		'Giesmių giesmės',
		'Izaijo',
		'Jeremijo',
		'Raudų',
		'Ezechielio',
		'Danieliaus',
		'Ozėjo',
		'Joelio',
		'Amoso',
		'Abdijo',
		'Jonos',
		'Michėjo',
		'Nahumo',
		'Habakuko',
		'Sofonijo',
		'Agėjo',
		'Zacharijo',
		'Malachijo',
		'Tobito',
		'Juditos',
		'Esteros (graikiškoji)',
		'1 Makabiejų',
		'2 Makabiejų',
		'Išminties',
		'Siracido',
		'Barucho',
		'Danieliaus (graikiškieji)',
		'Mato',
		'Morkaus',
		'Luko',
		'Jono',
		'Apaštalų darbai',
		'Romiečiams',
		'1 Korintiečiams',
		'2 Korintiečiams',
		'Galatams',
		'Efeziečiams',
		'Filipiečiams',
		'Kolosiečiams',
		'1 Tesalonikiečiams',
		'2 Tesalonikiečiams',
		'1 Timotiejui',
		'2 Timotiejui',
		'Titui',
		'Filemonui',
		'Hebrajams',
		'Jokūbo',
		'1 Petro',
		'2 Petro',
		'1 Jono',
		'2 Jono',
		'3 Jono',
		'Judo',
		'Apreiškimas',
	],
	luo: [
		'Chakruok',
		'Wuok',
		'Tim jo-Lawi',
		'Kwan',
		'Rapar mar Chik',
		'Joshua',
		'Jong’ad Bura',
		'Ruth',
		'1 Samuel',
		'2 Samuel',
		'1 Ruodhi',
		'2 Ruodhi',
		'1 Weche mag Ndalo',
		'2 Weche mag Ndalo',
		'Ezra',
		'Nehemia',
		'Tobit',
		'Judith',
		'Esta, kod weche moko momedie',
		'1 Jo-Makabayo',
		'2 Jo-Makabayo',
		'Ayub',
		'Zaburi',
		'Ngeche',
		'Eklesiastes',
		'Wer Mamit Moloyo Wende Moko Duto',
		'Rieko',
		'Eklesiastikus',
		'Isaya',
		'Jeremia',
		'Ywagruok',
		'Baruk',
		'Ezekiel',
		'Daniel',
		'Hosea',
		'Joel',
		'Amos',
		'Obadia',
		'Jona',
		'Mika',
		'Nahum',
		'Habakuk',
		'Zefania',
		'Hagai',
		'Zekaria',
		'Malaki',
		'Mathayo',
		'Mariko',
		'Luka',
		'Johana',
		'Tich Joote',
		'Jo-Rumi',
		'1 Jo-Korintho',
		'2 Jo-Korintho',
		'Jo-Galatia',
		'Jo-Efeso',
		'Jo-Filipi',
		'Jo-Kolosai',
		'1 Jo-Thesalonika',
		'2 Jo-Thesalonika',
		'1 Timotheo',
		'2 Timotheo',
		'Tito',
		'Filemon',
		'Jo-Hibrania',
		'Jakobo',
		'1 Petro',
		'2 Petro',
		'1 Johana',
		'2 Johana',
		'3 Johana',
		'Juda',
		'Fweny',
	],
	lv: [
		'1. Mozus',
		'2. Mozus',
		'3. Mozus',
		'4. Mozus',
		'5. Mozus',
		'Jozuas',
		'Soģu',
		'Rutes',
		'1. Samuēla',
		'2. Samuēla',
		'1. Ķēniņu',
		'2. Ķēniņu',
		'1. Laiku',
		'Otrā Laiku',
		'Ezras',
		'Nehemijas',
		'Esteres',
		'Ījaba',
		'Psalmi',
		'Salamana Pamācības',
		'Salamans mācītājs',
		'Augstā dziesma',
		'Jesajas',
		'Jeremijas',
		'Raudu dziesmas',
		'Ecēhiēla',
		'Daniēla',
		'Hozejas',
		'Joēla',
		'Amosa',
		'Obadjas',
		'Jonas',
		'Mihas',
		'Nahuma',
		'Habakuka',
		'Cefanjas',
		'Hagaja',
		'Caharijas',
		'Maleahija',
		'Mateja',
		'Marka',
		'Lūkas',
		'Jāņa',
		'Apustuļu darbi',
		'Romiešiem',
		'1. korintiešiem',
		'2. korintiešiem',
		'Galatiešiem',
		'Efeziešiem',
		'Filipiešiem',
		'Kolosiešiem',
		'1. Tesaloniķiešiem',
		'2. Tesaloniķiešiem',
		'1. Timotejam',
		'2. Timotejam',
		'Titam',
		'Filemonam',
		'Ebrejiem',
		'Jēkaba',
		'1. Pētera',
		'2. Pētera',
		'1. Jāņa',
		'2. Jāņa',
		'3. Jāņa',
		'Jūdas',
		'Jāņa atklāsmes',
	],
	lzh: [
		'創世記',
		'出埃及記',
		'利未記',
		'民數紀畧',
		'申命記',
		'約書亞記',
		'士師記',
		'路得記',
		'撒母耳記上',
		'撒母耳記下',
		'列王紀畧上',
		'列王紀畧下',
		'歷代志畧上',
		'歷代志畧下',
		'以士喇紀',
		'尼希米紀',
		'以士帖紀',
		'約百紀',
		'詩篇',
		'箴言',
		'傳道',
		'雅歌',
		'以賽亞書',
		'耶利米書',
		'耶利米哀歌',
		'以西結書',
		'但以理書',
		'何西書',
		'約耳書',
		'亞麽士書',
		'阿巴底書',
		'約拿書',
		'米迦書',
		'拿翁書',
		'哈巴谷書',
		'西番雅書',
		'哈基書',
		'撒加利亞書',
		'馬拉基書',
		'馬太福音傳',
		'馬可福音傳',
		'路加福音傳',
		'約翰福音傳',
		'使徒行傳',
		'使徒保羅達羅馬人書',
		'使徒保羅達哥林多人前書',
		'使徒保羅達哥林多人後書',
		'使徒保羅達加拉太人書',
		'使徒保羅達以弗所人書',
		'使徒保羅達腓立比人書',
		'使徒保羅達哥羅西人書',
		'使徒保羅達帖撒羅尼迦人前書',
		'使徒保羅達帖撒羅尼迦人後書',
		'使徒保羅達提摩太前書',
		'使徒保羅達提摩太後書',
		'使徒保羅達提多書',
		'使徒保羅達腓利門書',
		'使徒保羅達希伯來人書',
		'使徒雅各書',
		'使徒彼得前書',
		'使徒彼得後書',
		'使徒約翰第一書',
		'使徒約翰第二書',
		'使徒約翰第三書',
		'使徒猶大書',
		'使徒約翰默示錄',
	],
	mal: [
		'ഉല്പ.',
		'പുറ.',
		'ലേവ്യ.',
		'സംഖ്യ.',
		'ആവർ.',
		'യോശുവ',
		'ന്യായാ.',
		'രൂത്ത്',
		'1 ശമു.',
		'2 ശമു.',
		'1 രാജാ.',
		'2 രാജാ.',
		'1 ദിന.',
		'2 ദിന.',
		'എസ്രാ',
		'നെഹെ.',
		'എസ്ഥേ.',
		'ഇയ്യോ.',
		'സങ്കീ.',
		'സദൃ.',
		'സഭാ.',
		'ഉത്ത.',
		'യെശ.',
		'യിരെ.',
		'വിലാ.',
		'യെഹെ.',
		'ദാനീ.',
		'ഹോശേ.',
		'യോവേ.',
		'ആമോ.',
		'ഓബ.',
		'യോനാ',
		'മീഖാ',
		'നഹൂം',
		'ഹബ.',
		'സെഫ.',
		'ഹഗ്ഗാ.',
		'സെഖ.',
		'മലാ.',
		'മത്താ.',
		'മർക്കൊ.',
		'ലൂക്കൊ.',
		'യോഹ.',
		'പ്രവൃത്തികൾ',
		'റോമ.',
		'1 കൊരി.',
		'2 കൊരി.',
		'ഗലാ.',
		'എഫെ.',
		'ഫിലി.',
		'കൊലൊ.',
		'1 തെസ്സ.',
		'2 തെസ്സ.',
		'1 തിമൊ.',
		'2 തിമൊ.',
		'തീത്തൊ.',
		'ഫിലേ.',
		'എബ്രാ.',
		'യാക്കോ.',
		'1 പത്രൊ.',
		'2 പത്രൊ.',
		'1 യോഹ.',
		'2 യോഹ.',
		'3 യോഹ.',
		'യൂദാ',
		'വെളി.',
	],
	mg: [
		// Testamenta Taloha (Old Testament)
		'Genesisy',
		'Eksodosy',
		'Levitikosy',
		'Nomery',
		'Deoteronomia',
		'Josoa',
		'Mpitsara',
		'Rota',
		'1 Samoela',
		'2 Samoela',
		'1 Mpanjaka',
		'2 Mpanjaka',
		'1 Tantara',
		'2 Tantara',
		'Ezra',
		'Nehemia',
		'Ester',
		'Joba',
		'Salamo',
		'Ohabolana',
		'Mpitoriteny',
		"Hira an'i Solomona",
		'Isikaia',
		'Jeremia',
		'Fitarainana',
		'Ezekiela',
		'Daniela',
		'Oseia',
		'Joel',
		'Amosa',
		'Abadia',
		'Jona',
		'Mika',
		'Nahuma',
		'Habakoka',
		'Zefania',
		'Agai',
		'Zakaria',
		'Malakia',

		// Testamenta Vaovao (New Testament)
		'Matio',
		'Marka',
		'Lioka',
		'Jaona',
		"Asan'ny Apostoly",
		'Romana',
		'1 Korintiana',
		'2 Korintiana',
		'Galatiana',
		'Efesiana',
		'Filipiana',
		'Kolosiana',
		'1 Tesaloniana',
		'2 Tesaloniana',
		'1 Timoty',
		'2 Timoty',
		'Tito',
		'Filemona',
		'Hebreo',
		'Jakoba',
		'1 Petera',
		'2 Petera',
		'1 Jaona',
		'2 Jaona',
		'3 Jaona',
		'Joda',
		'Apokalipsy',
	],
	mi: [
		// Pae Tera (Old Testament)
		'Mātāmua',
		'Ihixodo',
		'Levitiko',
		'Tātaritanga',
		'Tēneti',
		'Hohepa',
		'Kaiwero',
		'Rūtha',
		'1 Hāmiora',
		'2 Hāmiora',
		'1 Kingi',
		'2 Kingi',
		'1 Rongoā',
		'2 Rongoā',
		'Esra',
		'Nehemia',
		'Esthera',
		'Iopu',
		'Pāramata',
		'Whakamanamana',
		'Kohelete',
		'Pātea o Hōri',
		'Izaia',
		'Heremia',
		'Rūpū',
		'Hesekiela',
		'Tāniera',
		'Hosea',
		'Hoera',
		'Amosa',
		'Obadia',
		'Hōna',
		'Mika',
		'Nāhumu',
		'Habakuka',
		'Hosea',
		'Haggai',
		'Zekaria',
		'Mākarī',

		// Pae Hou (New Testament)
		'Matiu',
		'Māka',
		'Ruka',
		'Iōhāna',
		'Mātēra o ngā Āpostoro',
		'Roma',
		'1 Korinetia',
		'2 Korinetia',
		'Karatia',
		'Epehia',
		'Hiripī',
		'Korosiana',
		'1 Tēra rōpū',
		'2 Tēra rōpū',
		'1 Timoti',
		'2 Timoti',
		'Tito',
		'Pheremona',
		'Hiperu',
		'Hākopa',
		'1 Pētera',
		'2 Pētera',
		'1 Iōhāna',
		'2 Iōhāna',
		'3 Iōhāna',
		'Iuda',
		'Apokalipsi',
	],
	mn: [
		// Хуучин гэрээ (Old Testament)
		'Нүүрс',
		'Гарсан',
		'Левитийн ном',
		'Дугаар',
		'Давталт',
		'Иешүа',
		'Шүүгчид',
		'Рут',
		'1 Самуел',
		'2 Самуел',
		'1 Хаадын ном',
		'2 Хаадын ном',
		'1 Түүхийн ном',
		'2 Түүхийн ном',
		'Эсра',
		'Нехемиа',
		'Эсфирь',
		'Иов',
		'Дуулал',
		'Намтар',
		'Тамир',
		'Хаадын Хөндлөн',
		'Исаиа',
		'Еремиа',
		'Гомдол',
		'Езекиел',
		'Даниел',
		'Хосеа',
		'Жоел',
		'Амос',
		'Абдиа',
		'Иона',
		'Мика',
		'Нахум',
		'Хабакук',
		'Зепаня',
		'Агай',
		'Захариа',
		'Малахи',

		// Шинэ гэрээ (New Testament)
		'Матай',
		'Марк',
		'Лука',
		'Иоанн',
		'Тамир Төв',
		'Ромчууд',
		'1 Коринтчууд',
		'2 Коринтчууд',
		'Галатчууд',
		'Эфесиуд',
		'Филиппичүүд',
		'Колосчуд',
		'1 Тесалоникчид',
		'2 Тесалоникчид',
		'1 Тимотей',
		'2 Тимотей',
		'Тит',
		'Филимон',
		'Еврейчүүд',
		'Яков',
		'1 Петр',
		'2 Петр',
		'1 Иоанн',
		'2 Иоанн',
		'3 Иоанн',
		'Иуда',
		'Тамир илчлэлт',
	],
	my: [
		// ပုရုံကျမ်း (Old Testament)
		'စတုရန်း',
		'ထွက်ခြင်း',
		'လေးဝတ်',
		'အရေအတွက်',
		'ဒုတိယစာ',
		'ယေရှု',
		'တရားသူကြီး',
		'ရုသ',
		'၁ ဆာမွဲလ',
		'၂ ဆာမွဲလ',
		'၁ ဘုရင်',
		'၂ ဘုရင်',
		'၁ ရွတ်တော်',
		'၂ ရွတ်တော်',
		'အက်ဇရာ',
		'နီဟမီးယား',
		'အက်သေ့တာ',
		'ယုဘ',
		'သီချင်းများ',
		'ပညာရွေး',
		'မေတ္တာ',
		'ဘုရားရေးရာ',
		'အိဇေကီယဲလ်',
		'ဒနီအဲလ်',
		'ဟိုးဆေ',
		'ဂျိုးလ်',
		'အမိုးစ်',
		'အိုဘဒိယ',
		'ယုနာ',
		'မိခါ',
		'နာဟုမ်း',
		'ဟာဘကူး',
		'စီဖနီယာ',
		'ဟေဂါ',
		'ဇာခရိယာ',
		'မလခီယာ',

		// သစ္စာကျမ်း (New Testament)
		'မတည်းဝ',
		'မာ့ကုစ်',
		'လုက',
		'ယိုဟန်',
		'အာပို့စ်တော်များရဲ့အလုပ်များ',
		'ရိုမိယာ',
		'၁ ကိုရင်သျား',
		'၂ ကိုရင်သျား',
		'ဂါလတီယာ',
		'အဲဖီရှီယာ',
		'ဖီလစ်ပိုင်',
		'ကိုလိုဆီယာ',
		'၁ ထက်ဆလိုနီကာ',
		'၂ ထက်ဆလိုနီကာ',
		'၁ တီမိုးသီ',
		'၂ တီမိုးသီ',
		'တီတပ်',
		'ဖီလီမွန်',
		'ဟိဘရွေ',
		'ယာကုပ်',
		'၁ ပီတာ',
		'၂ ပီတာ',
		'၁ ယိုဟန်',
		'၂ ယိုဟန်',
		'၃ ယိုဟန်',
		'ဂျုဒပ်',
		'အေရှာတော်',
	],
	nb: [
		'1 Mosebok',
		'2 Mosebok',
		'3 Mosebok',
		'4 Mosebok',
		'5 Mosebok',
		'Josva',
		'Dommerne',
		'Rut',
		'1 Samuel',
		'2 Samuel',
		'1 Kongebok',
		'2 Kongebok',
		'1 Krønikebok',
		'2 Krønikebok',
		'Esra',
		'Nehemja',
		'Ester',
		'Job',
		'Salmene',
		'Salomos Ordspråk',
		'Forkynneren',
		'Høysangen',
		'Jesaja',
		'Jeremia',
		'Klagesangene',
		'Esekiel',
		'Daniel',
		'Hosea',
		'Joel',
		'Amos',
		'Obadja',
		'Jona',
		'Mika',
		'Nahum',
		'Habakkuk',
		'Sefanja',
		'Haggai',
		'Sakarja',
		'Malaki',
		'Matteus',
		'Markus',
		'Lukas',
		'Johannes',
		'Apostlenes gjerninger',
		'Romerne',
		'1 Korinter',
		'2 Korinter',
		'Galaterne',
		'Efeserne',
		'Filipperne',
		'Kolosserne',
		'1 Tessaloniker',
		'2 Tessaloniker',
		'1 Timoteus',
		'2 Timoteus',
		'Titus',
		'Filemon',
		'Hebreerne',
		'Jakob',
		'1 Peter',
		'2 Peter',
		'1 Johannes',
		'2 Johannes',
		'3 Johannes',
		'Judas',
		'Åpenbaringen',
	],
	nd: [
		'UGenesisi',
		'U-Eksodusi',
		'ULevi',
		'Amanani',
		'UDutheronomi',
		'UJoshuwa',
		'Abahluleli',
		'URuthe',
		'1 USamuyeli',
		'2 USamuyeli',
		'1 Amakhosi',
		'2 Amakhosi',
		'1 Imilando',
		'2 Imilando',
		'U-Ezra',
		'UNehemiya',
		'U-Esta',
		'UJobe',
		'Amahubo',
		'Izaga',
		'UmTshumayeli',
		'Ingoma Yezingoma',
		'U-Isaya',
		'UJeremiya',
		'Izililo',
		'UHezekheli',
		'UDanyeli',
		'UHoseya',
		'UJoweli',
		'U-Amosi',
		'U-Obhadiya',
		'UJona',
		'UMikha',
		'UNahume',
		'UHabakhukhi',
		'UZefaniya',
		'UHagayi',
		'UZekhariya',
		'UMalaki',
		'UMathewu',
		'UMakho',
		'ULukha',
		'UJohane',
		'Imisebenzi',
		'KwabaseRoma',
		'1 KwabaseKhorinte',
		'2 Kwabasekhorinte',
		'KwabaseGalathiya',
		'Kwabase-Efesu',
		'KwabaseFiliphi',
		'KwabaseKholose',
		'1 KwabaseThesalonika',
		'2 KwabaseThesalonika',
		'1 KuThimothi',
		'2 KuThimothi',
		'KuThithusi',
		'UFilimoni',
		'KumaHebheru',
		'UJakhobe',
		'1 UPhetro',
		'2 UPhetro',
		'1 UJohane',
		'2 UJohane',
		'3 UJohane',
		'UJuda',
		'Isambulo',
	],
	nl: [
		'Genesis',
		'Exodus',
		'Leviticus',
		'Numeri',
		'Deuteronomium',
		'Jozua',
		'Richteren',
		'Ruth',
		'1 Samuel',
		'2 Samuel',
		'1 Koningen',
		'2 Koningen',
		'1 Kronieken',
		'2 Kronieken',
		'Ezra',
		'Nehemia',
		'Esther',
		'Job',
		'Psalm',
		'Spreuken',
		'Prediker',
		'Hooglied',
		'Jesaja',
		'Jeremia',
		'Klaagliederen',
		'Ezechiël',
		'Daniël',
		'Hosea',
		'Joël',
		'Amos',
		'Obadja',
		'Jona',
		'Micha',
		'Nahum',
		'Habakuk',
		'Zefanja',
		'Haggaï',
		'Zacharia',
		'Maleachi',
		'Mattheüs',
		'Markus',
		'Lukas',
		'Johannes',
		'Handelingen',
		'Romeinen',
		'1 Korinthe',
		'2 Korinthe',
		'Galaten',
		'Efeze',
		'Filippenzen',
		'Kolossenzen',
		'1 Thessalonicenzen',
		'2 Thessalonicenzen',
		'1 Timotheüs',
		'2 Timotheüs',
		'Titus',
		'Filemon',
		'Hebreeën',
		'Jakobus',
		'1 Petrus',
		'2 Petrus',
		'1 Johannes',
		'2 Johannes',
		'3 Johannes',
		'Judas',
		'Openbaring',
	],
	nn: [
		'1. Mosebok',
		'2. Mosebok',
		'3. Mosebok',
		'4. Mosebok',
		'5. Mosebok',
		'Josva',
		'Dommarane',
		'Rut',
		'1. Samuelsbok',
		'2. Samuelsbok',
		'1. Kongebok',
		'2. Kongebok',
		'1. Krønikebok',
		'2. Krønikebok',
		'Esra',
		'Nehemja',
		'Ester',
		'Job',
		'Salmane',
		'Ordtaka',
		'Forkynnaren',
		'Høgsongen',
		'Jesaja',
		'Jeremia',
		'Klagesongane',
		'Esekiel',
		'Daniel',
		'Hosea',
		'Joel',
		'Amos',
		'Obadja',
		'Jona',
		'Mika',
		'Nahum',
		'Habakkuk',
		'Sefanja',
		'Haggai',
		'Sakarja',
		'Malaki',
		'Matteus',
		'Markus',
		'Lukas',
		'Johannes',
		'Apostelgjerningane',
		'Romarane',
		'1. Korintar',
		'2. Korintar',
		'Galatarane',
		'Efesarane',
		'Filipparane',
		'Kolossarane',
		'1. Tessalonikar',
		'2. Tessalonikar',
		'1. Timoteus',
		'2. Timoteus',
		'Titus',
		'Filemon',
		'Hebrearane',
		'Jakob',
		'1. Peter',
		'2. Peter',
		'1. Johannes',
		'2. Johannes',
		'3. Johannes',
		'Judas',
		"Johannes' openberring",
	],
	pl: [
		'I Księga Mojżesza',
		'II Księga Mojżesza',
		'III Księga Mojżesza',
		'IV Księga Mojżesza',
		'V Księga Mojżesza',
		'Księga Jezusa syna Nuna',
		'Księga Sędziów',
		'Księga Rut',
		'1 Samuela',
		'2 Samuela',
		'Pierwsza Księga Królów',
		'Druga Księga Królów',
		'1 Kronik',
		'2 Kronik',
		'Księga Ezdrasza',
		'Księga Nehemiasza',
		'Księga Estery',
		'Księga Ijoba',
		'Księga Psalmów',
		'Przypowieści Salomona',
		'Księga Koheleta',
		'Pieśń nad pieśniami',
		'Księga Izajasza',
		'Księga Jeremiasza',
		'Treny',
		'Księga Ezechiela',
		'Księga Daniela',
		'Księga Ozeasza',
		'Księga Joela',
		'Księga Amosa',
		'Księga Abdjasza',
		'Księga Jonasza',
		'Księga Micheasza',
		'Ksiega Nahuma',
		'Księga Habakuka',
		'Księga Sofonjasza',
		'Księga Aggeusza',
		'Księga Zacharjasza',
		'Księga Malachjasza',
		'Ewangelia Mateusza',
		'Ewangelia Marka',
		'Ewangelia Łukasza',
		'Ewangelia Jana',
		'Dokonania apostołów',
		'List do Rzymian',
		'Pierwszy list do Koryntian',
		'Drugi list do Koryntian',
		'List do Galacjan',
		'List do Efezjan',
		'List do Filippian',
		'List do Kolosan',
		'Pierwszy list do Tesaloniczan',
		'Drugi list do Tesaloniczan',
		'Pierwszy list do Tymoteusza',
		'Drugi list do Tymoteusza',
		'List do Tytusa',
		'List do Filemona',
		'List do Hebrajczyków',
		'List Jakóba',
		'Pierwszy list Piotra',
		'Drugi list Piotra',
		'Pierwszy List Jana',
		'Drugi List Jana',
		'Trzeci List Jana',
		'List Judasa',
		'Objawienie spisane przez Jana',
	],
	pon: [
		'SENESIS',
		'EKSODUS',
		'LIPAI',
		'NEMPE KAN',
		'DEUDERONOMI',
		'SOSUA',
		'SOUNKOPWUNG KAN',
		'RUD',
		'1 SAMUEL',
		'2 SAMUEL',
		'1 NANMWARKI KAN',
		'2 NANMWARKI KAN',
		'1 KRONIKEL',
		'2 KRONIKEL',
		'ESRA',
		'NEHMAIA',
		'ESTER',
		'SOHP',
		'MELKAHKA KAN',
		'LEPIN PADAHK AUDAPAN KAN',
		'EKLESIASDES',
		'MELKAHKAHN MELKAHKA KAN',
		'AISEIA',
		'SEREMAIA',
		'KOULEN KEDEPWIDEPW KAN',
		'ESEKIEL',
		'DANIEL',
		'OSEIA',
		'JOEL',
		'EIMWOS',
		'OPADAIA',
		'SONA',
		'MAIKA',
		'NAHUM',
		'APAKUK',
		'SEPANAIA',
		'AKKAI',
		'SEKARAIA',
		'MALAKAI',
		'MADIU',
		'MARK',
		'LUK',
		'SOHN',
		'WIEWIA KAN',
		'ROM',
		'1 KORINT',
		'2 KORINT',
		'KALESIA',
		'EPISOS',
		'PILIPAI',
		'KOLOSE',
		'1 DESELONIKA',
		'DESELONIKA',
		'1 TIMOTY',
		'2 TIMOTY',
		'TAITUS',
		'PAILIMWON',
		'IPRU',
		'SEIMS',
		'1 PITER',
		'2 PITER',
		'1 SOHN',
		'2 SOHN',
		'3 SOHN',
		'SUD',
		'KAUDIAHL',
	],
	pot: [
		'Genesis',
		'Exodus',
		'Leviticus',
		'Numbers',
		'Deuteronomy',
		'Joshua',
		'Judges',
		'Ruth',
		'I Samuel',
		'II Samuel',
		'I Kings',
		'II Kings',
		'I Chronicles',
		'II Chronicles',
		'Ezra',
		'Nehemiah',
		'Esther',
		'Job',
		'Psalm',
		'Proverbs',
		'Ecclesiastes',
		'Song of Songs',
		'Isaiah',
		'Jeremiah',
		'Lamentations',
		'Ezekiel',
		'Daniel',
		'Hosea',
		'Joel',
		'Amos',
		'Obadiah',
		'Jonah',
		'Micah',
		'Nahum',
		'Habakkuk',
		'Zephaniah',
		'Haggai',
		'Zechariah',
		'Malachi',
		'Matthew',
		'Mark',
		'Luke',
		'John',
		'Acts',
		'Romans',
		'I Corinthians',
		'II Corinthians',
		'Galatians',
		'Ephesians',
		'Philippians',
		'Colossians',
		'I Thessalonians',
		'II Thessalonians',
		'I Timothy',
		'II Timothy',
		'Titus',
		'Philemon',
		'Hebrews',
		'James',
		'I Peter',
		'II Peter',
		'I John',
		'II John',
		'III John',
		'Jude',
		'Revelation',
	],
	ppk: bible.Data.allBooks, // TODO
	prs: [
		'پیدایش',
		'خروج',
		'لاویان',
		'اعداد',
		'تثنیه',
		'یوشع',
		'داوران',
		'روت',
		'اول سموئیل',
		'دوم سموئیل',
		'اول پادشاهان',
		'دوم پادشاهان',
		'اول تواریخ',
		'دوم تواریخ',
		'عِزرا',
		'نِحِمیا',
		'اِستَر',
		'ایوب',
		'مزامیر',
		'امثال سلیمان',
		'جامعه',
		'غزلِ غزلها',
		'اشعیا',
		'ارمیا',
		'سوگنامه',
		'حِزقیال',
		'دانیال',
		'هوشع',
		'یوئیل',
		'عاموس',
		'عوبَدیا',
		'یونس',
		'میکاه',
		'ناحوم',
		'حبَقوق',
		'سِفَنیا',
		'حجی',
		'زِکَریا',
		'ملاکی',
		'متی',
		'مرقُس',
		'لوقا',
		'یوحنا',
		'اعمال',
		'رومیان',
		'اول قرنتیان',
		'دوم قرنتیان',
		'غلاتیان',
		'اِفِسُسیان',
		'فیلپیان',
		'کولسیان',
		'اول تسالونیکیان',
		'دوم تسالونیکیان',
		'اول تیموتاوس',
		'دوم تیموتاوس',
		'تیتوس',
		'فِلیمون',
		'عبرانیان',
		'یعقوب',
		'اول پِترُس',
		'دوم پِترُس',
		'اول یوحنا',
		'دوم یوحنا',
		'سوم یوحنا',
		'یهودا',
		'مکاشفه',
	],
	pt: [
		'Génesis',
		'Êxodo',
		'Levítico',
		'Números',
		'Deuteronómio',
		'Josué',
		'Juízes',
		'Rute',
		'1 Samuel',
		'2 Samuel',
		'1 Reis',
		'2 Reis',
		'1 Crónicas',
		'2 Crónicas',
		'Esdras',
		'Neemias',
		'Ester',
		'Job',
		'Salmos',
		'Provérbios',
		'Eclesiastes',
		'Cântico de Salomão',
		'Isaías',
		'Jeremias',
		'Lamentações',
		'Ezequiel',
		'Daniel',
		'Oséias',
		'Joel',
		'Amós',
		'Obadias',
		'Jonas',
		'Miqueias',
		'Naum',
		'Habacuque',
		'Sofonias',
		'Ageu',
		'Zacarias',
		'Malaquias',
		'Mateus',
		'Marcos',
		'Lucas',
		'João',
		'Atos',
		'Romanos',
		'1 Coríntios',
		'2 Coríntios',
		'Gálatas',
		'Efésios',
		'Filipenses',
		'Colossenses',
		'1 Tessalonicenses',
		'2 Tessalonicences',
		'1 Timóteo',
		'2 Timóteo',
		'Tito',
		'Filémon',
		'Hebreus',
		'Tiago',
		'1 Pedro',
		'2 Pedro',
		'1 João',
		'2 João',
		'3 João',
		'Judas',
		'Apocalipse',
	],
	rmq: bible.Data.allBooks, // TODO
	ro: [
		'Geneza',
		'Exodul',
		'Leviticul',
		'Numeri',
		'Deuteronom',
		'Iosua',
		'Judecători',
		'Rut',
		'1 Samuel',
		'2 Samuel',
		'1 Regi',
		'2 Regi',
		'1 Cronici',
		'2 Cronici',
		'Ezra',
		'Neemia',
		'Estera',
		'Iov',
		'Psalmii',
		'Proverbe',
		'Eclesiastul',
		'Cântarea Cântărilor',
		'Isaia',
		'Ieremia',
		'Plângeri',
		'Ezechiel',
		'Daniel',
		'Osea',
		'Ioel',
		'Amos',
		'Obadia',
		'Iona',
		'Mica',
		'Naum',
		'Habacuc',
		'Ţefania',
		'Hagai',
		'Zaharia',
		'Maleahi',
		'Matei',
		'Marcu',
		'Luca',
		'Ioan',
		'Faptele Apostolilor',
		'Romani',
		'1 Corintieni',
		'2 Corintieni',
		'Galateni',
		'Efeseni',
		'Filipeni',
		'Coloseni',
		'1 Tesaloniceni',
		'2 Tesaloniceni',
		'1 Timotei',
		'2 Timotei',
		'Titus',
		'Filimon',
		'Evrei',
		'Iacov',
		'1 Petru',
		'2 Petru',
		'1 Ioan',
		'2 Ioan',
		'3 Ioan',
		'Iuda',
		'Apocalipsa',
	],
	ru: [
		'Бытие',
		'Исход',
		'Левит',
		'Числа',
		'Второзаконие',
		'Иисус Навин',
		'Судей',
		'Руфь',
		'I Царств',
		'II Царств',
		'III Царств',
		'IV Царств',
		'I Паралипоменон',
		'II Паралипоменон',
		'Эзра',
		'Неемия',
		'Эсфирь',
		'Иов',
		'Псалтырь',
		'Притчи',
		'Экклезиаст',
		'Песнь песней',
		'Исайя',
		'Иеремия',
		'Плач Иеремии',
		'Иезекииль',
		'Даниил',
		'Осия',
		'Амос',
		'Михей',
		'Иоиль',
		'Авдий',
		'Иона',
		'Наум',
		'Аввакум',
		'Софония',
		'Аггей',
		'Захария',
		'Малахия',
		'Матфей',
		'Марк',
		'Лука',
		'Иоанн',
		'Деяния',
		'Послание Иакова',
		'I Послание Петра',
		'II Послание Петра',
		'I Послание Иоанна',
		'II Послание Иоанна',
		'III Послание Иоанна',
		'Послание Иуды',
		'Послание Рим',
		'I Послание в Коринф',
		'II Послание в Коринф',
		'Послание в Галатию',
		'Послание в Эфес',
		'Послание в Филиппы',
		'Послание в Колоссы',
		'I Послание в Фессалонику',
		'II Послание в Фессалонику',
		'I Послание Тимофею',
		'II Послание Тимофею',
		'Послание Титу',
		'Послание Филимону',
		'Послание к евреям',
		'Откровение',
	],
	sl: [
		'Genezis',
		'Exodus',
		'Levitikus',
		'Numeri',
		'Deuteronómium',
		'Jozua',
		'Sudcov',
		'Rút',
		'Prvá Samuelova',
		'Druhá Samuelova',
		'Prvá kráľov',
		'Druhá kráľov',
		'Prvá kroník',
		'Druhá kroník',
		'Ezdráš',
		'Nehemiáš',
		'Ester',
		'Jób',
		'Žalmy',
		'Príslovia',
		'Kohelet — Kazateľ',
		'Veľpieseň',
		'Izaiáš',
		'Jeremiáš',
		'Náreky',
		'Ezechiel',
		'Daniel',
		'Ozeáš',
		'Joel',
		'Amos',
		'Abdiáš',
		'Jonáš',
		'Micheáš',
		'Nahum',
		'Habakuk',
		'Sofoniáš',
		'Aggeus',
		'Zachariáš',
		'Malachiáš',
		'Matúš',
		'Marek',
		'Lukáš',
		'Ján',
		'Skutky apoštolov',
		'Rimanom',
		'Prvý Korinťanom',
		'Druhý Korinťanom',
		'Galaťanom',
		'Efezanom',
		'Filipanom',
		'Kolosanom',
		'Prvý Tesaloničanom',
		'Druhý Tesaloničanom',
		'Prvý Timotejovi',
		'Druhý Timotejovi',
		'Títovi',
		'Filemonovi',
		'Hebrejom',
		'Jakubov',
		'Prvý Petrov',
		'Druhý Petrov',
		'Prvý Jánov',
		'Druhý Jánov',
		'Tretí Jánov',
		'Júdov',
		'Zjavenie Jána',
	],
	sml: [
		"Panagna'an",
		'Paglappas',
		'Leviticus',
		'Numbers',
		'Deuteronomy',
		'Joshua',
		'Maghuhukum',
		'Rūt',
		'1 Samwel',
		'2 Samwel',
		'1 Kings',
		'2 Kings',
		'1 Chronicles',
		'2 Chronicles',
		'Ezra',
		'Nehemiah',
		'Ester',
		'Job',
		'Kalangan',
		'Proverbs',
		'Ecclesiastes',
		'Song of Solomon',
		'Isaiah',
		'Jeremiah',
		'Lamentations',
		'Ezekiel',
		'Daniel',
		'Hosea',
		'Joel',
		'Amos',
		'Obadiah',
		'Yunus',
		'Micah',
		'Nahum',
		'Habakkuk',
		'Zephaniah',
		'Haggai',
		'Zechariah',
		'Malachi',
		'Matiyu',
		'Markus',
		'Lukas',
		'Yahiya',
		'Kahinangan',
		'Rōm',
		'1 Kurintu',
		'2 Kurintu',
		'Galatiya',
		'Epesos',
		'Pilipi',
		'Kolossa',
		'1 Tessaloneka',
		'2 Tessaloneka',
		'1 Timuti',
		'2 Timuti',
		'Titus',
		'Pilimun',
		'Hibrani',
		'Yakub',
		'1 Petros',
		'2 Petros',
		'1 Yahiya',
		'2 Yahiya',
		'3 Yahiya',
		'Judas',
		'Pamabukisan',
	],
	sn: [
		// Old Testament (Bhaibheri yeKare)
		'Genesi',
		'Kubuda',
		'Revhitiko',
		'Nhamba',
		'Dheuteronomio',
		'Joshua',
		'Vatongi',
		'Ruti',
		'1 Samueri',
		'2 Samueri',
		'1 Madzimambo',
		'2 Madzimambo',
		'1 Mabhuku eKronike',
		'2 Mabhuku eKronike',
		'Ezra',
		'Nehemia',
		'Esteri',
		'Jobho',
		'Psalms',
		'Zvirevo',
		'Muparidzi',
		'Rwiyo rwaSoromoni',
		'Isaya',
		'Jeremiya',
		'Kuchema',
		'Ezekieri',
		'Daniel',
		'Hosea',
		'Joeri',
		'Amosi',
		'Obadiya',
		'Jonah',
		'Mika',
		'Nahum',
		'Habakuki',
		'Zefaniya',
		'Haggai',
		'Zekaria',
		'Malaki',

		// New Testament (Bhaibheri yeTsva)
		'Mateu',
		'Marko',
		'Ruka',
		'Johani',
		'Mabasa eVapostori',
		'Varoma',
		'1 Korinthero',
		'2 Korinthero',
		'VaGaratia',
		'VaEfeso',
		'VaFilipi',
		'VaKolose',
		'1 VaTesaronika',
		'2 VaTesaronika',
		'1 Timoti',
		'2 Timoti',
		'Tito',
		'Filemona',
		'VaHebheru',
		'Jakobho',
		'1 Petro',
		'2 Petro',
		'1 Johani',
		'2 Johani',
		'3 Johani',
		'Juda',
		'Chivheneko',
	],
	so: [
		'BILOWGII',
		'BAXNIINTII',
		'LAAWIYIINTII',
		'TIRINTII',
		'SHARCIGA KUNOQOSHADIISA',
		'YASHUUCA',
		'XAAKINNADA',
		'RUUD',
		"SAMUU'EEL KOWAAD",
		"SAMUU'EEL LABAAD",
		'BOQORRADII KOWAAD',
		'BOQORRADII LABAAD',
		'TAARIIKHDII KOWAAD',
		'TAARIIKHDII LABAAD',
		'CESRAA',
		'NEXEMYAAH',
		'ESTEER',
		'AYUUB',
		'SABUURRADII',
		'MAAHMAAHYADII',
		'WACDIYAHII',
		'GABAYGII SULAYMAAN',
		'ISHACYAAH',
		'YEREMYAAH',
		'BAROORASHADII YEREMYAAH',
		'YEXESQEEL',
		'DAANYEEL',
		'HOOSHEECA',
		"YOO'EEL",
		'CAAMOOS',
		'COBADYAAH',
		'YOONIS',
		'MIIKAAH',
		'NAXUUM',
		'XABAQUUQ',
		'SEFANYAAH',
		'XAGGAY',
		'SEKARYAAH',
		'MALAAKII',
		'MATAYOS',
		'MARKOS',
		'LUUKOS',
		'YOOXANAA',
		'FALIMAHA RASUULLADA',
		'ROOMA',
		'1 KORINTOS',
		'2 KORINTOS',
		'GALATIYA',
		'EFESOS',
		'FILIBOY',
		'KOLOSAY',
		'1 TESALONIIKA',
		'2 TESALONIIKA',
		'1 TIMOTEYOS',
		'2 TIMOTEYOS',
		'TIITOS',
		'FILEMON',
		'CIBRAANIYADA',
		'YACQUUB',
		'1 BUTROS',
		'2 BUTROS',
		'1 YOOXANAA',
		'2 YOOXANAA',
		'3 YOOXANAA',
		'YUUDAS',
		'MUUJINTII',
	],
	sq: [
		'Zanafilla',
		'Eksodi',
		'Levitiku',
		'Numrat',
		'Ligji i Përtërirë',
		'Jozueu',
		'Gjyqtarët',
		'Ruthi',
		'1 i Samuelit',
		'2 i Samuelit',
		'1 i Mbretërve',
		'2 i Mbretërve',
		'1 i Kronikave',
		'2 i Kronikave',
		'Esdra',
		'Nehemia',
		'Ester',
		'Jobi',
		'Psalmet',
		'Fjalët e urta',
		'Predikuesi',
		'Kantiku i Kantikëve',
		'Isaia',
		'Jeremia',
		'Vajtimet',
		'Ezekieli',
		'Danieli',
		'Osea',
		'Joeli',
		'Amosi',
		'Abdia',
		'Jona',
		'Mikea',
		'Nahumi',
		'Habakuku',
		'Sofonia',
		'Hagai',
		'Zakaria',
		'Malakia',
		'Mateu',
		'Marku',
		'Luka',
		'Gjoni',
		'Veprat e Apostujve',
		'Romakëve',
		'1 e Korintasve',
		'2 e Korintasve',
		'Galatasve',
		'Efesianëve',
		'Filipianëve',
		'Kolosianëve',
		'1 Thesalonikasve',
		'2 Thesalonikasve',
		'1 Timoteut',
		'2 Timoteut',
		'Titi',
		'Filemonit',
		'Hebrenjve',
		'Jakobit',
		'1 Pjetrit',
		'2 Pjetrit',
		'1 Gjonit',
		'2 Gjonit',
		'3 Gjonit',
		'Juda',
		'Zbulesa',
	],
	rs: [
		'1. Мојсијева',
		'2. Мојсијева',
		'3. Мојсијева',
		'4. Мојсијева',
		'5. Мојсијева',
		'Књига Исуса Навина',
		'Књига о судијама',
		'Књига о Рути',
		'1. Књига Самуилова',
		'2. Књига Самуилова',
		'1. Књига о царевима',
		'2. Књига о царевима',
		'1. Књига дневника',
		'2. Књига дневника',
		'Јездрина',
		'Књига Немијина',
		'Књига о Јестири',
		'Књига о Јову',
		'Псалми',
		'Приче Соломонове',
		'Књига проповедникова',
		'Песма над песмама',
		'Књига пророка Исаије',
		'Књига пророка Јеремије',
		'Плач Јеремијин',
		'Књига пророка Језекиља',
		'Књига пророка Данила',
		'Књига пророка Осије',
		'Књига пророка Јоила',
		'Књига пророка Амоса',
		'Књига пророка Авдије',
		'Књига пророка Јоне',
		'Књига пророка Михеја',
		'Књига пророка Наума',
		'Књига пророка Авакума',
		'Књига пророка Софоније',
		'Књига пророка Агеја',
		'Књига пророка Захарије',
		'Књига пророка Малахије',
		'Матеј',
		'Марко',
		'Лука',
		'Јован',
		'Дела апостолска',
		'Римљанима',
		'1. Коринћанима',
		'2. Коринћанима',
		'Галатима',
		'Ефесцима',
		'Филипљанима',
		'Колошанима',
		'1. Солуњанима',
		'2. Солуњанима',
		'1. Тимотеју',
		'2. Тимотеју',
		'Титу',
		'Филимону',
		'Јеврејима',
		'Јаковљева',
		'1. Петрова',
		'2. Петрова',
		'1. Јованова',
		'2. Јованова',
		'3. Јованова',
		'Јудина',
		'Откривење',
	],
	sv: [
		'Första Moseboken',
		'Andra Moseboken',
		'Tredje Moseboken',
		'Fjärde Moseboken',
		'Femte Moseboken',
		'Josua',
		'Domarboken',
		'Rut',
		'Första Samuelsboken',
		'Andra Samuelsboken',
		'Första Kungaboken',
		'Andra Kungaboken',
		'Första Krönikeboken',
		'Andra Krönikeboken',
		'Esra',
		'Nehemja',
		'Ester',
		'Job',
		'Psaltaren',
		'Ordspråksboken',
		'Predikaren',
		'Höga Visan',
		'Jesaja',
		'Jeremia',
		'Klagovisorna',
		'Hesekiel',
		'Daniel',
		'Hosea',
		'Joel',
		'Amos',
		'Obadja',
		'Jona',
		'Mika',
		'Nahum',
		'Habackuk',
		'Sefanja',
		'Haggai',
		'Sakarja',
		'Malaki',
		'Matteusevangeliet',
		'Markusevangeliet',
		'Lukasevangeliet',
		'Johannesevangeliet',
		'Apostlagärningarna',
		'Romarbrevet',
		'Första Korintierbrevet',
		'Andra Korintierbrevet',
		'Galaterbrevet',
		'Efesierbrevet',
		'Filipperbrevet',
		'Kolosserbrevet',
		'Första Tessalonikerbrevet',
		'Andra Tessalonikerbrevet',
		'Första Timoteusbrevet',
		'Andra Timoteusbrevet',
		'Brevet till Titus',
		'Brevet till Filemon',
		'Hebreerbrevet',
		'Jakobs brev',
		'Första Petrusbrevet',
		'Andra Petrusbrevet',
		'Första Johannesbrevet',
		'Andra Johannesbrevet',
		'Tredje Johannesbrevet',
		'Judas brev',
		'Uppenbarelseboken',
	],
	sw: [
		'Mwanzo • Kitabu cha Kwanza cha Musa',
		'Kutoka',
		'Mambo ya Walawi',
		'Hesabu',
		'Kumbukumbu la Torati (la Sheria)',
		'Yoshua',
		'Waamuzi',
		'Ruthu',
		'1 Samweli',
		'2 Samweli',
		'1 Wafalme',
		'2 Wafalme',
		'1 Mambo ya Nyakati',
		'2 Mambo ya Nyakati',
		'Ezra',
		'Nehemia',
		'Esta',
		'Kitabu cha Ayubu • Yobu',
		'Zaburi',
		'Mithali • Methali',
		'Mhubiri',
		'Wimbo Ulio Bora • Hekima ya Solomoni',
		'Isaya',
		'Yeremia',
		'Maombolezo ya Yeremia',
		'Ezekieli',
		'Danieli',
		'Hosea',
		'Yoeli',
		'Amosi',
		'Obadia',
		'Yona',
		'Mika',
		'Nahumu',
		'Habakuki',
		'Sefania',
		'Hagai',
		'Zekaria',
		'Malaki',
		'Mathayo • Injili ya Matthayo',
		'Marko',
		'Luka',
		'Yohana',
		'Matendo ya Mitume',
		'Warumi • Waraka kwa Waroma',
		'1 Wakorintho',
		'2 Wakorintho',
		'Wagalatia',
		'Waefeso',
		'Wafilipi',
		'Wakolosai',
		'1 Wathesalonike',
		'2 Wathesalonike',
		'1 Timotheo',
		'2 Timotheo',
		'Waraka kwa Tito',
		'Filemoni',
		'Waebrania',
		'Yakobo',
		'1 Petro',
		'2 Petro',
		'1 Yohana',
		'2 Yohana',
		'3 Yohana',
		'Yuda',
		'Ufunuo wa Yohane',
	],
	syr: [
		// Old Testament (ܬܪܐ ܩܕܡܝܐ)
		'ܓܢܝܣܝܣ',
		'ܦܪܬܢܬ',
		'ܠܘܝܬܝܩܘܣ',
		'ܡܬܐ',
		'ܕܘܬܪܢܘܡܝܐ',
		'ܝܘܫܘܥ',
		'ܛܠܡܝܕܐ',
		'ܪܘܬ',
		'1 ܣܡܘܐܝܠ',
		'2 ܣܡܘܐܝܠ',
		'1 ܡܠܟܝܢ',
		'2 ܡܠܟܝܢ',
		'1 ܩܘܪܝܬܐ',
		'2 ܩܘܪܝܬܐ',
		'ܐܣܪܐ',
		'ܢܗܡܝܐ',
		'ܐܣܬܪܐ',
		'ܝܘܒ',
		'ܡܛܠܢܐ',
		'ܬܘܡܐ',
		'ܩܘܡܐ',
		'ܡܥܢܐ',
		'ܝܣܝܐ',
		'ܝܪܡܝܐ',
		'ܐܢܬܬܐ',
		'ܐܙܝܟܝܐ',
		'ܕܢܝܐܝܐ',
		'ܗܘܣܐ',
		'ܝܘܐܝܐ',
		'ܐܡܘܣ',
		'ܐܒܕܝܐ',
		'ܝܘܢܐ',
		'ܡܝܟܐ',
		'ܢܗܘܡ',
		'ܗܒܟܘܟ',
		'ܙܦܢܝܐ',
		'ܗܓܝ',
		'ܙܟܪܝܐ',
		'ܡܠܟܝܐ',

		// New Testament (ܬܪܐ ܚܕܬܐ)
		'ܡܛܝܘ',
		'ܡܪܩܘܣ',
		'ܠܘܩܐ',
		'ܝܘܚܢܐ',
		'ܐܬܐ ܕܐܦܘܣܛܘܠܐ',
		'ܪܘܡܐ',
		'1 ܩܘܪܝܢܬܝܐ',
		'2 ܩܘܪܝܢܬܝܐ',
		'ܓܠܐܛܝܐ',
		'ܐܦܘܣܝܐ',
		'ܦܝܠܝܦܝܐ',
		'ܩܠܘܣܝܐ',
		'1 ܬܣܘܠܘܢܝܩܐ',
		'2 ܬܣܘܠܘܢܝܩܐ',
		'1 ܬܝܡܘܬܝܐ',
		'2 ܬܝܡܘܬܝܐ',
		'ܛܝܛܘܣ',
		'ܦܝܠܡܘܢ',
		'ܗܝܒܪܝܐ',
		'ܝܩܘܒ',
		'1 ܦܛܘܪܘܣ',
		'2 ܦܛܘܪܘܣ',
		'1 ܝܘܚܢܐ',
		'2 ܝܘܚܢܐ',
		'3 ܝܘܚܢܐ',
		'ܝܘܕܐ',
		'ܐܦܩܝܬܐ',
	],
	th: [
		'ปฐมกาล',
		'อพยพ',
		'เลวีนิติ',
		'กันดารวิถี',
		'เฉลยธรรมบัญญัติ',
		'โยชูวา',
		'ผู้วินิจฉัย',
		'นางรูธ',
		'1 ซามูเอล',
		'2 ซามูเอล',
		'1 พงศ์กษัตริย์',
		'2 พงศ์กษัตริย์',
		'1 พงศาวดาร',
		'2 พงศาวดาร',
		'เอสรา',
		'เนหะมียาห์',
		'เอสเธอร์',
		'โยบ',
		'สดุดี',
		'สุภาษิต',
		'ปัญญาจารย์',
		'บทเพลง_ไพเราะ',
		'อิสยาห์',
		'เยเรมียาห์',
		'บทเพลง_ร้องทุกข์',
		'เอเสเคียล',
		'ดาเนียล',
		'โฮเชยา',
		'โยเอล',
		'อาโมส',
		'โอบาดียาห์',
		'โยนาห์',
		'มีคาห์',
		'นาฮูม',
		'ฮาบากุก',
		'เศฟันยาห์',
		'ฮักกัย',
		'เศคาริยาห์',
		'มาลาคี',
		'มัทธิว',
		'มาระโก',
		'ลูกา',
		'ยอห์น',
		'กิจการ',
		'โรม',
		'1 โครินธ์',
		'2 โครินธ์',
		'กาลาเทีย',
		'เอเฟซัส',
		'ฟีลิปปี',
		'โคโลสี',
		'1 เธสะโลนิกา',
		'2 เธสะโลนิกา',
		'1 ทิโมธี',
		'2 ทิโมธี',
		'ทิตัส',
		'ฟีเลโมน',
		'ฮีบรู',
		'ยากอบ',
		'1 เปโตร',
		'2 เปโตร',
		'1 ยอห์น',
		'2 ยอห์น',
		'3 ยอห์น',
		'ยูดา',
		'วิวรณ์',
	],
	tl: [
		'Genesis',
		'Exodo',
		'Levitico',
		'Bilang',
		'Deuteronomio',
		'Josue',
		'Mga Hukom',
		'Rut',
		'1 Samuel',
		'2 Samuel',
		'1 Mga Hari',
		'2 Mga Hari',
		'1 Cronica',
		'2 Cronica',
		'Ezra',
		'Nehemias',
		'Ester',
		'Job',
		'Salmo',
		'Kawikaan',
		'Eclesiastes',
		'Awit ni Solomon',
		'Isaias',
		'Jeremias',
		'Mga Panaghoy',
		'Ezequiel',
		'Daniel',
		'Oseas',
		'Joel',
		'Amos',
		'Obadias',
		'Jonas',
		'Miqueas',
		'Nahum',
		'Habacuc',
		'Zefanias',
		'Hagai',
		'Zacarias',
		'Malaquias',
		'Mateo',
		'Marcos',
		'Lucas',
		'Juan',
		'Mga Gawa',
		'Roma',
		'1 Corinto',
		'2 Corinto',
		'Galata',
		'Efeso',
		'Filipos',
		'Coloso',
		'1 Tesalonica',
		'2 Tesalonica',
		'1 Timoteo',
		'2 Timoteo',
		'Tito',
		'Filemon',
		'Hebreo',
		'Santiago',
		'1 Pedro',
		'2 Pedro',
		'1 Juan',
		'2 Juan',
		'3 Juan',
		'Judas',
		'Pahayag',
	],
	tlh: bible.Data.allBooks, // TODO
	tr: [
		'YARATILIŞ',
		"MISIR'DAN ÇIKIŞ",
		'LEVİLİLER',
		'ÇÖLDE SAYIM',
		"YASA'NIN TEKRARI",
		'YEŞU',
		'HÂKİMLER',
		'RUT',
		'1.SAMUEL',
		'2.SAMUEL',
		'1.KRALLAR',
		'2.KRALLAR',
		'1.TARİHLER',
		'2.TARİHLER',
		'EZRA',
		'NEHEMYA',
		'ESTER',
		'EYÜP',
		'MEZMURLAR',
		"SÜLEYMAN'IN ÖZDEYİŞLERİ",
		'VAİZ',
		'EZGİLER EZGİSİ',
		'YEŞAYA',
		'YEREMYA',
		'AĞITLAR',
		'HEZEKİEL',
		'DANİEL',
		'HOŞEA',
		'YOEL',
		'AMOS',
		'OVADYA',
		'YUNUS',
		'MİKA',
		'NAHUM',
		'HABAKKUK',
		'SEFANYA',
		'HAGAY',
		'ZEKERİYA',
		'MALAKİ',
		'MATTA',
		'MARKOS',
		'LUKA',
		'YUHANNA',
		'ELÇİLERİN İŞLERİ',
		'ROMALILAR',
		'1.KORİNTLİLER',
		'2.KORİNTLİLER',
		'GALATYALILAR',
		'EFESLİLER',
		'FİLİPİLİLER',
		'KOLOSELİLER',
		'1. SELANİKLİLER',
		'2.SELANİKLİLER',
		'1.TİMOTEOS',
		'2.TİMOTEOS',
		'TİTUS',
		'FİLİMON',
		'İBRANİLER',
		'YAKUP',
		'1.PETRUS',
		'2.PETRUS',
		'1.YUHANNA',
		'2.YUHANNA',
		'3.YUHANNA',
		'YAHUDA',
		'VAHİY',
	],
	tpi: [
		// Old Testament
		'Jenesis',
		'Eksodus',
		'Levitikus',
		'Namba',
		'Deuteronomi',
		'Josua',
		'Jajis',
		'Ruth',
		'1 Samwel',
		'2 Samwel',
		'1 Kral',
		'2 Kral',
		'1 Kronik',
		'2 Kronik',
		'Esra',
		'Nehemia',
		'Esther',
		'Job',
		'Salmos',
		'Proverb',
		'Eklisiastes',
		'Sang blong Solomom',
		'Yesaya',
		'Yeremia',
		'Klong',
		'Ezekiel',
		'Daniel',
		'Hosea',
		'Joel',
		'Amos',
		'Obadia',
		'Jona',
		'Mika',
		'Nahum',
		'Habakuk',
		'Zefania',
		'Hagai',
		'Zekaria',
		'Malaki',

		// New Testament
		'Mateus',
		'Markos',
		'Lukas',
		'Johanis',
		'Ol Aposel Wok',
		'Roma',
		'1 Korin',
		'2 Korin',
		'Galatia',
		'Efeso',
		'Filipi',
		'Kolosa',
		'1 Tesalonika',
		'2 Tesalonika',
		'1 Timoti',
		'2 Timoti',
		'Tito',
		'Filemon',
		'Hebro',
		'Jemias',
		'1 Petro',
		'2 Petro',
		'1 Johanis',
		'2 Johanis',
		'3 Johanis',
		'Judas',
		'Revelesen',
	],
	tsg: bible.Data.allBooks, // TODO
	twi: [
		'1 Mose',
		'2 Mose',
		'3 Mose',
		'4 Mose',
		'5 Mose',
		'Yosua',
		'Atemmufoɔ',
		'Rut',
		'1 Samuel',
		'2 Samuel',
		'1 Ahemfo',
		'2 Ahemfo',
		'1 Berɛsosɛm',
		'2 Berɛsosɛm',
		'Ɛsra',
		'Nehemia',
		'Ɛster',
		'Hiob',
		'Nnwom',
		'Mmɛbusɛm',
		'Ɔsɛnkafoɔ',
		'Nnwom Mu Dwom',
		'Yesaia',
		'Yeremia',
		'Kwadwom',
		'Hesekiel',
		'Daniel',
		'Hosea',
		'Yoɛl',
		'Amos',
		'Obadia',
		'Yona',
		'Mika',
		'Nahum',
		'Habakuk',
		'Sefania',
		'Hagai',
		'Sakaria',
		'Malaki',
		'Mateo',
		'Marko',
		'Luka',
		'Yohane',
		'Asomafoɔ',
		'Romafoɔ',
		'1 Korintofoɔ',
		'2 Korintofoɔ',
		'Galatifoɔ',
		'Efesofoɔ',
		'Filipifoɔ',
		'Kolosefoɔ',
		'1 Tesalonikafoɔ',
		'2 Tesalonikafoɔ',
		'1 Timoteo',
		'2 Timoteo',
		'Tito',
		'Filemon',
		'Hebrifoɔ',
		'Yakobo',
		'1 Petro',
		'2 Petro',
		'1 Yohane',
		'2 Yohane',
		'3 Yohane',
		'Yuda',
		'Adiyisɛm',
	],
	uk: [
		'Буття',
		'Вихід',
		'Левит',
		'Числа',
		'Повторення Закону',
		'Ісус Навин',
		'Книга Суддів',
		'Рут',
		'1 Самуїлова',
		'2 Самуїлова',
		'1 царів',
		'2 царів',
		'1 хроніки',
		'2 хроніки',
		'Ездра',
		'Неемія',
		'Естер',
		'Йов',
		'Псалми',
		'Приповісті',
		'Екклезіяст',
		'Пісня над піснями',
		'Ісая',
		'Єремія',
		'Плач Єремії',
		'Єзекіїль',
		'Даниїл',
		'Осія',
		'Йоїл',
		'Амос',
		'Овдій',
		'Йона',
		'Михей',
		'Наум',
		'Авакум',
		'Софонія',
		'Огій',
		'Захарія',
		'Малахії',
		'Від Матвія',
		'Від Марка',
		'Від Луки',
		'Від Івана',
		'Дії',
		'До римлян',
		'1 до коринтян',
		'2 до коринтян',
		'До галатів',
		'До ефесян',
		"До филип'ян",
		'До колоссян',
		'1 до солунян',
		'2 до солунян',
		'1 Тимофію',
		'2 Тимофію',
		'До Тита',
		'До Филимона',
		'До євреїв',
		'Якова',
		'1 Петра',
		'2 Петра',
		'1 Івана',
		'2 Івана',
		'3 Івана',
		'Юда',
		"Об'явлення",
	],
	ur: [
		'पैदाइश',
		'ख़ुरूज',
		'अहबार',
		'गिनती',
		'इस्तिसना',
		'यशुअ',
		'क़ुज़ात',
		'रूत',
		'1 समुएल',
		'2 समुएल',
		'1 सलातीन',
		'2 सलातीन',
		'1 तवारीख़',
		'2 तवारीख़',
		'अज़रा',
		'नहमियाह',
		'आस्तर',
		'अय्यूब',
		'ज़बूर',
		'अमसाल',
		'वाइज़',
		'ग़ज़लुल-ग़ज़लात',
		'यसायाह',
		'यरमियाह',
		'नोहा',
		'हिज़क़ियेल',
		'दानियाल',
		'होसेअ',
		'योएल',
		'आमूस',
		'अबदियाह',
		'यूनुस',
		'मीकाह',
		'नाहूम',
		'हबक़्क़ूक़',
		'सफ़नियाह',
		'हज्जी',
		'ज़करियाह',
		'मलाकी',
		'मत्ती',
		'मरक़ुस',
		'लूक़ा',
		'यूहन्ना',
		'आमाल',
		'रोमियों',
		'1 कुरिंथियों',
		'2 कुरिंथियों',
		'गलतियों',
		'इफ़िसियों',
		'फ़िलिप्पियों',
		'कुलुस्सियों',
		'1 थिस्सलुनीकियों',
		'2 थिस्सलुनीकियों',
		'1 तीमुथियुस',
		'2 तीमुथियुस',
		'तितुस',
		'फ़िलेमोन',
		'इबरानियों',
		'याक़ूब',
		'1 पतरस',
		'2 पतरस',
		'1 यूहन्ना',
		'2 यूहन्ना',
		'3 यूहन्ना',
		'यहूदाह',
		'मुकाशफ़ा',
	],
	vi: [
		'Sáng Thế',
		'Xuất Hành',
		'Lê Vi',
		'Dân Số',
		'Phục Truyền',
		'Giô-suê',
		'Thẩm Phán',
		'Ru-tơ',
		'1 Sa-mu-ên',
		'2 Sa-mu-ên',
		'1 Các Vua',
		'2 Các Vua',
		'1 Sử Ký',
		'2 Sử Ký',
		'Ê-xơ-ra',
		'Nê-hê-mi',
		'Ê-xơ-tê',
		'Gióp',
		'Thánh Thi',
		'Châm Ngôn',
		'Giáo Huấn',
		'Nhã Ca',
		'I-sa',
		'Giê-rê-mi',
		'Ai Ca',
		'Ê-xê-chi-ên',
		'Đa-ni-ên',
		'Ô-sê',
		'Giô-ên',
		'A-mốt',
		'Áp-đia',
		'Giô-na',
		'Mi-ca ',
		'Na-hum',
		'Ha-ba-cúc',
		'Sô-phô-ni',
		'Ha-gai',
		'Xa-cha-ri',
		'Ma-la-chi',
		'Ma-thi-ơ',
		'Mác',
		'Lu-ca',
		'Giăng',
		'Công Vụ',
		'Rô-ma',
		'1 Cô-rinh-tô',
		'2 Cô-rinh-tô',
		'Ga-la-ti',
		'Ê-phê-sô',
		'Phi-líp',
		'Cô-lô-se',
		'1 Tê-sa-lô-ni-ca',
		'2 Tê-sa-lô-ni-ca',
		'1 Ti-mô-thê',
		'2 Ti-mô-thê',
		'Tích',
		'Phi-lê-môn',
		'Hê-bơ-rơ',
		'Gia-cơ',
		'1 Phê-rơ',
		'2 Phê-rơ',
		'1 Giăng',
		'2 Giăng',
		'3 Giăng',
		'Giu-đe',
		'Khải Huyền',
	],
	vls: bible.Data.allBooks,
	yo: [
		'Chakruok',
		'Wuok',
		'Tim Jo-Lawi',
		'Kwan',
		'Rapar Mar Chik',
		'Joshua',
		'Jongʼad Bura',
		'Ruth',
		'1 Samuel',
		'2 Samuel',
		'1 Ruodhi',
		'2 Ruodhi',
		'1 Weche Mag Ndalo',
		'2 Weche Mag Ndalo',
		'Ezra',
		'Nehemia',
		'Esta',
		'Ayub',
		'Zaburi',
		'Ngeche',
		'Eklesiastes',
		'Wer Mamit',
		'Isaya',
		'Jeremia',
		'Ywagruok',
		'Ezekiel',
		'Daniel',
		'Hosea',
		'Joel',
		'Amos',
		'Obadia',
		'Jona',
		'Mika',
		'Nahum',
		'Habakuk',
		'Zefania',
		'Hagai',
		'Zekaria',
		'Malaki',
		'Mathayo',
		'Mariko',
		'Luka',
		'Johana',
		'Tich Joote',
		'Jo-Rumi',
		'1 Jo-Korintho',
		'2 Jo-Korintho',
		'Jo-Galatia',
		'Jo-Efeso',
		'Jo-Filipi',
		'Jo-Kolosai',
		'1 Jo-Thesalonika',
		'2 Jo-Thesalonika',
		'1 Timotheo',
		'2 Timotheo',
		'Tito',
		'Filemon',
		'Jo-Hibrania',
		'Jakobo',
		'1 Petro',
		'2 Petro',
		'1 Johana',
		'2 Johana',
		'3 Johana',
		'Juda',
		'Fweny',
	],
	'zh-hans': [
		'創 世 記',
		'出 埃 及 記',
		'利 未 記',
		'民 數 記',
		'申 命 記',
		'約 書 亞 記',
		'士 師 記',
		'路 得 記',
		'撒 母 耳 記 上',
		'撒 母 耳 記 下',
		'列 王 紀 上',
		'列 王 紀 下',
		'歷 代 志 上',
		'歷 代 志 下',
		'以 斯 拉 記',
		'尼 希 米 記',
		'以 斯 帖 記',
		'約 伯 記',
		'詩 篇',
		'箴 言',
		'傳 道 書',
		'雅 歌',
		'以 賽 亞 書',
		'耶 利 米 書',
		'耶 利 米 哀 歌',
		'以 西 結 書',
		'但 以 理 書',
		'何 西 阿 書',
		'約 珥 書',
		'阿 摩 司 書',
		'俄 巴 底 亞 書',
		'約 拿 書',
		'彌 迦 書',
		'那 鴻 書',
		'哈 巴 谷 書',
		'西 番 雅 書',
		'哈 該 書',
		'撒 迦 利 亞',
		'瑪 拉 基 書',
		'馬 太 福 音',
		'馬 可 福 音',
		'路 加 福 音',
		'約 翰 福 音',
		'使 徒 行 傳',
		'羅 馬 書',
		'歌 林 多 前 書',
		'歌 林 多 後 書',
		'加 拉 太 書',
		'以 弗 所 書',
		'腓 立 比 書',
		'歌 羅 西 書',
		'帖 撒 羅 尼 迦 前 書',
		'帖 撒 羅 尼 迦 後 書',
		'提 摩 太 前 書',
		'提 摩 太 後 書',
		'提 多 書',
		'腓 利 門 書',
		'希 伯 來 書',
		'雅 各 書',
		'彼 得 前 書',
		'彼 得 後 書',
		'約 翰 一 書',
		'約 翰 二 書',
		'約 翰 三 書',
		'猶 大 書',
		'启 示 录',
	],
	'zh-hant': [
		'創 世 記',
		'出 埃 及 記',
		'利 未 記',
		'民 數 記',
		'申 命 記',
		'約 書 亞 記',
		'士 師 記',
		'路 得 記',
		'撒 母 耳 記 上',
		'撒 母 耳 記 下',
		'列 王 紀 上',
		'列 王 紀 下',
		'歷 代 志 上',
		'歷 代 志 下',
		'以 斯 拉 記',
		'尼 希 米 記',
		'以 斯 帖 記',
		'約 伯 記',
		'詩 篇',
		'箴 言',
		'傳 道 書',
		'雅 歌',
		'以 賽 亞 書',
		'耶 利 米 書',
		'耶 利 米 哀 歌',
		'以 西 結 書',
		'但 以 理 書',
		'何 西 阿 書',
		'約 珥 書',
		'阿 摩 司 書',
		'俄 巴 底 亞 書',
		'約 拿 書',
		'彌 迦 書',
		'那 鴻 書',
		'哈 巴 谷 書',
		'西 番 雅 書',
		'哈 該 書',
		'撒 迦 利 亞',
		'瑪 拉 基 書',
		'馬 太 福 音',
		'馬 可 福 音',
		'路 加 福 音',
		'約 翰 福 音',
		'使 徒 行 傳',
		'羅 馬 書',
		'歌 林 多 前 書',
		'歌 林 多 後 書',
		'加 拉 太 書',
		'以 弗 所 書',
		'腓 立 比 書',
		'歌 羅 西 書',
		'帖 撒 羅 尼 迦 前 書',
		'帖 撒 羅 尼 迦 後 書',
		'提 摩 太 前 書',
		'提 摩 太 後 書',
		'提 多 書',
		'腓 利 門 書',
		'希 伯 來 書',
		'雅 各 書',
		'彼 得 前 書',
		'彼 得 後 書',
		'約 翰 一 書',
		'約 翰 二 書',
		'約 翰 三 書',
		'猶 大 書',
		'启 示 录',
	],
};
bible.Data.bookNamesByLanguage.he = bible.Data.bookNamesByLanguage.hbo;
bible.Data.bookNamesByLanguage.azb = bible.Data.bookNamesByLanguage.az;

// TODO
bible.Data.bookNamesByLanguage.eko = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kde = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mgh = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nyu = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.seh = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tke = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.wmw = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.anv = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bcw = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bfd = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bmo = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ken = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kkj = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mcp = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mcu = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.meq = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mfh = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mfi = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mif = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mqb = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.muy = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nhu = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.xed = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.yam = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.arq = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.thv = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.aer = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.alh = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.aly = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.amx = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.aoi = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.are = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.awk = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bvr = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.dhg = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.dhgduwadha = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.dif = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.dji = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.djj = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.djr = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.dwuliv = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.dwy = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.engPEV = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.engbarkley = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.engnna = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.gia = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.gnn = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.gue = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.guf = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.gup = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.gupk = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.gupmay = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.gvn = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.jao = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kjn = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kky = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kld = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kux = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.lrg = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mph = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mpj = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mwf = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mwp = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nay = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nna = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ntj = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nuy = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nys = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.piu = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.pjt = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.rmb = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.rop = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tcs = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.thd = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tiw = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tiwm = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ulk = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ulk = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.wbp = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.wim = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.wlg = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.wmt = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.wrk = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.wro = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.yij = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bba = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bel = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ben = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ben = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ben = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bzj = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.dop = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.fue = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.fuhbkf = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mkl = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mop = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.soy = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.syl = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.syl = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.syl = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tbzsim = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.udi = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cao = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cap = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cav = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cax = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ese = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.gnw = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.gui = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.gyr = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ign = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.quh = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.qul = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.srq = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tna = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bib = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.box = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cme = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.dyu = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.gux = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.guxg = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nhr = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nnw = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tpu = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tsn = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.wib = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.xrb = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.xsm = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.apn = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.apu = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.apy = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bkq = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bor = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cul = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.des = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.gub = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.gun = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.hix = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.jaa = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kbc = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kgk = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kgp = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kpj = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kyz = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mav = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mbc = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mbj = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mbl = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.myu = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nab = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.pab = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.pad = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.pah = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.plu = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.pt = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.pt = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.pt = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.pt = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.por = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ram = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.rkb = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ter = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tuo = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.txu = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.urb = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.xav = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.alq = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bea = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bla = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.crx = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.caf = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.crl = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.dgr = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.crj = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mic = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ksp = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bjv = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.daa = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.gqr = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kyq = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kqp = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.xuo = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mge = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mta = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.moz = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.sor = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.arn = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bzi = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cmn = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ncvs = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ncvt = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cu89s = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cu89t = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cmnfeb = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.lhi = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bod = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bodn = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.uigara = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.uigcyr = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.uigpin = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.uiglat = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.aca = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kwi = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bsn = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cbv = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kbh = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cbc = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cub = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cui = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.sja = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.guh = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.gum = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.gvc = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.guo = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.hto = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.inb = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kog = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.coe = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.myy = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bmr = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.pbb = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.pio = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.pir = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.snn = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.sri = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tnc = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tav = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tuf = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tue = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bao = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.guc = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.noaE = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.noaH = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ycn = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bzd = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.adj = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.any = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.dnj = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.daf = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.dyi = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kyf = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ktj = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ted = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.moa = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nwb = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.wob = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.yre = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.hrv = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ronludari = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ces = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ces = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ces = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.flr = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.yom = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.lik = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.lin = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.loq = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.log = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mxv = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mdm = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.niy = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.dan = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cbi = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.con = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cof = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.qvz = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.qxl = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.sey = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.jiv = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.auc = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.arb = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.arb = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cop = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cop = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cop = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ekk = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ekk = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.amh = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bwo = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.dwr = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.dwr = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.gmv = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.gmv = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.gmv = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.gof = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.gof = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.gof = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.amf = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mdyeth = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.gaz = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.wal = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.fin = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bre = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.fr = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.fr = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.fr = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.fr = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.de = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.de = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.de = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.de = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.de = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cko = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bim = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.biv = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bwu = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ncu = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ntr = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ewe = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.acd = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.xon = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kma = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kus = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.naw = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nko = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.sig = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.lip = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.snw = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.sil = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.akp = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bov = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.twi = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.twi = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.grc = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.grc = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.grc = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.grc = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.grc = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.grc = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.grc = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.grc = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.grc = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cha = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.acr = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.acr = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.acc = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.agu = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.knj = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.caa = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cac = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ixl = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ixl = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.jac = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.quc = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.quc = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.quctt = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cak = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cak = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cak = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cak = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cak = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cak = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cak = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mamC = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mam = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.poh = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kek = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ttc = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tzj = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tzj = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.usp = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bsp = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.fuf = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.msc = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.sus = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.susa = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tod = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.yal = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ake = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.wap = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.hat = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.hatbsa = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cab = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.jic = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.hun = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.isl = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.esg = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ahr = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.asmfb = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bpx = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bhd = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bht = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bdv = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bgg = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tczchongthu = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.dso = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.gaq = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.guj = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.guj = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bgc = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.hincv = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.hin = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.hin = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.hoy = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.juy = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kan = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kan = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kan = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kfc = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.key = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kxv = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.lbj = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.lbm = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mai = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mal = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mal = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mar = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mrr = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mni = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.unx = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nag = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kfw = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tvt = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nlx = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ory = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bfz = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.pan = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.peg = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.sch = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.san = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.san = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.san = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.san = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.san = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.san = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.san = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.san = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.san = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.san = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.san = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.san = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.san = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.san = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.san = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.san = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.san = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.san = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.san = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.san = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.san = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.san = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tgj = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tam = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tam = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tam = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tel = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tel = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.urd = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mal = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.alp = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.aaz = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.amk = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.auu = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.blz = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ptu = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.beu = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.row = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nfa = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.frd = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.hvn = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.heg = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.indayt = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ind = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ind = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kje = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mkn = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.llg = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.lex = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ayz = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.pmy = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mqj = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nbq = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nxl = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ury = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.rgu = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.slu = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.set = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tet = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.txq = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kkl = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.yva = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.azb = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.glk = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.pes = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.pes = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.aii = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ckb = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.heb = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.hbo = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.heb = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.hbo = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.it = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.it = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.jp = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.dig = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.luo = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kik = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nyf = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.spy = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.sxb = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.brb = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bru = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ncq = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.pac = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.vd = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.lit = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tdx = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nya = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.yao = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bjn = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.zlm = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.div = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ffm = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.myk = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.spp = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ses = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.taq = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.amu = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.azg = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.miy = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cya = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cta = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ctp = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cco = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cnl = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cle = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.chz = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cpa = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.chq = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cso = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cnt = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cuc = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ctu = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ctu = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ctu = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.chd = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.chf = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.crn = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cok = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cux = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cut = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.zpg = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.var = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.hus = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.hus = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.huv = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.hch = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.lac = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mfy = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.maz = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.maq = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mau = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.maj = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.maa = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.vmy = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tpx = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mco = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mir = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mxq = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mxp = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mto = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mim = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mib = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mih = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.miz = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.xtd = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mxt = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.xtm = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.xtn = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mie = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mil = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mio = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mjc = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mig = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mza = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mks = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mit = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mxb = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mpm = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nsu = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nhw = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nhe = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ngu = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.azz = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nch = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nhe = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nhx = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ncl = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nhy = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ncj = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.npl = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nhg = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nhi = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.otm = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ots = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ote = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.otq = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.otn = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.poe = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.pps = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.pls = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.poi = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.trq = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.es = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.es = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tac = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tee = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tpp = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tpt = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ntp = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.stp = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.toj = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.toc = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tos = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.top = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tku = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.too = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.trc = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tzo = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tzo = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tzo = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tzo = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tzo = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.yaq = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.zpo = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.zad = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.zpv = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.zpc = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.zca = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.zai = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.zpl = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.zam = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.zaw = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.zpm = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.zac = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.zao = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ztq = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.zar = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.zab = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.zpt = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.zpi = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.zap = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.zas = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.zaa = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.zsr = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.zat = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.zpz = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.zpu = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.zae = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.zty = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.zav = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.zpq = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.zos = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.chk = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kpg = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kos = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mkj = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nkr = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.pon = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.pon = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.pdn = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.pon = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.stw = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.uli = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.yap = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.eko = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mgh = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mgh = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kde = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.wmw = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nyu = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.seh = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tke = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.aeu = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.blr = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mya = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mya = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.dao = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cekak = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.hlt = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.hlt = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.hlt = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.csy = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cth = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kyuk = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kyu = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kxf = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.zyp = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.atb = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.sbs = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.gvr = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kjl = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.lif = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.lif = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.npi = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.npi = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.new = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.xsr = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.suz = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.taj = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.np = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nld = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nl = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nl = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nl = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cam = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.pri = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.fuh = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kby = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ttqt = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ttq = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.amo = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bsj = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bqcsim = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bus = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.jid = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bqp = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.fuv = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.gde = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.hau = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.hau = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.dud = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ibo = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ikk = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ikw = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.iqw = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.atg = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.izz = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.jni = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.jib = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.pcm = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nin = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kdl = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tsw = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.yor = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.noblb = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bcc = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bccl = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.urd = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.urd = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.urd = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.sab = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.emp = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kvn = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cuk = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.gym = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cuk = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tfr = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kud = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.aau = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.adz = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.agd = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.spm = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.amp = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.gah = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.amm = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.amn = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.amnn = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.amanab = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.maprik = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.aey = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.aby = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.agm = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.akh = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.agg = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.boj = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.boj = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.aak = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.aui = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ena = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.aon = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mwc = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.apr = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.msy = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.msy = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.avt = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.awb = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.awx = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.auy = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bbb = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mlp = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bch = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bjk = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bjz = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.byr = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bbd = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.beo = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bef = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.big = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.big = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bhl = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bhg = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bon = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bjr = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mux = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bnp = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.gai = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ksr = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bzh = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mmo = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.buk = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bxh = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bxh = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.buk = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.apeB = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.apec = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bdd = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tte = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tteo = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cjv = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mps = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.dgz = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.aso = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.dww = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ded = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.dob = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kqc = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kjs = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.etr = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.enq = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mcq = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nou = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.fai = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bjp = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.faa = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.filifita = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.fag = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ppo = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.for = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.pwg = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bmk = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bbr = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bbr = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tof = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.gvf = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ghs = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.gvs = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.dah = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.hla = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.wos = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tmd = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.hui = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.yml = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ian = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.viv = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.imo = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ino = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ino = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ipi = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kbm = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.iws = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nca = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kqf = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kmh = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bco = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kbq = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kms = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.xla = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.soq = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kqw = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.gam = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.wat = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kmu = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.leu = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.yuj = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.khs = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kmg = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ksd = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.khz = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bmh = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kyg = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kij = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.geb = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kiw = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kpw = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kpx = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kpf = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.xbiW = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.xbiY = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kxw = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kpr = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kze = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kgf = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kue = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kvg = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kup = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kto = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ktm = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kwj = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kmo = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kyc = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kql = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.lbb = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nrz = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.lbv = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.uvl = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mmx = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mzz = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mti = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.hot = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mva = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mle = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tbf = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mbh = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mlh = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.dad = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.met = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mhl = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mna = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mek = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tpi = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tpi = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.med = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.sim = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mee = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mcr = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mxm = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mpt = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mpp = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mvn = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.aai = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kmhn = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mpx = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mox = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.meu = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.hmo = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.aoj = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kqa = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.emi = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tucO = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tucT = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.myw = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nas = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.naf = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nak = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nss = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nal = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nvm = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nsn = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nif = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.anh = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nii = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nmws = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.gaw = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.a = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.klt = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nuq = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nop = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.lid = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kkc = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.eri = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.opm = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ong = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.aom = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.omw = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ons = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.okvh = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.okv = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ptp = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.gfkh = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.gfk = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.gfks = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ata = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.byx = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.rai = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.karo = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.rawa = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.roo = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.apz = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.sbe = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.sll = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.snx = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.sny = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.sps = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ssg = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.spl = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ssx = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.snp = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.lambau = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.snc = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.xsi = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ssd = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bmu = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.urw = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.omwA = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.swp = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tgo = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.sue = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.sua = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.sgz = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.knv = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.knv = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.taw = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tbg = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.omwV = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tbc = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nho = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tpa = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tbo = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tlf = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tif = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tim = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tpz = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.iou = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.lcm = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ksj = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ubr = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.gdn = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ubu = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ubu = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ubu = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.uro = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.urt = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.uvh = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.uri = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.wnu = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.usa = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.wiv = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.waj = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.fad = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.rro = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.wnc = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.wrs = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.wsk = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.wed = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.wed = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.wer = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kew = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.gdr = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.wiu = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.abt = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.wuv = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.jae = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nce = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.yrb = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.yuw = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.yby = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.yle = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.yss = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.yss = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.byr = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.yon = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.yut = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.zia = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kud = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mca = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.acu = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.agr = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cpc = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.amr = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.arl = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cni = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cjo = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.prq = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cpu = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cpy = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cpb = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.boa = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cbu = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kaq = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cot = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cbr = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cbt = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.hub = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.huu = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cbs = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mcb = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mcf = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.not = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.qva = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.qvc = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.qve = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.qub = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.qvh = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.qwh = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.qvw = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.quf = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.qvm = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.qvo = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.qvn = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.qxn = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.qxh = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.qvs = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.qxo = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.qup = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mcd = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.shp = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tca = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ura = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.yad = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.yaa = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ame = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.pib = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.dgc = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.agt = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.duo = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.due = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.agn = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ify = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.att = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.abp = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.sgb = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.blx = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.blw = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bno = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ifb = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bkd = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bpr = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bps = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.smk = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.lbk = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ebk = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.sbl = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.plw = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kyb = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.clu = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cebulb = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.sml = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.syb = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cbk = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.did = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mbd = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.gdg = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ibl = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ivb = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ifa = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ifu = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ifk = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.iloulb = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.abx = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.isd = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ivv = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cgc = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kqe = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kqew = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kmk = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.knb = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ksc = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kne = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.xnn = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.krj = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mmn = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.msm = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.atd = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mbi = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mbt = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.obo = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mbs = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mbb = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.msk = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.msb = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.prf = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.rol = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.slm = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.xsb = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.stb = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.suc = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bgs = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tgl = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tbk = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tsg = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tbl = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tiy = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.yka = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.epo = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.pl = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.pl = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ro = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ro = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ro = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ro = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kca = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ru = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.acf = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bqj = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.krx = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.knf = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ndv = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.snf = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bsc = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.sav = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cou = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.wol = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.wol = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.rmy = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.rmy = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.rmy = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.srp = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.rmc = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.aia = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bvd = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bgt = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.far = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nlg = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.gri = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kwd = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kwf = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.llu = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ntu = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mnv = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.rug = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.apb = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.lgl = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.som = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kor = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.avu = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bdh = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bex = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kbo = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.lwo = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mgc = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.muh = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mur = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ndz = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.es = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.es = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.es = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.es = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.es = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.es = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.es = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.dik = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.xtc = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.lro = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.lmd = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.shj = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.udu = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.car = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.djk = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.hns = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.jvn = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.srm = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.srn = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.swef = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.swe = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tgk = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bds = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.isn = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.reg = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.zgam = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kiz = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.swhonen = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kdc = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cwe = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ruf = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mgq = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mgw = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.mwe = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ndh = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ndj = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ndg = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nnq = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.xnj = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ngp = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nyy = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.poy = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.sbk = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.swh = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.swh = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.vid = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.wbi = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.zaj = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ziw = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.lcp = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.th = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.th = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nod = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bkx = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tdt = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.gng = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.kdh = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.num = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ton = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.aeb = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tr = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tr = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.luc = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.rub = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.gwr = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.lug = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nuj = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tlj = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.rmy = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.rmy = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.rmn = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.rmy = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.rmy = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ukr = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ukr = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ukr = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ukr = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.apw = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.arp = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.gwi = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.hwc = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.haw = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.hop = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.pao = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.pdc = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.gul = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tew = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.ood = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.esk = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.omb = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tvk = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.app = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.bki = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.lww = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.klv = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tnk = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tnn = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.pma = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nwi = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tgp = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.upv = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.tnp = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.lat = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.car = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cmo = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cmok = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.cje = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.hre = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.blt = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.vie = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.vie = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.vie = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.sby = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.sna = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.dov = bible.Data.bookNamesByLanguage.en;
bible.Data.bookNamesByLanguage.nde = bible.Data.bookNamesByLanguage.en;

bible.Data.rtlLanguages = [
	'he',
	'hbo',
	'fa',
	'ar',
	'az',
	'azb',
	'ckb',
	'prs',
	'ur',
	'arq',
	'thv',
	'glk',
	'pes',
	'aii',
	'arb',
	'bqp',
	'fuv',
	'bcc',
	'aeb',
	'syr',
	'ja',
];
bible.Data.supportedVersions = {
	original: { name: 'Original', language: 'original', tongue: 'original' },
	accented: {
		name: 'Accented original',
		language: 'original',
		tongue: 'original',
	},
	KJV: {
		name: 'King James Version (1769) with Strongs Numbers and Morphology',
		language: 'en',
		strongs: true,
		tongue: 'en',
	},
	ESV: {
		name: 'English Standard Version with Strongs Numbers',
		language: 'en',
		strongs: true,
		tongue: 'en',
	},
	ASV: {
		name: 'American Standard Version (1901) with Strongs Numbers',
		language: 'en',
		strongs: true,
		tongue: 'en',
	},
	RLT: {
		name: 'Revised Literal Translation (2018) of the King James Version with Strongs Numbers and Morphology',
		language: 'en',
		strongs: true,
		tongue: 'en',
	},
	WEB: {
		name: 'World English Bible',
		language: 'en',
		strongs: true,
		tongue: 'en',
	},
	ABP: {
		name: 'Apostolic Bible Polyglot English Text with Strongs Numbers',
		language: 'en',
		strongs: true,
		tongue: 'en',
	},
	DARBY: {
		name: 'Darby Bible (1889) with Strongs Numbers',
		language: 'en',
		strongs: true,
		tongue: 'en',
	},
	AB: { name: "The Apostles' Bible", language: 'en', tongue: 'en' },
	ACV: { name: 'A Conservative Version', language: 'en', tongue: 'en' },
	AKJV: { name: 'American King James Version', language: 'en', tongue: 'en' },
	Anderson: {
		name: 'Henry Tompkins Anderson’s 1864 New Testament',
		language: 'en',
		tongue: 'en',
	},
	BBE: {
		name: '1949/1964 Bible in Basic English',
		language: 'en',
		tongue: 'en',
	},
	BSB: { name: 'Berean Study Bible', language: 'en', tongue: 'en' },
	BWE: { name: 'Bible in Worldwide English', language: 'en', tongue: 'en' },
	Common: {
		name: 'The Common Edition: New Testament',
		language: 'en',
		tongue: 'en',
	},
	CPDV: {
		name: 'Catholic Public Domain Version',
		language: 'en',
		tongue: 'en',
	},
	DRC: {
		name: 'Douay-Rheims Bible, Challoner Revision',
		language: 'en',
		tongue: 'en',
	},
	EMTV: {
		name: 'English Majority Text Version',
		language: 'en',
		tongue: 'en',
	},
	Etheridge: {
		name: 'The Peschito Syriac New Testament: Translated into English by John Wesley Etheridge',
		language: 'en',
		tongue: 'en',
	},
	Geneva1599: { name: 'Geneva Bible (1599)', language: 'en', tongue: 'en' },
	Godbey: {
		name: '1902 William Baxter Godbey NT',
		language: 'en',
		tongue: 'en',
	},
	GW: { name: "God's Word Translation", language: 'en', tongue: 'en' },
	Haweis: {
		name: 'Thomas Haweis 1795 New Testament',
		language: 'en',
		tongue: 'en',
	},
	ISV: {
		name: 'International Standard Version',
		language: 'en',
		tongue: 'en',
	},
	JPS: {
		name: 'Jewish Publication Society Old Testament',
		language: 'en',
		tongue: 'en',
	},
	JUB: { name: 'Jubilee Bible 2000', language: 'en', tongue: 'en' },
	KJVPCE: {
		name: 'King James Version: Pure Cambridge Edition',
		language: 'en',
		tongue: 'en',
	},
	LEB: { name: 'Lexham English Bible', language: 'en', tongue: 'en' },
	LITV: { name: "Green's Literal Translation", language: 'en', tongue: 'en' },
	LO: { name: 'The Living Oracles NT', language: 'en', tongue: 'en' },
	MKJV: {
		name: "Green's Modern King James Version",
		language: 'en',
		tongue: 'en',
	},
	Montgomery: {
		name: 'Montgomery New Testament',
		language: 'en',
		tongue: 'en',
	},
	Murdock: {
		name: "James Murdock's Translation of the Syriac Peshitta",
		language: 'en',
		tongue: 'en',
	},
	NET: { name: 'New English Translation', language: 'en', tongue: 'en' },
	NHEB: { name: 'New Heart English Bible', language: 'en', tongue: 'en' },
	NHEBJE: {
		name: 'New Heart English Bible: Jehovah Edition',
		language: 'en',
		tongue: 'en',
	},
	NHEBME: {
		name: 'New Heart English Bible: Messianic Edition',
		language: 'en',
		tongue: 'en',
	},
	Noyes: { name: '1869 Noyes Translation', language: 'en', tongue: 'en' },
	OEB: {
		name: 'Open English Bible (US Spelling)',
		language: 'en',
		tongue: 'en',
	},
	OEBcth: {
		name: 'Open English Bible (Commonwealth Spelling)',
		language: 'en',
		tongue: 'en',
	},
	OrthJBC: {
		name: 'The Orthodox Jewish Brit Chadasha',
		language: 'en',
		tongue: 'en',
	},
	RKJNT: {
		name: 'Revised King James New Testament',
		language: 'en',
		tongue: 'en',
	},
	RNKJV: {
		name: 'Restored Name King James Version',
		language: 'en',
		tongue: 'en',
	},
	Rotherham: {
		name: 'The Emphasised Bible by J. B. Rotherham',
		language: 'en',
		tongue: 'en',
	},
	SPE: {
		name: 'Samaritan Pentateuch in English',
		language: 'en',
		tongue: 'en',
	},
	Twenty: {
		name: 'Twentieth Century New Testament',
		language: 'en',
		tongue: 'en',
	},
	Tyndale: {
		name: 'William Tyndale Bible (1525/1530)',
		language: 'en',
		tongue: 'en',
	},
	UKJV: { name: 'Updated King James Version', language: 'en', tongue: 'en' },
	Webster: { name: 'Webster Bible', language: 'en', tongue: 'en' },
	Weymouth: { name: 'Weymouth NT (1912)', language: 'en', tongue: 'en' },
	WMB: { name: 'World Messianic Bible', language: 'en', tongue: 'en' },
	Worsley: { name: '1770 John Worsley NT', language: 'en', tongue: 'en' },
	Wycliffe: {
		name: 'John Wycliffe Bible (c.1395)',
		language: 'enm',
		tongue: 'enm',
	},
	YLT: { name: "Young's Literal Translation", language: 'en', tongue: 'en' },
	LC: { name: 'Literal Consistent', language: 'en', tongue: 'en' },
	MHL: { name: "Mark's Hebrew Literal", language: 'en', tongue: 'en' },
	OPV: { name: 'ترجمه-ی قدام', language: 'fa', tongue: 'fa' },
	TPV: { name: 'مژده برای اسرع جدید', language: 'fa', tongue: 'fa' },
	NMV: { name: 'ترجمه هزارۀ نو', language: 'fa', tongue: 'fa' },
	NMV_strongs: {
		name: 'with strongs - ترجمه هزارۀ نو',
		language: 'fa',
		tongue: 'fa',
		strongs: true,
	},
	NMV_KJV_strongs: {
		name: 'from KJV - ترجمه هزارۀ نو',
		language: 'fa',
		tongue: 'fa',
		strongs: true,
	},
	FarHezareNoh: {
		name: 'Tarjumeh-ye Hezare Noh',
		language: 'fa',
		tongue: 'fa',
	},
	arq2018eb: {
		name: 'العهد الجديد باللهجة الجزائرية',
		language: 'arq',
		tongue: 'dz',
	},
	thv2020eb: {
		name: ' Awal n Messineɣ s Tamahaq',
		language: 'thv',
		tongue: 'dz',
	},
	Afr1953: {
		name: '1933/1953 Afrikaans Bybel',
		language: 'af',
		tongue: 'af',
	},
	AraNAV: {
		name: 'New Arabic Version (Ketab El Hayat)',
		language: 'ar',
		tongue: 'ar',
	},
	AraSVD: { name: 'Arabic Bible', language: 'ar', tongue: 'ar' },
	aer2014eb: {
		name: 'Angkentye Mwerre',
		language: 'aer',
		tongue: 'australia',
	},
	aly2009eb: { name: 'Alyawarr Bible', language: 'aly', tongue: 'australia' },
	amx2015eb: {
		name: 'Anmatyerr Bible',
		language: 'amx',
		tongue: 'australia',
	},
	aoi2019eb: {
		name: 'Anindilyakwa Bible',
		language: 'aoi',
		tongue: 'australia',
	},
	are1997eb: {
		name: 'Altjirraka angkatja - Arrarnturna kngartiwukala',
		language: 'are',
		tongue: 'australia',
	},
	awk1892eb: {
		name: 'EUANGELION UNNI TA JESU-ÚBA CHRIST-KO-BA UPATOARA LUKA-UMBA',
		language: 'awk',
		tongue: 'australia',
	},
	bvr2008eb: {
		name: 'Nyanyapa Arrku Gun-nika Gun-molamola Janguny: Minypa Jesus Christ Guna-ganyja Arrburrwa Gun-geka Rum',
		language: 'bvr',
		tongue: 'australia',
	},
	dhg2019eb: {
		name: 'Djangu Selections',
		language: 'dhg',
		tongue: 'australia',
	},
	dhgdhuwa2019eb: {
		name: "Dhuwa Dhaŋu'mi Mäk+",
		language: 'dhgduwadha',
		tongue: 'australia',
	},
	dif1897eb: {
		name: 'TESTAMENTA MARRA',
		language: 'dif',
		tongue: 'australia',
	},
	dji1985eb: { name: 'Djinang Bible', language: 'dji', tongue: 'australia' },
	djj2023eb: {
		name: 'Ndjébbana Bible Portions',
		language: 'djj',
		tongue: 'australia',
	},
	djr2008eb: {
		name: 'God-Waŋarrwu Walŋamirr Dhäruk',
		language: 'djr',
		tongue: 'australia',
	},
	dwuliv2021eb: {
		name: 'Liyagawumirr Luke',
		language: 'dwuliv',
		tongue: 'australia',
	},
	dwy2019eb: {
		name: 'Djesuwalaŋuwuy latjuꞌ dhäwuꞌ Markkuŋu wukirriwuy',
		language: 'dwy',
		tongue: 'australia',
	},
	engPEV2019eb: {
		name: 'Australian Aboriginal - Plain English Version',
		language: 'engPEV',
		tongue: 'australia',
	},
	engbarkley2024eb: {
		name: 'Barkley Bible Portions',
		language: 'en',
		tongue: 'en',
	},
	engnna2010eb: {
		name: 'Nyangumarta English Bible',
		language: 'engnna',
		tongue: 'australia',
	},
	gia1978eb: {
		name: 'Jawunany - 	Kitja Jonah',
		language: 'gia',
		tongue: 'australia',
	},
	gnn2017eb: { name: 'Gumatj Bible', language: 'gnn', tongue: 'australia' },
	gue1984eb: {
		name: 'Gurindji Scripture Portions',
		language: 'gue',
		tongue: 'australia',
	},
	guf2023eb: {
		name: 'Gupapuyngu Bible Portions',
		language: 'guf',
		tongue: 'australia',
	},
	gup2018eb: {
		name: 'God Nuye Kunwok',
		language: 'gup',
		tongue: 'australia',
	},
	gupk2021eb: {
		name: 'Kuninjku Gospel Selections',
		language: 'gupk',
		tongue: 'australia',
	},
	gupmay2022eb: {
		name: 'Mayali Selections',
		language: 'gupmay',
		tongue: 'australia',
	},
	gvn1984eb: { name: 'Godumu Kuku', language: 'gvn', tongue: 'australia' },
	jao1980eb: {
		name: 'Yanyuwa - Luke, Mark, Acts, Genesis, Ruth, and Romans',
		language: 'jao',
		tongue: 'australia',
	},
	kjn1967eb: {
		name: 'Kunjen Mark Portions',
		language: 'kjn',
		tongue: 'australia',
	},
	kky1888eb: {
		name: 'Gugu Yimidhirr Matthew Sample',
		language: 'kky',
		tongue: 'australia',
	},
	kux2018eb: {
		name: 'Kukatja Scriptures',
		language: 'kux',
		tongue: 'australia',
	},
	lrg2023eb: {
		name: 'Larrakia Christmas Story',
		language: 'lrg',
		tongue: 'australia',
	},
	mph2015eb: {
		name: 'Mawng Mark and other Scripture portions',
		language: 'mph',
		tongue: 'australia',
	},
	mpj1999eb: {
		name: 'Mamamili Wangka',
		language: 'mpj',
		tongue: 'australia',
	},
	mwf2018eb: {
		name: 'Murrinhpatha Bible',
		language: 'mwf',
		tongue: 'australia',
	},
	mwp2014eb: {
		name: 'Minar Poelayzimayl',
		language: 'mwp',
		tongue: 'australia',
	},
	nay1864eb: {
		name: 'Tungarar Jehobald YARILDEWALLIN',
		language: 'nay',
		tongue: 'australia',
	},
	nna2010eb: {
		name: 'Nyangumarta Bible',
		language: 'nna',
		tongue: 'australia',
	},
	ntj2007eb: {
		name: 'Mama Kuurrku Wangka',
		language: 'ntj',
		tongue: 'australia',
	},
	nuy2010eb: {
		name: 'Ana-Maṉngulg Ana-Wubiba -- Anu-gadhuwa Ana-lhaawu',
		language: 'nuy',
		tongue: 'australia',
	},
	nys2018eb: { name: 'Nyoongar Bible', language: 'nys', tongue: 'australia' },
	piu2006eb: { name: 'Luritja Bible', language: 'piu', tongue: 'australia' },
	pjt2019eb: { name: 'Tjukurpa Palya', language: 'pjt', tongue: 'australia' },
	rmb2021eb: {
		name: 'Rembarrnga Christmas Story',
		language: 'rmb',
		tongue: 'australia',
	},
	rop2018eb: { name: 'Holi Baibul', language: 'rop', tongue: 'australia' },
	tcs2016eb: {
		name: 'Baibol Tores Streit Yumplatok',
		language: 'tcs',
		tongue: 'australia',
	},
	thd1975eb: {
		name: 'Kuuk Thayorre Bible Portions',
		language: 'thd',
		tongue: 'australia',
	},
	tiw2000eb: { name: 'Tiwi Bible', language: 'tiw', tongue: 'australia' },
	ulk1902eb: {
		name: 'Meriam Mir Bible - 1902',
		language: 'ulk',
		tongue: 'australia',
	},
	ulk1989eb: {
		name: 'Meriam Mir Bible - 1989',
		language: 'ulk',
		tongue: 'australia',
	},
	wbp2014eb: {
		name: 'Warlpiri Short Bible',
		language: 'wbp',
		tongue: 'australia',
	},
	wim1984eb: {
		name: 'Wik Inangan Kan-Kanam God.antama',
		language: 'wim',
		tongue: 'australia',
	},
	wlg2021eb: {
		name: 'Kunbarlang Christmas Story and Part of Acts 1',
		language: 'wlg',
		tongue: 'australia',
	},
	wmt1985eb: {
		name: 'Wangki Wulyu Jirrkirlikanujuwal',
		language: 'wmt',
		tongue: 'australia',
	},
	wrk1983eb: {
		name: 'Garrwa Shorter New Testament',
		language: 'wrk',
		tongue: 'australia',
	},
	wro1943eb: {
		name: 'Worrorra Mark & Luke',
		language: 'wro',
		tongue: 'australia',
	},
	yij1983eb: {
		name: 'NYIRTINGU MANYKA WANTHARNA NGURRAY',
		language: 'yij',
		tongue: 'australia',
	},
	NorthernAzeri: { name: 'Northern Azeri', language: 'az', tongue: 'az' },
	Azeri: {
		name: 'مقدَس کتاب آذربايجان ديلی',
		language: 'azb',
		tongue: 'az',
	},
	udi2020eb: { name: 'Udi Bible', language: 'udi', tongue: 'azerbaijan' },
	ben2006eb: { name: 'পবিত্র বাইবেল', language: 'ben', tongue: 'bangladesh' },
	benirv2019eb: {
		name: 'ইন্ডিয়ান রিভাইজড ভার্সন (IRV) - বেঙ্গলী',
		language: 'ben',
		tongue: 'bangladesh',
	},
	benobcv2019eb: {
		name: 'Biblica® মুক্তভাবে বাংলা সমকালীন সংস্করণের',
		language: 'ben',
		tongue: 'bangladesh',
	},
	syl2014eb: {
		name: 'Sylheti New Testament (Bengali)',
		language: 'syl',
		tongue: 'bangladesh',
	},
	syll2014eb: {
		name: 'Sylheti New Testament (Latin)',
		language: 'syl',
		tongue: 'bangladesh',
	},
	syls2014eb: {
		name: 'Sylheti New Testament (Sylo)',
		language: 'syl',
		tongue: 'bangladesh',
	},
	Bela: { name: 'Belarusian Bible', language: 'be', tongue: 'be' },
	beln2021eb: {
		name: 'Новы Запавет і Кнігі Старога Запавету',
		language: 'bel',
		tongue: 'be',
	},
	mop2012eb: {
		name: "Le'ec Ada' U T'an A Dios A Tumulbene - Mopán Maya NT",
		language: 'mop',
		tongue: 'belize',
	},
	bzj2012eb: {
		name: 'Di Nyoo Testiment eena Bileez Kriol',
		language: 'bzj',
		tongue: 'belize',
	},
	dop1999eb: {
		name: 'PIIPILI ƖSƆ TƆM TAKƎLAƔA - Lokpa Bible',
		language: 'dop',
		tongue: 'benin',
	},
	fue2011eb: {
		name: 'Alkawal Kesal - Fulfulde Borgu NT',
		language: 'fue',
		tongue: 'benin',
	},
	fuhBKF2012eb: {
		name: 'Fulfulfe Burkina, Dewtere Laamɗo Amaana Keso',
		language: 'fuhbkf',
		tongue: 'benin',
	},
	mkl2006eb: {
		name: 'Akabuu Titɔ̃i Idei Ilaaɔ - Mokole NT',
		language: 'mkl',
		tongue: 'benin',
	},
	bba2013eb: {
		name: 'Bibeli Gusunɔn Gari',
		language: 'bba',
		tongue: 'benin',
	},
	soy2010eb: {
		name: 'Nkomine Fal Ritɛlɛ́ - Sola NT',
		language: 'soy',
		tongue: 'benin',
	},
	tbz2001eb: {
		name: 'Bibiri Kuyie Nnɑ́ɑǹtì Pɑ́tíri',
		language: 'tbzsim',
		tongue: 'benin',
	},
	BulCarigradNT: {
		name: 'Bulgarian New Testament from 1914, known as Tsarigrad Edition',
		language: 'bg',
		tongue: 'bg',
	},
	BulVeren: {
		name: 'Veren’s Contemporary Bible',
		language: 'bg',
		tongue: 'bg',
	},
	cao2010eb: {
		name: 'Chácobo - Dios Chani',
		language: 'cao',
		tongue: 'bolivia',
	},
	cap2009eb: {
		name: 'Chipaya - Ew Testamento: Chipay Tawkquiztan',
		language: 'cap',
		tongue: 'bolivia',
	},
	cav2012eb: {
		name: 'Cavineña - Yusuja Quisarati',
		language: 'cav',
		tongue: 'bolivia',
	},
	cax2012eb: {
		name: 'Chiquitano - Manitanati Tuparrü',
		language: 'cax',
		tongue: 'bolivia',
	},
	ese2012eb: {
		name: 'Ese Ejja - Eyacuiñajjija Esohui',
		language: 'ese',
		tongue: 'bolivia',
	},
	gnw2012eb: {
		name: 'Guaraní, Eastern Bolivian - Nuevo Testamento Guaraní Pe',
		language: 'gnw',
		tongue: 'bolivia',
	},
	gui2012eb: {
		name: 'Guaraní, Western Bolivian - Nuevo Testamento Guaraní Pe',
		language: 'gui',
		tongue: 'bolivia',
	},
	gyr2011eb: {
		name: 'Guarayu - Tũpa Ñehengagüer',
		language: 'gyr',
		tongue: 'bolivia',
	},
	ign2012eb: {
		name: 'Ignaciano - Eta Táurinaquene máechajiriruvahi ema Viya eta viyehe, ticaijare puito Eta Nuevo Testamento',
		language: 'ign',
		tongue: 'bolivia',
	},
	quhNT2011eb: {
		name: 'Quechua, North Bolivian - Mosoj Testamento',
		language: 'quh',
		tongue: 'bolivia',
	},
	qul1985eb: {
		name: 'Quechua, South Bolivian - Dios Parlapawanchej',
		language: 'qul',
		tongue: 'bolivia',
	},
	srqNT1977eb: {
		name: 'Sirionó - Mbia Cheẽ',
		language: 'srq',
		tongue: 'bolivia',
	},
	tna2009eb: {
		name: 'Tacana - Diusu sa mimi',
		language: 'tna',
		tongue: 'bolivia',
	},
	nhr2012eb: {
		name: "Naro - Ka̱bas Qae-xg'ae sa",
		language: 'nhr',
		tongue: 'botswana',
	},
	tsn1993eb: {
		name: 'Setswana - Biblica® Open Lefoko: La Botshelo Kgolagano e Ntsha',
		language: 'tsn',
		tongue: 'botswana',
	},
	BretonNT: {
		name: 'Breton New Testament (Koad 21)',
		language: 'br',
		tongue: 'br',
	},
	apn1999eb: {
		name: 'Apalaí - Ritonõpo Omiry: A Bíblia Sagrada na língua Aparai do Brasil',
		language: 'apn',
		tongue: 'brazil',
	},
	apu2004eb: {
		name: 'Apinayé - Tĩrtũm kapẽr ã kagà nyw',
		language: 'apu',
		tongue: 'brazil',
	},
	apy2017eb: {
		name: 'Apurinã - Teoso sãkire amaneri',
		language: 'apy',
		tongue: 'brazil',
	},
	bkq2011eb: {
		name: 'Bakairí - Deus Itaumbyry',
		language: 'bkq',
		tongue: 'brazil',
	},
	bor2020eb: {
		name: 'Borôro - Pao Kurireu Bataru Kurireu; O Novo Testamento',
		language: 'bor',
		tongue: 'brazil',
	},
	cul2014eb: {
		name: 'Canela - PAHPÃM JARKWA CUPAHTI JÕ KÀHHÔC',
		language: 'cul',
		tongue: 'brazil',
	},
	des2011eb: {
		name: 'Desano - Goãmʉ Yare Wereripʉ',
		language: 'des',
		tongue: 'brazil',
	},
	gub2007eb: {
		name: "Guajajára - Tupàn ze'eg",
		language: 'gub',
		tongue: 'brazil',
	},
	gun2004eb: {
		name: "Mbyá Guaraní -Nhanderuete ayvu iky'a e'ỹ va'e",
		language: 'gun',
		tongue: 'brazil',
	},
	hix2012eb: {
		name: 'Hixkaryána - Khoryenkom Karyehtanà',
		language: 'hix',
		tongue: 'brazil',
	},
	jaa2020eb: {
		name: 'Jamamadí - Teoso Ka Yama Hani',
		language: 'jaa',
		tongue: 'brazil',
	},
	kbc2012eb: {
		name: "Kaapor - Tupã Je'ẽha",
		language: 'kbc',
		tongue: 'brazil',
	},
	kgk2006eb: {
		name: 'Kadiwéu - Gela Liwai Lotaɡ̶anaɡ̶axi Aneotedoɡ̶oji',
		language: 'kgk',
		tongue: 'brazil',
	},
	kgpNT2011eb: {
		name: 'Kaingang - Topẽ vĩ rá',
		language: 'kgp',
		tongue: 'brazil',
	},
	kpj2011eb: {
		name: "Kaiwá - Nhandejáry Nhe'ẽ",
		language: 'kpj',
		tongue: 'brazil',
	},
	kyz2012eb: {
		name: 'Karajá - Deuxu Rybe Tyyriti',
		language: 'kyz',
		tongue: 'brazil',
	},
	mav2011eb: {
		name: "Kayabí - Janeruwarete 'Ga Je'eg",
		language: 'mav',
		tongue: 'brazil',
	},
	mbc2013eb: {
		name: 'Kayapó - Metĩndjwỳnh Kute Memã Kabẽn Ny Jarẽnh',
		language: 'mbc',
		tongue: 'brazil',
	},
	mbj2011eb: {
		name: 'Culina - El Nuevo Testamento en el idioma Culina (mádija) del Perú',
		language: 'mbj',
		tongue: 'brazil',
	},
	mbl2011eb: {
		name: "Macushi - Amenan pe paapaya uyetato'kon",
		language: 'mbl',
		tongue: 'brazil',
	},
	myu2010eb: {
		name: 'Maxakalí - Topa Yõg Tappet',
		language: 'myu',
		tongue: 'brazil',
	},
	nab2012eb: {
		name: 'Mundurukú - Deus ekawẽntup Kawẽn iisuat ekawẽn',
		language: 'nab',
		tongue: 'brazil',
	},
	pab2012eb: {
		name: 'Nadëb - Pop Hagä Do Panyyg Hanäm Do Hahỹỹh',
		language: 'pab',
		tongue: 'brazil',
	},
	pad2010eb: {
		name: 'Nambikuára Southern - Txa²wã¹sũ̱³na² Wãn³txa²',
		language: 'pad',
		tongue: 'brazil',
	},
	pah1996eb: {
		name: 'Palikúr - Uhokri Gannasan',
		language: 'pah',
		tongue: 'brazil',
	},
	plu1982eb: {
		name: 'Parecís - Waitare Wenati Aho',
		language: 'plu',
		tongue: 'brazil',
	},
	porWBTC1999eb: {
		name: 'Paumarí - Deus Athi Kapapirani Hida',
		language: 'pt',
		tongue: 'brazil',
	},
	porblt2022eb: {
		name: 'Português - Biblia Livre Para Todos',
		language: 'pt',
		tongue: 'brazil',
	},
	porbr2018eb: {
		name: 'Português - Novo Testamento: Versão Fácil de Ler',
		language: 'pt',
		tongue: 'brazil',
	},
	porbrbsl2022eb: {
		name: 'Português - Bíblia Livre Portuguese Bíblia Livre',
		language: 'pt',
		tongue: 'brazil',
	},
	portft2018eb: {
		name: 'portugues - A Bíblia Sagrada, Tradução para Tradutores',
		language: 'por',
		tongue: 'brazil',
	},
	ram2012eb: {
		name: 'Português - Bíblia Portuguesa Mundial',
		language: 'ram',
		tongue: 'brazil',
	},
	rkb2011eb: {
		name: 'Rikbaktsa - Deus Harere Aibaky Sesus mymyspirikpoko naha',
		language: 'rkb',
		tongue: 'brazil',
	},
	ter2012eb: {
		name: 'Sateré - Sateré-Mawé Tupana Ehay Satere Mawe Pusupuo',
		language: 'ter',
		tongue: 'brazil',
	},
	tuoNT2009eb: {
		name: 'Tenharim - Tupanaʼga nhiʼig̃a',
		language: 'tuo',
		tongue: 'brazil',
	},
	txu2012eb: {
		name: "Terêna - Emo'u Itukó'oviti",
		language: 'txu',
		tongue: 'brazil',
	},
	urb2012eb: {
		name: "Tucano - Õ'âkĩ̶ hɨ yeere uúkũri turi Tukano",
		language: 'urb',
		tongue: 'brazil',
	},
	xav2004eb: {
		name: "Xavánte| - Re ĩhâimana u'âsi mono zadawa wasu'u",
		language: 'xav',
		tongue: 'brazil',
	},
	bib2001eb: {
		name: 'Bisa - Wosoci Gʊaasɩbabaa Daa',
		language: 'bib',
		tongue: 'burkinafaso',
	},
	box2012eb: {
		name: 'Buamu -  Dónbeenì páaníi fĩnle vũahṹ',
		language: 'box',
		tongue: 'burkinafaso',
	},
	cme2011eb: {
		name: 'Cerma - Diiloŋ-nelma Tobisĩfɛlɛnni',
		language: 'cme',
		tongue: 'burkinafaso',
	},
	dyu2013eb: {
		name: 'Julakan - Biblu Ala ta Kuma',
		language: 'dyu',
		tongue: 'burkinafaso',
	},
	gux2020eb: {
		name: 'Gourmanchéma - Bible Gourma',
		language: 'gux',
		tongue: 'burkinafaso',
	},
	guxg2020eb: {
		name: 'Gourmanchéma - Bible Gourmantche',
		language: 'gux',
		tongue: 'burkinafaso',
	},
	nnw1999eb: {
		name: 'Nuni, Southern - Yɩɩ sʋywáŋʋ́ sagɩ',
		language: 'nnw',
		tongue: 'burkinafaso',
	},
	wib2013eb: {
		name: 'Toussian, Southern - wĩn nɩ̀vɩ̀nɩ̀ tirlɛ',
		language: 'wib',
		tongue: 'burkinafaso',
	},
	xrb1993eb: {
		name: 'Karaboro, Eastern: YÃHÃ NAAMBIYÃRFÃN SABA',
		language: 'xrb',
		tongue: 'burkinafaso',
	},
	xsm1997eb: {
		name: 'Kasem -  Wɛ Tɔnɔ dɩ kasɩm',
		language: 'xsm',
		tongue: 'burkinafaso',
	},
	tpu2020eb: {
		name: 'Tampuan - គម្ពីរ​ភាសា​ទំពួន',
		language: 'tpu',
		tongue: 'cambodia',
	},
	bss2011eb: { name: 'Bible in Akoose', language: 'bss', tongue: 'cm' },
	anv2010eb: { name: 'Ŋwɛ menomenyɛɛ́ mekɛ́', language: 'anv', tongue: 'cm' },
	bcw2005eb: {
		name: 'Zliya Yǝwǝn kwǝma wǝzǝ naa dzǝkǝn Yesǝw Kǝristǝw',
		language: 'bcw',
		tongue: 'cm',
	},
	bfd1999eb: {
		name: 'Bafut: Ǹtoò Kristo yî Ǹsɨgɨ̀nǝ̀: mɨ̀kàà yî mfiì New Testament',
		language: 'bfd',
		tongue: 'cm',
	},
	bmo2019eb: { name: 'Ŋwaʼaŋlɨ Kɨǹ a Fhi', language: 'bmo', tongue: 'cm' },
	ken2010eb: { name: 'Ɛkáti Nku Nkɔ', language: 'ken', tongue: 'cm' },
	kkj1999eb: {
		name: 'Mɛlɛpi mɛ Njambiyɛ Jɔnja Mbon',
		language: 'kkj',
		tongue: 'cm',
	},
	mcp2014eb: {
		name: 'Kálaad Zɛmbî : Sɔ ̧ á Gúgwáan',
		language: 'mcp',
		tongue: 'cm',
	},
	mcu2001eb: { name: 'Mvù Ŋgɔ̀ŋ Feê', language: 'mcu', tongue: 'cm' },
	meq2012eb: { name: 'Dzam Weɗeye', language: 'meq', tongue: 'cm' },
	mfh2019eb: {
		name: 'Wakità Zəzagəla Wakità Aŋa Makəs Vok Slawda Mawga',
		language: 'mfh',
		tongue: 'cm',
	},
	mfi1999eb: { name: 'Wakita á Dadaamiya', language: 'mfi', tongue: 'cm' },
	mif2007eb: { name: 'Mejəwey-mey Mawiya', language: 'mif', tongue: 'cm' },
	mqb2010eb: { name: "Aɓan 'am wiya awan", language: 'mqb', tongue: 'cm' },
	muy2013eb: {
		name: 'Ma Mʉweni Sulumani ge Melefit',
		language: 'muy',
		tongue: 'cm',
	},
	nhu2011eb: {
		name: "Ŋwa' Nyo' Moŋkan mo Monfɛm",
		language: 'nhu',
		tongue: 'cm',
	},
	xed2013eb: {
		name: 'Deftera Lfiɗa Dzratawi',
		language: 'xed',
		tongue: 'cm',
	},
	yam2011eb: {
		name: 'Ŋwàk Nwì Ma Rʉ̀k Nə̀ Fi',
		language: 'yam',
		tongue: 'cm',
	},
	BeaMRK: {
		name: 'The Gospel of Mark in Beaver (Danezaa)',
		language: 'bea',
		tongue: 'canada',
	},
	CebPinadayag: { name: 'Cebuano Pinadayag', language: 'ceb', tongue: 'ceb' },
	Che1860: {
		name: 'Cherokee New Testament (1860) with Sequoyah transliterated forms',
		language: 'chr',
		tongue: 'chr',
	},
	ckbOKS: {
		name: 'وەشانی بێبەرامبەری کوردیی سۆرانیی ستاندەر',
		language: 'ckb',
		tongue: 'ckb',
	},
	CopNT: { name: 'The Coptic New Testament', language: 'cop' },
	CopSahHorner: {
		name: 'Sahidic Coptic New Testament, ed. by G. W. Horner',
		language: 'cop',
		tongue: 'cop',
	},
	CopSahidica: {
		name: 'Sahidica - A New Edition of the New Testament in Sahidic Coptic',
		language: 'cop',
		tongue: 'cop',
	},
	CopSahidicMSS: {
		name: 'The Sahidica Manuscripts',
		language: 'cop',
		tongue: 'cop',
	},
	CzeB21: {
		name: 'Czech Bible, Překlad 21. století včetně deuterokanonických knih',
		language: 'cs',
		tongue: 'cs',
	},
	CzeBKR: { name: 'Czech Bible Kralicka', language: 'cs', tongue: 'cs' },
	CzeCEP: {
		name: 'Czech Ekumenicky Cesky preklad',
		language: 'cs',
		tongue: 'cs',
	},
	CzeCSP: {
		name: 'Czech Český studijní překlad',
		language: 'cs',
		tongue: 'cs',
	},
	CSlElizabeth: {
		name: '1757 Church Slavonic Elizabeth Bible',
		language: 'cu',
		tongue: 'cu',
	},
	WelBeiblNet: {
		name: 'Welsh beibl.net',
		language: 'cy',
		tongue: 'cy',
	},
	DaNT1819: {
		name: 'Danish New Testament from 1819 with original orthography',
		language: 'da',
		tongue: 'da',
	},
	DaOT1871NT1907: {
		name: 'Danish OT1871 + NT1907 with original orthography',
		language: 'da',
		tongue: 'da',
	},
	DaOT1931NT1907: {
		name: 'Danish OT1931 + NT1907 with original orthography',
		language: 'da',
		tongue: 'da',
	},
	GerAlbrecht: {
		name: 'German Albrecht Neues Testament und Psalmen',
		language: 'de',
		tongue: 'de',
	},
	GerBoLut: {
		name: 'Deutsch Bolsingerߴs Luther 1545 Bibel (moderne Rechtschreibung)',
		language: 'de',
		tongue: 'de',
	},
	GerElb1871: {
		name: 'German Elberfelder (1871) (sogenannt)',
		language: 'de',
		tongue: 'de',
	},
	GerElb1905: {
		name: 'German Darby Unrevidierte Elberfelder (1905)',
		language: 'de',
		tongue: 'de',
	},
	GerGruenewald: { name: '1924 Grünewaldbibel', language: 'de' },
	GerLeoNA28: {
		name: 'Leonberger Bibel, NT (NA28)',
		language: 'de',
		tongue: 'de',
		strongs: true,
	},
	GerLeoRP18: {
		name: 'Leonberger Bibel, NT (RP19)',
		language: 'de',
		tongue: 'de',
		strongs: true,
	},
	GerMenge: { name: 'Menge-Bibel (1939)', language: 'de', tongue: 'de' },
	GerNeUe: {
		name: 'Neue evangelistische Übersetzung',
		language: 'de',
		tongue: 'de',
	},
	GerOffBiSt: {
		name: 'Leonberger Bibel, NT (RP19)',
		language: 'de',
		tongue: 'de',
	},
	GerReinhardt: {
		name: 'German Reinhardt Evangelien',
		language: 'de',
		tongue: 'de',
	},
	GerSch: {
		name: 'Schlachter Bibel (1951)',
		language: 'de',
		tongue: 'de',
		strongs: true,
	},
	GerTafel: {
		name: 'German Tafelbibel (1911)',
		language: 'de',
		tongue: 'de',
	},
	GerTextbibel: {
		name: ' Deutsch Textbibel (1906)',
		language: 'de',
		tongue: 'de',
	},
	GreVamvas: {
		name: "Neophytos Vamvas's translation of the Holy Bible into modern Greek (1850)",
		language: 'el',
		tongue: 'el',
	},
	GerZurcher: {
		name: 'Deutsche Zürcher Bibel von 1931.',
		language: 'de',
		tongue: 'de',
	},
	Esperanto: {
		name: 'Esperanto Londona Biblio',
		language: 'eo',
		tongue: 'eo',
	},
	SpaPlatense: {
		name: 'Biblia Platense (Straubinger)',
		language: 'es',
		tongue: 'es',
	},
	SpaRV: {
		name: 'La Santa Biblia Reina-Valera (1909)',
		language: 'es',
		tongue: 'es',
	},
	SpaRV1865: {
		name: 'La Santa Biblia Reina-Valera (1865) con arreglos ortográficos',
		language: 'es',
		tongue: 'es',
	},
	SpaTDP: {
		name: 'Spanish Traducción de dominio público (Mateo a Romanos)',
		language: 'es',
		tongue: 'es',
	},
	SpaVNT: {
		name: 'Spanish 1858 Reina Valera New Testament',
		language: 'es',
		tongue: 'es',
	},
	Est: { name: 'Estonian Bible', language: 'et', tongue: 'et' },
	BasHautin: {
		name: '1571 Navarro-Labourdin Basque NT',
		language: 'eu',
		tongue: 'eu',
	},
	FinBiblia: { name: 'Finnish Biblia (1776)', language: 'fi', tongue: 'fi' },
	FinPR: {
		name: 'Finnish Pyhä Raamattu (1933/1938)',
		language: 'fi',
		tongue: 'fi',
	},
	FinPR92: {
		name: 'Finnish Pyhä Raamattu (1992)',
		language: 'fi',
		tongue: 'fi',
	},
	FinRK: { name: 'Raamattu Kansalle (2012)', language: 'fi', tongue: 'fi' },
	FinSTLK2017: {
		name: 'Pyhä Raamattu (STLK 2017)',
		language: 'fi',
		tongue: 'fi',
	},
	FreBBB: {
		name: 'French Bible Bovet Bonnet (1900)',
		language: 'fr',
		tongue: 'fr',
	},
	FreBDM1744: {
		name: 'Bible David Martin (1744)',
		language: 'fr',
		tongue: 'fr',
	},
	FreCrampon: {
		name: 'La Bible Augustin Crampon 1923',
		language: 'fr',
		tongue: 'fr',
	},
	FreGeneve1669: {
		name: 'Le Nouveau Testament de la Bible de Genève de 1669',
		language: 'fr',
		tongue: 'fr',
	},
	FreJND: {
		name: 'Bible J.N.Darby en français',
		language: 'fr',
		tongue: 'fr',
	},
	FreLXX: {
		name: 'Traduction de la LXX par P. GIGUET et autres traducteurs, 1872.',
		language: 'fr',
		tongue: 'fr',
	},
	FreLXXGiguet: {
		name: 'Traduction de la LXX par Pierre GIGUET et autres traducteurs, 1872.',
		language: 'fr',
		tongue: 'fr',
	},
	FreOltramare1874: {
		name: 'Le Nouveau Testament Version Oltramare 1874',
		language: 'fr',
		tongue: 'fr',
	},
	FrePGR: {
		name: 'Bible Perret-Gentil et Rilliet',
		language: 'fr',
		tongue: 'fr',
	},
	FreKhan: { name: 'La Bible de Zadoc Khan', language: 'fr', tongue: 'fr' },
	FreSegond: {
		name: 'French Traduction de Louis Segond (1910)',
		language: 'fr',
		tongue: 'fr',
	},
	FreSegond1910: {
		name: 'Bible Louis Segond (1910)',
		language: 'fr',
		tongue: 'fr',
	},
	FreStapfer1889: {
		name: 'Le Nouveau Testament traduction de Stapfer - 1889',
		language: 'fr',
		tongue: 'fr',
	},
	FreSynodale1921: {
		name: 'Le Nouveau Testament Version Synodale 1921 et le livre des Psaumes',
		language: 'fr',
		tongue: 'fr',
	},
	IriODomhnuill: {
		name: 'A modern Irish New Testament (Luke preview)',
		language: 'ga',
		tongue: 'ga',
	},
	ScotsGaelic: {
		name: 'Scottish Gaelic Gospel of Mark',
		language: 'gd',
		tongue: 'gd',
	},
	Geez: { name: 'Ge’ez Bible', language: 'gez', tongue: 'gez' },
	ABPGRK: {
		name: 'Apostolic Bible Polyglot Greek Text',
		language: 'grc',
		tongue: 'grc',
		strongs: true,
	},
	Antoniades: {
		name: 'Antoniades Patriarchal Edition (1904/1912)',
		language: 'grc',
		tongue: 'grc',
		strongs: true,
	},
	byzparsed: {
		name: 'Byzantine Majority Text',
		language: 'grc',
		tongue: 'grc',
		strongs: true,
	},
	Elzevir: {
		name: 'Elzevir Textus Receptus (1624)',
		language: 'grc',
		tongue: 'grc',
		strongs: true,
	},
	f35: { name: 'Family 35', language: 'grc', tongue: 'grc' },
	LXX: {
		name: "Septuagint, Morphologically Tagged Rahlfs'",
		language: 'grc',
		tongue: 'grc',
		strongs: true,
	},
	MorphGNT: {
		name: 'Morphologically Parsed Greek New Testament based on the SBLGNT',
		language: 'grc',
		tongue: 'grc',
		strongs: true,
	},
	OxfordTR: {
		name: '1873 Oxford Textus Receptus Gospel of John',
		language: 'grc',
		tongue: 'grc',
	},
	SBLGNT: {
		name: 'The Greek New Testament: SBL Edition',
		language: 'grc',
		tongue: 'grc',
	},
	StatResGNT: {
		name: 'Statistical Restoration Greek New Testament',
		language: 'grc',
		tongue: 'grc',
		strongs: true,
	},
	Tisch: {
		name: "Tischendorf's 8th edition GNT",
		language: 'grc',
		tongue: 'grc',
		strongs: true,
	},
	TNT: {
		name: "Tregelles' Greek New Testament",
		language: 'grc',
		tongue: 'grc',
	},
	TR: {
		name: 'Textus Receptus (1550/1894)',
		language: 'grc',
		tongue: 'grc',
		strongs: true,
	},
	WHNU: {
		name: 'Westcott and Hort with NA27/UBS4 variants',
		language: 'grc',
		tongue: 'grc',
		strongs: true,
	},
	ManxGaelic: {
		name: 'Manx Gaelic Scripture Portions',
		language: 'gv',
		tongue: 'gv',
	},
	Aleppo: { name: 'Aleppo Codex', language: 'hbo', tongue: 'hbo' },
	MapM: {
		name: 'מקרא על פי המסורה (Miqra `al pi ha-Mesorah)',
		language: 'hbo',
		tongue: 'hbo',
	},
	OSHB: {
		name: 'Open Scriptures Hebrew Bible',
		language: 'hbo',
		tongue: 'hbo',
		strongs: true,
	},
	SP: {
		name: 'Samaritan Pentateuch',
		language: 'hbo',
		tongue: 'hbo',
		strongs: true,
	},
	SPDSS: {
		name: 'Dead Sea Scrolls variants parallel to the Samaritan Pentateuch',
		language: 'hbo',
		tongue: 'hbo',
		strongs: true,
	},
	SPMT: {
		name: 'Masoretic Text parallel to the Samaritan Pentateuch',
		language: 'hbo',
		tongue: 'hbo',
		strongs: true,
	},
	SPVar: {
		name: 'Samaritan Pentateuch with variant readings',
		language: 'hbo',
		tongue: 'hbo',
	},
	WLC: {
		name: 'Westminster Leningrad Codex',
		language: 'hbo',
		tongue: 'hbo',
	},
	HebDelitzsch: {
		name: "Hebrew New Testament with Niqqud, based on Delitzsch's translation",
		language: 'he',
		tongue: 'he',
	},
	HebModern: { name: 'Modern Hebrew Bible', language: 'he', tongue: 'he' },
	hinIRV: {
		name: 'हिंदी भारतीय संशोधित संस्करण बाइबिल भारत',
		language: 'hi',
		tongue: 'hi',
	},
	MCSB: {
		name: 'Matupi Chin Standard Bible',
		language: 'hlt',
		tongue: 'hlt',
		strongs: true,
	},
	CroSaric: {
		name: 'Hrvatska Biblija Ivana Šarića',
		language: 'hr',
		tongue: 'hr',
	},
	Haitian: { name: 'Haitian Creole Bible', language: 'ht', tongue: 'ht' },
	HunIMIT: {
		name: 'Az Izraelita-Magyar Irodalmi Társaság (IMIT) Bibliája (zsidó)',
		language: 'hu',
		tongue: 'hu',
	},
	HunKar: {
		name: 'Revideált Károli Biblia 1908',
		language: 'hu',
		tongue: 'hu',
	},
	HunKNB: {
		name: 'Káldi-Neovulgáta (katolikus) 2013',
		language: 'hu',
		tongue: 'hu',
	},
	HunRUF: {
		name: 'A Magyar Bibliatársulat Revideált Újfordítású Bibliája',
		language: 'hu',
		tongue: 'hu',
	},
	HunUj: {
		name: 'A Magyar Bibliatársulat Újfordítású Bibliája',
		language: 'hu',
		tongue: 'hu',
	},
	ArmEastern: {
		name: 'Eastern Armenian Bible',
		language: 'hy',
		tongue: 'hy',
	},
	ArmWestern: {
		name: '1853 Western Armenian NT',
		language: 'hy',
		tongue: 'hy',
	},
	ItaDio: {
		name: 'Italian Giovanni Diodati Bibbia 1649',
		language: 'it',
		tongue: 'it',
	},
	ItaRive: {
		name: 'Italian Riveduta Bibbia (1927)',
		language: 'it',
		tongue: 'it',
	},
	JapBungo: {
		name: 'Japanese Bungo-yaku/Taisho-kaiyaku 大正改訳「新約聖書」(1950年版)',
		language: 'ja',
		tongue: 'ja',
	},
	JapDenmo: { name: 'Japanese Denmo 電網聖書', language: 'ja', tongue: 'ja' },
	JapKougo: {
		name: 'Japanese Kougo-yaku 口語訳「聖書」(1954/1955年版)',
		language: 'ja',
		tongue: 'ja',
	},
	JapRaguet: {
		name: 'Japanese Raguet-yaku ラゲ訳「我主イエズスキリストの新約聖書」(1910年版)',
		language: 'ja',
		tongue: 'ja',
	},
	Kekchi: { name: "K'ekchi' Bible", language: 'kek', tongue: 'kek' },
	Kaz: { name: 'Киелі кітап', language: 'kk', tongue: 'kk' },
	KhmerNT: {
		name: 'Khmer Christian Bible',
		language: 'km',
		tongue: 'cambodia',
	},
	KorHKJV: {
		name: 'Hangul King James Version',
		language: 'ko',
		tongue: 'ko',
	},
	KorRV: { name: '개역성경', language: 'ko', tongue: 'ko' },
	Kapingamarangi: {
		name: 'The Bible in the Kapingamarangi language',
		language: 'kpl',
		tongue: 'kpl',
	},
	KswSKMB: {
		name: "S'gaw Karen Mason Bible 1853",
		language: 'ksw',
		tongue: 'ksw',
	},
	Vulgate_HebPs: {
		name: 'Latin Vulgate Psalms from Hebrew',
		language: 'la',
		tongue: 'la',
	},
	VulgClementine: {
		name: 'Clementine Vulgate',
		language: 'la',
		tongue: 'la',
	},
	VulgConte: {
		name: 'Vulgata Clementina, Conte editore',
		language: 'la',
		tongue: 'la',
	},
	VulgHetzenauer: {
		name: 'Vulgata Clementina, Hetzenauer editore',
		language: 'la',
		tongue: 'la',
	},
	VulgSistine: { name: 'Vulgata Sistina', language: 'la', tongue: 'la' },
	Vulgate: { name: 'Latin Vulgate', language: 'la', tongue: 'la' },
	LinVB: {
		name: 'Liloba lya Nzambe, édition Verbum Bible',
		language: 'ln',
		tongue: 'ln',
	},
	LtKBB: { name: 'Lithuanian Bible', language: 'lt', tongue: 'lt' },
	luoONL: {
		name: 'Ochiw Thuolo Motingʼo Loko Manyien',
		language: 'luo',
		tongue: 'luo',
	},
	Latvian: { name: 'Latvian New Testament', language: 'lv', tongue: 'lv' },
	LvGluck8: {
		name: 'Latvian Glück 8th edition',
		language: 'lv',
		tongue: 'lv',
	},
	ChiUnL: { name: '聖經 (文理和合)', language: 'lzh', tongue: 'lzh' },
	Mal1910: {
		name: 'Sathyavedapusthakam (Malayalam Bible) published in 1910',
		language: 'mal',
		tongue: 'mal',
	},
	Mg1865: { name: 'Baiboly Malagasy (1865)', language: 'mg', tongue: 'mg' },
	Maori: { name: 'Maori Bible', language: 'mi', tongue: 'mi' },
	MonKJV: {
		name: 'Mongolian King James Version',
		language: 'mn',
		tongue: 'mn',
	},
	BurCBCM: {
		name: 'ဤဘာသာပြန်ကျမ်းကိုကက်သလစ်ဆရာတော်များရုံးချုပ်ရှိ သမမ္မာ ကျမ်းစာတမန်တော်လုပ်ငန်းကော်မစ်ရှင်မှပံ့ပိုးပေးပါသည်။',
		language: 'my',
		tongue: 'my',
	},
	BurJudson: {
		name: '1835 Judson Burmese Bible',
		language: 'my',
		tongue: 'my',
	},
	NorBroed: { name: 'Brød Nye Testamente', language: 'nb', tongue: 'nb' },
	Norsk: { name: 'Bibelen på Norsk (1930)', language: 'nb', tongue: 'nb' },
	Ndebele: { name: 'Ndebele Bible', language: 'nd', tongue: 'nd' },
	DutSVV: {
		name: 'Dutch Statenvertaling Bijbel',
		language: 'nl',
		tongue: 'nl',
	},
	DutSVVA: {
		name: 'De ganse Heilige Schrift bevattende al de kanonieke boeken van het Oude en Nieuwe Testament, met de apocriefe (deuterocanonieke) boeken',
		language: 'nl',
		tongue: 'nl',
	},
	NlCanisius1939: {
		name: 'Petrus Canisius Translation',
		language: 'nl',
		tongue: 'nl',
	},
	NorSMB: {
		name: 'Studentmållagsbibelen frå 1921',
		language: 'nn',
		tongue: 'nn',
	},
	PolGdanska: {
		name: 'Polish Biblia Gdanska (1881)',
		language: 'pl',
		tongue: 'pl',
	},
	PolUGdanska: { name: 'Updated Gdańsk Bible', language: 'pl', tongue: 'pl' },
	Pohnpeian: {
		name: 'Bible in Pohnpeian language',
		language: 'pon',
		tongue: 'pon',
	},
	PohnOld: {
		name: 'Old Public Domain Pohnpeian Bible',
		language: 'pon',
		tongue: 'pon',
	},
	PotLykins: {
		name: '1833 Potawatomi Matthew and Acts',
		language: 'pot',
		tongue: 'pot',
	},
	Uma: { name: 'Uma New Testament', language: 'ppk', tongue: 'ppk' },
	Dari: { name: 'Dari Translation', language: 'prs', tongue: 'prs' },
	PorAR: {
		name: 'Bíblia Almeida Recebida (AR)',
		language: 'pt',
		tongue: 'pt',
	},
	PorAlmeida1911: {
		name: "De 1911 Biblia Sagrada Traduzida em Portuguez Por João Ferreeira D'Almeida",
		language: 'pt',
		tongue: 'pt',
	},
	PorBLivre: { name: 'Bíblia Livre', language: 'pt', tongue: 'pt' },
	PorBLivreTR: {
		name: 'Bíblia Livre - Textus Receptus',
		language: 'pt',
		tongue: 'pt',
	},
	PorCap: {
		name: 'Bíblia Sagrada (Capuchinhos)',
		language: 'pt',
		tongue: 'pt',
	},
	PorNVA: {
		name: 'Bíblia Nova Versão de Acesso Livre',
		language: 'pt',
		tongue: 'pt',
	},
	Calo: {
		name: 'El Evangelio segun S. Lucas, traducido al Romaní, ó dialecto de los Gitanos de España',
		language: 'rmq',
		tongue: 'rmq',
	},
	RomCor: {
		name: 'Cornilescu Bible in Romanian language',
		language: 'ro',
		tongue: 'ro',
	},
	RusMakarij: {
		name: 'The Pentateuch of Moses in Russian',
		language: 'ru',
		tongue: 'ru',
	},
	RusSynodal: {
		name: 'Синодального Перевода Библии',
		language: 'ru',
		tongue: 'ru',
	},
	RusSynodalLIO: {
		name: 'Russian Synodal Bible, Licht im Osten Edition',
		language: 'ru',
		tongue: 'ru',
		strongs: true,
	},
	RusVZh: {
		name: 'Russian New Testament',
		language: 'ru',
		tongue: 'ru',
	},
	SloOjacano: {
		name: 'Ojačano Sveto pismo (Ps + Gal)',
		language: 'sl',
		tongue: 'sl',
	},
	SloChraska: {
		name: 'Sveto pismo Starega in Novega zakona (1925) – SloChraska',
		language: 'sl',
		tongue: 'sl',
	},
	SloKJV: {
		name: 'Slovenian translation of Holy Bible King James Version (1769)',
		language: 'sl',
		tongue: 'sl',
	},
	SloStritar: {
		name: 'Novi testament in Psalmi Davidovi Josipa Stritarja (1882)',
		language: 'sl',
		tongue: 'sl',
	},
	sml_BL_2008: {
		name: 'Kitab Injil and Kitab Awal-Jaman',
		language: 'sml',
		tongue: 'sml',
	},
	Shona: { name: 'Shona Bible', language: 'sn', tongue: 'sna' },
	SomKQA: { name: 'Kitaabka Quduuska Ah', language: 'so', tongue: 'so' },
	Alb: { name: 'Albanian Bible', language: 'sq', tongue: 'sq' },
	SrKDEkavski: {
		name: 'Serbian Bible Daničić-Karadžić Ekavski',
		language: 'rs',
		tongue: 'rs',
	},
	SrKDIjekav: {
		name: 'Serbian Bible Daničić-Karadžić Ijekavski',
		language: 'rs',
		tongue: 'rs',
	},
	Swe1917: { name: 'Swedish Bible (1917)', language: 'sv', tongue: 'sv' },
	SweFolk1998: {
		name: 'Svenska Folkbibeln (1998)',
		language: 'sv',
		tongue: 'sv',
	},
	SweKarlXII: {
		name: 'Svenska Karl XII:s Bibel (1703)',
		language: 'sv',
		tongue: 'sv',
	},
	SweKarlXII1873: {
		name: 'Svenska Karl XII:s Bibel (1873)',
		language: 'sv',
		tongue: 'sv',
	},
	swONEN: {
		name: 'Toleo Wazi Neno: Bibilia Takatifu™',
		language: 'sw',
		tongue: 'sw',
	},
	Peshitta: { name: 'Syriac Peshitta', language: 'syr', tongue: 'syr' },
	ThaiKJV: { name: 'Thai King James Version', language: 'th', tongue: 'th' },
	Tagalog: { name: 'Tagalog (John & James)', language: 'tl', tongue: 'ph' },
	KLV: {
		name: 'Klingon Language Version of the World English Bible',
		language: 'tlh',
		tongue: 'tlh',
	},
	TagAngBiblia: {
		name: 'Philippine Bible Society (1905)',
		language: 'tl',
		tongue: 'ph',
	},
	TpiKJPB: { name: 'King Jems Pisin Baibel', language: 'tpi', tongue: 'tpi' },
	TurNTB: {
		name: 'Kutsal Kitap (New Turkish Bible)',
		language: 'tr',
		tongue: 'tr',
	},
	TurHADI: {
		name: 'Turkish Easy-to-Read Translation (HADI)',
		language: 'tr',
		tongue: 'tr',
	},
	Tausug: { name: 'Tausug Kitab Injil', language: 'tsg', tongue: 'tsg' },
	twiONA: {
		name: 'Wɔnhia ɛho kwamma nwoma Asante Twi Nkwa Asɛm',
		language: 'twi',
		tongue: 'twi',
	},
	twkONA: {
		name: 'Wonhia Akuapem Twi Nkwa Asɛm™ ho kwamma nhoma',
		language: 'twi',
		tongue: 'twi',
	},
	UkrKulish: {
		name: 'Новий Завіт. Переклад П. Куліша (1871)',
		language: 'uk',
		tongue: 'uk',
	},
	Ukrainian: {
		name: 'Українська Біблія. Переклад Івана Огієнка.',
		language: 'uk',
		tongue: 'uk',
	},
	UrduGeo: { name: 'Urdu Geo Version (UGV)', language: 'ur', tongue: 'ur' },
	UrduGeoDeva: {
		name: 'Urdu Geo Version Devanagari Script (UGV)',
		language: 'ur',
		tongue: 'ur',
	},
	UrduGeoRoman: {
		name: 'Urdu Geo Version Latin Script (UGV)',
		language: 'ur',
		tongue: 'ur',
	},
	Viet: {
		name: 'Kinh Thánh Tiếng Việt (1934)',
		language: 'vi',
		tongue: 'vi',
	},
	VieLCCMN: { name: 'Lời Chúa Cho Mọi Người', language: 'vi', tongue: 'vi' },
	VietNVB: {
		name: 'New Vietnamese Bible (2002)',
		language: 'vi',
		tongue: 'vi',
	},
	vlsJoNT: {
		name: 'Het Nieuwe Testament by Nicolaas De Jonge',
		language: 'vls',
		tongue: 'vls',
	},
	yoOBYO: {
		name: 'Biblica® Open Yoruba Contemporary Bible',
		language: 'yo',
		tongue: 'yo',
	},
	ChiNCVs: { name: '新译本', language: 'zh-hans', tongue: 'zh' },
	ChiSB: {
		name: '思高本 (Sīgāo Běn), 聖經：思高聖經學會譯釋',
		language: 'zh-hant',
		tongue: 'zh',
	},
	ChiUns: {
		name: '和合本 (简体字)',
		language: 'zh-hans',
		strongs: true,
		tongue: 'zh',
	},
	ChiUn: {
		name: '和合本 (繁體字)',
		language: 'zh-hant',
		strongs: true,
		tongue: 'zh',
	},
	// TODO - versions to fix
	alqALG1998eb: {
		language: 'alq',
		tongue: 'canada',
		name: 'Algonquin - Kije Manido Odikido8in: Ocki Mazinaigan',
	},
	bea1886eb: {
		language: 'bea',
		tongue: 'canada',
		name: 'Dane Zaa (Beaver) - OOTECH OOCHU TAKEHNIYA TINKLES ST. MARK',
	},
	bla1890eb: {
		language: 'bla',
		tongue: 'canada',
		name: "Siksiká (Blackfoot) - ŎKHS' I TSĬN IK SĬN NI ST. MATTHEW OT SĬN AI PI.",
	},
	crx2011eb: {
		language: 'crx',
		tongue: 'canada',
		name: "Carrier - Yak'usda Ooghuni",
	},
	caf2002eb: {
		language: 'caf',
		tongue: 'canada',
		name: 'Carrier, Southern - Yakʼusda bughunek: k’andit khunek neba lhaidinla',
	},
	crl2016eb: {
		language: 'crl',
		tongue: 'canada',
		name: 'Īyiyū Ayimūn - Cree: Coastal (North East Coast)',
	},
	dgrDOG2009eb: {
		language: 'dgr',
		tongue: 'canada',
		name: "Dogrib - Nǫ̀htsı̨̨ Nı̨̨htł'è",
	},
	crj2001eb: {
		language: 'crj',
		tongue: 'canada',
		name: 'Īnū Ayimūn - Cree: Eastern. Chishemanituu Utayimuwin kaa uskaach testimint.',
	},
	micMIQ2003eb: {
		language: 'mic',
		tongue: 'canada',
		name: "Mi'kmaq - Gelulg Glusuaqan: Gisiteget Agnutmugsi'gw",
	},
	ksp2015eb: {
		language: 'ksp',
		tongue: 'cf',
		name: 'Kabba - Tar le Lubba ke tar Kabba',
	},
	bjv2011eb: {
		language: 'bjv',
		tongue: 'td',
		name: 'Bedjond - KƗLӘ-MƗNDƗ KƗ SƗGƗ',
	},
	daa2012eb: {
		language: 'daa',
		tongue: 'td',
		name: 'Dangaléat - Jamaw ta Marbinto: Kabarre ta Gala ɗo bi ka Iisa Masi iŋ daŋla',
	},
	gqr2014eb: {
		language: 'gqr',
		tongue: 'td',
		name: 'Gor - Ta lǝ Luwǝ Kunmindɨ kɨ Sigɨ',
	},
	kyq2012eb: {
		language: 'kyq',
		tongue: 'td',
		name: 'Kenga - Kitapm kɛn Raa dɔɔko kiji ute jeege',
	},
	kqp2007eb: {
		language: 'kqp',
		tongue: 'td',
		name: 'Kimré - Magtubu tôô toɲ biɲare to kôrbi',
	},
	xuo2013eb: {
		language: 'xuo',
		tongue: 'td',
		name: 'Kuo - Mbeɗe sáka kuni fie',
	},
	mge2019eb: {
		language: 'mge',
		tongue: 'td',
		name: 'Mango - Ta lə Lubə Kunmindɨ kɨ́ Sigɨ',
	},
	mta2020eb: {
		language: 'mta',
		tongue: 'td',
		name: 'Manobo, Cotabato',
	},
	moz2019eb: {
		language: 'moz',
		tongue: 'td',
		name: 'Mukulu - Mattup ki Taasuwa ere Aware',
	},
	arn2011eb: {
		language: 'arn',
		tongue: 'chl',
		name: 'Mapudungun - Ngünechen ñi Küme Dungu',
	},
	bzi2015eb: {
		language: 'bzi',
		tongue: 'cn',
		name: 'Bisu - จี่วีดม้าม้า พระคัมภีร์ อางซื่อ บี่ซู่ ต่าง',
	},
	cmnWBTC2006eb: {
		language: 'cmn',
		tongue: 'cn',
		name: '中国语文 (Chinese) - 圣 经 普通话本',
	},
	cmnNCVs2010eb: {
		language: 'ncvs',
		tongue: 'cmn',
		name: 'ncvs - cn - 中国语文 (Chinese) - 新译本',
	},
	cmnNCVt2010eb: {
		language: 'ncvt',
		tongue: 'cmn',
		name: 'ncvt - cn - 中國語文 (Chinese) - 新譯本',
	},
	cmnCUs889eb: {
		language: 'cu89s',
		tongue: 'cmn',
		name: 'cu89s - cn - 中国语文 (Chinese) - 新标点和合本',
	},
	cmnCUt1889eb: {
		language: 'cu89t',
		tongue: 'cmn',
		name: 'cu89t - cn - 中國語文 (Chinese) - 新標點和合本',
	},
	cmnfeb: {
		language: 'cmnfeb',
		tongue: 'cn',
		name: '中國語文 (Chinese) - 免费的易读圣经 Free Easy-to-read Bible',
	},
	lhi2015eb: {
		language: 'lhi',
		tongue: 'cn',
		name: 'Lahu Si - Lad hur Si Liq Phu Awg Suhx',
	},
	bod2018eb: {
		language: 'bod',
		tongue: 'cn',
		name: 'བོད་ཡིག (Tibetan) - Central Tibetan Bible',
	},
	bodn2020eb: {
		language: 'bodn',
		tongue: 'cn',
		name: 'བོད་ཡིག (Tibetan) - དམ་པའི་གསུང་རབ་བོད་འགྱུར་གསར་མ།',
	},
	uigara2010eb: {
		language: 'uigara',
		tongue: 'cn',
		name: 'Uyghur tili - مۇقېددېس كالام (يەنگى يېزىق)',
	},
	uigpin2010eb: {
		language: 'uigpin',
		tongue: 'cn',
		name: 'Uyghur tili - Muⱪeddes Kalam (yǝngi yeziⱪ)',
	},
	uiglat2010eb: {
		language: 'uiglat',
		tongue: 'cn',
		name: 'Uyghur tili - Muqeddes Kalam (latin yéziq)',
	},
	aca2013eb: {
		language: 'aca',
		tongue: 'co',
		name: 'Achagua - Liáꞌa Chuánshi Dios Shínaa',
	},
	kwi2002eb: {
		language: 'kwi',
		tongue: 'co',
		name: 'Awa-Cuaiquer - Masas Pit Jesucristowa',
	},
	bsn2010eb: {
		language: 'bsn',
		tongue: 'co',
		name: 'Barasana-Eduria - Dios oca gotirituti',
	},
	cbv2008eb: {
		language: 'cbv',
		tongue: 'co',
		name: 'Cacua - Dios ã jáap naáwát tólih',
	},
	kbh2009eb: {
		language: 'kbh',
		tongue: 'co',
		name: 'Camsá - Bëngbe Bëtsa Cabëngaftaca Entsoyebuambna',
	},
	cbc2012eb: {
		language: 'cbc',
		tongue: 'co',
		name: 'Carapana - Dios Cʉ̃ Cauetibʉjʉ Cũrĩcã Tuti',
	},
	cub2009eb: {
		language: 'cub',
		tongue: 'co',
		name: 'Cubeo - Majepacʉ jʉ̃menijicʉi yávaiye mamaene coyʉitucubo',
	},
	cui2010eb: {
		language: 'cui',
		tongue: 'co',
		name: 'Cuiba - Nacom Pejume Diwesi po diwesi pena jume diwesi xua Jesucristo yabara tinatsi',
	},
	sja2005eb: {
		language: 'sja',
		tongue: 'co',
		name: "Epena - Tachi ak'õre pedee",
	},
	guh2011eb: {
		language: 'guh',
		tongue: 'co',
		name: 'Guahibo - Dios pejumelivaisibaxuto pejanalivaisibaxuto',
	},
	gum2010eb: {
		language: 'gum',
		tongue: 'co',
		name: 'Guambiano - Nacom Pejume Diwesi po diwesi pena jume diwesi xua Jesucristo yabara tinatsi',
	},
	gvc2007eb: {
		language: 'gvc',
		tongue: 'co',
		name: 'Guanano - Cohamacʉ Yare Yahari Tjuel',
	},
	guo2009eb: {
		language: 'guo',
		tongue: 'co',
		name: 'Guayabero - Pajelwʉajan Dios pejjamechan',
	},
	hto2011eb: {
		language: 'hto',
		tongue: 'co',
		name: 'Minica Huitoto - Juziñamui Ñuera Uai',
	},
	inb2009eb: {
		language: 'inb',
		tongue: 'co',
		name: 'Inga - Kaipimi Taita Dius Rimaku',
	},
	kog2015eb: { language: 'kog', tongue: 'co', name: 'Kogi' },
	coe2009eb: {
		language: 'coe',
		tongue: 'co',
		name: "Koreguaje - Dios Chʉ'o Kʉaphʉro",
	},
	myy2012eb: {
		language: 'myy',
		tongue: 'co',
		name: 'Macuna - Dios Oca Tuti',
	},
	bmr2009eb: {
		language: 'bmr',
		tongue: 'co',
		name: 'Muinane - Moocaani iijɨ',
	},
	pbb2011eb: { language: 'pbb', tongue: 'co', name: 'Páez' },
	pio2009eb: {
		language: 'pio',
		tongue: 'co',
		name: 'Piapoco - El Nuevo Testamento de nuestro Señor Jesucristo en el idioma piapoco',
	},
	pir2011eb: {
		language: 'pir',
		tongue: 'co',
		name: 'Piratapuyo - Cohãcjʉ̃ Yere Yahuducuri Tju',
	},
	snn2009eb: {
		language: 'snn',
		tongue: 'co',
		name: "Siona - Riusu cocabera: mai ëjaguë Jesucristo ba'iyete toyani jo'case'e'ë",
	},
	sri2009eb: {
		language: 'sri',
		tongue: 'co',
		name: 'Siriano - Marĩpʉya Kerere Wereri Turi',
	},
	tnc2013eb: {
		language: 'tnc',
		tongue: 'co',
		name: 'Tanimuca-Retuarã - Tuᵽarã Majaroka',
	},
	tav2009eb: {
		language: 'tav',
		tongue: 'co',
		name: 'Tatuyo - Dio Wadarique',
	},
	tuf2011eb: {
		language: 'tuf',
		tongue: 'co',
		name: 'Central Tunebo - Sir chihtá',
	},
	tue2011eb: {
		language: 'tue',
		tongue: 'co',
		name: 'Tuyuca - Cõãmacʉ̃ mecʉ̃ã wedesei',
	},
	bao2010eb: {
		language: 'bao',
		tongue: 'co',
		name: 'Waimaja - U̶mʉreco pacʉ wederique',
	},
	guc2010eb: {
		language: 'guc',
		tongue: 'co',
		name: 'Wayuu - Tü nüchikimaajatkat Jesucristo',
	},
	noaE2011eb: {
		language: 'noaE',
		tongue: 'co',
		name: 'Woun Meu - Ẽwandam Iek',
	},
	noaH2011eb: {
		language: 'noaH',
		tongue: 'co',
		name: 'Woun Meu - Hẽwandam Hiek',
	},
	ycn2011eb: {
		language: 'ycn',
		tongue: 'co',
		name: "Yucuna - Tupana Puraca'alo Mari",
	},
	bzd2010eb: {
		language: 'bzd',
		tongue: 'cr',
		name: "Bribri - Tte Pa̱'a̱li̱ Me' Skëköl tö Se' a̱",
	},
	adj1998eb: { language: 'adj', tongue: 'ci', name: 'Adioukrou - Amani Owr' },
	any1997eb: {
		language: 'any',
		tongue: 'ci',
		name: 'Agni Sanvi - Nyɩhyɛ Fʋfɔlɛʼn',
	},
	dnj1991eb: {
		language: 'dnj',
		tongue: 'ci',
		name: "Dan - WUN SË ‑NAƆ 'SËËDHƐ",
	},
	daf1991eb: { language: 'daf', tongue: 'ci', name: "Dan - NAƆ ‑SË 'SËËDHƐ" },
	dyi2014eb: {
		language: 'dyi',
		tongue: 'ci',
		name: 'Djimini Senoufo - Bibulu Jinmiire ni',
	},
	kyf2002eb: {
		language: 'kyf',
		tongue: 'ci',
		name: 'Kouya - ʼWʋsuslolue loluu ʼsɛbhɛ',
	},
	ktj2003eb: {
		language: 'ktj',
		tongue: 'ci',
		name: 'Krumen, Plapo - Nyɩsʋa a ꞊haanttie',
	},
	ted2018eb: {
		language: 'ted',
		tongue: 'ci',
		name: 'Krumen, Tepo - Nyɩsʋa a =hapʋtitie',
	},
	moa2005eb: {
		language: 'moa',
		tongue: 'ci',
		name: 'Mwan - Mwan NT (Côte d’Ivoire)',
	},
	nwb1991eb: { language: 'nwb', tongue: 'ci', name: 'Nyaboa - Nyabwa' },
	wob2010eb: {
		language: 'wob',
		tongue: 'ci',
		name: 'Wè Northern - DBƐƐDƐ DEE‑',
	},
	yre1999eb: {
		language: 'yre',
		tongue: 'ci',
		name: "Yaouré - Bali -le 'fluba 'trɛ Zozi blamin pli Bali man 'e 'pee",
	},
	ronludari12019eb: {
		language: 'ronludari',
		tongue: 'hr',
		name: 'Ludari (Romanian) - Luka',
	},
	ces1613eb: {
		language: 'ces',
		tongue: 'cz',
		name: 'český (Czech) - Bible Kralická 1613',
	},
	ceslb2012eb: {
		language: 'ces',
		tongue: 'cz',
		name: 'Čeština (Czech) - Biblica® Open Slovo na cestu',
	},
	cesNKB1998eb: {
		language: 'ces',
		tongue: 'cz',
		name: 'Češka (Czech) - Nova Bible Kralicka',
	},
	flr2018eb: {
		language: 'flr',
		tongue: 'cd',
		name: "Fuliiru - Ibibiriya: Igambo lya Rurema mu ndeto ye'kifuliiru",
	},
	yom2002eb: {
		language: 'yom',
		tongue: 'cd',
		name: 'Kiyombi - Biblica® Open Nkanda wu Moyo, Nguizani Yimona ayi Minkunga 2002',
	},
	lik2019eb: { language: 'lik', tongue: 'cd', name: 'Lika - AGɄMƐ WAMBƗYA' },
	lin2020eb: {
		language: 'lin',
		tongue: 'cd',
		name: 'Lingála - Biblica® Salela na bonsomi Mokanda na Bomoi™',
	},
	loq2018eb: {
		language: 'loq',
		tongue: 'cd',
		name: 'Lobala',
	},
	log2015eb: {
		language: 'log',
		tongue: 'cd',
		name: 'Logo (Logoti)',
	},
	mxv2020eb: { language: 'mxv', tongue: 'cd', name: 'Mixteco, Metlatónoc' },
	mdm2020eb: {
		language: 'mdm',
		tongue: 'cd',
		name: 'Mayogo: Gandja na Mbɨa (New Testament)',
	},
	niy2015eb: {
		language: 'niy',
		tongue: 'cd',
		name: 'Ndrǔna (Ngiti) - Ungbòta-Ɔwʉ́tá Tɔ́ Bhǔkù',
	},
	dan1931eb: {
		language: 'dan',
		tongue: 'dk',
		name: 'Dansk (Danish) - Hellig Bibel',
	},
	cbi2008eb: {
		language: 'cbi',
		tongue: 'ec',
		name: "Chachi - Diosa' kiika; Génesis, Éxodo y El Nuevo Testamento",
	},
	con2012eb: {
		language: 'con',
		tongue: 'ec',
		name: "Cofán - Chiga Tevaen'Jema Atesuja 1, Aisheve Caña'cho",
	},
	cof2012eb: {
		language: 'cof',
		tongue: 'ec',
		name: 'Colorado - Diosichi Pila',
	},
	qvz2009eb: {
		language: 'qvz',
		tongue: 'ec',
		name: 'Quichua, Northern Pastaza - Diospa shimi',
	},
	qxl2017eb: {
		language: 'qxl',
		tongue: 'ec',
		name: 'Salasakaguna - Diosbuj Shimi - Mushuj Testamento',
	},
	sey2012eb: {
		language: 'sey',
		tongue: 'ec',
		name: "Secoya - Maija'quë Huajë Ca Nëose'e",
	},
	jiv2012eb: {
		language: 'jiv',
		tongue: 'ec',
		name: 'Shuar - Yus Papí: Shuarja̱i̱ Yus Yamaram Chicham Najanamu',
	},
	auc2009eb: {
		language: 'auc',
		tongue: 'ec',
		name: 'Waorani - Wængonguï nänö Apæ̈negaïnö',
	},
	arbWBTC2007eb: {
		language: 'arb',
		tongue: 'eg',
		name: ' العربية (Arabic) - الكتاب المقدس باللغة العربية - الترجمة المبسطة',
	},
	arbnav2012eb: {
		language: 'arb',
		tongue: 'eg',
		name: 'العربية (Arabic, Standard) - كتاب الحياة مجانى',
	},
	copBHC1000eb: {
		language: 'cop',
		tongue: 'eg',
		name: 'ⲘⲉⲧⲢⲉⲙ̀ⲛⲭⲏⲙⲓ (Coptic) - القبطية البحيرية العهد الجديد',
	},
	copC2006eb: {
		language: 'cop',
		tongue: 'eg',
		name: 'ⲘⲉⲧⲢⲉⲙ̀ⲛⲭⲏⲙⲓ (Coptic) - القبطية العهد الجديد',
	},
	copSHC2006eb: {
		language: 'cop',
		tongue: 'eg',
		name: 'ⲘⲉⲧⲢⲉⲙ̀ⲛⲭⲏⲙⲓ (Coptic) - Sahidica - طبعة جديدة من العهد الجديد باللغة القبطية الصعيدية',
	},
	ekkpkp2023eb: {
		language: 'ekk',
		tongue: 'ee',
		name: 'Eesti (Eestonian) - Piibel Kõigile',
	},
	ekkbib2022eb: {
		language: 'ekk',
		tongue: 'ee',
		name: 'Eesti (Eestonian) - Biblica® Vaba kasutusega Uus Testament, Pühakiri kaasaegses eesti keeles',
	},
	amh2003eb: {
		language: 'amh',
		tongue: 'et',
		name: 'አማርኛ (Amharic) - መጽሐፍ ቅዱስ',
	},
	bwo2018eb: { language: 'bwo', tongue: 'et', name: 'Borni - Handr Taara' },
	dwrE2011eb: {
		language: 'dwr',
		tongue: 'et',
		name: 'Dawro - Ooratha Caaquwaa',
	},
	dwr2011eb: {
		language: 'dwr',
		tongue: 'et',
		name: 'Dawro - Ooratha Caaquwaa',
	},
	gmvR2011eb: {
		language: 'gmv',
		tongue: 'et',
		name: 'Gamo - Ooratha Caaqo Maxaafa Gamoththo',
	},
	gmvggm2017eb: {
		language: 'gmv',
		tongue: 'et',
		name: 'Gamotso - Gamo Geesha Maxxafa New Testament',
	},
	gofwftw2011eb: {
		language: 'gof',
		tongue: 'et',
		name: 'Goofa - Gofa New Testament',
	},
	gofE2011eb: { language: 'gof', tongue: 'et', name: 'Gofa - ኦራꬃ ጫቁዋ ጎፋꬆ' },
	gofR2011eb: {
		language: 'gof',
		tongue: 'et',
		name: 'Gofa - Ooratha Caaquwa Goofatho',
	},
	amf2014eb: {
		language: 'amf',
		tongue: 'et',
		name: 'Banna - Haalin Mallano',
	},
	mdyeth2015eb: {
		language: 'mdyeth',
		tongue: 'et',
		name: 'Maale - ጌኤዦ ማፃኣፖ',
	},
	gaz2022eb: {
		language: 'gaz',
		tongue: 'et',
		name: 'Afaan Oromoo - Kitaaba Qulqulluu, Hiikkaa Ammayyaa Banamaa Haaraa, Loqoda Dhiʼaa',
	},
	wal2004eb: {
		language: 'wal',
		tongue: 'et',
		name: 'Wolaytta - Wolaytta Bible',
	},
	fin1976eb: {
		language: 'fin',
		tongue: 'fi',
		name: 'Suomi (Finnish) - Biblica® Avoin Elävä uutinen: Uusi testamentti vapaasti kerrottuna',
	},
	breBRG1827eb: {
		language: 'bre',
		tongue: 'fr',
		name: 'Brezhoneg (Breton) - an Bibl',
	},
	frasbl2022eb: {
		language: 'fr',
		tongue: 'fr',
		name: 'français (French) - Sainte Bible libre pour le monde',
	},
	fraLSG1910eb: {
		language: 'fr',
		tongue: 'fr',
		name: 'français (French) - Louis Segond 1910',
	},
	francl2022eb: {
		language: 'fr',
		tongue: 'fr',
		name: 'français (French) - Sainte Bible néo-Crampon Libre',
	},
	fraFOB1744eb: {
		language: 'fr',
		tongue: 'fr',
		name: 'français (French) - La Sainte Bible',
	},
	deuelbbk2019eb: {
		language: 'de',
		tongue: 'de',
		name: 'Deutsch (German) - Elberfelder Übersetzung (Version von bibelkommentare.de)',
	},
	deu1912eb: {
		language: 'de',
		tongue: 'de',
		name: 'Deutsch (German) - Lutherbibel 1912',
	},
	deu1951eb: {
		language: 'de',
		tongue: 'de',
		name: 'Deutsch (German) - Die Schlachter-Bibel 1951',
	},
	deutkw1906eb: {
		language: 'de',
		tongue: 'de',
		name: 'Deutsch (German) - Textbibel von Kautzsch und Weizsäcker',
	},
	deuelo1905eb: {
		language: 'de',
		tongue: 'de',
		name: 'Deutsch (German) - Darby Unrevidierte Elberfelder',
	},
	cko2009eb: {
		language: 'cko',
		tongue: 'gh',
		name: 'Anufo - Nyεmε Jɔrε Kadasi',
	},
	bim2003eb: {
		language: 'bim',
		tongue: 'gh',
		name: 'Bimoba - Yennu Gbouŋ Mɔɔr',
	},
	biv2006eb: {
		language: 'biv',
		tongue: 'gh',
		name: 'Birifor, Southern - A Nãaŋmɩn Nɛtɩr Oaalaa Gãn, Bɩrfʊɔr',
	},
	bwu2003eb: {
		language: 'bwu',
		tongue: 'gh',
		name: 'Buli (Ghana) - The New Testament in the Buli language (Ghana)',
	},
	ncu2010eb: {
		language: 'ncu',
		tongue: 'gh',
		name: 'Chumburung - Abware̱se̱ŋ Wo̱re̱-ɔ',
	},
	ntr2005eb: {
		language: 'ntr',
		tongue: 'gh',
		name: 'Delo - WURUBURƐ NOMBIA KPAAKPAA NƆƆKEBAKESEE WƆLE',
	},
	ewe2020eb: {
		language: 'ewe',
		tongue: 'gh',
		name: 'eʋegbe - Biblica® Se aɖeke mebla Biblia zazã o Agbenya La™',
	},
	acd2020eb: {
		language: 'acd',
		tongue: 'gh',
		name: 'Gikyode - GɛnÞ PobÞrÞ, Gɛbono Wurubuaarɛ Gi Yɛgɛ Mɔ-rɛ Anyamesɛ Mɛ Wɔra Mɔ',
	},
	xon2014eb: {
		language: 'xon',
		tongue: 'gh',
		name: 'Konkomba - Uwumbɔr aagbaŋ',
	},
	kma2019eb: {
		language: 'kma',
		tongue: 'gh',
		name: 'Konni - Ŋmiŋ Nuahaalɩŋ Gbanɩŋ Kɔmɩŋ',
	},
	kus1996eb: {
		language: 'kus',
		tongue: 'gh',
		name: 'Kusaal - Winaꞌam Gbauŋ (Ghana)',
	},
	naw2013eb: {
		language: 'naw',
		tongue: 'gh',
		name: 'Nawuri',
	},
	nkoNTeb: {
		language: 'nko',
		tongue: 'gh',
		name: 'Nkonya - Bulu ntam pɔpwɛ; Nkonya',
	},
	sig2001eb: {
		language: 'sig',
		tongue: 'gh',
		name: 'Paasaal - Wɩɩsɩ Nyʋʋfalɩɩ Teŋ',
	},
	lip2008eb: {
		language: 'lip',
		tongue: 'gh',
		name: 'Sekpele',
	},
	snw2008eb: {
		language: 'snw',
		tongue: 'gh',
		name: 'Selee - Yaa Kanya Ninii Fɔle Sɛlɛɛ',
	},
	sil2014eb: {
		language: 'sil',
		tongue: 'gh',
		name: 'Sisaala, Tumulung - Yesu Kiristito Wu-Zɔŋŋɔɔ (Ghana)',
	},
	akp2008eb: {
		language: 'akp',
		tongue: 'gh',
		name: 'Siwu - Ndamu Ɣɛtɛ Siwu',
	},
	bov2008eb: {
		language: 'bov',
		tongue: 'gh',
		name: 'Tuwuli - Baguma Apam Vɔḛ a Tuwuli',
	},
	twi2020eb: {
		language: 'twi',
		tongue: 'gh',
		name: 'Akuapem Twi - Biblica® Wonhia ɛho kwamma nhoma Akuapem Twi Nkwa Asɛm™',
	},
	twiasante2020eb: {
		language: 'twi',
		tongue: 'gh',
		name: 'Twi - Biblica® Wɔnhia ɛho kwamma nwoma Asante Twi Nkwa Asɛm™',
	},
	grcbyz1904eb: {
		language: 'grc',
		tongue: 'gr',
		name: 'Ελληνικά (Ancient Greek) - Η Καινή Διαθήκη',
	},
	grcrp2018eb: {
		language: 'grc',
		tongue: 'gr',
		name: 'Ελληνικά (Ancient Greek) - Η Καινή Διαθήκη',
	},
	grcf35eb: {
		language: 'grc',
		tongue: 'gr',
		name: 'Ελληνικά (Ancient Greek) - Η Καινή Διαθήκη',
	},
	grcsbl2010eb: {
		language: 'grc',
		tongue: 'gr',
		name: 'Ελληνικά (Ancient Greek) - Η Καινή Διαθήκη',
	},
	grcsr2022eb: {
		language: 'grc',
		tongue: 'gr',
		name: 'Ελληνικά (Ancient Greek) - Η Καινή Διαθήκη',
	},
	grctcgnt2022eb: {
		language: 'grc',
		tongue: 'gr',
		name: 'Ελληνικά (Ancient Greek) - Η Καινή Διαθήκη',
	},
	grctreb: {
		language: 'grc',
		tongue: 'gr',
		name: 'Ελληνικά (Ancient Greek) - Η Καινή Διαθήκη',
	},
	grcTischeb: {
		language: 'grc',
		tongue: 'grc',
		name: 'tisch - gr - Ελληνικά (Ancient Greek) - Η Καινή Διαθήκη',
	},
	cha1908eb: {
		language: 'cha',
		tongue: 'gu',
		name: 'Chamorro - Y CUATRO EBANGELIO SIJA YAN Y CHECHO Y APOSTOLES YAN Y SALMO SIJA',
	},
	acrN2009eb: {
		language: 'acr',
		tongue: 'gt',
		name: 'Achi - Ri utzilaj tzij re ri kanimajawal Jesucristo',
	},
	acrTNT2009eb: {
		language: 'acr',
		tongue: 'gt',
		name: 'Achi - Ri utzilaj tzij re ri kanimajawal Jesucristo',
	},
	acrACC2009eb: {
		language: 'acr',
		tongue: 'gt',
		name: "Achi - I 'utz laj tzij re i dios",
	},
	agu2011eb: {
		language: 'agu',
		tongue: 'gt',
		name: "Aguacateco - Yi Antiw Bible / Yi Ac'aj Testament",
	},
	knj2012eb: {
		language: 'knj',
		tongue: 'gt',
		name: "Akateko - Ja' An Nuevo Testamento",
	},
	caa2013eb: {
		language: 'caa',
		tongue: 'gt',
		name: 'Chortí - Uyojroner e Dios xeꞌ Tzꞌijbꞌabꞌir Tama e Onian Tiempo',
	},
	cac2007eb: {
		language: 'cac',
		tongue: 'gt',
		name: "Chuj de San Mateo Ixtatán - A Ch'an Biblia D'a Chuj San Mateo",
	},
	ixlC2001eb: {
		language: 'ixl',
		tongue: 'gt',
		name: 'Ixil - Viakʼla txumbʼal u tioxh',
	},
	ixlN2008eb: {
		language: 'ixl',
		tongue: 'gt',
		name: "Ixil - U ak' Testamento tu kuyob'al",
	},
	jacNT1997eb: {
		language: 'jac',
		tongue: 'gt',
		name: 'Jakalteko - Nuevo Testamento yin̈ abxubal',
	},
	qucN2011eb: {
		language: 'quc',
		tongue: 'gt',
		name: "K'iche' - Ru Loqꞌ Pixabꞌ Ri Dios",
	},
	qucT2011eb: {
		language: 'quc',
		tongue: 'gt',
		name: "K'iche' - Ru Lokꞌ Pixab Ri Dios",
	},
	quctt2022eb: {
		language: 'quctt',
		tongue: 'gt',
		name: 'Qach’abel - RI KꞌAKꞌ TESTAMENTO PA TZIJOBꞌAL KꞌICHEꞌ',
	},
	cakE2012eb: {
		language: 'cak',
		tongue: 'gt',
		name: "Kaqchikel, - RI DIOS NCH'O PA KACH'ABÜL CHEKE",
	},
	cak2007eb: {
		language: 'cak',
		tongue: 'gt',
		name: 'Kaqchikel - GT:cak:Kaqchikel',
	},
	cakC2012eb: {
		language: 'cak',
		tongue: 'gt',
		name: "Kaqchikel - Ri C'ac'a Trato ri Xuben ri Dios Quiq'uin ri Vinek",
	},
	cak1993eb: {
		language: 'cak',
		tongue: 'gt',
		name: 'Kaqchikel - Ri utzilaj rutzij ri Dios pa kachʼabel',
	},
	cakS2010eb: {
		language: 'cak',
		tongue: 'gt',
		name: "Kaqchikel - Ri c'ac'ac' Testamento pa kach'ab'al",
	},
	cakY2012eb: {
		language: 'cak',
		tongue: 'gt',
		name: "Kaqchikel - Re C'ac'a Testamento pa Kach'abal",
	},
	cakW2010eb: {
		language: 'cak',
		tongue: 'gt',
		name: "Kaqchikel - Ri C'ac'ac' Testamento pa Kach'abel",
	},
	mamC2009eb: {
		language: 'mamC',
		tongue: 'gt',
		name: "Mam - Ak'aj tu'jil tyol qman",
	},
	mamTS2000eb: {
		language: 'mam',
		tongue: 'gt',
		name: 'Mam - Acʼaj testamento (El Nuevo testamento in Mam de Todos Santos)',
	},
	poh2012eb: {
		language: 'poh',
		tongue: 'gt',
		name: "Poqomchi' - Reꞌ Lokꞌ Laj Hu̱j Wilic wi̱ꞌ Ribiral i Jesus",
	},
	kek2000eb: {
		language: 'kek',
		tongue: 'gt',
		name: "Q'eqchi' - Li Santil hu",
	},
	ttc2003eb: {
		language: 'ttc',
		tongue: 'gt',
		name: 'Tektiteko - Te akʼaʼj tuʼjal tuj tuʼjal qtata Dios',
	},
	tzjE2010eb: {
		language: 'tzj',
		tongue: 'gt',
		name: "Tz'utujil - Cꞌacꞌ Chuminem",
	},
	tzj2010eb: {
		language: 'tzj',
		tongue: 'gt',
		name: "Tz'utujil - Ja Cꞌacꞌa Chominem",
	},
	usp2010eb: {
		language: 'usp',
		tongue: 'gt',
		name: "Uspanteko - Lok'laj Jyolj Kakaj Dios",
	},
	bsp2015eb: {
		language: 'bsp',
		tongue: 'gn',
		name: 'Baga Sitemu - Kitabu ka Kanu',
	},
	fuf2010eb: {
		language: 'fuf',
		tongue: 'gn',
		name: 'Pular - Version Pular Fuuta-Jallon',
	},
	msc2015eb: {
		language: 'msc',
		tongue: 'gn',
		name: 'Sankaran Maninka - Alla la Kitabu Seniman',
	},
	suslat2015eb: {
		language: 'sus',
		tongue: 'gn',
		name: 'Susu - Soso Kitaabuie: Tawureta, Yabura, Inyila',
	},
	susarb2015eb: {
		language: 'susa',
		tongue: 'gn',
		name: 'Susu - سٌسٌ كِتَابُييٍ؛ تَوُرٍتَ، يَبُرَ، عِنيِلَ',
	},
	tod2013eb: { language: 'tod', tongue: 'gn', name: 'Toma - GALA Sɛʋɛi' },
	yal2012eb: {
		language: 'yal',
		tongue: 'gn',
		name: 'Yalunka - Kisin Kiraan Kitabuna',
	},
	ake2010eb: {
		language: 'ake',
		tongue: 'gy',
		name: "Akawaio - Wakʉ Itekare: Emenna' Pe Ekonekan Nɨto'",
	},
	wap2012eb: {
		language: 'wap',
		tongue: 'gy',
		name: "Wapishana - Kaimana'o Tominkaru Paradan",
	},
	hat1985eb: {
		language: 'hat',
		tongue: 'ht',
		name: 'Kreyòl Ayisyen (Haitian) - Bib La',
	},
	hatbsa2022eb: {
		language: 'hatbsa',
		tongue: 'ht',
		name: 'Kreyòl Ayisyen (Haitian) - Bib Sen An',
	},
	cab2012eb: {
		language: 'cab',
		tongue: 'hn',
		name: 'Garifuna - Lerérun Búngiu To Lánina Iséri Darádu',
	},
	jic2010eb: {
		language: 'jic',
		tongue: 'hn',
		name: "Tol - Dios Tjevele Jupj 'Üsüs La Qjuisiji Jesucristo Mpes",
	},
	hun2021eb: {
		language: 'hun',
		tongue: 'hu',
		name: 'Magyar - Biblica® Nyitott Újszövetség: élet, igazság és világosság',
	},
	isl1995eb: {
		language: 'isl',
		tongue: 'is',
		name: 'Íslenska - Biblica® Opna Lifandi Orð Nýja testamentið og Sálmarnir™',
	},
	esg2020eb: {
		language: 'esg',
		tongue: 'in',
		name: 'Aheri Gondi - Besta Kabur',
	},
	ahr2023eb: {
		language: 'ahr',
		tongue: 'in',
		name: 'अहिराणी‎ (Ahirani) - प्रेम संदेश',
	},
	asmfb2017eb: {
		language: 'asmfb',
		tongue: 'in',
		name: 'অসমীয়া (Assamese) - ইণ্ডিয়ান ৰিভাইচ ভাৰচন (IRV) আচামিচ - 2019',
	},
	bpx2020eb: {
		language: 'bpx',
		tongue: 'in',
		name: 'Pali (Bareli, Palya) - भगवान ना खरला बोल',
	},
	bhd2020eb: {
		language: 'bhd',
		tongue: 'in',
		name: 'भद्रवाही‎ (Bhadrawahi) - भड्लाई बाइबिल',
	},
	bht2022eb: {
		language: 'bht',
		tongue: 'in',
		name: 'भटियाली‎ (Bhattiyali) - भटियाली नोआ नियम',
	},
	bdv2020eb: {
		language: 'bdv',
		tongue: 'in',
		name: 'ବଡ଼ ପରଜା (Bodo Parja) - ସଃର୍ଗାର୍‌ ବାଟ୍‌ ନଃଉଁଆ ନିଅମ୍‌',
	},
	bgg2023eb: {
		language: 'bgg',
		tongue: 'in',
		name: 'Kho (Bugun) - Iwo Surua Mua Wie Pha Bible',
	},
	tczchongthu2020eb: {
		language: 'tczchongthu',
		tongue: 'in',
		name: 'Chongthu (Chin, Thado) - PATHEN LEKHABU THENG',
	},
	dso2020eb: {
		language: 'dso',
		tongue: 'in',
		name: 'ଦେଶିଆ (Desiya) - ସତିଅର୍‌ ବାଟ୍‌',
	},
	gaq2020eb: {
		language: 'gaq',
		tongue: 'in',
		name: "Didayi (Gata') - ସତ୍‌ ଗାଲି",
	},
	guj2017eb: {
		language: 'guj',
		tongue: 'in',
		name: 'ગુજરાતી (Gujarati) - ઇન્ડિયન રીવાઇઝ્ડ વર્ઝન ગુજરાતી - 2019',
	},
	bgc2021eb: {
		language: 'bgc',
		tongue: 'in',
		name: 'हरियाणवी‎ (Haryanvi) - हरियाणवी बाइबिल',
	},
	hincv2019eb: {
		language: 'hincv',
		tongue: 'in',
		name: 'हिन्दी (Hindi) - Biblica® हिंदी समकालीन संस्करण-स्वतंत्र उपलब्धि',
	},
	hin2010eb: {
		language: 'hin',
		tongue: 'in',
		name: 'हिंदी (Hindi) - पवित्र बाइबल',
	},
	hin2017eb: {
		language: 'hin',
		tongue: 'in',
		name: 'मानक हिन्दी‎ (Hindi) - इंडियन रिवाइज्ड वर्जन (IRV) हिंदी - 2019',
	},
	hoy2020eb: {
		language: 'hoy',
		tongue: 'in',
		name: 'Gohllaru (Holiya) - परमेश्‍वर उन खरा वचन',
	},
	juy2020eb: { language: 'juy', tongue: 'in', name: 'Juray - ଆଜାଡ଼ି ତଙରନ୍‌' },
	kanokcv2022eb: {
		language: 'kan',
		tongue: 'in',
		name: 'ಕನ್ನಡ (Kannada) - Biblica® ಉಚಿತ ಕನ್ನಡ ಸಮಕಾಲಿಕ ಭಾಷಾಂತರ',
	},
	kan2010eb: {
		language: 'kan',
		tongue: 'in',
		name: 'ಕನ್ನಡ (Kannada) - ಪವಿತ್ರ ಬೈಬಲ್, ಈಸಿ ಓದುವಿಕೆ ಆವೃತ್ತಿ',
	},
	kan2017eb: {
		language: 'kan',
		tongue: 'in',
		name: 'ಕನ್ನಡ (Kannada) - ಇಂಡಿಯನ್ ರಿವೈಜ್ಡ್ ವರ್ಸನ್ (IRV) - ಕನ್ನಡ - 2019',
	},
	kfc2006eb: {
		language: 'kfc',
		tongue: 'in',
		name: 'Konda-Dora - కొండ బాసదు నెగ్గి కబ్రు 2006',
	},
	key2019eb: {
		language: 'key',
		tongue: 'in',
		name: 'Kupia - Kupia New Testament',
	},
	kxv2020eb: {
		language: 'kxv',
		tongue: 'in',
		name: 'కువి (Kuvi) - ପୁଃନି ମେ଼ରା',
	},
	lbj2020eb: { language: 'lbj', tongue: 'in', name: 'Ladakhi - Ladakhi' },
	lbm2020eb: {
		language: 'lbm',
		tongue: 'in',
		name: 'Lodha - परमेश्वर को सच्चो वचन',
	},
	mai2020eb: {
		language: 'mai',
		tongue: 'in',
		name: 'Maithili - jivən səndesh',
	},
	mal2015eb: {
		language: 'mal',
		tongue: 'in',
		name: 'മലയാളം (Malayalam) - മലയാളം സത്യവേദപുസ്തകം 1910 - പരിഷ്കരിച്ച പതിപ്പ്, സമകാലിക ലിപിയിൽ',
	},
	mal2017eb: {
		language: 'mal',
		tongue: 'in',
		name: 'മലയാളം (Malayalam) - Indian Revised Version in Malayalam',
	},
	mar2017eb: {
		language: 'mar',
		tongue: 'in',
		name: 'मराठी (Marathi) - इंडियन रीवाइज्ड वर्जन (IRV) - मराठी',
	},
	mrr2019eb: { language: 'mrr', tongue: 'in', name: 'Maria - Hill Madia' },
	mni2022eb: {
		language: 'mni',
		tongue: 'in',
		name: 'মৈতৈলোন্‎ (Meiteilon) - ANOUBA WAREPNABA',
	},
	unx2020eb: {
		language: 'unx',
		tongue: 'in',
		name: 'মুন্ডা‎ (Muɳɖa) - ପାର୍‌ମେଶ୍ୱାର୍‌ଆଃ ଜୀନିଦ୍‌ ବାଚାନ୍‌',
	},
	nag2019eb: {
		language: 'nag',
		tongue: 'in',
		name: 'Nagamiz (Naga Pidgin) - Indian Standard Version (ISV) Nagamese',
	},
	kfw2021eb: {
		language: 'kfw',
		tongue: 'in',
		name: 'Kharam (Naga, Kharam) - The New Testament in Kharam',
	},
	tvt2018eb: {
		language: 'tvt',
		tongue: 'in',
		name: 'Totcha (Naga, Tutsa) - Esa Leedap Ena Banlam',
	},
	ory2017eb: {
		language: 'ory',
		tongue: 'in',
		name: 'ଓଡ଼ିଆ‎ (Oriya) - ଇଣ୍ଡିୟାନ ରିୱାଇସ୍ଡ୍ ୱରସନ୍ ଓଡିଆ',
	},
	bfz2021eb: {
		language: 'bfz',
		tongue: 'in',
		name: 'Mahasui (Pahari, Mahasu) - बघल्याणी नवां विधान',
	},
	pan2017eb: {
		language: 'pan',
		tongue: 'in',
		name: 'ਪੰਜਾਬੀ (Panjabi, Eastern) - ਇੰਡਿਅਨ ਰਿਵਾਇਜ਼ਡ ਵਰਜ਼ਨ (IRV) - ਪੰਜਾਬੀ',
	},
	peg2020eb: { language: 'peg', tongue: 'in', name: 'Pengu - ସତ୍‌ ବଚନ୍‌' },
	sch2017eb: {
		language: 'sch',
		tongue: 'in',
		name: 'Sakechep - Pathien Lekhabu Inthieng Chongtung Thar',
	},
	sankan2018eb: {
		language: 'san',
		tongue: 'in',
		name: 'Saṃskṛtam - Sanskrit Bible (NT) in Kannada Script',
	},
	sankhm2018eb: {
		language: 'san',
		tongue: 'in',
		name: 'Saṃskṛtam - Sanskrit Bible (NT) in Khmer Script',
	},
	sanmal2018eb: {
		language: 'san',
		tongue: 'in',
		name: 'Saṃskṛtam - Sanskrit Bible (NT) in Malayalam Script (സത്യവേദഃ।)',
	},
	sanori2018eb: {
		language: 'san',
		tongue: 'in',
		name: 'Saṃskṛtam - 0 Sanskrit Bible (NT) in Oriya Script (ସତ୍ୟୱେଦଃ।)',
	},
	sanpun2018eb: {
		language: 'san',
		tongue: 'in',
		name: 'Saṃskṛtam - 0 Sanskrit Bible (NT) in Punjabi Script (ਸਤ੍ਯਵੇਦਃ।)',
	},
	sansin2018eb: {
		language: 'san',
		tongue: 'in',
		name: 'Saṃskṛtam - Sanskrit Bible (NT) in Sinhala Script (සත්‍යවේදඃ।)',
	},
	santam2018eb: {
		language: 'san',
		tongue: 'in',
		name: 'Saṃskṛtam - Sanskrit Bible (NT) in Tamil Script',
	},
	santel2018eb: {
		language: 'san',
		tongue: 'in',
		name: 'Saṃskṛtam - Sanskrit Bible (NT) in Telugu Script (సత్యవేదః।)',
	},
	santha2018eb: {
		language: 'san',
		tongue: 'in',
		name: 'Saṃskṛtam - Sanskrit Bible (NT) in Thai Script (สตฺยเวท:ฯ)',
	},
	santib2018eb: {
		language: 'san',
		tongue: 'in',
		name: 'Saṃskṛtam - Sanskrit Bible (NT) in Tibetan Script (སཏྱཝེདཿ།)',
	},
	sanurd2018eb: {
		language: 'san',
		tongue: 'in',
		name: 'Saṃskṛtam - Sanskrit Bible (NT) in Urdu Script (سَتْیَویدَح۔)',
	},
	sanvel2018eb: {
		language: 'san',
		tongue: 'in',
		name: 'Saṃskṛtam - Sanskrit Bible (NT) in Velthuis Script (satyaveda.h|)',
	},
	sancol2018eb: {
		language: 'san',
		tongue: 'in',
		name: 'Sanskrit - Sanskrit Bible (NT) in Cologne Script',
	},
	sanias2018eb: {
		language: 'san',
		tongue: 'in',
		name: 'Sanskrit - Sanskrit Bible (NT) in IAST Script (satyavedaḥ|)',
	},
	sanbur2018eb: {
		language: 'san',
		tongue: 'in',
		name: 'Sanskrit - Sanskrit Bible (NT) in Burmese Script (သတျဝေဒး၊)',
	},
	sananb2018eb: {
		language: 'san',
		tongue: 'in',
		name: 'Sanskrit - Sanskrit Bible (NT) in Assamese Script',
	},
	sanben2018eb: {
		language: 'san',
		tongue: 'in',
		name: 'Sanskrit - Sanskrit Bible (NT) in Bengali Script',
	},
	sandev2018eb: {
		language: 'san',
		tongue: 'in',
		name: 'Sanskrit - Sanskrit Bible (NT) in Devanagari Script (सत्यवेदः।)',
	},
	sanguj2018eb: {
		language: 'san',
		tongue: 'in',
		name: 'Sanskrit - Sanskrit Bible (NT) in Gujarati Script',
	},
	sanhk2018eb: {
		language: 'san',
		tongue: 'in',
		name: 'Sanskrit - Sanskrit Bible (NT) in Harvard-Kyoto Script',
	},
	saniso2018eb: {
		language: 'san',
		tongue: 'in',
		name: 'Sanskrit - Sanskrit Bible (NT) in ISO Script (satyavēdaḥ|)',
	},
	sanitr2018eb: {
		language: 'san',
		tongue: 'in',
		name: 'Sanskrit - Sanskrit Bible (NT) in ITRANS Script',
	},
	tgj2018eb: { language: 'tgj', tongue: 'in', name: 'Tagin - ANWNV GAMLV' },
	tamtcv2022eb: {
		language: 'tam',
		tongue: 'in',
		name: 'தமிழ் (Tamil) - Biblica® திறந்தநிலை தமிழ் சமகால பதிப்பு',
	},
	tam2008eb: {
		language: 'tam',
		tongue: 'in',
		name: 'தமிழ் (Tamil) - புனித பைபிள் படிக்க எளிதாக',
	},
	tamirv2019eb: {
		language: 'tam',
		tongue: 'in',
		name: 'தமிழ் (Tamil) - இண்டியன் ரிவைஸ்டு வெர்ஸன் (IRV) - தமிழ்',
	},
	tel2010eb: {
		language: 'tel',
		tongue: 'in',
		name: 'తెలుగు (Telugu) - హోలీ బైబిల్',
	},
	telirv2019eb: {
		language: 'tel',
		tongue: 'in',
		name: 'తెలుగు (Telugu) - ఇండియన్ రివైజ్డ్ వెర్షన్ (IRV) - తెలుగు -2019',
	},
	urdgvh2019eb: {
		language: 'ur',
		tongue: 'in',
		name: 'उर्दू (Urdu) - किताबे-मुक़द्दस',
	},
	malc2021eb: {
		language: 'mal',
		tongue: 'in',
		name: 'മലയാളം (Malayalam) - Biblica® സ്വതന്ത്രം സമകാലിക മലയാളവിവർത്തനം 2020',
	},
	alp2012eb: { language: 'alp', tongue: 'id', name: 'Alune - Janji beluke' },
	aaz2014eb: {
		language: 'aaz',
		tongue: 'id',
		name: "Amarasi - Uisneno In Kabin ma Prenat: Rais Manba'an Fe'u nok Reta' Ahun-hunut",
	},
	amk2010eb: {
		language: 'amk',
		tongue: 'id',
		name: 'Ambai - Sempaisi Ne Kaiwo Mirarebanai',
	},
	auu2020eb: {
		language: 'auu',
		tongue: 'id',
		name: 'Auye - Ogatamee Me Etokaa Gipii See Menaa',
	},
	blz2010eb: {
		language: 'blz',
		tongue: 'id',
		name: "Balantak - Kitap molinas men ringkat na alaata'ala: perjanjian baru",
	},
	ptu2004eb: {
		language: 'ptu',
		tongue: 'id',
		name: "Bambam - Suha' Maseho: Kadadiam anna Pa'dandiam Bakahu",
	},
	beu2016eb: { language: 'beu', tongue: 'id', name: 'Pura - Pura Alkitab' },
	row2016eb: {
		language: 'row',
		tongue: 'id',
		name: 'Rote Dela (Dela-Oenale) - Rote Dela Alkitab',
	},
	nfa2012eb: { language: 'nfa', tongue: 'id', name: 'Dhao - Dhao Alkitab' },
	frd2018eb: {
		language: 'frd',
		tongue: 'id',
		name: "Fordata - Surat Ralan na'a Vaidida",
	},
	hvn2016eb: { language: 'hvn', tongue: 'id', name: 'Hawu - Maꞌu' },
	heg2011eb: {
		language: 'heg',
		tongue: 'id',
		name: 'Helong - Buk Niu In Hida Balu nol Dehet deng Apan-kloma ki in Dadi ka',
	},
	indayt2024eb: {
		language: 'indayt',
		tongue: 'id',
		name: 'bahasa Indonesia - Alkitab Yang Terbuka',
	},
	ind2015eb: {
		language: 'ind',
		tongue: 'id',
		name: 'bahasa Indonesia - Alkitab Terjemahan Sederhana Indonesia, Edisi Ketiga',
	},
	indags2021eb: {
		language: 'ind',
		tongue: 'id',
		name: 'bahasa Indonesia - Alkitab Gratis untuk Semua',
	},
	kje2008eb: {
		language: 'kje',
		tongue: 'id',
		name: 'Kisar - Makromod lalap lirna wawan',
	},
	mkn2007eb: {
		language: 'mkn',
		tongue: 'id',
		name: 'Kupang Malay - Kupang Malay Bible',
	},
	llg2004eb: {
		language: 'llg',
		tongue: 'id',
		name: 'Rote Lole - Rote Lole Alkitab',
	},
	lex2014eb: { language: 'lex', tongue: 'id', name: 'Luang - Puka Lululi' },
	ayz2005eb: {
		language: 'ayz',
		tongue: 'id',
		name: 'Mai Brat - Watum ro Tuhan Bosi ro Tna',
	},
	pmy2020eb: {
		language: 'pmy',
		tongue: 'id',
		name: 'Malay, Papuan - Melayu Papua',
	},
	mqj2011eb: {
		language: 'mqj',
		tongue: 'id',
		name: "Mamasa - Buku Masero: Pa'dandi Bakaru",
	},
	nbq2013eb: {
		language: 'nbq',
		tongue: 'id',
		name: 'Nggem - Ala wene Nggem enane vaga dirup warek',
	},
	nxl2019eb: {
		language: 'nxl',
		tongue: 'id',
		name: 'Nuaulu, South - Anahatana ne Anamanaya tau Sou Naunue',
	},
	ury2018eb: {
		language: 'ury',
		tongue: 'id',
		name: 'Orya - Alap mo Ol Ëse, zëre mo zi niban de ol ziaha-en gu hup dena',
	},
	rgu2004eb: {
		language: 'rgu',
		tongue: 'id',
		name: 'Rote Rikou - Rote Rikou Alkitab',
	},
	slueb: { language: 'slu', tongue: 'id', name: 'Selaru - Maslyarw' },
	set2020eb: {
		language: 'set',
		tongue: 'id',
		name: 'Sentani - Allahle a neme heteungekoke homofae',
	},
	tet2013eb: {
		language: 'tet',
		tongue: 'id',
		name: 'Tutun Belu (Tetun) - Tetun Alkitab',
	},
	txq2011eb: {
		language: 'txq',
		tongue: 'id',
		name: 'Rote Tii - Rote Tii Alkitab',
	},
	kkl2015eb: {
		language: 'kkl',
		tongue: 'id',
		name: 'Mek Kosarek (Yale, Kosarek) - Allah Yubu',
	},
	yva2011eb: {
		language: 'yva',
		tongue: 'id',
		name: 'Yawa - Ayao amisy urairi wanyin',
	},
	azb2008eb: {
		language: 'azb',
		tongue: 'ir',
		name: 'Azeri (Azerbaijani, South) - Azərbaycan dilində Müqəddəs Kitab',
	},
	glk2014eb: { language: 'glk', tongue: 'ir', name: 'Gilaki - Gilaki John' },
	pesopcb2022eb: {
		language: 'pes',
		tongue: 'ir',
		name: 'فارسی (Iranian Persian) - Biblica® Open Persian Contemporary Bible 2022',
	},
	pesOPV1895eb: {
		language: 'pes',
		tongue: 'ir',
		name: 'فارسی (Persian) - ترجمه قدیم',
	},
	aii2014eb: {
		language: 'aii',
		tongue: 'iq',
		name: 'ܐܵܬ݂ܘܼܪܵܝܲܐ ܠܸܫܵܢܵܐ (Assyrian Neo-Aramaic) - ܕܝܬܩܐ ܚܕܬܐ ܕܡܪܢ ܝܫܘܥ ܡܫܝܚܐ ܘܡܙܡܘܪ̈ܐ ܒܠܫܢܐ ܐܬܘܪܝܐ',
	},
	ckb2020eb: {
		language: 'ckb',
		tongue: 'iq',
		name: 'كوردی سۆرانی (Central Kurdish) - Biblica® وەشانی بێبەرامبەری کوردیی سۆرانیی ستاندەر',
	},
	heblb2009eb: {
		language: 'he',
		tongue: 'il',
		name: 'עברית (Hebrew) - Biblica®‎ ‫הברית החדשה/הדרך זכויות פתוחות',
	},
	hboMTeb: {
		language: 'hbo',
		tongue: 'il',
		name: 'עברית (Hebrew) - כתבי הקודש',
	},
	hebmodeb: {
		language: 'he',
		tongue: 'il',
		name: 'עברית (Hebrew) - תנ ך עברי מודרני',
	},
	hboWLCeb: {
		language: 'hbo',
		tongue: 'il',
		name: 'עברית (Hebrew) - כתבי הקודש',
	},
	ita1885eb: {
		language: 'it',
		tongue: 'it',
		name: 'Italiano (Italian) - Sacra Bibbia',
	},
	ita1927eb: {
		language: 'it',
		tongue: 'it',
		name: 'lingua italiana (Italian) - Riveduta Bibbia 1927',
	},
	jpn1965eb: {
		language: 'jp',
		tongue: 'jp',
		name: '日本語 (Japanese) - 新改訳新約聖書(1965年版)',
	},
	dig2019eb: { language: 'dig', tongue: 'ke', name: 'Digo (Chidigo) - Digo' },
	luo2020eb: {
		language: 'luo',
		tongue: 'ke',
		name: 'Dholuo - Biblica® Ochiw Thuolo Motingʼo Loko Manyien™',
	},
	kik2013eb: {
		language: 'kik',
		tongue: 'ke',
		name: 'Kikuyu (Gikuyu) - Biblica® Kiugo Gĩtheru Kĩa Ngai Kĩhingũre',
	},
	nyf2004eb: {
		language: 'nyf',
		tongue: 'ke',
		name: 'Giryama - Kilagane Kisha (Kenya)',
	},
	spy2011eb: {
		language: 'spy',
		tongue: 'ke',
		name: 'Sabaot - Biibilya Nyēē Tiliil',
	},
	sxb2010eb: { language: 'sxb', tongue: 'ke', name: 'Suba - Endagano Empia' },
	brb2020eb: {
		language: 'brb',
		tongue: 'lao',
		name: 'Brao - ព្រះគម្ពីរ ព្រៅ',
	},
	bru2015eb: {
		language: 'bru',
		tongue: 'lao',
		name: 'Eastern Bru - Parnai Yiang Sursĩ - Kinh Thánh tiếng Bru',
	},
	ncq2018eb: {
		language: 'ncq',
		tongue: 'lao',
		name: 'Northern Katang - ປັຣນາຍ ເຢືາງ ເຈົາຣາຊີ ປັຣຄັນ ຕາໄມ ປັຣນາຍ ກາຕາງ (ພາສາກາຕາງ)',
	},
	pac2019eb: {
		language: 'pac',
		tongue: 'lao',
		name: 'Pacoh - Parnai Yang Arbang-pilŏ́ng: Tám Uraq Tamme Cang Cadô',
	},
	arbVDeb: {
		language: 'arb',
		tongue: 'lb',
		name: 'العربية (Arabic) - الكتاب المقدس باللغة العربية، فان دايك',
	},
	littpv2022eb: {
		language: 'lit',
		tongue: 'lt',
		name: 'lietuvių (Lithuanian) - Tikinčiųjų paveldo vertimas',
	},
	tdx2023eb: {
		language: 'tdx',
		tongue: 'mg',
		name: 'Tandroy (Malagasy, Tandroy-Mahafaly) - Saontsin’ Añahare',
	},
	nya2026eb: {
		language: 'nya',
		tongue: 'mw',
		name: 'Chichewa - Biblica® Tsekulani Mawu a Mulungu mu Chichewa Chalero',
	},
	yao2018eb: {
		language: 'yao',
		tongue: 'mw',
		name: 'Ciyawo - Lilangano lya Sambano',
	},
	bjn2019eb: {
		language: 'bjn',
		tongue: 'my',
		name: 'Banjar - Bahasa Banjar',
	},
	zlmKSZI2013eb: {
		language: 'zlm',
		tongue: 'my',
		name: 'Bahasa Malaysia (Malay) - Kitab Suci Zabur dan Injil',
	},
	div2019eb: {
		language: 'div',
		tongue: 'mv',
		name: 'Dhivehi - ކިތާބުލް މުޤައްދަސް',
	},
	ffm2005eb: {
		language: 'ffm',
		tongue: 'ml',
		name: 'Maasina Fulfulde - Aadi keyri: linjiila iisaa almasiihu',
	},
	myk2014eb: {
		language: 'myk',
		tongue: 'ml',
		name: 'Mamara Sénoufo - KARIƝƐƐGƐ ƝƆMƐƐ NIVONƆ',
	},
	spp2008eb: {
		language: 'spp',
		tongue: 'ml',
		name: 'Supyire Sénoufo - KILE JWUMPE SEMƐŊI JWUMPE NINTANMPE',
	},
	ses2019eb: {
		language: 'ses',
		tongue: 'ml',
		name: 'Songhai de Gao - Songhai de Gao',
	},
	taq2003eb: {
		language: 'taq',
		tongue: 'ml',
		name: 'Tamasheq - Ălǝnžil n-Ɣisa Ălmasex: Kitab Ălmuqăddăs',
	},
	amu1999eb: {
		language: 'amu',
		tongue: 'mx',
		name: 'Guerrero Amuzgo - Ñʼoom xco na tqueⁿ tyʼo̱o̱tsʼom cantxja ʼnaaʼ Jesucristo',
	},
	azg1992eb: {
		language: 'azg',
		tongue: 'mx',
		name: 'Amuzgo, San Pedro Amuzgos - Jnʼoon xco na tquen tyoʼtsʼon',
	},
	miy2016eb: {
		language: 'miy',
		tongue: 'mx',
		name: 'Ayutla Mixtec - El Nuevo Testamento en el Mixteco de Ayutla',
	},
	cya2013eb: {
		language: 'cya',
		tongue: 'mx',
		name: 'Nopala Chatino - El Nuevo Testamento',
	},
	cta1981eb: {
		language: 'cta',
		tongue: 'mx',
		name: 'Chatino, Tataltepec - Chaʼ tsoʼo nu nchcuiʼ jiʼi̱ Jesucristo nu xuʼna na',
	},
	ctp1992eb: {
		language: 'ctp',
		tongue: 'mx',
		name: 'Chatino, Western Highland - Chaʼ suʼwe nu nchkwiʼ chaʼ ʼin Jesucristo nu nka xʼnaan',
	},
	cco2002eb: {
		language: 'cco',
		tongue: 'mx',
		name: 'Chinantec, Comaltepec - Júu ʼmɨ́ɨ e cacuo fidiée',
	},
	cnl2012eb: {
		language: 'cnl',
		tongue: 'mx',
		name: "Chinantec, Lalana - Júu² 'mɨɨn³² 'e³ ca²³ŋɨń² Dios",
	},
	cle2008eb: {
		language: 'cle',
		tongue: 'mx',
		name: 'Chinantec, Lealao - Ja̱³la³ fáh⁴dxa⁴²dxú⁴ hi³mɨɨ³² chiáh² Ñúh³a² Jesucristo; Salmos',
	},
	chz2003eb: {
		language: 'chz',
		tongue: 'mx',
		name: 'Chinantec, Ozumacín - Hmooh hmëë he- ga-jmee Jesucristo; Salmos',
	},
	cpa1973eb: {
		language: 'cpa',
		tongue: 'mx',
		name: 'Chinantec, Palantla - El Nuevo Testamento de nuestro señor Jesucristo: Versión chinanteca',
	},
	chq1983eb: {
		language: 'chq',
		tongue: 'mx',
		name: 'Chinantec, Quiotepec - Juu³ tyʉ² ʼe gafaaʼ²¹ Dios tyaʼ tsá²',
	},
	cso1986eb: {
		language: 'cso',
		tongue: 'mx',
		name: 'Chinantec, Sochiapam - Jú¹ chú³² quioh²¹ Jesús tsá² lɨn³ Cristo',
	},
	cnt1994eb: {
		language: 'cnt',
		tongue: 'mx',
		name: 'Chinantec, Tepetotutla - Jag₁ ʼmɨ́₂ a₂ma₂lɨʼ₅₄ quianʼ₅₄ Diu₄',
	},
	cuc1983eb: {
		language: 'cuc',
		tongue: 'mx',
		name: 'Chinantec, Usila - Jau²³ hm²³ i⁴ra³tya²³ nei² quieh¹ re¹ Jesucristo quian⁴-¹',
	},
	ctucti2008eb: {
		language: 'ctu',
		tongue: 'mx',
		name: "Chol de Tila - JINI WEN BΛ T'AN",
	},
	ctu1976eb: {
		language: 'ctu',
		tongue: 'mx',
		name: 'Chol - Jini wen bʌ tʼan',
	},
	ctu1977eb: { language: 'ctu', tongue: 'mx', name: 'Chol - I T’an Dios' },
	chd1991eb: {
		language: 'chd',
		tongue: 'mx',
		name: 'Chontal, Highland Oaxaca - Lataiquiʼ loyaʼapa iƚe al cʼa lixpicʼepa L̵anDios',
	},
	chf1977eb: {
		language: 'chf',
		tongue: 'mx',
		name: 'Chontal, Tabasco - U Chʼuʼul Tʼan Dios',
	},
	crn2008eb: {
		language: 'crn',
		tongue: 'mx',
		name: "Cora, El Nayar - Ɨ niuucari tɨ jejcua, tɨ ajta jɨme'en ra'axa a'ɨjna ɨ tavastara'a, ɨ Cɨriistu'u tɨ ji'i Jesús tɨ̀ tu'irájtuaa",
	},
	cok2016eb: {
		language: 'cok',
		tongue: 'mx',
		name: 'Cora, Santa Teresa - Ɨ nyúucarij tɨ jájcua tɨ aꞌɨj́na áꞌxaj ɨ Tavástaraꞌ ɨ Jesús tɨ Cɨríistuꞌ pueꞌeen ajta Salmos',
	},
	cux1974eb: {
		language: 'cux',
		tongue: 'mx',
		name: 'Cuicatec, Tepeuxila - Nduudu nʼdai yeⁿʼe Ndyuūs yeⁿʼe cuicateco yeⁿʼe Tepeuxila',
	},
	cut1972eb: {
		language: 'cut',
		tongue: 'mx',
		name: 'Cuicatec, Teutila - El Nuevo Testamento: Cuicateco de Teutila',
	},
	zpg2019eb: {
		language: 'zpg',
		tongue: 'mx',
		name: 'Guevea De Humboldt Zapotec - Zapoteco, Guevea de Humboldt NT',
	},
	var2014eb: {
		language: 'var',
		tongue: 'mx',
		name: 'Huarijio - Riosia Warijio Nayewani Ahpo Tisiwa Kaaweruma Tuuyewari',
	},
	hus2005eb: {
		language: 'hus',
		tongue: 'mx',
		name: 'Huastec - Nin tének káwintal an okˀóxláb',
	},
	hus1971eb: {
		language: 'hus',
		tongue: 'mx',
		name: 'Huastec - An it jilchith cau cʼal i Ajatic Jesucristo',
	},
	huv2009eb: {
		language: 'huv',
		tongue: 'mx',
		name: 'Huave, San Mateo Del Mar - Jayats nanderac wüx miteatiiüts Jesucristo',
	},
	hch1988eb: {
		language: 'hch',
		tongue: 'mx',
		name: 'Huichol - Cacaüyari niuquieya xapayari türatu hecuame hepaüsita tatiʼaitüvame tasivicueisitüvame Quesusi Cürisitu miʼatüa',
	},
	lac1978eb: {
		language: 'lac',
		tongue: 'mx',
		name: 'Lacandon - A quet u tʼʌnoʼ a ricʼbenoʼ',
	},
	mfy2014eb: {
		language: 'mfy',
		tongue: 'mx',
		name: 'Mayo - Diosta nooki yorem nokpo',
	},
	maz2007eb: {
		language: 'maz',
		tongue: 'mx',
		name: 'Mazahua, Central - Nu o̱ jña mizhocjimi nu mama ja ga cja e Jesucristo',
	},
	maq1991eb: {
		language: 'maq',
		tongue: 'mx',
		name: 'Mazatec, Chiquihuitlán - Compromisu xi majo xi casahmi nina cojo xuta (El Nuevo Testamento en el mazateco de Chiquihuitlán de Juárez ... y en español)',
	},
	mau1960eb: {
		language: 'mau',
		tongue: 'mx',
		name: 'Mazatec, Huautla - Xon⁴-le⁴ ni³na¹ xi³ tʔa³tsʔe⁴ Jesucristo',
	},
	maj2013eb: {
		language: 'maj',
		tongue: 'mx',
		name: 'Mazatec, Jalapa de Díaz - Éhe̱n Nti̱a̱ná',
	},
	maa2013eb: {
		language: 'maa',
		tongue: 'mx',
		name: "Mazatec, San Jerónimo Tecóatl - Én-la̱ Nainá xi kjoa̱ ts'e̱ Jesucristo",
	},
	vmy2009eb: {
		language: 'vmy',
		tongue: 'mx',
		name: 'Mazateco, Ayautla - El Nuevo Testamento Mazateco de Ayautla',
	},
	tpx2020eb: {
		language: 'tpx',
		tongue: 'mx',
		name: "Me'phaa, Acatepec - El libro de Jonas en Me'phaa Xma'iin (Teocuitlapa)",
	},
	mco1976eb: {
		language: 'mco',
		tongue: 'mx',
		name: 'Coatlán Mixe - El Nuevo Testamento en mixe de Coatlán',
	},
	mir1988eb: {
		language: 'mir',
		tongue: 'mx',
		name: 'Mixe, Isthmus - El Nuevo Testamento en mixe de Guichicovi',
	},
	mxq2009eb: {
		language: 'mxq',
		tongue: 'mx',
		name: "Mixe, Juquila - Ja jembyʉ kajxy'átypyʉ mʉdʉ Jesukristʉkyʉjxm: El Nuevo Testamento de nuestro Señor Jesucristo en el mixe de Juquila",
	},
	mxp1987eb: {
		language: 'mxp',
		tongue: 'mx',
		name: 'Mixe, Tlahuitoltepec - Ja øgyajpxy ja ømyadya̱ʼa̱ky midi xukpa̱a̱jtɨmp ja nɨtsoʼokʼajtɨn',
	},
	mto1989eb: {
		language: 'mto',
		tongue: 'mx',
		name: 'Totontepec Mixe, - Ya̱ʼa̱ tseʼe je̱ nam ko̱jtstán juuʼ veʼe je̱ Nteʼyamˍ xyaktaajnjimdu je̱ nMa̱j Vintsá̱namda Jesucristo ka̱jx',
	},
	mim2019eb: {
		language: 'mim',
		tongue: 'mx',
		name: 'Mixtec, Alacatlatzala - Alacatlatzala Mixtec New Testament',
	},
	mib1973eb: {
		language: 'mib',
		tongue: 'mx',
		name: 'Mixtec, Atatláhuca - Nuevo Testamento en mixteco',
	},
	mih1979eb: {
		language: 'mih',
		tongue: 'mx',
		name: 'Mixtec, C hayuco - Tuhun Ndyoo sihin tyehen ñi',
	},
	miz2003eb: {
		language: 'miz',
		tongue: 'mx',
		name: 'Mixtec, Coatzospan - Tūʼún xuva kō vatā ó ntákaʼan ña ñuú Coatzospan',
	},
	xtd2001eb: {
		language: 'xtd',
		tongue: 'mx',
		name: 'Mixtec, Diuxi-tilantongo - Tnuʼu vaʼa tnuʼu Jesucristo',
	},
	mxt1983eb: {
		language: 'mxt',
		tongue: 'mx',
		name: 'Mixtec, Jamiltepec - Tuhun cha sañahá ra Jesucristo chi yo',
	},
	xtm2013eb: {
		language: 'xtm',
		tongue: 'mx',
		name: "Mixtec, Magdalena Peñasco - Tnu'u vii tnu'u va'a Su'si ma",
	},
	xtn2016eb: {
		language: 'xtn',
		tongue: 'mx',
		name: 'Mixtec, Northern Tlaxiaco - Tutu ii - Kaꞌan ia Dios nuu ndiꞌi ñayiu',
	},
	mie1977eb: {
		language: 'mie',
		tongue: 'mx',
		name: 'Mixtec, Ocotepec - Nuevo Testamento en mixteco de Ocotepec',
	},
	mil2002eb: {
		language: 'mil',
		tongue: 'mx',
		name: 'Mixtec, Peñoles - Tnúhu ní cáháⁿ yǎ ndiǒxí xito cùu uú',
	},
	mio1980eb: {
		language: 'mio',
		tongue: 'mx',
		name: 'Mixtec, Pinotepa Nacional - Tutu chaa cha iyo cuenda ra hahnu Jesucristo (El Nuevo Testamento de nuestro señor Jesucristo)',
	},
	mjc1994eb: {
		language: 'mjc',
		tongue: 'mx',
		name: 'Mixtec, San Juan Colorado - Tuhun tsaa tsa nacoo̱ jutu mañi yo Jesucristo tsi yo',
	},
	mig1951eb: {
		language: 'mig',
		tongue: 'mx',
		name: 'Mixtec, San Miguel el Grande - Testamento jaa maa jitoho-yo Jesucristo',
	},
	mza2015eb: {
		language: 'mza',
		tongue: 'mx',
		name: 'Mixtec, Santa María Zacatepec - Zacatepec Mixtec NT',
	},
	mks2009eb: {
		language: 'mks',
		tongue: 'mx',
		name: 'Mixtec, Silacayoapan - Tu̱hun sa̱á ña̱ na̱jándacoo Jesucristo nu̱ yo̱: El Nuevo Testamento en el mixteco de Silacayoapan',
	},
	mit1978eb: {
		language: 'mit',
		tongue: 'mx',
		name: 'Mixtec, Southern Puebla - Ley saa ni nacoo Jesucristu',
	},
	mxb2006eb: {
		language: 'mxb',
		tongue: 'mx',
		name: "Mixtec, Tezoatlán - Tuti yó'o kúú to̱'on Ndios, ta xí'o ña kuendá sa'a̱ Jesús",
	},
	mpm1988eb: {
		language: 'mpm',
		tongue: 'mx',
		name: 'Mixtec, Yosondúa - Nuevo Testamento en mixteco de Yosondúa',
	},
	nsu2017eb: {
		language: 'nsu',
		tongue: 'mx',
		name: 'Nahuatl - Itlajtol Totajtzin Dios',
	},
	nhw2005eb: {
		language: 'nhw',
		tongue: 'mx',
		name: 'Nahuatl, Huasteca Occidental - Icamanal toteco; Santa Bíblia',
	},
	nhe2009eb: {
		language: 'nhe',
		tongue: 'mx',
		name: 'Nahuatl, Huasteca Oriental - Ya ni nopa yancuic tlajtoli tlen toteco toca mocajtoc; El Nuevo Testamento de nuestro Señor Jesucristo en el náhuatl de la Huasteca Oriental',
	},
	ngu1987eb: {
		language: 'ngu',
		tongue: 'mx',
		name: 'Nahuatl, Guerrero - In yencuic iyectlajtoltzin Dios itech ica toTeco Jesucristo',
	},
	azz1975eb: {
		language: 'azz',
		tongue: 'mx',
		name: 'Nahuatl, Highland Puebla - In cuali tajtoltzin de Dios',
	},
	nch2005eb: {
		language: 'nch',
		tongue: 'mx',
		name: 'Nahuatl, Huasteca Central - Icamanal toteco; Santa Biblia',
	},
	nhe2005eb: {
		language: 'nhe',
		tongue: 'mx',
		name: 'Nahuatl, Huasteca Oriental - Itlajtol toteco: Santa Biblia',
	},
	nhx2016eb: {
		language: 'nhx',
		tongue: 'mx',
		name: 'Nahuatl, Isthmus-Mecayapan - Itájto̱l toTe̱ko ipan melaꞌtájto̱l',
	},
	ncl1998eb: {
		language: 'ncl',
		tongue: 'mx',
		name: 'Nahuatl, Michoacán - Ilajtulisli Yancuic toTata Jesucristo',
	},
	nhy2006eb: {
		language: 'nhy',
		tongue: 'mx',
		name: 'Nahuatl, Northern Oaxaca - Itlajtol totajtzin Dios = El Nuevo Testamento',
	},
	ncj1979eb: {
		language: 'ncj',
		tongue: 'mx',
		name: 'Nahuatl, Northern Puebla - In yancuic mononotzalistli ica Totecohtzin Jesucristo',
	},
	npl2011eb: {
		language: 'npl',
		tongue: 'mx',
		name: 'Nahuatl, Southeastern Puebla - Itlajtol Totajtsi Dios',
	},
	nhg1980eb: {
		language: 'nhg',
		tongue: 'mx',
		name: 'Nahuatl, Tetelcingo - El Nuevo Testamento en nahuatl de Tetelcingo',
	},
	nhi2012eb: {
		language: 'nhi',
		tongue: 'mx',
		name: 'Nahuatl, Zacatlán-Ahuacatlán-Tepetzintla - In Yancuic Tlahtolsintilil',
	},
	otm1974eb: {
		language: 'otm',
		tongue: 'mx',
		name: 'Otomi, Eastern Highland - Ra ʼdaʼyonhogui nangue ma Hmuhʉ ra Jesucristo',
	},
	ots1975eb: {
		language: 'ots',
		tongue: 'mx',
		name: 'Otomi, Estado de México - El Nuevo Testamento en otomí de San Felipe Santiago, Edo. de México',
	},
	ote2008eb: {
		language: 'ote',
		tongue: 'mx',
		name: "Otomi, Mezquital - Ra 'Ra'yo Testamento",
	},
	otq2009eb: {
		language: 'otq',
		tongue: 'mx',
		name: "Otomi, Querétaro - Àr 'ra'yo nkohi Jö har ñhöñhö maxei nto̱ngwi ár mahwifi har ha̱i m'onda ne har ñhömfo̱",
	},
	otn1975eb: {
		language: 'otn',
		tongue: 'mx',
		name: 'Otomi, Tenango - Ja ua ra̱ ʼdaʼyo cohi bi gomi̱ Oja̱ yø ja̱ʼi̱',
	},
	poe1982eb: {
		language: 'poe',
		tongue: 'mx',
		name: 'Popoloca, San Juan Atzingo - Tí Nuevo Testamento cuènte Inchéni Jesucristo Cʼóna Nquìva',
	},
	pps2016eb: {
		language: 'pps',
		tongue: 'mx',
		name: 'Popoloca, San Luís Temalacayuca - Chijnie ndo Jesucristo',
	},
	pls1982eb: {
		language: 'pls',
		tongue: 'mx',
		name: 'San Marcos Tlalcoyalco Popoloca - Tti jian joajné Jesucristo',
	},
	poi2009eb: {
		language: 'poi',
		tongue: 'mx',
		name: 'Popoluca, Highland - Jém jomipɨc trato jém iwatnewɨɨp tánomi Jesucristo',
	},
	trq2019eb: {
		language: 'trq',
		tongue: 'mx',
		name: 'San Martín Itunyoso Triqui - Si-nu̱guanꞌ Yanꞌanj Xa̱ngaꞌ',
	},
	spaBES2018eb: {
		language: 'es',
		tongue: 'mx',
		name: 'Español (Spanish) - La Biblia en Español Sencillo',
	},
	spapddpt2022eb: {
		language: 'es',
		tongue: 'mx',
		name: 'Español (Spanish - Palabra de Dios para ti',
	},
	tac2008eb: {
		language: 'tac',
		tongue: 'mx',
		name: "Tarahumara, Western - Onorúgame nila ra'íchali",
	},
	tee1976eb: {
		language: 'tee',
		tongue: 'mx',
		name: 'Tepehua, Huehuetla - Ixchivinti Dios',
	},
	tpp2015eb: {
		language: 'tpp',
		tongue: 'mx',
		name: 'Tepehua, Pisaflores - Ixchiwinti Dios',
	},
	tpt2004eb: {
		language: 'tpt',
		tongue: 'mx',
		name: 'Tepehua, Tlachichilco - Ixchivinti Dios: ni sastʼi chivinti yu Dios jatʼatamakaul ixlapanakni laka lhimasipijni',
	},
	ntp1981eb: {
		language: 'ntp',
		tongue: 'mx',
		name: 'Tepehuan, Northern - Diuusi ñiooquidʌ utuducami oodamicʌdʌ',
	},
	stpNT2007eb: {
		language: 'stp',
		tongue: 'mx',
		name: "Tepehuan, Southeastern - Gu ñio'ki'ñ gu Dios na bhaan tu a'ga guch xoi'kam",
	},
	toj1972eb: {
		language: 'toj',
		tongue: 'mx',
		name: 'Tojolabal - Ja yajcʼachil testamento sbaj ja cajualtic Jesucristo',
	},
	toc2006eb: {
		language: 'toc',
		tongue: 'mx',
		name: 'Totonac, Coyutla - Xasasti talacaxlan',
	},
	tos2009eb: {
		language: 'tos',
		tongue: 'mx',
		name: 'Totonac, Highland - Hua̱ xasa̱sti talacca̱xlan quinTla̱tican Jesucristo',
	},
	top1979eb: {
		language: 'top',
		tongue: 'mx',
		name: 'Totonac, Papantla - Xasasti talaccaxlan',
	},
	tku1999eb: {
		language: 'tku',
		tongue: 'mx',
		name: 'Totonac, Upper Necaxa - Xasāstiʼ testamento (Xatze tachihuīn ixpālacata Jesucristo)',
	},
	too1978eb: {
		language: 'too',
		tongue: 'mx',
		name: 'Totonac, Xicotepec De Juárez - Huan Xasāstiʼ testamento: Huan xatzey tachihuīn ixpālacata Jesucristo',
	},
	trc1987eb: {
		language: 'trc',
		tongue: 'mx',
		name: 'Triqui, Copala - Se-nānā Diosē nanā sāʼ me rá catūū nimán níʼ a',
	},
	tzotzc2009eb: {
		language: 'tzo',
		tongue: 'mx',
		name: 'Tzotzil de Chamula - TI ACHꞌ REXTOMENTO YUꞌUN TI JESUCRISTOE',
	},
	tzotze1981eb: {
		language: 'tzo',
		tongue: 'mx',
		name: "Tzotzil de Chenalhó - ACH' TESTAMENTO",
	},
	tzoH1995eb: {
		language: 'tzo',
		tongue: 'mx',
		name: 'Tzotzil - Jaʼ ti achʼ Testamento: jaʼ scʼopilal ti Jesucristoe jaʼ ti Jcoltavanej cuʼuntique',
	},
	tzoSA1983eb: {
		language: 'tzo',
		tongue: 'mx',
		name: 'Tzotzil - Achʼ Testamento: Jaʼ scʼoplal ti jaʼ Cajcoltavanejtic li Cajvaltic Jesucristoe',
	},
	tzoZ2009eb: {
		language: 'tzo',
		tongue: 'mx',
		name: "Tzotzil - Sc'op riox: ja' li' yaloj ti chac' jcuxlejaltic ta sbatel osli ti cajvaltic Jesucristoe",
	},
	yaq2003eb: {
		language: 'yaq',
		tongue: 'mx',
		name: 'Yaqui - Yoʼowe Jesukrijtota itom yaʼariakaʼu betchiʼbo juʼu bemelaka liojta betana lutuʼuria yaʼari (El Nuevo Testamento en yaqui)',
	},
	zpo2009eb: {
		language: 'zpo',
		tongue: 'mx',
		name: 'Zapotec, Amatlán - Wdizh kwaan nyaadno yalnaban',
	},
	zad2011eb: {
		language: 'zad',
		tongue: 'mx',
		name: 'Zapotec, Cajonos - Dillꞌ wen dillꞌ Kob C̱he Jesucrístonaꞌ',
	},
	zpv1990eb: {
		language: 'zpv',
		tongue: 'mx',
		name: 'Zapotec, Chichicapan - Xchiʼdxyi cuubi dxiohs nin bieʼgaluuʼyi daada Jesucristu (El Nuevo Testamento en el zapoteco de Chichicapan y en español)',
	},
	zpc1986eb: {
		language: 'zpc',
		tongue: 'mx',
		name: 'Zapotec, Choapan - Xtiʼidzaʼ Diuzi',
	},
	zca2013eb: {
		language: 'zca',
		tongue: 'mx',
		name: "Zapotec, Coatecas Altas - Widi'zh che'n Jesukrist kwa'n kinu yalnaban",
	},
	zai1988eb: {
		language: 'zai',
		tongue: 'mx',
		name: 'Zapotec, Isthmus - Stiidxa Dios didxazá (El Nuevo Testamento de nuestro señor Jesucristo en el Zapoteco del Istmo)',
	},
	zpl2010eb: {
		language: 'zpl',
		tongue: 'mx',
		name: "Zapotec, Lachixío - Stichia' Diose dialu",
	},
	zam1971eb: {
		language: 'zam',
		tongue: 'mx',
		name: 'Zapotec, Miahuatlán - Testament cub coʼ nac diʼs ndac cheʼn Tad Jesucrist',
	},
	zaw2006eb: {
		language: 'zaw',
		tongue: 'mx',
		name: 'Zapotec, Mitla - Xtidxcoob Dios ni biädnä dad Jesucrist',
	},
	zpm1998eb: {
		language: 'zpm',
		tongue: 'mx',
		name: 'Mixtepec Zapotec - Diidz ne rdeed guielmban',
	},
	zac1983eb: {
		language: 'zac',
		tongue: 'mx',
		name: 'Zapotec, Ocotlán - Dizaʼquë shtë Dios con dizë',
	},
	zao2007eb: {
		language: 'zao',
		tongue: 'mx',
		name: 'Zapotec, Ozolotepec - Diiz kuu ndyaadno yalnaban',
	},
	ztq2009eb: {
		language: 'ztq',
		tongue: 'mx',
		name: 'Zapotec, Quioquitani-Quierí - Tiits nii xnee kyalmbañ; El Nuevo Testamento en el zapoteco de Quioquitani',
	},
	zar2009eb: {
		language: 'zar',
		tongue: 'mx',
		name: "Zapotec, Rincón - Didza' cubi rucá'ana tsahui'",
	},
	zab1995eb: {
		language: 'zab',
		tongue: 'mx',
		name: 'Zapotec, San Juan Guelavía - Xtiidx Dios cun ditsa',
	},
	zpt2015eb: {
		language: 'zpt',
		tongue: 'mx',
		name: 'Zapotec, San Vicente Coatlán - Be diꞌizh nsaꞌa gealnaban',
	},
	zpi2010eb: {
		language: 'zpi',
		tongue: 'mx',
		name: 'Zapotec, Santa María Quiegolani - Xdiiz Dëdyuzh kon disa',
	},
	zap2010eb: {
		language: 'zap',
		tongue: 'mx',
		name: 'Zapotec, Santa María Quiegolani - Xdiiz Dëdyuzh kon disa',
	},
	zas2010eb: {
		language: 'zas',
		tongue: 'mx',
		name: 'Zapotec, Santo Domingo Albarradas - Xtiidx Dios',
	},
	zaa1970eb: {
		language: 'zaa',
		tongue: 'mx',
		name: 'Zapotec, Sierra de Juárez - Ca titsaʼ de laʼlabani para iyate ca enneʼ',
	},
	zsr1992eb: {
		language: 'zsr',
		tongue: 'mx',
		name: 'Zapotec, Southern Rincon - Didzaʼ cub rucáʼn tsahuiʼ',
	},
	zat1981eb: {
		language: 'zat',
		tongue: 'mx',
		name: 'Zapotec, Tabaa - Xela wezria cube nen salmo caʼ',
	},
	zpz2004eb: {
		language: 'zpz',
		tongue: 'mx',
		name: 'Zapotec, Texmelucan - De riidz ni trat cub nu bicy nu Ñgyoozh mbecy: Salmos; Proverbios',
	},
	zpu2000eb: {
		language: 'zpu',
		tongue: 'mx',
		name: 'Zapotec, Yalálag - Diʼll danʼ nsaʼa yel nban (El Nuevo Testamento en el Zapoteco de Yalálag)',
	},
	zae2014eb: {
		language: 'zae',
		tongue: 'mx',
		name: 'Zapotec, Yareni - Ka Tisa ge Tata Jesucristuha',
	},
	zty2002eb: {
		language: 'zty',
		tongue: 'mx',
		name: 'Zapotec, Yatee - Dižaʼ chaweʼ kub len Salmo kaʼ',
	},
	zav1971eb: {
		language: 'zav',
		tongue: 'mx',
		name: 'Zapotec, Yatzachi - Testament Cobə deʼen choeʼ dižəʼ c̱he ancho Jesocristənʼ',
	},
	zpq1987eb: {
		language: 'zpq',
		tongue: 'mx',
		name: 'Zapotec, Zoogocho - Dižaʼ güen c̱he ancho Jesucristo',
	},
	zos1978eb: {
		language: 'zos',
		tongue: 'mx',
		name: 'Zoque, Francisco León - Jomepø Testamento',
	},
	chk2011eb: { language: 'chk', tongue: 'fm', name: 'Chuukese - Paipel' },
	kpg2014eb: {
		language: 'kpg',
		tongue: 'fm',
		name: 'Kapingamarangi - Beebaa Dabu',
	},
	kos1928eb: { language: 'kos', tongue: 'fm', name: 'Kosrae - BIBLE MUTAL' },
	mkj2019eb: {
		language: 'mkj',
		tongue: 'fm',
		name: 'Mwoakilloa - Mokilese Bible',
	},
	nkr2022eb: {
		language: 'nkr',
		tongue: 'fm',
		name: 'Nukuoro - De Beebaa Dabu',
	},
	pon2006eb: {
		language: 'pon',
		tongue: 'fm',
		name: 'Pohnpeian - Pohnpeian Bible',
	},
	ponA2006eb: {
		language: 'pon',
		tongue: 'fm',
		name: 'Pohnpeian - Pohnpeian Bible with Apocrypha',
	},
	ponPdneb: {
		language: 'pdn',
		tongue: 'pon',
		name: 'pdn - fm - Pohnpeian - Kadede Kap Psam Akan',
	},
	pon1922eb: {
		language: 'pon',
		tongue: 'fm',
		name: 'Pohnpeian - Kadede Kap Pjam Akan',
	},
	stweb: {
		language: 'stw',
		tongue: 'fm',
		name: 'Satawalese - Pwapwior we e Santus',
	},
	uli1995eb: {
		language: 'uli',
		tongue: 'fm',
		name: 'Ulithian - Bogtag we ye Tefoy',
	},
	yap2007eb: {
		language: 'yap',
		tongue: 'fm',
		name: 'Yapese - Bible Ni Thothup',
	},
	eko2008eb: {
		language: 'eko',
		tongue: 'mz',
		name: 'Kote - Kote New Testament',
	},
	mgh2009eb: {
		language: 'mgh',
		tongue: 'mz',
		name: 'Makhuwa-Meetto - Makhuwa-Meetto do Novo Testamento',
	},
	mgh2016eb: {
		language: 'mgh',
		tongue: 'mz',
		name: 'Makhuwa-Meetto - Makua New Testament 2015',
	},
	kde2008eb: {
		language: 'kde',
		tongue: 'mz',
		name: 'Makonde - LILAILANO LYAHAMBI LYA NNUNGU KWA VANU VAMMALELE',
	},
	wmw2013eb: { language: 'wmw', tongue: 'mz', name: 'Mwani - Habari Ngema' },
	nyu2010eb: { language: 'nyu', tongue: 'mz', name: 'Nyungwe - Nyungwe' },
	seh1983eb: {
		language: 'seh',
		tongue: 'mz',
		name: 'Sena - Sena do Novo Testamento',
	},
	tke2009eb: {
		language: 'tke',
		tongue: 'mz',
		name: 'Takwane - Takwane do Novo Testamento',
	},
	aeu2015eb: {
		language: 'aeu',
		tongue: 'mm',
		name: 'Gaolkheel (Akeu) - Jalliq aqsivq Gaolkheel daoq',
	},
	blr2021eb: { language: 'blr', tongue: 'mm', name: 'Plang (Blang) - Plang' },
	mya2005eb: {
		language: 'mya',
		tongue: 'mm',
		name: 'Mynmar language (Burmese) - Common Language Bible',
	},
	myajvb1840eb: {
		language: 'mya',
		tongue: 'mm',
		name: 'ဗမာ (Burmese) - မြန်မာကျမ်းစာ',
	},
	dao2018eb: {
		language: 'dao',
		tongue: 'mm',
		name: 'Daai - Dai Cangcim Kthai',
	},
	cekak2019eb: {
		language: 'cekak',
		tongue: 'mm',
		name: 'Asang Khongca - Asang Khongca Bible (2019)',
	},
	hltmcsb2019eb: {
		language: 'hlt',
		tongue: 'mm',
		name: 'Matupi Chin - Baibal Olcim',
	},
	hlt2018eb: {
		language: 'hlt',
		tongue: 'mm',
		name: 'Matupi Chin - Baibal Olcim',
	},
	hltthb2020eb: {
		language: 'hlt',
		tongue: 'mm',
		name: 'Tuivang - Tuivang Holy Bible',
	},
	csy2020eb: {
		language: 'csy',
		tongue: 'mm',
		name: 'Siyin Chin - Tinaung Takluem',
	},
	cth2020eb: {
		language: 'cth',
		tongue: 'mm',
		name: 'Thai Phum - Thai Phum Holy Bible',
	},
	kyuk2021eb: {
		language: 'kyuk',
		tongue: 'mm',
		name: 'Western Kayah - ꤜꤤ꤬ꤡꤢ꤭ꤏꤢꤧ꤭ ꤢ꤬ꤞꤢꤧ꤭ ꤔꤢ ꤜꤤ꤬ꤡꤢ꤭ꤏꤢꤧ꤭ ꤢ꤬ꤜꤟꤛꤢꤩ꤭ ꤒꤢ꤬ꤟꤢꤩ꤬ ꤊꤢ꤬ꤛꤢ꤭ꤜꤟꤤ꤬ꤍꤟꤥ',
	},
	kyu2014eb: {
		language: 'kyu',
		tongue: 'mm',
		name: 'Kayah, Western - Lisǎsè̌ Athè̌ - Kayǎ Ngó̤',
	},
	kxf2020eb: { language: 'kxf', tongue: 'mm', name: 'Manumanaw - TAFO AYO' },
	zyp2010eb: {
		language: 'zyp',
		tongue: 'bm',
		name: 'Chin, Zyphe - Biahrai Tha, Zyphe rei',
	},
	atb2009eb: {
		language: 'atb',
		tongue: 'bm',
		name: 'Zaiwa - Chyoiyúng chyumlaiká: dangshikaq asik; Zaiwa',
	},
	sbs2020eb: {
		language: 'sbs',
		tongue: 'na',
		name: 'Chikuahane - Kuhane Bible',
	},
	gvr2020eb: {
		language: 'gvr',
		tongue: 'np',
		name: 'Gurung - Gurung Central Adapt It Study Bible',
	},
	kjl2015eb: {
		language: 'kjl',
		tongue: 'np',
		name: 'Kham, Western Parbate - साःरो बाचा',
	},
	lifD2009eb: {
		language: 'lif',
		tongue: 'np',
		name: 'Limbu - Yesu khristarɛ kunisaam',
	},
	lifL2009eb: {
		language: 'lif',
		tongue: 'np',
		name: 'Limbu - ᤏᤡᤱᤘᤠ᤹ᤑᤢ ᤐᤠ᤺ᤴᤈᤠᤰ ᤁᤢᤛᤱ ᤔᤠᤱᤜᤢᤵ',
	},
	npiulb2019eb: {
		language: 'npi',
		tongue: 'np',
		name: 'नेपाली (Nepali) - पवित्र बाइबल',
	},
	npi2010eb: {
		language: 'npi',
		tongue: 'np',
		name: 'नेपाली (Nepali) - The Holy Bible, Easy Reading Version, in Nepali',
	},
	new2020eb: { language: 'new', tongue: 'np', name: 'Newar - Newar' },
	xsr2014eb: {
		language: 'xsr',
		tongue: 'np',
		name: 'Sherpa - कोन्छ्‌योककी सुङ',
	},
	suz2011eb: {
		language: 'suz',
		tongue: 'np',
		name: 'Sunwar - परमप्रभु यावे आ लोव़',
	},
	taj2011eb: {
		language: 'taj',
		tongue: 'np',
		name: 'Eastern Tamang - परमेश्वरला बचन छार कबुल',
	},
	npioncb2024eb: {
		language: 'np',
		tongue: 'np',
		name: 'नेपाली - Biblica® नेपाली समकालीन सर्वसुलभ संस्करण',
	},
	nld1917eb: {
		language: 'nld',
		tongue: 'nl',
		name: 'Nederlands (Dutch) - De Heilige Schrift 1917',
	},
	nld1939eb: {
		language: 'nl',
		tongue: 'nl',
		name: 'Nederlandse taal (Dutch) - De Heilige Schrift, Petrus Canisiusvertaling, 1939',
	},
	nldnbg1951eb: {
		language: 'nl',
		tongue: 'nl',
		name: 'Nederlandse taal (Dutch) - NBG-vertaling 1951',
	},
	cam2017eb: {
		language: 'cam',
		tongue: 'nc',
		name: 'Cemuhî - Tii Iitihi: Élele Iitihi na mwo Coho',
	},
	priNT2012eb: {
		language: 'pri',
		tongue: 'nc',
		name: 'Paicî - Tii Pwicîri: Âmu Aamwari naa na cî',
	},
	fuh2018eb: {
		language: 'fuh',
		tongue: 'ne',
		name: 'Fulfulde, Western Niger - Ko woni Amaana Keso',
	},
	kby2018eb: {
		language: 'kby',
		tongue: 'ne',
		name: 'Kanuri, Manga - Manga Kanuri Translation',
	},
	ttq2015eb: {
		language: 'ttq',
		tongue: 'ne',
		name: 'Tamajaq, Tawallammat - Ǝlinjil ǝn Ɣaysa Ǝlmǝsix Itawann-as deɣ Arkawal wa Aynayan',
	},
	amo2020eb: {
		language: 'amo',
		tongue: 'ng',
		name: 'Timap (Amo) - Amo New Testament',
	},
	bsj2020eb: { language: 'bsj', tongue: 'ng', name: 'Bangunji - Bangwinji' },
	bqcsim2010eb: {
		language: 'bqcsim',
		tongue: 'ng',
		name: 'Boko - Bibeli Luayãtaalá',
	},
	bus2005eb: {
		language: 'bus',
		tongue: 'ng',
		name: 'Bokobaru - Luda yã takada kↄ̃n Bokobaru yão',
	},
	jid2020eb: {
		language: 'jid',
		tongue: 'ng',
		name: 'Jida (Bu) - Bu New Testament',
	},
	bqp2005eb: {
		language: 'bqp',
		tongue: 'ng',
		name: 'Bisã (Busa) - Luda yã takada kũ Bisã yão',
	},
	fuv2011eb: {
		language: 'fuv',
		tongue: 'ng',
		name: 'Fulfulde Caka Nigeria - الَکْوَلَ ک ٜسَلْ',
	},
	gde2000eb: {
		language: 'gde',
		tongue: 'ng',
		name: 'Gude - Kura Aləkawalə ŋga Əntaŋfə',
	},
	hausa2020eb: {
		language: 'hau',
		tongue: 'ng',
		name: 'Hausa - Biblica® Buɗaɗɗen Littafi Mai Tsarki, Sabon Rai Don Kowa™',
	},
	hauulb2020eb: {
		language: 'hau',
		tongue: 'ng',
		name: 'Hausa - Litafi Mai-tsarki',
	},
	dud2017eb: {
		language: 'dud',
		tongue: 'ng',
		name: 'Hun-Saare - ut-Hun New Testament',
	},
	ibo2020eb: {
		language: 'ibo',
		tongue: 'ng',
		name: 'Igbo - Biblica® Baịbụlụ Nsọ nʼIgbo Ndị Ugbu a nke dịrị onye ọbụla ịgụ',
	},
	ikk2010eb: {
		language: 'ikk',
		tongue: 'ng',
		name: "Ika - Elu Ọhụn: Ẹkụkwọ-Nsọ (Azụụn Ọhụn rịn'a)",
	},
	ikw2010eb: {
		language: 'ikw',
		tongue: 'ng',
		name: "Ikwere - Tẹsitamenti Ikne n'Ọnu Ikwere",
	},
	iqw2014eb: { language: 'iqw', tongue: 'ng', name: 'Ikwo - Bayịburu Ikwo' },
	atg2012eb: {
		language: 'atg',
		tongue: 'ng',
		name: 'Ivbie North-Okpela-Arhe - Ebe-No-Pfuasẹ Ishobọ Onogbọ',
	},
	izz2014eb: { language: 'izz', tongue: 'ng', name: 'Izii - Bayịburu Izii' },
	jni2020eb: {
		language: 'jni',
		tongue: 'ng',
		name: 'Ajanji (Janji) - Janji Bible',
	},
	jib2019eb: { language: 'jib', tongue: 'ng', name: 'Jibu - Jir Shidun' },
	pcm2019eb: {
		language: 'pcm',
		tongue: 'ng',
		name: 'Nigerian Pidgin - Holy Bible Nigerian Pidgin English',
	},
	nin2011eb: {
		language: 'nin',
		tongue: 'ng',
		name: 'Ninzo - Ungbamvu Ku Abachi Azhi Ahe̲he̲ Ka',
	},
	kdlNT2010eb: {
		language: 'kdl',
		tongue: 'ng',
		name: 'Tsikimba - Kazuwamgbani ka savu n Tsikimba n aɓon a ɗa a ɗanga̱sai a kazuwamgbani ka cau',
	},
	tsw2011eb: {
		language: 'tsw',
		tongue: 'ng',
		name: "Tsishingini - Nzuwulai n Sa'avu na̱ Tsishingini na̱ a̱ɗiva̱ a na a ɗangulai a Nzuwulai mu Ufaru",
	},
	yor2017eb: {
		language: 'yor',
		tongue: 'ng',
		name: 'Yorùbá - Biblica® ní oore ọ̀fẹ́ láti lo Bíbélì Mímọ́ ní Èdè Yorùbá Òde-Òní',
	},
	noblb2005eb: {
		language: 'noblb',
		tongue: 'no',
		name: 'Norsk: Bokmål (Norwegian) - Biblica® Open En Levende Bok: Det Nye Testamentet',
	},
	bcc2016eb: {
		language: 'bcc',
		tongue: 'pk',
		name: 'Balochi, Southern - بلۆچی Balochi',
	},
	bccl2015eb: {
		language: 'bccl',
		tongue: 'pk',
		name: 'Balochi, Southern - Balóchi Balochi',
	},
	urdgvr2019eb: {
		language: 'ur',
		tongue: 'pk',
		name: 'Urdu - Kitab-i Muqaddas',
	},
	urdgvu2019eb: {
		language: 'ur',
		tongue: 'pk',
		name: 'اردو (Urdu) - کتابِ مقدّس',
	},
	urdirv2019eb: {
		language: 'ur',
		tongue: 'pk',
		name: 'اردو (Urdu) - इंडियन रिवाइज्ड वर्जन (IRV) उर्दू - 2019',
	},
	sab2008eb: {
		language: 'sab',
		tongue: 'pm',
		name: 'Buglere - Chube gerua jagere Jesucristo giti degaba kwian ulita alin: El Nuevo Testamento de nuestro Señor Jesucristo en el idioma buglere',
	},
	emp2011eb: {
		language: 'emp',
		tongue: 'pm',
		name: 'Emberá, Northern - Ãcõrẽ Bed̶ea',
	},
	kvn2009eb: {
		language: 'kvn',
		tongue: 'pm',
		name: 'Kuna, Border - Pab tummad karta pab Jesucristobal igal-pin mezhijad',
	},
	cuk2009eb: {
		language: 'cuk',
		tongue: 'pm',
		name: 'San Blas Kuna - Bab dummad Jesucristoba igar mesisad garda',
	},
	gym2004eb: {
		language: 'gym',
		tongue: 'pm',
		name: 'Ngäbere - Kukwe kuin ngöbökwe',
	},
	cuk2014eb: {
		language: 'cuk',
		tongue: 'pm',
		name: 'San Blas Cuna - Bab-Dummad-Garda-Islidikid',
	},
	tfr2008eb: { language: 'tfr', tongue: 'pm', name: 'Teribe - Sbö Tjl̈õkwo' },
	aau2006eb: {
		language: 'aau',
		tongue: 'pg',
		name: 'Abau - God so Sokior-ok Iwon',
	},
	adz2009eb: {
		language: 'adz',
		tongue: 'pg',
		name: 'Adzera - Adzera Baibel',
	},
	agd2010eb: {
		language: 'agd',
		tongue: 'pg',
		name: 'Agarabi - YISASINI KAMA VAYA',
	},
	spm2010eb: {
		language: 'spm',
		tongue: 'pg',
		name: 'Akukem - Mak Osɨrisira Akaman Aghuuŋ ko Iesusɨm Mbɨsevisir Gumasi',
	},
	amp2004eb: {
		language: 'amp',
		tongue: 'pg',
		name: 'Alamblak - Bro Nkifrarhu Mrokfot',
	},
	gah1986eb: {
		language: 'gah',
		tongue: 'pg',
		name: 'Alekano (Gahuku) - Monoq Gotola Gosohaq',
	},
	amm2009eb: {
		language: 'amm',
		tongue: 'pg',
		name: 'Sawiyanu (Ama) - Kotoni Imo Itouniyaimo',
	},
	amnN2011eb: {
		language: 'amnn',
		tongue: 'pg',
		name: 'Amanab (Naineri) - Godna mo Awai mona go',
	},
	amnA2001eb: {
		language: 'amn',
		tongue: 'pg',
		name: 'Amanab - Godna mo Awai mona go',
	},
	abtM1983eb: {
		language: 'maprik',
		tongue: 'pg',
		name: 'Ambulas (Maprik) - Gotna Kudi',
	},
	aey1997eb: {
		language: 'aey',
		tongue: 'pg',
		name: 'Amele - BAL CEHEC JE HAUN',
	},
	aby1988eb: {
		language: 'aby',
		tongue: 'pg',
		name: 'Aneme Wake - GODINU IRAU WAKE',
	},
	agm2004eb: {
		language: 'agm',
		tongue: 'pg',
		name: 'Angaataha - Autaahaatɨhomɨ Pɨwɨha Gaaha Wanɨha',
	},
	akh1978eb: {
		language: 'akh',
		tongue: 'pg',
		name: 'Angal Heneng - Angal Heneng mbuk Ngaoran Angal Bib Hobau Sao ngo wi o',
	},
	agg2001eb: { language: 'agg', tongue: 'pg', name: 'Angor - Godɨndɨ Hoafɨ' },
	boj2000eb: {
		language: 'boj',
		tongue: 'pg',
		name: 'Anjam - Yesus Aqa Anjam Bole 2000',
	},
	boj2014eb: {
		language: 'boj',
		tongue: 'pg',
		name: 'Anjam - Yesus Aqa Anjam Bole 2014',
	},
	aak1990eb: {
		language: 'aak',
		tongue: 'pg',
		name: 'Angave - Xwɨyí̵á Gorɨxoyá Sɨŋí̵pɨrɨnɨ',
	},
	aui2016eb: {
		language: 'aui',
		tongue: 'pg',
		name: 'Anuki - Buk Baibel long Anuki',
	},
	ena2022eb: {
		language: 'ena',
		tongue: 'pg',
		name: 'Apalɨ - Asɨ dɨ manasɨŋ',
	},
	aon2003eb: {
		language: 'aon',
		tongue: 'pg',
		name: 'Arapesh - IRUHIN ANANIN BARAEN',
	},
	mwc2016eb: {
		language: 'mwc',
		tongue: 'pg',
		name: 'Are - God Wonana Kaoaobaisiyena',
	},
	apr2013eb: {
		language: 'apr',
		tongue: 'pg',
		name: 'Arop-Lokep - Rau Ke Maro',
	},
	msy2020eb: {
		language: 'msy',
		tongue: 'pg',
		name: 'Aruamu - Godɨn Eghaghanim: Akar Gavgavir Dɨkɨrɨzir Ghurim ko Igiam',
	},
	msy2004eb: {
		language: 'msy',
		tongue: 'pg',
		name: 'Aruamu - Godɨn Akar Aghuim; Akar Dɨkɨrɨzir Gavgavir Igiam',
	},
	avt1992eb: { language: 'avt', tongue: 'pg', name: 'Au - Hɨm Yaaim Me God' },
	awb1997eb: {
		language: 'awb',
		tongue: 'pg',
		name: 'Awa - Manikáne O Ehwehne',
	},
	awx2011eb: { language: 'awx', tongue: 'pg', name: 'Awara - Awara Baibel' },
	auy1984eb: {
		language: 'auy',
		tongue: 'pg',
		name: 'Awiyaana - Aú-aai símai kááísamakain-aai',
	},
	bbb2006eb: {
		language: 'bbb',
		tongue: 'pg',
		name: 'Barai - GODIDO VUA MAEJE',
	},
	mlp2001eb: {
		language: 'mlp',
		tongue: 'pg',
		name: 'Bargam - God Ago Maror Muturta Agamukan',
	},
	bch2012eb: {
		language: 'bch',
		tongue: 'pg',
		name: 'Bariai - Deo Ele Posanga',
	},
	bjk2016eb: {
		language: 'bjk',
		tongue: 'pg',
		name: 'Barok - A Xuxubus Maxat',
	},
	bjz2017eb: {
		language: 'bjz',
		tongue: 'pg',
		name: 'Baruga - God Da Gaga Reka Re',
	},
	byr1994eb: {
		language: 'byr',
		tongue: 'pg',
		name: 'Yipma (Baruya) - Yipma Genesis and New Testament',
	},
	beo2001eb: {
		language: 'beo',
		tongue: 'pg',
		name: 'Bedamuni (Beami) - GODE EA SIA: IDA:IWANE GALA',
	},
	bef1982eb: {
		language: 'bef',
		tongue: 'pg',
		name: "Bena-bena - Ka Lamana'a Mono'i Lu Mu Tifi'ehina Ka Yabe",
	},
	big1985eb: {
		language: 'big',
		tongue: 'pg',
		name: 'Biangai - Anotogi Ngago Wik Yisu Kilisiyegi Langaira',
	},
	big2013eb: {
		language: 'big',
		tongue: 'pg',
		name: 'Biangai - Anotogi Ngago Wikta',
	},
	bhl2008eb: {
		language: 'bhl',
		tongue: 'pg',
		name: 'Bimin - Sunbin-Got em Kitakamin Weng',
	},
	bhg2014eb: {
		language: 'bhg',
		tongue: 'pg',
		name: 'Binandere - God da Ge Wasiride',
	},
	bon1993eb: { language: 'bon', tongue: 'pg', name: 'Bine - Ireclota Mene' },
	bjr2001eb: {
		language: 'bjr',
		tongue: 'pg',
		name: 'Binumarien - Fúka Moodaanaki Kira Ufa Afaqínaasa Ufa',
	},
	mux2004eb: {
		language: 'mux',
		tongue: 'pg',
		name: 'Bo-Ung (Mara-Gomu) - PULU YILI-NGA UNG KONALE',
	},
	bnp2011eb: { language: 'bnp', tongue: 'pg', name: 'Bola - A Nitana Vure' },
	gai2016eb: {
		language: 'gai',
		tongue: 'pg',
		name: 'Borei - Raraŋ Aetaniacna Kam Wembaŋ Laŋ',
	},
	ksr2011eb: {
		language: 'ksr',
		tongue: 'pg',
		name: 'Borong - Uumeleembaa Buŋa Tere Soomoŋgo Gbilia',
	},
	bzh2003eb: {
		language: 'bzh',
		tongue: 'pg',
		name: 'Buang, Central/Mapos - Ġaġek Mewis',
	},
	mmo1981eb: {
		language: 'mmo',
		tongue: 'pg',
		name: 'Mangga Buang - Mangga Buang New Testament',
	},
	buk2013eb: {
		language: 'buk',
		tongue: 'pg',
		name: 'Bugawac - Anötö ndê Yom Lêŋsêm Wakuc',
	},
	bxhwbt2015eb: {
		language: 'bxh',
		tongue: 'pg',
		name: 'Buhutu - Buka Tabuna Tefadi',
	},
	bxh2024eb: { language: 'bxh', tongue: 'pg', name: 'Buhutu - Buhutu Matiu' },
	buk2000eb: {
		language: 'buk',
		tongue: 'pg',
		name: 'Bukawa - Anötö ndê Yom Lêŋsêm Wakuc',
	},
	apeB2013eb: {
		language: 'apeB',
		tongue: 'pg',
		name: 'Bukiyip - God Ananin Balan',
	},
	apec2003eb: {
		language: 'apec',
		tongue: 'pg',
		name: 'Coastal Arapesh (Bukiyip) - IRUHIN ANANIN BARAEN',
	},
	bdd1991eb: {
		language: 'bdd',
		tongue: 'pg',
		name: 'Bunama - LOINA HAUHAUNA',
	},
	tte2003eb: {
		language: 'tte',
		tongue: 'pg',
		name: 'Tubetube (Bwanabwana) - Buki Tabu Waluwaluna',
	},
	tteo2019eb: {
		language: 'tteo',
		tongue: 'pg',
		name: 'Tubetube (Bwanabwana) - Buki Tabu Beyabeyana',
	},
	cjv1992eb: {
		language: 'cjv',
		tongue: 'pg',
		name: 'Chuave - YAI GUMAN GUNOM KAM',
	},
	mps2001eb: {
		language: 'mps',
		tongue: 'pg',
		name: 'Dadibi - Godigo dwagi yai po buku',
	},
	dgz2004eb: {
		language: 'dgz',
		tongue: 'pg',
		name: 'Daga - Daga New Testament',
	},
	aso1989eb: {
		language: 'aso',
		tongue: 'pg',
		name: "Dano - MONO' GODOLO GOSOHO'",
	},
	dww2002eb: {
		language: 'dww',
		tongue: 'pg',
		name: 'Dawawa - Vari Verenama',
	},
	ded2005eb: {
		language: 'ded',
		tongue: 'pg',
		name: 'Dedua - Yoac kekehagocac Dzadzahac gboria nga Mitiyegec',
	},
	dob1985eb: {
		language: 'dob',
		tongue: 'pg',
		name: 'Dobu - Loina Tabu Auwauna',
	},
	kqc2013eb: {
		language: 'kqc',
		tongue: 'pg',
		name: 'Doromu-Koki - Sei di Uka Ago Ruaka',
	},
	kjs2004eb: {
		language: 'kjs',
		tongue: 'pg',
		name: 'East Kewa - Gotena Epe Agale',
	},
	etr2012eb: { language: 'etr', tongue: 'pg', name: 'Edolo - Edolo Bible' },
	enq2014eb: {
		language: 'enq',
		tongue: 'pg',
		name: 'Enga - Enga New Testament (2023 Edition)',
	},
	mcq1999eb: {
		language: 'mcq',
		tongue: 'pg',
		name: "Managalasi (Ese) - Godoni Vu'a Maiu'ina",
	},
	nou1987eb: {
		language: 'nou',
		tongue: 'pg',
		name: 'Ewage-Notu - BINGA EWAMEI IESU KERISO DA JAWO DA',
	},
	fai1995eb: {
		language: 'fai',
		tongue: 'pg',
		name: 'Faiwol - GOT WENG ABEM Alokso Abino Kalin',
	},
	bjp2012eb: {
		language: 'bjp',
		tongue: 'pg',
		name: 'Fanamaket - Fanamaket Baibel',
	},
	faa2011eb: {
		language: 'faa',
		tongue: 'pg',
		name: 'Fasu - Kotimo Kawe Someaka Masane Oyapo',
	},
	aojF1998eb: {
		language: 'filifita',
		tongue: 'pg',
		name: 'Filifita (dialect of Mufian) - BASEF BUꞋWAMI GODI',
	},
	fag2024eb: {
		language: 'fag',
		tongue: 'pg',
		name: 'Finogen - Ibot Tenen Man',
	},
	ppo2005eb: {
		language: 'ppo',
		tongue: 'pg',
		name: 'Folopa - Yesu Kerisoné So Whi̧ Tao Sere Kisi Fo Wisi',
	},
	for1974eb: {
		language: 'for',
		tongue: 'pg',
		name: 'Fore - Fore New Testament',
	},
	pwg2009eb: {
		language: 'pwg',
		tongue: 'pg',
		name: 'Gapapaiwa - Gapapaiwa New Testament',
	},
	bmk2010eb: { language: 'bmk', tongue: 'pg', name: 'Ghayavi - Ghayavi Mak' },
	bbr1994eb: {
		language: 'bbr',
		tongue: 'pg',
		name: 'Girawa - Anut nukan Ämän Eposek',
	},
	bbr2013eb: {
		language: 'bbr',
		tongue: 'pg',
		name: 'Girawa - Anut nukan Ämän Eposek',
	},
	tof2019eb: { language: 'tof', tongue: 'pg', name: 'Gizrra - Godón Buk' },
	gvf1980eb: {
		language: 'gvf',
		tongue: 'pg',
		name: 'Golin - Golin New Testament',
	},
	ghs1975eb: {
		language: 'ghs',
		tongue: 'pg',
		name: 'Guhu-Samane - PORO TONGO USAQE',
	},
	gvs2019eb: {
		language: 'gvs',
		tongue: 'pg',
		name: 'Gumawana - Buki Kimaasabaina',
	},
	dah2000eb: {
		language: 'dah',
		tongue: 'pg',
		name: 'Gwahatike - Al Kuruŋyen Mere Igiŋ',
	},
	hla2020eb: {
		language: 'hla',
		tongue: 'pg',
		name: 'Halia - U BULUNGANA U NIGA',
	},
	wos1997eb: {
		language: 'wos',
		tongue: 'pg',
		name: 'Hanga Hundi - Godna Hundi',
	},
	tmd2010eb: { language: 'tmd', tongue: 'pg', name: 'Haruai - MÖNÖ KÖMÖ' },
	hui2002eb: {
		language: 'hui',
		tongue: 'pg',
		name: 'Huli - Habo nalolene bi gahenge lo winigo ogo',
	},
	yml1988eb: {
		language: 'yml',
		tongue: 'pg',
		name: "Iamalele - YAUBADA YANA VONA'AWAUFAUFA 'IVAUNA",
	},
	ian1975eb: {
		language: 'ian',
		tongue: 'pg',
		name: 'Ngepma Kwundi (Iatmul) - GOD WAA NYAAGƗT',
	},
	viv2003eb: {
		language: 'viv',
		tongue: 'pg',
		name: 'Iduna - YAUBADA BONANA VEYAO IVAGUNA Bona Iduna',
	},
	imo1997eb: {
		language: 'imo',
		tongue: 'pg',
		name: 'Imbo Ungu - UNGU TUKUMEMU',
	},
	ino1992eb: {
		language: 'ino',
		tongue: 'pg',
		name: "Inoke-Yate - Anumaya Koti'a Saufa Lami'nea Ke",
	},
	ino2013eb: {
		language: 'ino',
		tongue: 'pg',
		name: 'Inoke-Yate - Anumaya Kotiꞌa Saufa Lamiꞌnea Ke',
	},
	ipi2008eb: {
		language: 'ipi',
		tongue: 'pg',
		name: 'Ipili - IPILI NUTESAMENE',
	},
	kbm1984eb: {
		language: 'kbm',
		tongue: 'pg',
		name: 'Iwal - YISU KILISI ANE BINGE VIE GIENGK IWAL AVOS',
	},
	iws1989eb: {
		language: 'iws',
		tongue: 'pg',
		name: 'Sepik Iwam - Yai Wɨn Kɨbiya',
	},
	nca2009eb: {
		language: 'nca',
		tongue: 'pg',
		name: 'Iyo - Iyo New Testament',
	},
	kqf2016eb: {
		language: 'kqf',
		tongue: 'pg',
		name: 'Kakabai - Giu visuvisuna',
	},
	kmhM2008eb: {
		language: 'kmhn',
		tongue: 'pg',
		name: 'Minimib (dialect of Kalam) - MƗNƗM KOMIŊ',
	},
	kmh1992eb: {
		language: 'kmh',
		tongue: 'pg',
		name: 'Kalam - Kalam Baybol Buk Gor minim nuk kisin angayak',
	},
	bco1998eb: {
		language: 'bco',
		tongue: 'pg',
		name: 'Kaluli - Godeya꞉ To Nafayo꞉ We',
	},
	kbq2014eb: {
		language: 'kbq',
		tongue: 'pg',
		name: 'Kamano-Kafe - Anumzamofo Ruotage Avontafere',
	},
	kms1998eb: {
		language: 'kms',
		tongue: 'pg',
		name: 'Kamasau - Yumbui Ningg Wand Yuwon Ye',
	},
	xla2005eb: { language: 'xla', tongue: 'pg', name: 'Kamula - Ka꞉dle Yu' },
	soq1996eb: {
		language: 'soq',
		tongue: 'pg',
		name: 'Kanasi - Ina Sanaa Gagalowa',
	},
	kqw2012eb: {
		language: 'kqw',
		tongue: 'pg',
		name: 'Kandas - Buk Baibel long tokples Kandas',
	},
	gam2014eb: {
		language: 'gam',
		tongue: 'pg',
		name: 'Kandawo - Jisas Kandjiyebe Wopake',
	},
	wat2016eb: {
		language: 'wat',
		tongue: 'pg',
		name: 'Kaninuwa - Buk Baibel long Kaninuwa',
	},
	kmu2002eb: {
		language: 'kmu',
		tongue: 'pg',
		name: "Kanite - Anumayamo'a Haegafa Alino Hagelafilatenea Kea",
	},
	leu1997eb: {
		language: 'leu',
		tongue: 'pg',
		name: 'Kara - Kara New Testament',
	},
	yuj1994eb: {
		language: 'yuj',
		tongue: 'pg',
		name: 'Karkar-Yuri - Kwaromp Kwapwe Kare Kar',
	},
	khs2016eb: {
		language: 'khs',
		tongue: 'pg',
		name: 'Kasua - Kokolo Kao Tesene Solo',
	},
	kmg1978eb: { language: 'kmg', tongue: 'pg', name: 'Kâte - Kâte Bible' },
	ksd1983eb: {
		language: 'ksd',
		tongue: 'pg',
		name: 'Kuanua or Tinata Tuna or Tolai - A BUK TABU A MAULANA KUNUBU ma A KALAMANA KUNUBU',
	},
	khz2005eb: {
		language: 'khz',
		tongue: 'pg',
		name: 'Kalo (Keapara) - VEKAPAWAI VALIGUNA',
	},
	bmh2005eb: {
		language: 'bmh',
		tongue: 'pg',
		name: 'Kein - Uwait nugau Ze Naliu',
	},
	kyg2001eb: {
		language: 'kyg',
		tongue: 'pg',
		name: 'Keyagana - Saufa Kotalake Gemae',
	},
	kij1984eb: {
		language: 'kij',
		tongue: 'pg',
		name: 'Kiriwina (Kilivila) - Buki Pilabumaboma Kabutubogwa Deli Kabutuvau',
	},
	geb2001eb: {
		language: 'geb',
		tongue: 'pg',
		name: 'Kire - Fhe Bakɨmen Kaman Kameŋ',
	},
	kiw2022eb: {
		language: 'kiw',
		tongue: 'pg',
		name: 'Kope (Kiwai, Northeast) - Pai meai Ruka-ro iꞌati emerai-ka',
	},
	kpw2005eb: { language: 'kpw', tongue: 'pg', name: 'Kobon - Manö Kamɨŋ' },
	kpx1981eb: {
		language: 'kpx',
		tongue: 'pg',
		name: 'Mountain Koiali - Buka Tumute',
	},
	kpf1980eb: {
		language: 'kpf',
		tongue: 'pg',
		name: 'Komba - SIŊGI ÂLIP EKAP',
	},
	xbiW2000eb: {
		language: 'xbiW',
		tongue: 'pg',
		name: 'Kombio Wampukuamp - Kombio Wampukuamp Bible Portions',
	},
	xbiY2002eb: {
		language: 'xbiY',
		tongue: 'pg',
		name: 'Kombio Yanimoi - Kombio Yanimoi Bible Portions',
	},
	kxw2014eb: {
		language: 'kxw',
		tongue: 'pg',
		name: 'Konai - Godiha̱ Ta̱ Bolofe̱i̱',
	},
	kpr1984eb: {
		language: 'kpr',
		tongue: 'pg',
		name: 'Korafe-Yegha - God Da Geka Seka',
	},
	kze1980eb: {
		language: 'kze',
		tongue: 'pg',
		name: 'Kosena - aúná-aimba simái tarúmakain-kwasai',
	},
	kgf2012eb: {
		language: 'kgf',
		tongue: 'pg',
		name: 'Mongi (Kube) - SISIPAC AC ɊELIA',
	},
	kue2008eb: {
		language: 'kue',
		tongue: 'pg',
		name: 'Kuman - YESUS KAMO WAKAI',
	},
	kvg2015eb: {
		language: 'kvg',
		tongue: 'pg',
		name: 'Kuni-Boazi - Mbumbukiam-qa Manqat Mbomambaqape',
	},
	kup2002eb: {
		language: 'kup',
		tongue: 'pg',
		name: 'Kunimaipa - Baiñetinavoz Tep Tokatit',
	},
	kto2001eb: {
		language: 'kto',
		tongue: 'pg',
		name: 'Kuot - Bais Ula Mumuru Aime Iesu',
	},
	ktm2011eb: { language: 'ktm', tongue: 'pg', name: 'Kurti - Kurti Baibel' },
	kwj1992eb: {
		language: 'kwj',
		tongue: 'pg',
		name: 'Kwanga - Kwanga New Testament',
	},
	kmo1974eb: {
		language: 'kmo',
		tongue: 'pg',
		name: 'Washkuk (Kwoma) - GOD RIITI MAJI KEPI',
	},
	kyc1987eb: {
		language: 'kyc',
		tongue: 'pg',
		name: 'Kyaka Eŋa - BUKU BAEPOLE',
	},
	kql1992eb: {
		language: 'kql',
		tongue: 'pg',
		name: 'Kyenele - Mak Kiañiŋ Balaŋ',
	},
	lbb2012eb: {
		language: 'lbb',
		tongue: 'pg',
		name: 'Label - Label Buk Baibel',
	},
	nrz2024eb: {
		language: 'nrz',
		tongue: 'pg',
		name: "Nara (Lala) - Luva'ana'i Namana Makamakana",
	},
	lbv2024eb: {
		language: 'lbv',
		tongue: 'pg',
		name: 'Nomad (Lavatbura-Lamusong) - Nomad New Testament Portions',
	},
	uvl2009eb: {
		language: 'uvl',
		tongue: 'pg',
		name: 'Lote - Tomunga Hel Heueu Ngana',
	},
	mmx2011eb: {
		language: 'mmx',
		tongue: 'pg',
		name: 'Madak - Lenavolo Lovoang Kaala Maxat La Sam',
	},
	mzz2010eb: {
		language: 'mzz',
		tongue: 'pg',
		name: 'Maiadomu - Maiadomu Malika',
	},
	mti2011eb: { language: 'mti', tongue: 'pg', name: 'Maiwa - GAE MATAIWA' },
	hot2010eb: {
		language: 'hot',
		tongue: 'pg',
		name: 'Hotê-Malê - Wapômbêŋ Anêŋ Abô Matheŋ',
	},
	mva1996eb: {
		language: 'mva',
		tongue: 'pg',
		name: 'Manam - Testamen Oauoau',
	},
	mle2001eb: {
		language: 'mle',
		tongue: 'pg',
		name: 'Manambu - Nupela Testamen long Manambu',
	},
	tbf2008eb: {
		language: 'tbf',
		tongue: 'pg',
		name: 'Mandara - Mi Namani Tino',
	},
	mbh1999eb: {
		language: 'mbh',
		tongue: 'pg',
		name: 'Mangseng - God Ile Riong Kinnga Ponganga nge Mangsengre Okei',
	},
	mlh2008eb: {
		language: 'mlh',
		tongue: 'pg',
		name: 'Mape - Maŋkekerisiere Biŋe Quraŋ Jojofo Gariine',
	},
	dad2011eb: {
		language: 'dad',
		tongue: 'pg',
		name: 'Marik - Mata Ifenẽya Nẽ Od',
	},
	met2018eb: { language: 'met', tongue: 'pg', name: 'Mato - Urana Xuana' },
	mhl1998eb: {
		language: 'mhl',
		tongue: 'pg',
		name: 'Mauwake - YEESUS OPOR ELIWA',
	},
	mna1996eb: {
		language: 'mna',
		tongue: 'pg',
		name: 'Mbula - Anutu Sua Kini Potomaxana',
	},
	mek1998eb: {
		language: 'mek',
		tongue: 'pg',
		name: 'Mekeo - Mauni Mamaga Iifaga',
	},
	tpiP2008eb: {
		language: 'tpi',
		tongue: 'pg',
		name: 'Tok Pisin (Melanesian Pidgin) - Buk Baibel long Tok Pisin',
	},
	tpi2008eb: {
		language: 'tpi',
		tongue: 'pg',
		name: 'Tok Pisin (Melanesian Pidgin) - Buk Baibel long Tok Pisin',
	},
	med1995eb: {
		language: 'med',
		tongue: 'pg',
		name: 'Melpa - Got Nga Nambuha Ik Kai',
	},
	sim2005eb: {
		language: 'sim',
		tongue: 'pg',
		name: 'Mende - Mashi Avui Wasilakahi',
	},
	mee2003eb: {
		language: 'mee',
		tongue: 'pg',
		name: 'Mengen - Piunga Ba Bonga A Pau',
	},
	mcr2017eb: {
		language: 'mcr',
		tongue: 'pg',
		name: 'Menya - Goti Hanjuwä Iqueqä Kukŋui',
	},
	mxm2023eb: {
		language: 'mxm',
		tongue: 'pg',
		name: 'Meramera - Laulau na Vinalu mine Salemo',
	},
	mpt1986eb: {
		language: 'mpt',
		tongue: 'pg',
		name: 'Mian Weng - Gode Dowan Wengobe',
	},
	mpp2013eb: {
		language: 'mpp',
		tongue: 'pg',
		name: 'Migabac - Migabac Bible Portions',
	},
	mvn2008eb: {
		language: 'mvn',
		tongue: 'pg',
		name: 'Minaveha - Awaeha Vovouna Minaveha Movia',
	},
	aai2009eb: {
		language: 'aai',
		tongue: 'pg',
		name: 'Miniafia - TUR GEWASIN O BAIBASIT BOUBUN',
	},
	mpx2011eb: {
		language: 'mpx',
		tongue: 'pg',
		name: 'Misima-Paneati - Bateli Vavaluna',
	},
	mox2010eb: {
		language: 'mox',
		tongue: 'pg',
		name: 'Molima - Molima New Testament',
	},
	meu1973eb: {
		language: 'meu',
		tongue: 'pg',
		name: 'Motu - Buk Baibel long tokples Motu',
	},
	hmo1994eb: {
		language: 'hmo',
		tongue: 'pg',
		name: 'Hiri Motu - Buka Helaga',
	},
	aojM1998eb: {
		language: 'aoj',
		tongue: 'pg',
		name: 'Mufian - Basef Buꞌwafi Godi',
	},
	kqa2017eb: {
		language: 'kqa',
		tongue: 'pg',
		name: 'Mum - Mum Language NT Portions',
	},
	emi2013eb: {
		language: 'emi',
		tongue: 'pg',
		name: 'Mussau-Emira - Mussau-Emira Bible',
	},
	tucO2011eb: {
		language: 'tucO',
		tongue: 'pg',
		name: 'Saveeng (Mutu) - Maaron Saveeŋ Toni Patabuaŋ',
	},
	tucT2011eb: {
		language: 'tucO',
		tongue: 'pg',
		name: 'Saveeng (Mutu) - Maaron Saveeŋ Tooni Patabuyaaŋ',
	},
	myw1993eb: {
		language: 'myw',
		tongue: 'pg',
		name: 'Muyuw - KALEIWAG KWEIVAW',
	},
	nas1994eb: {
		language: 'nas',
		tongue: 'pg',
		name: "Naasioi - Kara Naroong-anta Nerakung Kongarana'",
	},
	naf1988eb: {
		language: 'naf',
		tongue: 'pg',
		name: 'Nabak - Kawawaŋgalen Tâtâ Alakŋaŋ',
	},
	nak1983eb: {
		language: 'nak',
		tongue: 'pg',
		name: 'Nakanai - Nakanai New Testament',
	},
	nss2012eb: { language: 'nss', tongue: 'pg', name: 'Nali - Nongan Hiyan' },
	nal2023eb: {
		language: 'nal',
		tongue: 'pg',
		name: 'Nalik - A Dorang Daxa Zin Nakmai',
	},
	nvm2004eb: {
		language: 'nvm',
		tongue: 'pg',
		name: 'Namiai (Barai) - Godon Vuak Ma Ijin',
	},
	nsn2011eb: {
		language: 'nsn',
		tongue: 'pg',
		name: 'Nehan - Nehan New Testament',
	},
	nif2011eb: { language: 'nif', tongue: 'pg', name: 'Nek - Nek Bible' },
	anh2003eb: {
		language: 'anh',
		tongue: 'pg',
		name: 'Nend - MAK Yakŋ Ohɨrand Ya Imbɨr Makɨv Mpamar',
	},
	nii1980eb: {
		language: 'nii',
		tongue: 'pg',
		name: 'Nii - Gos Nge Ek Ka Ei Sinim Kin Ngołum',
	},
	nmws2016eb: {
		language: 'nmws',
		tongue: 'pg',
		name: 'Saisai (Nimoa) - Metiu ge Efeso',
	},
	gaw1990eb: {
		language: 'gaw',
		tongue: 'pg',
		name: 'Nobonob - KAYAKNU NAI Tituanak Bau',
	},
	klt2013eb: {
		language: 'klt',
		tongue: 'pg',
		name: 'Nukna - Miti yan Papia',
	},
	nuq2020eb: { language: 'nuq', tongue: 'pg', name: 'Nukumanu - Nukumanu' },
	nop2005eb: {
		language: 'nop',
		tongue: 'pg',
		name: "Numaŋgaŋ (Numanggang) - Bepaŋ'Walaŋ Folofolok Kobuli",
	},
	lid2001eb: {
		language: 'lid',
		tongue: 'pg',
		name: 'Nyindrou - Sahou ta Kindrei',
	},
	kkc2006eb: {
		language: 'kkc',
		tongue: 'pg',
		name: 'Odoodee - Godeeyo To Tekepo',
	},
	eri2013eb: {
		language: 'eri',
		tongue: 'pg',
		name: 'Ogea - ITOU NOMO HILOU BEELE',
	},
	opm1992eb: {
		language: 'opm',
		tongue: 'pg',
		name: 'Oksapmin - Got orhe meng brak ban',
	},
	ong1997eb: {
		language: 'ong',
		tongue: 'pg',
		name: 'Olo - Il Teingipe Ma Ili Topwepe Lapiri Lirouku',
	},
	aom1991eb: {
		language: 'aom',
		tongue: 'pg',
		name: "Ömie - God-are Jögoru I'oho",
	},
	omwV2012eb: {
		language: 'omwV',
		tongue: 'pg',
		name: 'Veqaura (Omwunra-Toqura or South Tairora) - Veqaura Baibel',
	},
	ons1991eb: {
		language: 'ons',
		tongue: 'pg',
		name: 'Ono - Waom Yesu Wane Sigi Maep Don',
	},
	okvh1988eb: {
		language: 'okvh',
		tongue: 'pg',
		name: 'Orokaiva Ehija - God Ta Duru Javotoho',
	},
	okv1988eb: {
		language: 'okv',
		tongue: 'pg',
		name: 'Orokaiva - God Ta Duru Javotoho',
	},
	ptp1986eb: { language: 'ptp', tongue: 'pg', name: 'Patep - Yesu Xolac' },
	gfkh2016eb: {
		language: 'gfkh',
		tongue: 'pg',
		name: 'Hinsaal (Patpatar) - No Tahut na Hinhinawas',
	},
	gfk1997eb: {
		language: 'gfk',
		tongue: 'pg',
		name: 'Patpatar - No Sigar Kunubus tika ma Ira Ninge na Lotu',
	},
	gfks2014eb: {
		language: 'gfks',
		tongue: 'pg',
		name: 'Sokarek (Patpatar) - No Tahut na Hininaawas',
	},
	ata2009eb: {
		language: 'ata',
		tongue: 'pg',
		name: 'Pele-Ata - Vaikala Noxou Lataua',
	},
	byx1996eb: {
		language: 'byx',
		tongue: 'pg',
		name: 'Qaqet - A SLURLKA AA LANGINKA AMA IAMESKA',
	},
	rai2006eb: {
		language: 'rai',
		tongue: 'pg',
		name: 'Ramoaaina - BUK TAABU MATAKIN',
	},
	rwoK2001eb: {
		language: 'karo',
		tongue: 'pg',
		name: 'Karo (Rawa) - Anutlo Sumange Mande Keda',
	},
	rwoRawaeb: {
		language: 'rawa',
		tongue: 'pg',
		name: 'Rawa - ANUTRO MANDE KETA',
	},
	roo1982eb: {
		language: 'roo',
		tongue: 'pg',
		name: 'Rotokas - AIREPA VAE REO OVOI',
	},
	apz1988eb: {
		language: 'apz',
		tongue: 'pg',
		name: 'Ampeeli-Wojokeso (Safeyoka) - Mpohwoe Hungkuno Songofoho',
	},
	sbe2013eb: {
		language: 'sbe',
		tongue: 'pg',
		name: 'Saliba - Yaubada wasana: Buka Hauhauna tupwana',
	},
	sll1978eb: {
		language: 'sll',
		tongue: 'pg',
		name: 'Salt-Yui - Salt-Yui New Testament',
	},
	snx2020eb: {
		language: 'snx',
		tongue: 'pg',
		name: 'Songumsam (Sam) - Xotei ido Sam Mak ana Inggrengalox',
	},
	sny2004eb: {
		language: 'sny',
		tongue: 'pg',
		name: 'Saniyo-Hiyewe - Owane Sitewi lo Peri Teꞌe Naneiyei Heꞌi',
	},
	sps2001eb: {
		language: 'sps',
		tongue: 'pg',
		name: 'Saposa - U VURUNGAN ROF FOUN TEN GOV NANE JISAS KRAIS',
	},
	ssg2012eb: { language: 'ssg', tongue: 'pg', name: 'Seimat - KAKAI HAEU' },
	spl1986eb: {
		language: 'spl',
		tongue: 'pg',
		name: 'Selepet - Yeshuât Den Pat Âlepŋe',
	},
	ssx1991eb: { language: 'ssx', tongue: 'pg', name: 'Sembeleke - Sembeleke' },
	snpK1991eb: {
		language: 'snp',
		tongue: 'pg',
		name: 'Siane - Gotiki olu kutifi ledami ka kofawa',
	},
	snpL1997eb: {
		language: 'lambau',
		tongue: 'pg',
		name: 'Siane-Lambau - Goti Ukuwala Hala',
	},
	snc1995eb: {
		language: 'snc',
		tongue: 'pg',
		name: 'Sinaugoro - GINITAḠO VARIḠUNA',
	},
	xsi1995eb: {
		language: 'xsi',
		tongue: 'pg',
		name: 'Sio - MARO KINDENI KAWA ŊGUA',
	},
	ssd1999eb: {
		language: 'ssd',
		tongue: 'pg',
		name: 'Siroi - KUATE TUKU PASA',
	},
	bmu2002eb: {
		language: 'bmu',
		tongue: 'pg',
		name: 'Burum-Mindik or Somba-Siawari - Burum-Mindik Bible',
	},
	urw2015eb: {
		language: 'urw',
		tongue: 'pg',
		name: 'Sob Dora (Sop) - Profet Yonab Budi / Dora Nama Lukde Feiaga',
	},
	omwA2012eb: {
		language: 'omwA',
		tongue: 'pg',
		name: 'Omwunra Toqura (South Tairora) - Aatasara Ioni + Maaki',
	},
	swp1998eb: {
		language: 'swp',
		tongue: 'pg',
		name: 'Suau - RIBA HARIHARIUNA',
	},
	tgo2014eb: {
		language: 'tgo',
		tongue: 'pg',
		name: 'Sudest - Toto Thovuye Loi Ghalɨŋae',
	},
	sue2011eb: {
		language: 'sue',
		tongue: 'pg',
		name: 'Suena - TUA YESU KRISTORA OZIGA EWANANA',
	},
	sua1997eb: {
		language: 'sua',
		tongue: 'pg',
		name: 'Sulka - E Nut Ka Meer Mang Ka Mokpom To A Gunngar',
	},
	sgz2009eb: {
		language: 'sgz',
		tongue: 'pg',
		name: 'Sursurunga - Hutngin kamkabat si Káláu',
	},
	knvA2006eb: {
		language: 'knv',
		tongue: 'pg',
		name: 'Tabo (Aramia) - GODOKONO HIDO TABO',
	},
	knvF2006eb: {
		language: 'knv',
		tongue: 'pg',
		name: 'Tabo (Fly River) - GODOKONO WADE TABO',
	},
	taw2013eb: {
		language: 'taw',
		tongue: 'pg',
		name: 'Tay (Tai) - Jisas Klays Takaw Teplep Ne',
	},
	tbgA1986eb: {
		language: 'a',
		tongue: 'tbg',
		name: 'a - pg - Arau (North Tairora) - Isuva Soqe Uva Kuama',
	},
	tbgN2009eb: { language: 'tbg', tongue: 'pg', name: 'Tairora - Kotira Uva' },
	omw2000eb: {
		language: 'omw',
		tongue: 'pg',
		name: 'Omwunra-Toqura (South Tairora) - QARAAKYA QUA TIMWATORA',
	},
	tbc1999eb: {
		language: 'tbc',
		tongue: 'pg',
		name: 'Takia - Anut san bilaluŋ foun',
	},
	nho2009eb: {
		language: 'nho',
		tongue: 'pg',
		name: 'Takuu - Na Taratara TeAtua i naa taratara Takuu',
	},
	tpa2010eb: {
		language: 'tpa',
		tongue: 'pg',
		name: 'Taupota - Taupota Mark',
	},
	tbo2014eb: {
		language: 'tbo',
		tongue: 'pg',
		name: 'Tawala - YAUBADA A WOGATALA WOUNA',
	},
	tlf1988eb: {
		language: 'tlf',
		tongue: 'pg',
		name: 'Telefol Weng - GOD IMI WENG',
	},
	tif1998eb: {
		language: 'tif',
		tongue: 'pg',
		name: 'Tifal - God Ami Alokso Weng',
	},
	tim1987eb: {
		language: 'tim',
		tongue: 'pg',
		name: 'Timbe - Yusugât Pat Âlep Den',
	},
	tpz2004eb: {
		language: 'tpz',
		tongue: 'pg',
		name: 'Vasui (Tinputz) - SOE A TOꞌTOꞌ',
	},
	iou2011eb: {
		language: 'iou',
		tongue: 'pg',
		name: 'Tuma-Irumu - Anutu Täŋo Man',
	},
	lcm2011eb: {
		language: 'lcm',
		tongue: 'pg',
		name: 'Tungag - AKUS RO NA PALATUNG TANGINANG ANI IESU KARISTO',
	},
	ksj2017eb: { language: 'ksj', tongue: 'pg', name: 'Uare - Uare Bible' },
	ubr2011eb: {
		language: 'ubr',
		tongue: 'pg',
		name: 'Ubir - God An Dura Bobaibasit Boboun',
	},
	gdn1999eb: {
		language: 'gdn',
		tongue: 'pg',
		name: 'Umanakaina - IYA YONAI',
	},
	ubuA1998eb: {
		language: 'ubu',
		tongue: 'pg',
		name: 'Umbu-Ungu Andelale - PULU YEMONGA UNGU KONDEMO',
	},
	ubuK1995eb: {
		language: 'ubu',
		tongue: 'pg',
		name: 'Umbu-Ungu Kala - PULU YEMONGA UNGU KONDEMO',
	},
	ubuN1995eb: {
		language: 'ubu',
		tongue: 'pg',
		name: 'Umbu-Ungu No Penge - PULU YEMONGA UNGU KONDEMO',
	},
	uro2019eb: {
		language: 'uro',
		tongue: 'pg',
		name: 'Ura - Ama Iaräs Na Ngät Ama Rharesbane',
	},
	urt2016eb: {
		language: 'urt',
		tongue: 'pg',
		name: 'Urat - Wusyep Bwore tikin Got',
	},
	uvh2016eb: {
		language: 'uvh',
		tongue: 'pg',
		name: "Urii - ANUTUNING MIDI TOTANGAKA INGA'NI",
	},
	uri2016eb: {
		language: 'uri',
		tongue: 'pg',
		name: 'Urim - Wurkapm a Maur Wailen',
	},
	wnu2001eb: { language: 'wnu', tongue: 'pg', name: 'Usan - Qenu Qob Uber' },
	usa1980eb: {
		language: 'usa',
		tongue: 'pg',
		name: 'Usarufa - aúgen-anona-anon-aimma',
	},
	wiv2019eb: {
		language: 'wiv',
		tongue: 'pg',
		name: 'Pole Vitu - Kalohua Kemi ke Iesus na Polea Vitu',
	},
	waj1975eb: {
		language: 'waj',
		tongue: 'pg',
		name: 'Waffa - Karaasa Yeena Rau Kioo Kuaivovee',
	},
	fad2016eb: { language: 'fad', tongue: 'pg', name: 'Wagi - Lukri Né Kena' },
	rro2002eb: {
		language: 'rro',
		tongue: 'pg',
		name: "Waima - Abi'uai Apa'uana Mahamahana",
	},
	wnc2001eb: {
		language: 'wnc',
		tongue: 'pg',
		name: 'Wantoat - Anututane Wam Kwikwiu Kayuk Kaknga Jesu Kraisda Takepbut Taknga Anin gatu Sam Kuupbam Lotutane Kap Taknga',
	},
	wrs2002eb: {
		language: 'wrs',
		tongue: 'pg',
		name: 'Walsa/Waris - Sesoana Besal Nemelmoa Walsana Moana',
	},
	wsk2014eb: { language: 'wsk', tongue: 'pg', name: 'Waskia - KAEM KO DEN' },
	wedW2010eb: { language: 'wed', tongue: 'pg', name: 'Wedau - Wedau Mark' },
	wedT2010eb: {
		language: 'wed',
		tongue: 'pg',
		name: 'Topura (Wedau) - Topura (Wedau) Mark',
	},
	wer1984eb: { language: 'wer', tongue: 'pg', name: 'Weri - NGÖNËN PEPEWER' },
	kew2003eb: {
		language: 'kew',
		tongue: 'pg',
		name: 'West Kewa - Gotena Epe Agaa',
	},
	gdr2001eb: {
		language: 'gdr',
		tongue: 'pg',
		name: 'Wipi - Wipi Yɨt God ma Yɨna Sisɨl Yɨna Peba',
	},
	wiu1992eb: {
		language: 'wiu',
		tongue: 'pg',
		name: 'Witu - Weneya Totono Keraisu Yesunomo',
	},
	abtW1996eb: {
		language: 'abt',
		tongue: 'pg',
		name: 'Ambulas (Wosera) - Gotna Kundi',
	},
	wuv2004eb: {
		language: 'wuv',
		tongue: 'pg',
		name: "Wuvalu-Aua - Wuvulu Manufau Fi'ugaia",
	},
	jae1980eb: { language: 'jae', tongue: 'pg', name: 'Jabem - BIBOLO DABUŊ' },
	nce2022eb: { language: 'nce', tongue: 'pg', name: 'Yalë - Ëhwati Gali' },
	yrb1987eb: {
		language: 'yrb',
		tongue: 'pg',
		name: 'Yareba - Yareba Nupela Testamen',
	},
	yuw1997eb: { language: 'yuw', tongue: 'pg', name: 'Yau - Fat Mata ogepma' },
	yby2011eb: {
		language: 'yby',
		tongue: 'pg',
		name: 'Yaweyuha - Yaweyuha New Testament',
	},
	yle1998eb: {
		language: 'yle',
		tongue: 'pg',
		name: 'Yele Rossel - NMÎ MÎ U KÓPU DYUU',
	},
	yssYAM2004eb: {
		language: 'yss',
		tongue: 'pg',
		name: 'Yessan-Mayo (Yamano) - God Reri Teiktem Tuma Ager',
	},
	yssYAW1996eb: {
		language: 'yss',
		tongue: 'pg',
		name: 'Yawu (Yessan-Mayo) - GOD ETER AGERKE NAMDERASEM TUMA YENBO',
	},
	byrW2011eb: {
		language: 'byr',
		tongue: 'pg',
		name: 'Yipma/Wagamwa - Selected Scriptures in Yipma/Wagamwa',
	},
	yon2003eb: {
		language: 'yon',
		tongue: 'pg',
		name: 'Yongkom - Buk Baibel long tokples Yongkom',
	},
	yut2010eb: { language: 'yut', tongue: 'pg', name: 'Yopno - PIŊKOP GEN' },
	zia1982eb: {
		language: 'zia',
		tongue: 'pg',
		name: 'Zia - TUWA YESU KRISTORA BOWI IWAING',
	},
	kud2008eb: {
		language: 'kud',
		tongue: 'pg',
		name: 'Auhelawa - YAUBADA YANA WALO YEMIDI VAUVAUNA',
	},
	kud2014eb: {
		language: 'kud',
		tongue: 'pg',
		name: 'Auhelawa - Yaubada Yana Walo Yemidi Vauvauna',
	},
	mca2013eb: {
		language: 'mca',
		tongue: 'py',
		name: "Maka - INTATA ȽE'ȽIJEI",
	},
	acuNT2008eb: {
		language: 'acu',
		tongue: 'pe',
		name: 'Achuar-shiwiar - Achuar Peru OT Por and NT 2019 4th edition',
	},
	agr2020eb: {
		language: 'agr',
		tongue: 'pe',
		name: 'Aguaruna - Awajún [Aguaruna]',
	},
	cpc2000eb: {
		language: 'cpc',
		tongue: 'pe',
		name: 'Ajyíninka Apurucayali - KAMIITHARI ÑAANTSI',
	},
	amrNT2008eb: {
		language: 'amr',
		tongue: 'pe',
		name: 'Amarakaeri - Jesucristo oy oa’pak: Kenda Jesucristoa; monigka’uyatenok; Diostaj mo’manopo’yarea’ika’ne',
	},
	arl2008eb: {
		language: 'arl',
		tongue: 'pe',
		name: 'Arabela - Quiarinio pueyaso rupaa pa jiyaniijia Jesucristojiniji pueyano rupaajinia',
	},
	cni2008eb: {
		language: 'cni',
		tongue: 'pe',
		name: 'Asháninka - Irineane tasorentsi oquenquetsatacotaqueri Avincatsarite Jesoquirishito',
	},
	cjo2008eb: {
		language: 'cjo',
		tongue: 'pe',
		name: 'Ashéninka Pajonal - Iwaperite tajorentsi ikenkithatakoetziri awinkatharite Jesokirishito: owakirari inimotakiri tajorentsi',
	},
	prq2004eb: {
		language: 'prq',
		tongue: 'pe',
		name: 'Ashéninka Perené - Ashéninka Perené',
	},
	cpu2008eb: {
		language: 'cpu',
		tongue: 'pe',
		name: 'Ashéninka, Pichis - KAMEETHARI ÑAANTSI: Iñaaventaitzirira Avinkatharite Jesucristo',
	},
	cpy2008eb: {
		language: 'cpy',
		tongue: 'pe',
		name: 'Ashéninka Ucayali del Sur - Las Escrituras en Ashéninka Ucayali del Sur del Perú',
	},
	cpb2000eb: {
		language: 'cpb',
		tongue: 'pe',
		name: 'Ashéninka, Ucayali-yurúa - Kameethari Ñaantsi: ikenkitha-takoitziri awinkatharite Jesucristo; Owakerari aapatziya-wakagaantsi',
	},
	boa2008eb: {
		language: 'boa',
		tongue: 'pe',
		name: 'Bora - Píívyéébé ihjyu: jetsocríjyodítyú cáátúnuháámɨ',
	},
	cbu2010eb: {
		language: 'cbu',
		tongue: 'pe',
		name: 'Candoshi-Shapra - Apanlli Kuku',
	},
	kaq2008eb: {
		language: 'kaq',
		tongue: 'pe',
		name: 'Capanahua - Noquen hihbaan joi',
	},
	cot2008eb: {
		language: 'cot',
		tongue: 'pe',
		name: 'Caquinte - Iroaquerari Itioncacaantaqueca Aapani Irioshi: Tsavetacoquerica Amajirote Jesoquirishito',
	},
	cbr2011eb: {
		language: 'cbr',
		tongue: 'pe',
		name: "Cashibo-Cacataibo - Nukën 'Ibu Diosan ain unikama 'inan ain bana",
	},
	cbt2011eb: {
		language: 'cbt',
		tongue: 'pe',
		name: 'Chayahuita - Yosë nanamën',
	},
	hub2010eb: {
		language: 'hub',
		tongue: 'pe',
		name: 'Huambisa - Yuusa chichame yaunchukia tura yamaram chichamjai aarmau',
	},
	huu2008eb: {
		language: 'huu',
		tongue: 'pe',
		name: 'Huitoto, Murui - Jusiñamui uai: Jusiñamui jito rafue illa rabenico',
	},
	cbs2008eb: {
		language: 'cbs',
		tongue: 'pe',
		name: 'Kashinawa - Diosun Jesúswen taexun yuba bena yiniki',
	},
	mcb2008eb: {
		language: 'mcb',
		tongue: 'pe',
		name: 'Machiguenga - Iriniane Tasorintsi',
	},
	mcfNT2008eb: {
		language: 'mcf',
		tongue: 'pe',
		name: 'Matsés - Esuquidistu Chuiquin Tantiamete',
	},
	not2008eb: {
		language: 'not',
		tongue: 'pe',
		name: 'Nomatsiguenga - Irinibare Tosorintsi Ocomantëgotëri Antigomi Jesoquirisito',
	},
	qva2017eb: {
		language: 'qva',
		tongue: 'pe',
		name: 'Quechua, Ambo-Pasco - Mushog Testamento',
	},
	qvc2008eb: {
		language: 'qvc',
		tongue: 'pe',
		name: 'Quechua, Cajamarca - Mushuq Tistamintu',
	},
	qve2013eb: {
		language: 'qve',
		tongue: 'pe',
		name: 'Quechua, Eastern Apurímac - Mosoq Testamento',
	},
	qub2011eb: {
		language: 'qub',
		tongue: 'pe',
		name: 'Huallaga Huánuco Quechua - Tayta Diosninchi Isquirbichishan',
	},
	qvh2008eb: {
		language: 'qvh',
		tongue: 'pe',
		name: 'Quechua, Huamalíes-Dos de Mayo Huánuco - Mushog Testamento',
	},
	qwh2008eb: {
		language: 'qwh',
		tongue: 'pe',
		name: 'Quechua, Huaylas Ancash - Teyta Diospa Mushoq Testamentun',
	},
	qvw2010eb: {
		language: 'qvw',
		tongue: 'pe',
		name: 'Quechua, Huaylla Wanca - Muśhü limalicuy',
	},
	quf2008eb: {
		language: 'quf',
		tongue: 'pe',
		name: 'Quechua, Lambayeque - Mushuq Testamento',
	},
	qvm2008eb: {
		language: 'qvm',
		tongue: 'pe',
		name: 'Quechua, Margos-Yarowilca-Lauricocha - Mushog Testamento',
	},
	qvo2020eb: {
		language: 'qvo',
		tongue: 'pe',
		name: 'Quechua, Napo Lowland - Quichua, Napo Bible',
	},
	qvn2008eb: {
		language: 'qvn',
		tongue: 'pe',
		name: 'Quechua, North Junín - Tayta Diospa Guepacag Testamentun',
	},
	qxn2002eb: {
		language: 'qxn',
		tongue: 'pe',
		name: 'Quechua, Northern Conchucos Ancash - Señor Jesucristopa alli willacuynin',
	},
	qxh2009eb: {
		language: 'qxh',
		tongue: 'pe',
		name: 'Quechua, Panao Huánuco - Mushug Testamento',
	},
	qvs2008eb: {
		language: 'qvs',
		tongue: 'pe',
		name: 'Quechua, San Martín - Tata Diospa Mushuk Rimanan',
	},
	qxo2002eb: {
		language: 'qxo',
		tongue: 'pe',
		name: 'Quechua, Southern Conchucos Ancash - Mushog Testamento',
	},
	qup2008eb: {
		language: 'qup',
		tongue: 'pe',
		name: 'Quechua, Southern Pastaza - Yaya Diospa mushu killkachishkan shimi',
	},
	mcd2008eb: {
		language: 'mcd',
		tongue: 'pe',
		name: 'Sharanahua - Diospan Tsain',
	},
	shp2012eb: {
		language: 'shp',
		tongue: 'pe',
		name: 'Shipibo-Conibo - Diossen joi jatíxonbi onanti joi',
	},
	tca2008eb: {
		language: 'tca',
		tongue: 'pe',
		name: 'Ticuna - Tupanaarü Ore i Tórü Cori ya Ngechuchu ya Cristuchiga',
	},
	ura2008eb: {
		language: 'ura',
		tongue: 'pe',
		name: 'Urarina - Cana Coaunera Ere',
	},
	yad2008eb: {
		language: 'yad',
		tongue: 'pe',
		name: 'Yagua - Ju̱denu jto̱ nijya̱nvamyu',
	},
	yaa2008eb: {
		language: 'yaa',
		tongue: 'pe',
		name: 'Yaminahua - Niospa meka fena Jesucristoõnoa',
	},
	ame2008eb: {
		language: 'ame',
		tongue: 'pe',
		name: "Yanesha' - Yompor Poʼñoñ ñeñt ̃ attõ Yepartseshar Jesucristo eʼñe etserra aʼpoctaterrnay Yomporesho",
	},
	pibNT2008eb: {
		language: 'pib',
		tongue: 'pe',
		name: 'Yine - Gerotu Tokanchi Gipiratkaluru',
	},
	dgc1979eb: {
		language: 'dgc',
		tongue: 'ph',
		name: 'Casiguran Dumagat Agta - Bigu a tipan: I mahusay a baheta para ta panahun tam',
	},
	agt1992eb: {
		language: 'agt',
		tongue: 'ph',
		name: 'Central Cagayan Agta - Uhohug na Namaratu gafu te Hesus Kristu',
	},
	duo2001eb: {
		language: 'duo',
		tongue: 'ph',
		name: 'Agta, Dupaninan - Agta, Dupaninan',
	},
	due1977eb: {
		language: 'due',
		tongue: 'ph',
		name: 'Agta, Umiray Dumaget - I bowon a pagpakikasungdu',
	},
	agn2004eb: {
		language: 'agn',
		tongue: 'ph',
		name: 'Agutaynen - Ang bitala tang Dios: ba-long inigoan; Ang bagong magandang balita: bagong tipan',
	},
	ify2009eb: {
		language: 'ify',
		tongue: 'ph',
		name: 'Antipolo Ifugao - Ya ehel apu Dios',
	},
	att1996eb: {
		language: 'att',
		tongue: 'ph',
		name: 'Pamplona Atta - Yù bilin ni Namarò nga meyannung kâ Apu Kesu Kiristu: Yù bagu nga tarátu ni Namarò sù ira nga mangikatalà kâ Apu Kesu Kiristu',
	},
	abp2020eb: {
		language: 'abp',
		tongue: 'ph',
		name: 'Ayta, Abellen',
	},
	sgb2006eb: {
		language: 'sgb',
		tongue: 'ph',
		name: 'Mag-antsi Ayta - Ya habi ni apo namalyari: Bayon tsipan - Ayta Mag-antsi',
	},
	blx2020eb: {
		language: 'blx',
		tongue: 'ph',
		name: 'Mag-Indi Ayata - Aytan Mag-Indi',
	},
	blw1982eb: {
		language: 'blw',
		tongue: 'ph',
		name: 'Balangao - Hen alen Apudyus',
	},
	bno2016eb: {
		language: 'bno',
		tongue: 'ph',
		name: 'Bantoanon - Bag-ong Kasuyatan ag Henesis — Exodo',
	},
	ifb2018eb: {
		language: 'ifb',
		tongue: 'ph',
		name: 'Batad Ifugao - Nan Hapit Apo Dios',
	},
	bkd1986eb: {
		language: 'bkd',
		tongue: 'ph',
		name: 'Binukid - Lalang hu Dios',
	},
	bpr1995eb: {
		language: 'bpr',
		tongue: 'ph',
		name: 'Koronadal Blaan - I Falami Kasafnè (New Testament)',
	},
	bps1998eb: {
		language: 'bps',
		tongue: 'ph',
		name: 'Sarangani Blaan - I tnalù dwata',
	},
	smk2012eb: { language: 'smk', tongue: 'ph', name: 'Bolinao - Si Biblia' },
	lbk1992eb: {
		language: 'lbk',
		tongue: 'ph',
		name: 'Central Bontok - Nan kalin Apo Dios',
	},
	ebk2003eb: {
		language: 'ebk',
		tongue: 'ph',
		name: 'Eastern Bontok - Nan kalen apo Dios (Nan fiarú ay turag)',
	},
	sbl2005eb: {
		language: 'sbl',
		tongue: 'ph',
		name: 'Botolan Sambal - Hay halitá nin Diyos hay kawkanta boy kawkahalita-an (The New Testament Psalms and Proverbs)',
	},
	plw2013eb: {
		language: 'plw',
		tongue: 'ph',
		name: "Brooke's Point Palawano - Bagung Pinegsulutan et Empuꞌ",
	},
	kyb2019eb: {
		language: 'kyb',
		tongue: 'ph',
		name: 'Butbut Kalinga - Nan Ukud Apudyus',
	},
	clu1990eb: {
		language: 'clu',
		tongue: 'ph',
		name: 'Caluyanun - Anang ambal ang Dios: Magandang balita Biblia',
	},
	cebulb2019eb: {
		language: 'cebulb',
		tongue: 'ph',
		name: 'Cebuano - Balaan nga Bibliya',
	},
	sml2008eb: {
		language: 'sml',
		tongue: 'ph',
		name: 'Central Sama - Central Sinama 2008 NT',
	},
	syb1993eb: {
		language: 'syb',
		tongue: 'ph',
		name: "Central Subanen - Kig Begu Pasad: Ki talu' nug megbebaya' (Bagong Tipan: Maayong balita alang kanimo)",
	},
	cbk1981eb: {
		language: 'cbk',
		tongue: 'ph',
		name: 'Chavacano - El Nuevo Testamento',
	},
	did1988eb: {
		language: 'did',
		tongue: 'ph',
		name: 'Dibabawon Manobo - Dibabawon Manobo texts',
	},
	mbd1988eb: {
		language: 'mbd',
		tongue: 'ph',
		name: 'Dibabawon Manobo - Dibabawon Manobo texts',
	},
	gdg2001eb: { language: 'gdg', tongue: 'ph', name: "Ga'dang" },
	ibl2019eb: {
		language: 'ibl',
		tongue: 'ph',
		name: 'Ibaloi - Dibshon Mengi-kan Ni Pansigshan',
	},
	ivb2020eb: {
		language: 'ivb',
		tongue: 'ph',
		name: 'Ibatan - Chirin ni Āpo Dyos',
	},
	ifa2014eb: {
		language: 'ifa',
		tongue: 'ph',
		name: 'Ifugao, Amganad - Nan Hapit Apu Dios',
	},
	ifu2003eb: {
		language: 'ifu',
		tongue: 'ph',
		name: 'Ifugao, Mayoyao - Hapit apo jos',
	},
	ifk2004eb: {
		language: 'ifk',
		tongue: 'ph',
		name: 'Ifugao, Tuwali - Nan Kalin Apu Dios',
	},
	iloulb2019eb: {
		language: 'iloulb',
		tongue: 'ph',
		name: 'Ilocano - Ti Biblia',
	},
	abx1996eb: {
		language: 'abx',
		tongue: 'ph',
		name: "Inabaknon - I Baha'o Kasuratan",
	},
	isd2005eb: {
		language: 'isd',
		tongue: 'ph',
		name: 'Isnag - Ya bàbànán ne Dios nga nesúrát kiya baru wa túlag Genesis se Exodus',
	},
	ivv2014eb: {
		language: 'ivv',
		tongue: 'ph',
		name: 'Ivatan - No Vayo A Testamento, Salmo, No Libro No Proverbo',
	},
	cgc2007eb: {
		language: 'cgc',
		tongue: 'ph',
		name: 'Kagayanen - Pulong ta Dyos: Genesis daw bag-o na kasugtanan',
	},
	kqe2012eb: { language: 'kqe', tongue: 'ph', name: 'Kalagan - Kalagan' },
	kqew2019eb: {
		language: 'kqew',
		tongue: 'ph',
		name: 'Kalagan - Kitab Injil',
	},
	kmk2003eb: {
		language: 'kmk',
		tongue: 'ph',
		name: 'Limos Kalinga - Ugud apudyus = Ti baro tulag',
	},
	knb2019eb: {
		language: 'knb',
		tongue: 'ph',
		name: 'Kalinga, Lubuagan - Ha Ugud Apudyus',
	},
	ksc1986eb: {
		language: 'ksc',
		tongue: 'ph',
		name: 'Kalinga, Southern - Na ukud Apudyus',
	},
	kne2016eb: {
		language: 'kne',
		tongue: 'ph',
		name: 'Kankanaey - Kankanaey Bible',
	},
	xnn1984eb: {
		language: 'xnn',
		tongue: 'ph',
		name: 'Kankanay, Northern - Kalin Apo Dios',
	},
	krj2009eb: {
		language: 'krj',
		tongue: 'ph',
		name: 'Kinaray-a - Kinaray-a NT',
	},
	mmn1982eb: {
		language: 'mmn',
		tongue: 'ph',
		name: 'Mamanwa - Ya mga panaba na Diyos',
	},
	msm1999eb: {
		language: 'msm',
		tongue: 'ph',
		name: 'Manobo, Agusan - Kasuyatan to Diyus',
	},
	atd2000eb: {
		language: 'atd',
		tongue: 'ph',
		name: 'Manobo, Ata - Kasulatan to Magboboot',
	},
	mbi1989eb: {
		language: 'mbi',
		tongue: 'ph',
		name: 'Manobo, Ilianen - Ke meupiya ne tudtul mekeatag ki Hisu Kristu',
	},
	mbt2010eb: {
		language: 'mbt',
		tongue: 'ph',
		name: 'Manobo, Matigsalug - Meupiya ne panugtulen: Bibliya ne Matigsalug',
	},
	obo2011eb: {
		language: 'obo',
		tongue: 'ph',
		name: 'Manobo, Obo - Moppiyon Dinoggan, Moka-atag ki Disas Krays',
	},
	mbs1982eb: {
		language: 'mbs',
		tongue: 'ph',
		name: 'Sarangani Manobo - Se kaling peokit',
	},
	mbb2013eb: {
		language: 'mbb',
		tongue: 'ph',
		name: 'Manobo, Western Bukidnon - Is Lalag te Megbevayà',
	},
	msk1975eb: {
		language: 'msk',
		tongue: 'ph',
		name: 'Mansaka - Yang Bago na Togon Kanatu',
	},
	msb1993eb: {
		language: 'msb',
		tongue: 'ph',
		name: 'Masbatenyo - An Maayo na Barita Hali sa Dios',
	},
	prfNT2012eb: {
		language: 'prf',
		tongue: 'ph',
		name: 'Paranan - En Maganda A Bareta Biblia',
	},
	rol2018eb: {
		language: 'rol',
		tongue: 'ph',
		name: 'Romblomanon - Bag-o nga Kasugtanan',
	},
	slm1994eb: {
		language: 'slm',
		tongue: 'ph',
		name: 'Sama, Pangutaran - Kitab Injil',
	},
	xsb1999eb: { language: 'xsb', tongue: 'ph', name: 'Sambal - Tina Sambal' },
	stb2011eb: {
		language: 'stb',
		tongue: 'ph',
		name: 'Subanen, Northern - Sug Begu Ne Kalegenan',
	},
	suc1996eb: {
		language: 'suc',
		tongue: 'ph',
		name: "Subanon, Western - Kitab Bogu Pasad talu' nog Mikpongon",
	},
	bgs2004eb: {
		language: 'bgs',
		tongue: 'ph',
		name: 'Tagabawa - Kagi Ka Manama',
	},
	tglulb2018eb: {
		language: 'tgl',
		tongue: 'ph',
		name: 'Tagalog - banal na Bibliya',
	},
	tbk2008eb: {
		language: 'tbk',
		tongue: 'ph',
		name: 'Tagbanwa, Calamian - Yang Baklung Ipinagpakigpaig̱u',
	},
	tsg1999eb: {
		language: 'tsg',
		tongue: 'ph',
		name: 'Tausug - Kitab Injil (The New Testament)',
	},
	tbl2007eb: {
		language: 'tbl',
		tongue: 'rp',
		name: 'Tboli - Udél dwata: gna kesfasad ne lomi kesfasad',
	},
	tiy2002eb: {
		language: 'tiy',
		tongue: 'ph',
		name: 'Tiruray - I Fiyowe Uret',
	},
	yka1984eb: { language: 'yka', tongue: 'ph', name: 'Yakan - Yakan Bible' },
	epo1910eb: {
		language: 'epo',
		tongue: 'pl',
		name: 'Esperanto - Londona Biblio',
	},
	polubg2018eb: {
		language: 'pl',
		tongue: 'pl',
		name: 'Polskie (Polish) - Święta Biblia',
	},
	polsz2016eb: {
		language: 'pl',
		tongue: 'pl',
		name: 'Polski - Biblica® Słowo Życia, otwarty dostęp',
	},
	ronBayash2023eb: {
		language: 'ro',
		tongue: 'ro',
		name: 'Bayash (Romanian) - Sfanta Biblie',
	},
	ron1924eb: {
		language: 'ro',
		tongue: 'ro',
		name: 'Romanian - Библия Думитру Корнилеску 1924 (БДК)',
	},
	ronbtf2024eb: {
		language: 'ro',
		tongue: 'ro',
		name: 'Română (Romanian) - Biblia Traducerea Fidela',
	},
	ronlsb2022eb: {
		language: 'ro',
		tongue: 'ro',
		name: 'Română (Romanian) - Liber Sfanta Biblie',
	},
	russyn1876eb: {
		language: 'ru',
		tongue: 'ru',
		name: 'русский (Russian) - Синодальный перевод',
	},
	acf1999eb: {
		language: 'acf',
		tongue: 'st',
		name: 'Saint Lucian Creole French - Tèstèman nèf-la: Épi an posyòn an liv samz-la',
	},
	bqj2015eb: {
		language: 'bqj',
		tongue: 'sn',
		name: 'Bandial - Firim fafu fal Aláemit',
	},
	krx2018eb: { language: 'krx', tongue: 'sn', name: 'Karon - Kuloonaay' },
	knf2014eb: {
		language: 'knf',
		tongue: 'sn',
		name: 'Mankanya - Ulibra wi Naşibaţi',
	},
	ndv2020eb: {
		language: 'ndv',
		tongue: 'sn',
		name: 'Ndut - Séréel Ndút: Unni Koope',
	},
	snf2012eb: {
		language: 'snf',
		tongue: 'sn',
		name: "Noon - Hewhewii winéwí'wii Kooh Kifiiliimunkii ki'askii",
	},
	bsc2017eb: { language: 'bsc', tongue: 'sn', name: 'Oniyan - Oniyan' },
	sav2019eb: {
		language: 'sav',
		tongue: 'sn',
		name: 'Saafi-Saafi - Saafi-Saafi',
	},
	cou2018eb: {
		language: 'cou',
		tongue: 'sn',
		name: 'Wamey - Vikerëh Vikasëk W̃ën gë Wapëgwala',
	},
	wolmb2025seb: {
		language: 'wol',
		tongue: 'sn',
		name: 'Wolof - Kàddug Yàlla',
	},
	wol2010eb: { language: 'wol', tongue: 'sn', name: 'Wolof - Téereb Injiil' },
	rmyArli2018eb: {
		language: 'rmy',
		tongue: 'rs',
		name: 'Arli (Romani, Vlax) - Luka',
	},
	rmyChergash2018eb: {
		language: 'rmy',
		tongue: 'rs',
		name: 'Chergash (Romani, Vlax) - Luka',
	},
	rmyGurbet2018eb: {
		language: 'rmy',
		tongue: 'rs',
		name: 'Gurbet (Romani, Vlax) - Lačho lafi taro Luka',
	},
	srp1865eb: {
		language: 'srp',
		tongue: 'rs',
		name: 'srpski jezik (Serbian) - Sveta Biblija',
	},
	rmc2019eb: {
		language: 'rmc',
		tongue: 'sk',
		name: 'Romanes (Romani, Carpathian) - Le Devleskero Lav Andre Romaňi Čhib, Slovensko 2022',
	},
	aia2005eb: {
		language: 'aia',
		tongue: 'sb',
		name: 'Arosi - Taroha Goro mana Usuusu Maea',
	},
	bvd2016eb: {
		language: 'bvd',
		tongue: 'sb',
		name: "Baegu - Na Alangaia Falu 'ana Baea 'i Baegu",
	},
	bgt2009eb: {
		language: 'bgt',
		tongue: 'sb',
		name: 'Bughotu - Na Rorongo Ke Toke Eigna a Jisas Krais',
	},
	far2016eb: {
		language: 'far',
		tongue: 'sb',
		name: 'Fataleka - Farongoe Lea Ana Fataleka',
	},
	nlg2015eb: {
		language: 'nlg',
		tongue: 'sb',
		name: 'Gela - Na Rongorongo Uto nina Jesus Christ',
	},
	gri1998eb: { language: 'gri', tongue: 'sb', name: 'Ghari - Ghari Bible' },
	kwd2013eb: { language: 'kwd', tongue: 'sb', name: 'Kwaio - Fatalana God' },
	kwf2003eb: {
		language: 'kwf',
		tongue: 'sb',
		name: "Kwara'ae - Fau Alanga'inga Faolu Ana Ala'anga Kwara'ae",
	},
	llu1992eb: {
		language: 'llu',
		tongue: 'sb',
		name: 'Lau - Lau New Testament',
	},
	ntu2008eb: {
		language: 'ntu',
		tongue: 'sb',
		name: 'Natqgu - Nzryrngrkxtr Kc Ate Rut x Sam',
	},
	mnv2020eb: {
		language: 'mnv',
		tongue: 'sb',
		name: 'Rennell-Bellona - Rennell-Bellona',
	},
	rug2016eb: { language: 'rug', tongue: 'sb', name: 'Roviana - Buka Hope' },
	abp2005eb: {
		language: 'apb',
		tongue: 'sb',
		name: "Sa'a - Tataroha Diana i Sulie Aalaha Ikie a Jisas Kraes",
	},
	lgl2008eb: {
		language: 'lgl',
		tongue: 'sb',
		name: "Wala - Alafuuna Fa'alu Ala Saena 'I Wala",
	},
	som2008eb: {
		language: 'som',
		tongue: 'so',
		name: 'Somali - Kitaabka Quduuska Ah',
	},
	kor1910eb: {
		language: 'kor',
		tongue: 'kr',
		name: '한국인 (Korean) - 한국어 성경',
	},
	avu2002eb: {
		language: 'avu',
		tongue: 'ss',
		name: 'Avokaya - Tã-drı̣̃ Lẽlẽ Óꞌdí Óvârí Kâ',
	},
	bdh2016eb: {
		language: 'bdh',
		tongue: 'ss',
		name: 'Baka - MƗKÁNDA LORỤ ꞌBƗ LOMO KƗ́ DOSỊ́ ÉYỊ́ E',
	},
	bex1998eb: {
		language: 'bex',
		tongue: 'ss',
		name: 'Jur Modo - Ndose Kɔdɔ Laka, Buku ꞌba Tisaki ni Tɔdɔ to Lömu Laꞌja ꞌBa Yësu Kurïsïtö Ŋere Ze',
	},
	kbo2017eb: {
		language: 'kbo',
		tongue: 'ss',
		name: 'Keliko - Ụ́ꞌdụ́kọ́ Múké Múngú vé rị',
	},
	lwo2003eb: {
		language: 'lwo',
		tongue: 'ss',
		name: 'Luwo - Anweehd Me Nyaahn',
	},
	mgc2010eb: { language: 'mgc', tongue: 'ss', name: 'Morokodo - Morokodo' },
	muh2005eb: {
		language: 'muh',
		tongue: 'ss',
		name: 'Mündü - To Ngü Mürü ka Me bete Gina Ngü (S Sudan)',
	},
	mur2013eb: { language: 'mur', tongue: 'ss', name: 'Murle - ZƆƆZ O JOOWO' },
	ndz2001eb: {
		language: 'ndz',
		tongue: 'ss',
		name: 'Ndogo - Ngú bà toko nambeè mì Mbíṛì ta ndâ ꞌduù',
	},
	spaRV1909eb: {
		language: 'es',
		tongue: 'es',
		name: 'Español (Spanish) - Santa Biblia — Reina Valera 1909',
		strongs: true,
	},
	sparvg2010eb: {
		language: 'es',
		tongue: 'es',
		name: 'Español (Spanish) - Santa Biblia Reina Valera Gómez',
	},
	spablm2022eb: {
		language: 'es',
		tongue: 'es',
		name: 'Español (Spanish) - Santa Biblia libre para el mundo',
	},
	spavbl2018eb: {
		language: 'es',
		tongue: 'es',
		name: 'Español (Spanish) - Versión Biblia Libre',
	},
	spav1602peb: {
		language: 'es',
		tongue: 'es',
		name: 'Español (Spanish) - Santa Biblia Valera 1602 Purificada',
	},
	dik2006eb: {
		language: 'dik',
		tongue: 'sd',
		name: 'Dinka, Southwestern - Lëk yam',
	},
	xtc2020eb: {
		language: 'xtc',
		tongue: 'sd',
		name: 'Katcha-Kadugli-Miri - Katcha',
	},
	lro2020eb: {
		language: 'lro',
		tongue: 'sd',
		name: 'Laro - Laro Bible (Bible)',
	},
	lmd2020eb: { language: 'lmd', tongue: 'sd', name: 'Lumun - Lumun' },
	shj2018eb: {
		language: 'shj',
		tongue: 'sd',
		name: 'Shatt - Sorunu Kaläg na Ikä Caning',
	},
	udu2005eb: {
		language: 'udu',
		tongue: 'sd',
		name: 'Uduk - Gwo Ma Arumgimis',
	},
	car2010eb: {
		language: 'car',
		tongue: 've',
		name: 'Carib - Asery Tamusi karetary',
	},
	djk2009eb: {
		language: 'djk',
		tongue: 'sr',
		name: 'Eastern Maroon Creole - Beibel: okanisi tongo',
	},
	hns2010eb: {
		language: 'hns',
		tongue: 'sr',
		name: 'Hindustani, Caribbean - Parmeswar ke naawa poestak',
	},
	jvn2009eb: {
		language: 'jvn',
		tongue: 'sr',
		name: 'Javanese, Caribbean - Kitab sutyi prejanjian anyar ing Basa Jawa Suriname sing gampang',
	},
	srm2009eb: {
		language: 'srm',
		tongue: 'sr',
		name: 'Saramaccan - Gadu Buku',
	},
	srn2002eb: {
		language: 'srn',
		tongue: 'sr',
		name: 'Sranan - Nyun Testamenti',
	},
	swef2015eb: {
		language: 'swef',
		tongue: 'se',
		name: 'Svenska (Swedish) - Svenska Folkbibeln',
	},
	swe2019eb: {
		language: 'swe',
		tongue: 'se',
		name: 'Swedish - Svenska Kärnbibeln - en expanderad översättning',
	},
	tgk2014eb: {
		language: 'tgk',
		tongue: 'tj',
		name: 'тоҷикӣ (Tajik) - Хушхабар',
	},
	bds2019eb: {
		language: 'bds',
		tongue: 'tz',
		name: 'Burunge - Ila⁄imbidu Gu ⁄abu hari Burungaisoo',
	},
	isn2020eb: {
		language: 'isn',
		tongue: 'tz',
		name: 'Kiisanzu (Isanzu) - Isanzu Bible',
	},
	reg2020eb: {
		language: 'reg',
		tongue: 'tz',
		name: 'Kikara (Kara) - Kara Bible',
	},
	zgam2020eb: {
		language: 'zgam',
		tongue: 'tz',
		name: 'Mahanji (Kinga) - Mahanji Bible',
	},
	kiz2020eb: {
		language: 'kiz',
		tongue: 'tz',
		name: 'Kese (Kisi) - Kisi Bible',
	},
	swhonen2018eb: {
		language: 'swhonen',
		tongue: 'tz',
		name: 'Kiswahili - Biblica® Toleo Wazi Neno: Bibilia Takatifu™',
	},
	kdc2014eb: {
		language: 'kdc',
		tongue: 'tz',
		name: 'Kutu - Lagano da Sambi kwa Wanhu Wose',
	},
	cwe2014eb: {
		language: 'cwe',
		tongue: 'tz',
		name: "Kwere - Biblia Ching'hwele",
	},
	ruf2014eb: {
		language: 'ruf',
		tongue: 'tz',
		name: 'Luguru - Laghano Lya Sambi Kwe Iwanu Wose',
	},
	mgq2020eb: {
		language: 'mgq',
		tongue: 'tz',
		name: 'Malila - ULufingo uLupwa kʉ ndongo ɨya Shɨmalɨla',
	},
	mgw2017eb: {
		language: 'mgw',
		tongue: 'tz',
		name: 'Matumbi - Injili ya Yesu',
	},
	mwe2019eb: {
		language: 'mwe',
		tongue: 'tz',
		name: 'Mwera - Malagano ga Ambi',
	},
	ndh2020eb: {
		language: 'ndh',
		tongue: 'tz',
		name: 'Ndali - ULwitikano uLupya',
	},
	ndj2014eb: {
		language: 'ndj',
		tongue: 'tz',
		name: 'Ndamba - Lilaghanu lya shonu',
	},
	ndg2020eb: {
		language: 'ndg',
		tongue: 'tz',
		name: 'Kindengereko (Ndengereko) - Ndengereko Bible',
	},
	nnq2016eb: {
		language: 'nnq',
		tongue: 'tz',
		name: 'Ngindo - Ngindo New Testament 2015',
	},
	xnj2020eb: {
		language: 'xnj',
		tongue: 'tz',
		name: 'Chingoni (Ngoni) - Ngoni Bible Version Translation Project',
	},
	ngp2014eb: {
		language: 'ngp',
		tongue: 'tz',
		name: "Nguu - Ndagano mp'ya kwa wanth'u wose",
	},
	nyy2019eb: {
		language: 'nyy',
		tongue: 'tz',
		name: 'Nyakyusa-Ngonde - Ʉlwitɨkano Ʉlʉpya',
	},
	poy2014eb: {
		language: 'poy',
		tongue: 'tz',
		name: 'Pogolo - Lipatanu Lya Syayi Kwa Wantu Woseri',
	},
	sbk2020eb: {
		language: 'sbk',
		tongue: 'tz',
		name: 'Kisafwa (Safwa) - Biblia Takatifu',
	},
	swh1850eb: {
		language: 'swh',
		tongue: 'tz',
		name: 'Kiswahili (Swahili) - Biblia Takatifu',
	},
	swhulb2019eb: {
		language: 'swh',
		tongue: 'tz',
		name: 'Kiswahili (Swahili) - Biblia Takatifu',
	},
	vid2014eb: {
		language: 'vid',
		tongue: 'tz',
		name: 'Vidunda - Ilagano lya Katali, Ilagano Linyale kwa Wanhu Weng’ha',
	},
	wbi2020eb: {
		language: 'wbi',
		tongue: 'tz',
		name: 'Kivwanji (Vwanji) - Vwanji Bible',
	},
	zaj2019eb: {
		language: 'zaj',
		tongue: 'tz',
		name: 'Zaramo - Lagano da Isambi da Mndewa na Mkombola Wetu Yesu Kilisto',
	},
	ziw2014eb: { language: 'ziw', tongue: 'tz', name: 'Zigua - Lagano hya' },
	lcp2018eb: {
		language: 'lcp',
		tongue: 'th',
		name: 'Lawa, Western - พระคัมภีร์ละว้า',
	},
	thantv2020eb: {
		language: 'th',
		tongue: 'th',
		name: 'ไทย (Thai) - ใหม่ฉบับภาษาไทย',
	},
	thaKJV2003eb: {
		language: 'th',
		tongue: 'th',
		name: 'ไทย (Thai) - พระคัมภีร์ภาษาไทยฉบับ KJV',
	},
	nod2017eb: {
		language: 'nod',
		tongue: 'th',
		name: 'Thai, Northern - พระคริสตธรรมคัมภีร ภาคพันธสัญญาใหม',
	},
	bkx2004eb: { language: 'bkx', tongue: 'tl', name: 'Baikeno - Naꞌ Markus' },
	tdt2021eb: {
		language: 'tdt',
		tongue: 'tl',
		name: 'Tetun Dili - Testamentu Foun ba Ema Hotu',
	},
	gng2011eb: {
		language: 'gng',
		tongue: 'tg',
		name: 'Ngangam - Uwien ya Jɔtiefɛ̀nku ya gbɔnku',
	},
	kdh2015eb: {
		language: 'kdh',
		tongue: 'tg',
		name: 'Tem - Tawúratɩ na Injiila dɛ́ɛ fɔɔlɩ́nɩ',
	},
	num2023eb: {
		language: 'num',
		tongue: 'to',
		name: "Niuafo'ou - Te Fuakava Fo'ou",
	},
	ton2014eb: {
		language: 'ton',
		tongue: 'to',
		name: 'Tongan - KO E TOHI TAPU KĀTOA',
	},
	aeb2020eb: {
		language: 'aeb',
		tongue: 'tn',
		name: 'العهد الجديد بالدارجة التونسية 2022 (Arabic, Tunisian Spoken) - العهد الجديد بالدارجة التونسية 2022',
	},
	turobt2023eb: {
		language: 'tr',
		tongue: 'tr',
		name: 'Türkçe (Turkish) - Açık Lisans Temel Türkçe Tercüme İncil™',
	},
	turytc2024eb: {
		language: 'tr',
		tongue: 'tr',
		name: 'Türkçe (Turkish) - Yorumsuz Türkçe Çeviri (YTC)',
	},
	luc2018eb: { language: 'luc', tongue: 'ug', name: 'Aringa - Ị́jọ́ Úꞌdí rĩ' },
	rub2017eb: {
		language: 'rub',
		tongue: 'ug',
		name: 'Gungu - Ndagaanu Gihyaka',
	},
	gwr2019eb: {
		language: 'gwr',
		tongue: 'ug',
		name: 'Gwere - Endagaano Empyaka Omu Lugwere',
	},
	lug2017eb: {
		language: 'lug',
		tongue: 'ug',
		name: 'Luganda - Biblica® Bayibuli Entukuvu, Endagaano Enkadde nʼEndagaano Empya ekwatiddwa ku katambi™',
	},
	nuj2019eb: {
		language: 'nuj',
		tongue: 'ug',
		name: 'Nyole - Endagaano Epyaha mu Lunyole',
	},
	tlj2021eb: {
		language: 'tlj',
		tongue: 'ug',
		name: 'Talinga-Bwisi - Ndaghaano Mpyaka na bimui haa bitabo byꞌomu Ndaghaano Nkulu mu Lubwisi',
	},
	rmyvlakh2023eb: {
		language: 'rmy',
		tongue: 'ua',
		name: 'Romani - Библия пэ влахицко романи шыб',
	},
	rmylovari2021eb: {
		language: 'rmy',
		tongue: 'ua',
		name: 'Romani - Библия пэ ловарицко романы щиб',
	},
	rmn2021eb: {
		language: 'rmn',
		tongue: 'ua',
		name: 'Romani (Romani, Balkan) - Библия опэр крымски романи чиб',
	},
	rmczrb2021eb: {
		language: 'rmy',
		tongue: 'ua',
		name: 'Romanes (Romani, Carpathian) - Біблія про закарпатцько романо чіб',
	},
	rmyservi2021eb: {
		language: 'rmy',
		tongue: 'ua',
		name: 'Romani (Romani, Vlax) - Библия пы сэрвицко ромско чиб',
	},
	ukr1871eb: {
		language: 'ukr',
		tongue: 'ua',
		name: 'Українська (Ukrainian) - Біблія в пер. П.Куліша та І.Пулюя, 1905',
	},
	ukr1996eb: {
		language: 'ukr',
		tongue: 'ua',
		name: 'Українська (Ukrainian) - Біблія',
	},
	ukrfb2024eb: {
		language: 'ukr',
		tongue: 'ua',
		name: 'Українська (Ukrainian) - Біблія свободи',
	},
	ukronpu2022eb: {
		language: 'ukr',
		tongue: 'ua',
		name: 'Українська (Ukrainian) - Бібліка ® Відкрита Новий Переклад Українською',
	},
	engaoi2021eb: {
		language: 'en',
		tongue: 'en',
		name: 'English - Anindilyakwa English Bible',
	},
	engBBE1964eb: {
		language: 'en',
		tongue: 'en',
		name: 'English - Bible in Basic English',
	},
	engUKLXX2012eb: {
		language: 'en',
		tongue: 'en',
		name: 'English - LXX2012: Septuagint in British/International English 2012',
	},
	engDBY1884eb: {
		language: 'en',
		tongue: 'en',
		name: 'English - Darby Translation',
	},
	engDRA1899eb: {
		language: 'en',
		tongue: 'en',
		name: 'English - Douay-Rheims 1899',
	},
	engemtveb: {
		language: 'en',
		tongue: 'en',
		name: 'English - English Majority Text Version',
	},
	engwyc2018eb: {
		language: 'en',
		tongue: 'en',
		name: "English - Wycliffe's Bible with Modern Spelling (Enhanced)",
	},
	engwyc2017eb: {
		language: 'en',
		tongue: 'en',
		name: "English - Wycliffe's Bible with Modern Spelling",
	},
	enggnv1599eb: {
		language: 'en',
		tongue: 'en',
		name: 'English - Geneva Bible 1599',
	},
	engKJV2006eb: {
		language: 'en',
		tongue: 'en',
		name: 'English - King James (Authorized) Version',
	},
	engKJV1769eb: {
		language: 'en',
		tongue: 'en',
		name: 'English - King James Version + Apocrypha',
	},
	engkjvcpbeb: {
		language: 'en',
		tongue: 'en',
		name: 'English - KJV Cambridge Paragraph Bible',
	},
	englee1853eb: {
		language: 'en',
		tongue: 'en',
		name: 'English - Isaac Leeser Tanakh',
	},
	engnoy1869eb: {
		language: 'en',
		tongue: 'en',
		name: 'English - George Noyes Bible',
	},
	engoebcweb: {
		language: 'en',
		tongue: 'en',
		name: 'English - Open English Bible (Commonwealth Spelling)',
	},
	engRV1895eb: {
		language: 'en',
		tongue: 'en',
		name: 'English - Revised Version with Apocrypha (1895)',
	},
	engoke1865eb: {
		language: 'en',
		tongue: 'en',
		name: 'English - Targum Onkelos Etheridge',
	},
	engtnteb: {
		language: 'en',
		tongue: 'en',
		name: 'English - Tyndale New Testament',
	},
	engwebbe2025peb: {
		language: 'en',
		tongue: 'en',
		name: 'English - World English Bible British Edition',
	},
	engwebbe2025eb: {
		language: 'en',
		tongue: 'en',
		name: 'English - World English Bible British Edition with Deuterocanon',
	},
	engwmbb2025eb: {
		language: 'en',
		tongue: 'en',
		name: 'English - World Messianic Bible British Edition',
	},
	engylt1898eb: {
		language: 'en',
		tongue: 'en',
		name: "ENGLISH - Young's Literal Translation",
	},
	apw2012eb: {
		language: 'apw',
		tongue: 'us',
		name: 'Western Apache - The New Testament of our Lord and Saviour Jesus Christ',
	},
	arp1903eb: {
		language: 'arp',
		tongue: 'us',
		name: 'Arapaho - Hethadenee waunauyaunee vadan Luke Vanenāna',
	},
	engASV1901eb: {
		language: 'en',
		tongue: 'en',
		name: 'English - American Standard Version (1901)',
	},
	engasvbt2021eb: {
		language: 'en',
		tongue: 'en',
		name: 'English - American Standard Version Byzantine Text',
	},
	englsv2020eb: {
		language: 'en',
		tongue: 'en',
		name: 'English - Literal Standard Version',
	},
	engGLW1996eb: {
		language: 'en',
		tongue: 'en',
		name: "English - God's Living Word (John)",
		strongs: true,
	},
	engLXX2012eb: {
		language: 'en',
		tongue: 'en',
		name: 'English - LXX2012: Septuagint in American English 2012',
	},
	engNET2016eb: {
		language: 'en',
		tongue: 'en',
		name: 'English - NET Bible with Strongs',
		strongs: true,
	},
	engourb2016eb: {
		language: 'en',
		tongue: 'en',
		name: 'English - One Unity Resource Bible',
	},
	engoebuseb: {
		language: 'en',
		tongue: 'en',
		name: 'English - Open English Bible (U. S. spelling)',
	},
	engtcent2022eb: {
		language: 'en',
		tongue: 'en',
		name: 'English - Text-Critical English New Testament',
	},
	engT4T2014eb: {
		language: 'en',
		tongue: 'en',
		name: 'English - Translation for Translators',
	},
	engULB2017eb: {
		language: 'en',
		tongue: 'en',
		name: 'English - Unlocked Literal Bible',
	},
	engwebster1833eb: {
		language: 'en',
		tongue: 'en',
		name: 'English - Noah Webster Bible',
	},
	engwebc2025eb: {
		language: 'en',
		tongue: 'en',
		name: 'English - World English Bible (Catholic)',
	},
	engwebu2025eb: {
		language: 'en',
		tongue: 'en',
		name: 'English - World English Bible Updated',
	},
	engweb2025eb: {
		language: 'en',
		tongue: 'en',
		name: 'English - World English Bible with Deuterocanon',
	},
	engwmb2025eb: {
		language: 'en',
		tongue: 'en',
		name: 'English - World Messianic Bible',
	},
	gwi2010eb: {
		language: 'gwi',
		tongue: 'us',
		name: "Gwich'in - Vit'eegwijyąhchy'aa Vagwandak Nizįį",
	},
	hwc2020eb: {
		language: 'hwc',
		tongue: 'us',
		name: "Hawai'i Pidgin - Da Good An Spesho Book",
	},
	haw1868eb: {
		language: 'haw',
		tongue: 'us',
		name: "Olelo Hawai'i - Baibala Hemolele",
	},
	hop2012eb: {
		language: 'hop',
		tongue: 'us',
		name: 'Hopi - God Lavayiyat Aṅ Puhuvasiwni',
	},
	pao2012eb: {
		language: 'pao',
		tongue: 'us',
		name: 'Paiute, Northern - Te Naa Besa Unnepu',
	},
	pdc2016eb: {
		language: 'pdc',
		tongue: 'us',
		name: 'Pennsilfaanisch Deitsch - Di Heilich Shrift',
	},
	gul2005eb: {
		language: 'gul',
		tongue: 'us',
		name: 'Sea Island Creole English - De Nyew Testament',
	},
	tew2012eb: {
		language: 'tew',
		tongue: 'us',
		name: 'Tewa - Naˀinbí Sedó Yôesiví Tu̖u̖ / Nanbí Sedó Jôesiví Tun',
	},
	ood2010eb: {
		language: 'ood',
		tongue: 'us',
		name: "Tohono O'odham - Jiosh Wechij O'ohana",
	},
	engerv2006eb: {
		language: 'en',
		tongue: 'en',
		name: 'English - Easy-to-Read Version',
	},
	engbsb2020eb: {
		language: 'en',
		tongue: 'en',
		name: 'English - Berean Standard Bible',
	},
	enggw2020eb: { language: 'en', tongue: 'en', name: "English - GOD'S WORD" },
	engf35eb: {
		language: 'en',
		tongue: 'en',
		name: 'English - The New Testament with Commentary',
	},
	engfbv2018eb: {
		language: 'en',
		tongue: 'en',
		name: 'English - Free Bible Version',
	},
	engjps1917eb: {
		language: 'en',
		tongue: 'en',
		name: 'English - JPS TaNaKH 1917',
	},
	esk2010eb: {
		language: 'esk',
		tongue: 'us',
		name: 'Inupiatun, Northwest Alaska - Ipqitchuat Makpiġaat - Agaayyutim Uqałhi Iñupiatun',
	},
	omb2023eb: {
		language: 'omb',
		tongue: 'vu',
		name: 'Havai (Ambae, East) - Waratau Siaga Tatuei mo Vilegi',
	},
	tvk2011eb: {
		language: 'tvk',
		tongue: 'vu',
		name: 'Southeast Ambrym - Vanuvei Eo e sepinien Vatlongos na mol-Vatimol xil niutestamen e rute te oltestamen',
	},
	apppbt2019eb: { language: 'app', tongue: 'vu', name: 'Apma - Jona' },
	bki2016eb: {
		language: 'bki',
		tongue: 'vu',
		name: 'Baki - Verikariano Vou Na Baki',
	},
	lww2016eb: {
		language: 'lww',
		tongue: 'vu',
		name: 'Lewo - Lologena Wo Kienane Yesu Kristo Kome Kewo',
	},
	klv2013eb: {
		language: 'klv',
		tongue: 'vu',
		name: 'Maskelynes - Nasoruan siGot len nasoruan ta Uluveu',
	},
	tnk2013eb: { language: 'tnk', tongue: 'vu', name: 'Nəfe - Nǝkukuǝ Ikinan' },
	tnn2010eb: {
		language: 'tnn',
		tongue: 'vu',
		name: 'North Tanna - North Tanna New Testament',
	},
	pma2011eb: { language: 'pma', tongue: 'vu', name: 'Paama - Paama Bible' },
	nwi2011eb: {
		language: 'nwi',
		tongue: 'vu',
		name: 'Southwest Tanna - Nəkwəkwə imərhakə kape kughen: nɨrpenien vi',
	},
	tgp2010eb: {
		language: 'tgp',
		tongue: 'vu',
		name: 'Tangoa - Tangoa New Testament',
	},
	upv1996eb: {
		language: 'upv',
		tongue: 'vu',
		name: 'Uripiv - Naul On Nga Mimerr Uripiv',
	},
	tnp2014eb: {
		language: 'tnp',
		tongue: 'vu',
		name: 'Whitesands - Nauəuə Asim Rəha Uhgɨn Nəmtətiən Vi',
	},
	latVUC1880eb: {
		language: 'lat',
		tongue: 'va',
		name: 'Latine - Bibbia Vulgata Clementina na 1598',
	},
	cmo2016eb: {
		language: 'cmo',
		tongue: 'vn',
		name: 'Central Mnong - Nau Kôranh Brah Ngơi Nau Tâm Rnglăp Mhe',
	},
	cmok2016eb: {
		language: 'cmok',
		tongue: 'vn',
		name: 'Central Mnong - នាវ​កោរាញ​ឞ្រាស​ងើយ​​នាវ​តឹម​រាង្លាប់​មហែ',
	},
	cje2020eb: { language: 'cje', tongue: 'vn', name: 'Chru - Chru' },
	hre2020eb: { language: 'hre', tongue: 'vn', name: 'Hre - Sech Hadròih' },
	blt2020eb: { language: 'blt', tongue: 'vn', name: 'Thai Den - Tai Dam' },
	vieovcb2015eb: {
		language: 'vie',
		tongue: 'vn',
		name: 'Tiếng Việt (Vietnamese) - Biblica® Thiên Ban Kinh Thánh Hiện Đại™',
	},
	vie1934eb: {
		language: 'vie',
		tongue: 'vn',
		name: 'Tiếng Việt (Vietnamese - Kinh Thánh',
	},
	vie2011eb: {
		language: 'vie',
		tongue: 'vn',
		name: 'Việt (Vietnamese) - Thánh Kinh Bản Phổ thông',
	},
	sby2018eb: {
		language: 'sby',
		tongue: 'zm',
		name: 'Chisoli (Soli) - Soli New Testament',
	},
	sna2017eb: {
		language: 'sna',
		tongue: 'zw',
		name: 'chiShona - Biblica® Bhaibheri Dzvene Rakasununguka MuChiShona Chanhasi 2017',
	},
	dov2020eb: {
		language: 'dov',
		tongue: 'zw',
		name: 'Toka-Leya-Dombe - Dombe New Testament',
	},
	nde2022eb: {
		language: 'nde',
		tongue: 'zw',
		name: 'isiNdebele - Biblica® IBhayibhili Elingcwele LesiNdebele Elifinyelelekayo™',
	},
};
bible.Data.tongues = {
	original: 'Hebrew/Greek',
	en: 'English',
	fa: 'فارسی (Farsi)',
	grc: 'Ελληνικά (Ancient Greek)',
	hbo: 'עברית (Hebrew)',
	af: 'Afrikaans',
	dz: 'الجزائر (Algeria)',
	ar: 'عربى (Arabic)',
	australia: 'Australia',
	az: 'آذری (Azeri)',
	azerbaijan: 'Azerbaijan',
	bangladesh: 'বাংলা (Bangladesh)',
	be: 'беларуская (Belarusian)',
	belize: 'Belize',
	benin: 'Benin',
	bg: 'български (Bulgarian)',
	bolivia: 'Bolivia',
	botswana: 'Botswana',
	burkinafaso: 'Burkina Faso',
	br: 'Brezhoneg (Breton)',
	brazil: 'Brasil',
	cambodia: 'Cambodia',
	canada: 'Canada',
	ceb: 'Cebuano',
	cf: 'Central African Republic',
	td: 'Chad',
	chl: 'Chile',
	ci: "Côte d'Ivoire",
	chr: 'Cherokee',
	ckb: 'کوردیی سۆرانی (Kurdi Sorani)',
	cm: 'Cameroon',
	cn: 'China',
	co: 'Colombia',
	cop: 'ϯⲙⲉⲧⲣⲉⲙⲛ̀ⲭⲏⲙⲓ (Coptic)',
	cr: 'Costa Rica',
	cs: 'Čeština (Czech)',
	cu: 'Church Slavonic',
	hr: 'Hrvatska (Croatia)',
	cy: 'Cymraeg (Welsh)',
	cz: 'Czech Republic',
	da: 'Dansk (Danish)',
	cd: 'Democratic Republic of the Congo',
	de: 'Deutsch (German)',
	ec: 'Ecuador',
	eg: 'Egypt',
	el: 'Ελληνικά (Modern Greek)',
	enm: 'Middle English',
	eo: 'Esperanto',
	es: 'Español (Spanish)',
	et: 'Eesti Keel (Estonian)',
	eth: 'Ethiopia',
	eu: 'Euskara (Basque)',
	fi: 'Suomi (Finish)',
	fr: 'Français (French)',
	ga: 'Gaeilge (Gaelic)',
	gd: 'Gaelg (Scots Gaelic)',
	gez: 'ግዕዝ (Geez)',
	gh: 'Ghana',
	gn: 'Guinea',
	gt: 'Guatemala',
	gu: 'Guam',
	gv: 'Gaelg Manninagh (Manx Gaelic)',
	gy: 'Guyana',
	he: 'עברית (Modern Hebrew)',
	hi: 'हिन्दी (Hindi)',
	hlt: 'Matupi Chin',
	hn: 'Honduras',
	ht: 'Kreyòl ayisyen (Haitian Creole)',
	hu: 'Magyar (Hungarian)',
	hy: 'հայերեն (Armenian)',
	is: 'Iceland',
	in: 'India',
	id: 'Indonesia',
	ir: 'Iran',
	iq: 'Iraq',
	il: 'Israel',
	it: 'Italiano (Italian)',
	ja: '日本語 (Japanese)',
	ke: 'Kenya',
	kek: "Qʼeqchiʼ (K'ekchi')",
	kk: 'Қазақша / Qazaqşa / قازاق ٴتىلى / Kazakh',
	km: 'ខ្មែរ (Khmer)',
	tlh: 'Klingon',
	ko: '한국어 (Korean)',
	kpl: 'Kapingamarangi',
	ksw: "ကညီကျိ (S'gaw Karen)",
	lao: 'Laos',
	la: 'Latin',
	lb: 'Lebanon',
	ln: 'Liloba',
	lt: 'Lietuvių (Lithuanian)',
	luo: 'Luo',
	lv: 'Latviešu Valoda (Latvian)',
	lzh: '文言（中文）(Classical Chinese)',
	mal: 'മലയാളം (Malayalam)',
	mg: 'Madagascar (Malagasy)',
	mw: 'Malawi',
	my: 'Malaysia',
	mv: 'Maldives',
	ml: 'Mali',
	mi: 'Maori',
	mx: 'Mexico',
	fm: 'Micronesia',
	mz: 'Mozambique',
	mn: 'Монгол (Mongolian)',
	bm: 'Бирм (Myanmar/Burma)',
	na: 'Namibia',
	nb: 'Norsk: bokmål (Norwegian bokmål)',
	nn: 'Norsk: nynorsk (Norwegian new)',
	nd: 'isiNdebele (Ndebele)',
	np: 'Nepal',
	nl: 'Nederlands (Dutch)',
	nc: 'New Caledonia',
	ne: 'Niger',
	ng: 'Nigeria',
	pk: 'Pakistan',
	pm: 'Panama',
	pg: 'Papua New Guinea',
	py: 'Paraguay',
	pe: 'Peru',
	ph: 'Philippines',
	pl: 'Poland',
	pon: 'Pohnpeian',
	pot: 'Potawatomi',
	ppk: 'Uma',
	prs: 'دری (Dari)',
	pt: 'Português (Portugese)',
	rmq: 'Romaní: Caló (Romany)',
	ro: 'Română (Romanian)',
	ru: 'Русский (Russian)',
	st: 'Saint Lucia',
	sn: 'Senegal',
	rs: 'Српски Srpski (Serbian)',
	sk: 'Slovakia',
	sl: 'Slovenčina (Slovenian)',
	sb: 'Solomon Islands',
	so: 'Soomaali (Somali)',
	kr: 'South Korea',
	ss: 'South Sudan',
	sd: 'Sudan',
	sr: 'Suriname',
	sml: 'Central Sama',
	sna: 'Shona',
	sq: 'Shqip (Albanian)',
	sv: 'Svenska (Swedish)',
	sw: 'Kiswahili (Swahili)',
	syr: 'ܠܫܢܐ ܣܘܪܝܝܐ (Syriac)',
	tj: 'Tajikistan',
	tsg: 'Tausug',
	tz: 'Tanzania',
	th: 'ไทย (Thai)',
	tl: 'Timor Leste',
	tg: 'Togo',
	tpi: 'Tok Pisin',
	to: 'Tonga',
	tn: 'Tunisia',
	tr: 'Türkçe (Turkey)',
	twi: 'Twi',
	ug: 'Uganda',
	uk: 'український (Ukranian)',
	ur: 'اردو (Urdu)',
	vu: 'Vanuatu',
	va: 'Vatican State',
	ve: 'Venezuela',
	vi: 'Vietnamese (Tiếng Việt)',
	vls: 'Vlaams',
	yo: 'Yoruba ',
	zh: '中国人 (Chinese)',
	zm: 'Zambia',
	zw: 'Zimbabwe',
};

bible.Data.verses = [
	[
		31, 25, 24, 26, 32, 22, 24, 22, 29, 32, 32, 20, 18, 24, 21, 16, 27, 33,
		38, 18, 34, 24, 20, 67, 34, 35, 46, 22, 35, 43, 55, 32, 20, 31, 29, 43,
		36, 30, 23, 23, 57, 38, 34, 34, 28, 34, 31, 22, 33, 26,
	],
	[
		22, 25, 22, 31, 23, 30, 25, 32, 35, 29, 10, 51, 22, 31, 27, 36, 16, 27,
		25, 26, 36, 31, 33, 18, 40, 37, 21, 43, 46, 38, 18, 35, 23, 35, 35, 38,
		29, 31, 43, 38,
	],
	[
		17, 16, 17, 35, 19, 30, 38, 36, 24, 20, 47, 8, 59, 57, 33, 34, 16, 30,
		37, 27, 24, 33, 44, 23, 55, 46, 34,
	],
	[
		54, 34, 51, 49, 31, 27, 89, 26, 23, 36, 35, 16, 33, 45, 41, 50, 13, 32,
		22, 29, 35, 41, 30, 25, 18, 65, 23, 31, 40, 16, 54, 42, 56, 29, 34, 13,
	],
	[
		46, 37, 29, 49, 33, 25, 26, 20, 29, 22, 32, 32, 18, 29, 23, 22, 20, 22,
		21, 20, 23, 30, 25, 22, 19, 19, 26, 68, 29, 20, 30, 52, 29, 12,
	],
	[
		18, 24, 17, 24, 15, 27, 26, 35, 27, 43, 23, 24, 33, 15, 63, 10, 18, 28,
		51, 9, 45, 34, 16, 33,
	],
	[
		36, 23, 31, 24, 31, 40, 25, 35, 57, 18, 40, 15, 25, 20, 20, 31, 13, 31,
		30, 48, 25,
	],
	[ 22, 23, 18, 22 ],
	[
		28, 36, 21, 22, 12, 21, 17, 22, 27, 27, 15, 25, 23, 52, 35, 23, 58, 30,
		24, 42, 15, 23, 29, 22, 44, 25, 12, 25, 11, 31, 13,
	],
	[
		27, 32, 39, 12, 25, 23, 29, 18, 13, 19, 27, 31, 39, 33, 37, 23, 29, 33,
		43, 26, 22, 51, 39, 25,
	],
	[
		53, 46, 28, 34, 18, 38, 51, 66, 28, 29, 43, 33, 34, 31, 34, 34, 24, 46,
		21, 43, 29, 53,
	],
	[
		18, 25, 27, 44, 27, 33, 20, 29, 37, 36, 21, 21, 25, 29, 38, 20, 41, 37,
		37, 21, 26, 20, 37, 20, 30,
	],
	[
		54, 55, 24, 43, 26, 81, 40, 40, 44, 14, 47, 40, 14, 17, 29, 43, 27, 17,
		19, 8, 30, 19, 32, 31, 31, 32, 34, 21, 30,
	],
	[
		17, 18, 17, 22, 14, 42, 22, 18, 31, 19, 23, 16, 22, 15, 19, 14, 19, 34,
		11, 37, 20, 12, 21, 27, 28, 23, 9, 27, 36, 27, 21, 33, 25, 33, 27, 23,
	],
	[ 11, 70, 13, 24, 17, 22, 28, 36, 15, 44 ],
	[ 11, 20, 32, 23, 19, 19, 73, 18, 38, 39, 36, 47, 31 ],
	[ 22, 23, 15, 17, 14, 14, 10, 17, 32, 3 ],
	[
		22, 13, 26, 21, 27, 30, 21, 22, 35, 22, 20, 25, 28, 22, 35, 22, 16, 21,
		29, 29, 34, 30, 17, 25, 6, 14, 23, 28, 25, 31, 40, 22, 33, 37, 16, 33,
		24, 41, 30, 24, 34, 17,
	],
	[
		6, 12, 8, 8, 12, 10, 17, 9, 20, 18, 7, 8, 6, 7, 5, 11, 15, 50, 14, 9,
		13, 31, 6, 10, 22, 12, 14, 9, 11, 12, 24, 11, 22, 22, 28, 12, 40, 22,
		13, 17, 13, 11, 5, 26, 17, 11, 9, 14, 20, 23, 19, 9, 6, 7, 23, 13, 11,
		11, 17, 12, 8, 12, 11, 10, 13, 20, 7, 35, 36, 5, 24, 20, 28, 23, 10, 12,
		20, 72, 13, 19, 16, 8, 18, 12, 13, 17, 7, 18, 52, 17, 16, 15, 5, 23, 11,
		13, 12, 9, 9, 5, 8, 28, 22, 35, 45, 48, 43, 13, 31, 7, 10, 10, 9, 8, 18,
		19, 2, 29, 176, 7, 8, 9, 4, 8, 5, 6, 5, 6, 8, 8, 3, 18, 3, 3, 21, 26, 9,
		8, 24, 13, 10, 7, 12, 15, 21, 10, 20, 14, 9, 6,
	],
	[
		33, 22, 35, 27, 23, 35, 27, 36, 18, 32, 31, 28, 25, 35, 33, 33, 28, 24,
		29, 30, 31, 29, 35, 34, 28, 28, 27, 28, 27, 33, 31,
	],
	[ 18, 26, 22, 16, 20, 12, 29, 17, 18, 20, 10, 14 ],
	[ 17, 17, 11, 16, 16, 13, 13, 14 ],
	[
		31, 22, 26, 6, 30, 13, 25, 22, 21, 34, 16, 6, 22, 32, 9, 14, 14, 7, 25,
		6, 17, 25, 18, 23, 12, 21, 13, 29, 24, 33, 9, 20, 24, 17, 10, 22, 38,
		22, 8, 31, 29, 25, 28, 28, 25, 13, 15, 22, 26, 11, 23, 15, 12, 17, 13,
		12, 21, 14, 21, 22, 11, 12, 19, 12, 25, 24,
	],
	[
		19, 37, 25, 31, 31, 30, 34, 22, 26, 25, 23, 17, 27, 22, 21, 21, 27, 23,
		15, 18, 14, 30, 40, 10, 38, 24, 22, 17, 32, 24, 40, 44, 26, 22, 19, 32,
		21, 28, 18, 16, 18, 22, 13, 30, 5, 28, 7, 47, 39, 46, 64, 34,
	],
	[ 22, 22, 66, 22, 22 ],
	[
		28, 10, 27, 17, 17, 14, 27, 18, 11, 22, 25, 28, 23, 23, 8, 63, 24, 32,
		14, 49, 32, 31, 49, 27, 17, 21, 36, 26, 21, 26, 18, 32, 33, 31, 15, 38,
		28, 23, 29, 49, 26, 20, 27, 31, 25, 24, 23, 35,
	],
	[ 21, 49, 30, 37, 31, 28, 28, 27, 27, 21, 45, 13 ],
	[ 11, 23, 5, 19, 15, 11, 16, 14, 17, 15, 12, 14, 16, 9 ],
	[ 20, 32, 21 ],
	[ 15, 16, 15, 13, 27, 14, 17, 14, 15 ],
	[ 21 ],
	[ 17, 10, 10, 11 ],
	[ 16, 13, 12, 13, 15, 16, 20 ],
	[ 15, 13, 19 ],
	[ 17, 20, 19 ],
	[ 18, 15, 20 ],
	[ 15, 23 ],
	[ 21, 13, 10, 14, 11, 15, 14, 23, 17, 12, 17, 14, 9, 21 ],
	[ 14, 17, 18, 6 ],
	[
		25, 23, 17, 25, 48, 34, 29, 34, 38, 42, 30, 50, 58, 36, 39, 28, 27, 35,
		30, 34, 46, 46, 39, 51, 46, 75, 66, 20,
	],
	[ 45, 28, 35, 41, 43, 56, 37, 38, 50, 52, 33, 44, 37, 72, 47, 20 ],
	[
		80, 52, 38, 44, 39, 49, 50, 56, 62, 42, 54, 59, 35, 35, 32, 31, 37, 43,
		48, 47, 38, 71, 56, 53,
	],
	[
		51, 25, 36, 54, 47, 71, 53, 59, 41, 42, 57, 50, 38, 31, 27, 33, 26, 40,
		42, 31, 25,
	],
	[
		26, 47, 26, 37, 42, 15, 60, 40, 43, 48, 30, 25, 52, 28, 41, 40, 34, 28,
		41, 38, 40, 30, 35, 27, 27, 32, 44, 31,
	],
	[ 32, 29, 31, 25, 21, 23, 25, 39, 33, 21, 36, 21, 14, 23, 33, 27 ],
	[ 31, 16, 23, 21, 13, 20, 40, 13, 27, 33, 34, 31, 13, 40, 58, 24 ],
	[ 24, 17, 18, 18, 21, 18, 16, 24, 15, 18, 33, 21, 14 ],
	[ 24, 21, 29, 31, 26, 18 ],
	[ 23, 22, 21, 32, 33, 24 ],
	[ 30, 30, 21, 23 ],
	[ 29, 23, 25, 18 ],
	[ 10, 20, 13, 18, 28 ],
	[ 12, 17, 18 ],
	[ 20, 15, 16, 16, 25, 21 ],
	[ 18, 26, 17, 22 ],
	[ 16, 15, 15 ],
	[ 25 ],
	[ 14, 18, 19, 16, 14, 20, 28, 13, 28, 39, 40, 29, 25 ],
	[ 27, 26, 18, 17, 20 ],
	[ 25, 25, 22, 19, 14 ],
	[ 21, 22, 18 ],
	[ 10, 29, 24, 21, 21 ],
	[ 13 ],
	[ 14 ],
	[ 25 ],
	[
		20, 29, 22, 11, 14, 17, 17, 13, 21, 11, 19, 17, 18, 20, 8, 21, 18, 24,
		21, 15, 27, 21,
	],
];

bible.Data.numberOfLemmasInChapter = [
	[
		102, 129, 135, 148, 75, 133, 114, 132, 123, 150, 116, 119, 112, 155,
		138, 98, 111, 169, 197, 119, 162, 141, 93, 218, 193, 188, 182, 138, 149,
		196, 240, 175, 133, 137, 159, 147, 188, 138, 108, 124, 221, 153, 173,
		155, 143, 193, 162, 135, 235, 147,
	],
	[
		127, 157, 148, 153, 122, 145, 116, 137, 160, 171, 92, 232, 135, 151,
		201, 170, 122, 139, 133, 138, 152, 154, 198, 119, 141, 134, 121, 174,
		177, 162, 108, 185, 137, 210, 150, 141, 97, 144, 177, 118,
	],
	[
		86, 74, 66, 121, 120, 158, 139, 147, 111, 128, 147, 72, 125, 171, 99,
		159, 102, 100, 193, 126, 105, 146, 155, 123, 181, 208, 120,
	],
	[
		137, 105, 158, 151, 140, 139, 160, 113, 110, 167, 212, 106, 179, 206,
		151, 209, 77, 142, 116, 147, 185, 186, 142, 172, 113, 258, 111, 91, 83,
		63, 180, 191, 168, 122, 135, 75,
	],
	[
		228, 175, 182, 253, 168, 125, 172, 132, 174, 146, 184, 159, 138, 157,
		137, 137, 139, 122, 140, 138, 154, 152, 149, 137, 132, 134, 130, 312,
		196, 116, 178, 343, 213, 99,
	],
	[
		130, 152, 131, 120, 131, 143, 183, 198, 168, 183, 157, 120, 173, 123,
		264, 67, 134, 166, 222, 96, 157, 180, 118, 210,
	],
	[
		190, 147, 199, 163, 228, 232, 177, 210, 251, 122, 181, 108, 139, 125,
		147, 207, 83, 180, 185, 223, 146,
	],
	[ 129, 163, 115, 133 ],
	[
		171, 252, 105, 160, 86, 151, 124, 119, 170, 178, 121, 149, 156, 270,
		186, 141, 271, 151, 139, 201, 128, 154, 157, 139, 231, 175, 108, 153,
		91, 185, 98,
	],
	[
		172, 190, 233, 123, 156, 151, 146, 121, 83, 134, 156, 196, 187, 190,
		202, 151, 218, 197, 226, 197, 180, 226, 247, 179,
	],
	[
		201, 223, 169, 223, 129, 165, 226, 262, 185, 188, 227, 167, 141, 198,
		165, 165, 147, 220, 155, 207, 158, 246,
	],
	[
		115, 155, 179, 221, 174, 194, 146, 174, 229, 219, 137, 153, 152, 181,
		160, 153, 209, 241, 260, 141, 157, 142, 252, 130, 194,
	],
	[
		224, 228, 125, 275, 177, 228, 223, 166, 233, 104, 261, 237, 104, 106,
		162, 202, 135, 117, 129, 96, 178, 129, 164, 136, 105, 176, 201, 154,
		195,
	],
	[
		125, 134, 109, 134, 127, 199, 163, 140, 203, 113, 139, 130, 165, 124,
		142, 137, 130, 184, 100, 249, 137, 125, 153, 192, 196, 182, 87, 197,
		223, 174, 168, 221, 165, 203, 186, 157,
	],
	[ 93, 220, 130, 196, 133, 210, 203, 211, 151, 236 ],
	[ 117, 148, 177, 160, 150, 147, 260, 160, 278, 194, 189, 221, 216 ],
	[ 161, 161, 131, 124, 101, 105, 99, 153, 169, 42 ],
	[
		148, 123, 147, 134, 163, 162, 127, 128, 172, 120, 121, 144, 127, 142,
		179, 133, 95, 122, 156, 163, 173, 156, 93, 158, 43, 86, 130, 144, 142,
		174, 213, 109, 159, 162, 91, 167, 132, 208, 164, 135, 189, 136,
	],
	[
		49, 80, 59, 67, 95, 67, 109, 64, 110, 118, 56, 66, 46, 62, 47, 80, 103,
		242, 108, 56, 84, 171, 56, 59, 98, 71, 105, 70, 52, 78, 159, 88, 110,
		110, 153, 88, 162, 125, 103, 134, 88, 82, 48, 138, 121, 76, 51, 91, 119,
		140, 114, 75, 63, 54, 153, 82, 73, 88, 112, 91, 59, 82, 77, 69, 102,
		111, 34, 200, 198, 42, 131, 113, 147, 144, 63, 81, 119, 312, 105, 111,
		100, 54, 112, 85, 73, 93, 48, 118, 217, 101, 98, 92, 36, 117, 71, 72,
		75, 59, 58, 38, 62, 146, 107, 184, 187, 200, 175, 84, 153, 57, 56, 67,
		46, 42, 73, 86, 17, 99, 333, 41, 46, 50, 32, 46, 44, 41, 51, 42, 51, 42,
		32, 98, 37, 22, 100, 71, 60, 62, 134, 93, 82, 62, 88, 100, 94, 67, 115,
		76, 56, 26,
	],
	[
		167, 101, 165, 127, 131, 182, 150, 166, 95, 156, 162, 142, 133, 162,
		161, 158, 166, 129, 161, 169, 163, 169, 173, 184, 173, 151, 164, 151,
		141, 190, 153,
	],
	[ 104, 157, 123, 109, 140, 93, 157, 113, 148, 144, 97, 134 ],
	[ 115, 118, 93, 123, 131, 100, 109, 121 ],
	[
		249, 133, 171, 74, 256, 113, 182, 174, 188, 241, 153, 50, 178, 234, 87,
		144, 131, 87, 175, 73, 141, 192, 135, 168, 111, 154, 131, 235, 198, 302,
		107, 154, 202, 149, 100, 155, 258, 160, 69, 216, 203, 189, 175, 219,
		180, 112, 140, 154, 216, 124, 202, 129, 114, 148, 116, 111, 171, 152,
		181, 176, 125, 113, 145, 99, 200, 216,
	],
	[
		127, 257, 174, 230, 221, 235, 205, 185, 199, 196, 167, 159, 194, 195,
		182, 166, 199, 165, 134, 154, 129, 204, 212, 97, 224, 143, 132, 108,
		175, 180, 291, 241, 179, 135, 127, 166, 137, 154, 136, 139, 133, 138,
		113, 180, 66, 214, 82, 281, 283, 305, 369, 203,
	],
	[ 187, 219, 238, 186, 115 ],
	[
		140, 72, 141, 127, 125, 110, 171, 140, 115, 110, 139, 135, 138, 124, 63,
		285, 171, 127, 102, 203, 193, 182, 245, 180, 112, 161, 228, 165, 144,
		143, 144, 173, 167, 168, 88, 179, 137, 161, 182, 159, 113, 101, 175,
		175, 145, 134, 146, 120,
	],
	[ 125, 253, 169, 223, 188, 179, 187, 162, 204, 155, 242, 111 ],
	[ 90, 161, 55, 140, 119, 90, 137, 108, 145, 144, 96, 106, 137, 79 ],
	[ 145, 243, 159 ],
	[ 117, 140, 121, 142, 185, 144, 112, 129, 145 ],
	[ 168 ],
	[ 113, 78, 80, 101 ],
	[ 144, 128, 113, 135, 125, 150, 176 ],
	[ 131, 132, 183 ],
	[ 145, 173, 170 ],
	[ 160, 143, 173 ],
	[ 114, 158 ],
	[ 129, 96, 88, 82, 79, 105, 104, 141, 160, 117, 137, 105, 95, 156 ],
	[ 125, 137, 152, 70 ],
	[
		130, 161, 143, 177, 252, 191, 177, 212, 218, 237, 199, 260, 269, 202,
		227, 181, 190, 204, 190, 176, 251, 226, 210, 262, 201, 336, 320, 140,
	],
	[
		239, 168, 189, 208, 222, 304, 217, 212, 251, 257, 194, 243, 225, 351,
		250, 156,
	],
	[
		335, 269, 250, 255, 247, 292, 279, 321, 325, 269, 311, 330, 238, 216,
		193, 219, 211, 231, 242, 234, 226, 328, 288, 237,
	],
	[
		199, 146, 162, 224, 190, 241, 204, 218, 148, 172, 241, 251, 171, 133,
		121, 136, 103, 192, 230, 163, 164,
	],
	[
		206, 293, 187, 237, 263, 131, 333, 236, 255, 274, 210, 214, 327, 195,
		239, 267, 259, 216, 274, 274, 290, 211, 235, 198, 192, 236, 310, 251,
	],
	[
		230, 165, 168, 123, 122, 121, 124, 194, 194, 125, 213, 147, 121, 132,
		196, 163,
	],
	[
		156, 100, 134, 158, 109, 126, 187, 94, 160, 169, 162, 149, 92, 195, 247,
		144,
	],
	[ 161, 108, 117, 122, 135, 136, 126, 145, 124, 122, 212, 174, 106 ],
	[ 151, 158, 154, 169, 159, 127 ],
	[ 133, 143, 127, 197, 174, 160 ],
	[ 183, 190, 149, 160 ],
	[ 172, 164, 165, 129 ],
	[ 96, 158, 99, 125, 142 ],
	[ 98, 141, 112 ],
	[ 161, 113, 116, 117, 184, 186 ],
	[ 141, 193, 139, 170 ],
	[ 145, 111, 135 ],
	[ 143 ],
	[ 115, 151, 124, 138, 114, 161, 181, 127, 208, 249, 296, 240, 179 ],
	[ 190, 166, 155, 140, 165 ],
	[ 185, 190, 185, 147, 113 ],
	[ 169, 211, 155 ],
	[ 69, 132, 117, 95, 94 ],
	[ 98 ],
	[ 109 ],
	[ 227 ],
	[
		164, 195, 170, 113, 111, 146, 137, 104, 157, 95, 181, 154, 125, 177, 94,
		154, 141, 198, 171, 133, 203, 149,
	],
];

bible.Data.numberOfWordsInChapter = [
	[
		434, 328, 347, 341, 365, 305, 332, 308, 353, 287, 392, 268, 241, 341,
		258, 223, 355, 437, 563, 282, 436, 367, 275, 918, 405, 466, 638, 323,
		471, 560, 780, 441, 268, 421, 378, 487, 494, 405, 347, 312, 776, 528,
		485, 455, 397, 414, 512, 350, 368, 375,
	],
	[
		240, 340, 395, 453, 318, 404, 370, 470, 521, 497, 174, 751, 325, 474,
		321, 548, 246, 418, 375, 312, 433, 379, 398, 252, 440, 480, 262, 595,
		649, 468, 229, 544, 354, 538, 440, 514, 366, 412, 568, 440,
	],
	[
		252, 200, 249, 542, 322, 411, 480, 570, 318, 327, 593, 117, 893, 818,
		456, 552, 274, 344, 440, 428, 305, 439, 593, 277, 710, 582, 458,
	],
	[
		588, 341, 599, 668, 462, 360, 1072, 361, 354, 382, 549, 196, 394, 635,
		511, 706, 182, 521, 346, 418, 472, 652, 389, 306, 229, 667, 319, 348,
		431, 252, 677, 555, 464, 303, 482, 212,
	],
	[
		654, 532, 461, 813, 472, 318, 412, 293, 499, 324, 508, 536, 312, 351,
		354, 334, 368, 304, 332, 316, 354, 447, 329, 327, 260, 319, 326, 974,
		459, 326, 553, 615, 336, 176,
	],
	[
		320, 403, 293, 390, 288, 474, 494, 616, 414, 766, 409, 248, 439, 278,
		553, 123, 337, 405, 485, 172, 583, 688, 299, 574,
	],
	[
		529, 363, 481, 422, 364, 679, 504, 527, 875, 260, 663, 223, 394, 336,
		321, 554, 192, 548, 529, 746, 375,
	],
	[ 325, 378, 256, 335 ],
	[
		415, 556, 304, 370, 218, 395, 287, 271, 495, 442, 257, 425, 355, 845,
		529, 373, 914, 432, 395, 686, 277, 419, 443, 367, 750, 475, 209, 431,
		218, 487, 202,
	],
	[
		367, 516, 656, 237, 351, 377, 461, 261, 222, 314, 442, 527, 648, 598,
		603, 388, 521, 611, 794, 443, 420, 382, 444, 456,
	],
	[
		813, 806, 472, 404, 299, 510, 791, 1146, 472, 462, 690, 584, 602, 519,
		523, 545, 356, 741, 371, 746, 480, 808,
	],
	[
		359, 427, 435, 671, 489, 529, 408, 516, 611, 621, 363, 357, 416, 479,
		587, 363, 689, 668, 569, 363, 397, 371, 773, 312, 508,
	],
	[
		422, 535, 195, 475, 328, 752, 426, 301, 490, 204, 520, 489, 212, 194,
		365, 409, 408, 243, 319, 143, 492, 307, 333, 270, 287, 355, 406, 381,
		480,
	],
	[
		276, 335, 238, 311, 246, 741, 395, 291, 486, 311, 293, 253, 346, 234,
		252, 259, 239, 558, 182, 580, 321, 243, 385, 455, 493, 369, 129, 450,
		540, 433, 332, 549, 380, 614, 431, 366,
	],
	[ 186, 542, 251, 403, 329, 393, 436, 463, 286, 465 ],
	[ 202, 370, 466, 339, 328, 305, 637, 357, 667, 330, 378, 471, 473 ],
	[ 371, 438, 303, 285, 265, 263, 187, 343, 544, 46 ],
	[
		345, 209, 204, 149, 205, 220, 172, 166, 259, 169, 148, 183, 203, 177,
		261, 172, 112, 143, 213, 208, 240, 210, 118, 203, 43, 100, 169, 207,
		169, 227, 310, 197, 246, 297, 116, 240, 188, 299, 213, 166, 226, 241,
	],
	[
		67, 92, 70, 77, 111, 84, 142, 77, 164, 162, 68, 79, 55, 73, 55, 97, 124,
		397, 126, 70, 104, 253, 57, 89, 159, 85, 149, 96, 91, 97, 220, 110, 161,
		165, 229, 100, 298, 168, 129, 185, 119, 132, 59, 198, 160, 100, 77, 111,
		167, 178, 150, 87, 77, 58, 192, 120, 106, 100, 156, 106, 68, 117, 93,
		82, 109, 154, 53, 310, 291, 47, 203, 162, 193, 195, 87, 90, 154, 530,
		132, 141, 125, 61, 130, 116, 96, 147, 54, 142, 384, 140, 112, 112, 45,
		169, 89, 112, 95, 75, 83, 43, 83, 213, 167, 271, 294, 331, 278, 99, 227,
		65, 74, 79, 60, 52, 135, 131, 17, 198, 1064, 51, 56, 62, 41, 57, 49, 50,
		60, 47, 54, 54, 33, 131, 40, 25, 167, 166, 84, 76, 177, 116, 95, 75,
		117, 130, 152, 85, 141, 111, 64, 37,
	],
	[
		237, 143, 258, 200, 160, 271, 193, 258, 127, 234, 223, 202, 183, 248,
		252, 252, 227, 175, 230, 226, 233, 225, 274, 269, 239, 211, 212, 229,
		204, 301, 219,
	],
	[ 215, 381, 273, 220, 283, 170, 330, 281, 309, 196, 143, 186 ],
	[ 150, 177, 133, 178, 185, 126, 127, 175 ],
	[
		360, 253, 249, 89, 384, 188, 345, 278, 288, 406, 219, 62, 253, 376, 125,
		192, 179, 124, 327, 96, 202, 308, 217, 256, 161, 233, 174, 380, 326,
		492, 156, 203, 275, 220, 126, 385, 566, 281, 146, 357, 351, 288, 314,
		390, 360, 150, 213, 265, 363, 176, 334, 202, 166, 221, 185, 179, 260,
		222, 284, 295, 165, 178, 231, 136, 361, 386,
	],
	[
		266, 512, 410, 422, 430, 415, 539, 334, 389, 319, 384, 262, 377, 356,
		315, 367, 402, 317, 283, 294, 248, 468, 608, 185, 615, 433, 420, 304,
		537, 342, 621, 747, 418, 425, 368, 618, 331, 548, 303, 365, 361, 408,
		237, 623, 93, 402, 107, 580, 584, 691, 889, 564,
	],
	[ 376, 381, 381, 259, 145 ],
	[
		382, 156, 411, 264, 287, 212, 343, 319, 198, 310, 349, 399, 358, 391,
		103, 833, 382, 474, 157, 804, 459, 390, 621, 375, 259, 307, 407, 352,
		344, 342, 311, 482, 517, 458, 194, 565, 446, 370, 434, 724, 370, 285,
		415, 501, 396, 381, 366, 527,
	],
	[ 305, 842, 596, 634, 532, 543, 492, 383, 462, 342, 611, 177 ],
	[ 178, 297, 81, 223, 179, 104, 189, 154, 213, 201, 137, 146, 174, 105 ],
	[ 235, 452, 270 ],
	[ 212, 214, 207, 215, 321, 177, 255, 190, 251 ],
	[ 291 ],
	[ 269, 97, 139, 183 ],
	[ 212, 176, 166, 208, 186, 204, 244 ],
	[ 175, 152, 231 ],
	[ 197, 262, 212 ],
	[ 269, 222, 276 ],
	[ 238, 362 ],
	[ 334, 159, 164, 187, 155, 203, 187, 356, 222, 166, 254, 227, 152, 362 ],
	[ 239, 269, 274, 94 ],
	[
		435, 457, 328, 429, 819, 645, 515, 581, 639, 721, 492, 906, 1076, 550,
		609, 528, 494, 667, 527, 539, 851, 661, 652, 819, 749, 1242, 1001, 326,
	],
	[
		696, 536, 540, 686, 698, 979, 602, 629, 865, 882, 563, 795, 605, 1195,
		666, 300,
	],
	[
		1189, 847, 588, 768, 750, 931, 890, 1092, 1150, 794, 986, 1038, 662,
		607, 560, 597, 567, 677, 753, 700, 586, 1087, 844, 770,
	],
	[
		821, 438, 653, 926, 786, 1240, 844, 1058, 688, 687, 940, 886, 656, 577,
		498, 579, 498, 790, 803, 610, 513,
	],
	[
		505, 842, 501, 685, 771, 278, 1118, 690, 782, 837, 527, 490, 931, 475,
		693, 715, 670, 510, 755, 677, 801, 569, 661, 457, 531, 594, 751, 597,
	],
	[
		542, 449, 429, 399, 432, 367, 468, 654, 523, 337, 577, 305, 270, 379,
		543, 425,
	],
	[
		497, 287, 340, 346, 221, 332, 687, 224, 449, 462, 530, 470, 197, 604,
		846, 323,
	],
	[ 487, 284, 296, 322, 338, 266, 328, 410, 282, 311, 493, 409, 236 ],
	[ 361, 385, 454, 443, 313, 267 ],
	[ 402, 362, 322, 481, 453, 393 ],
	[ 501, 431, 335, 357 ],
	[ 538, 387, 365, 286 ],
	[ 213, 390, 247, 308, 317 ],
	[ 235, 315, 272 ],
	[ 306, 186, 206, 221, 328, 342 ],
	[ 317, 357, 235, 327 ],
	[ 250, 189, 219 ],
	[ 336 ],
	[ 254, 313, 286, 291, 231, 301, 457, 274, 509, 550, 631, 474, 376 ],
	[ 405, 416, 293, 278, 347 ],
	[ 405, 392, 367, 304, 208 ],
	[ 385, 374, 341 ],
	[ 207, 587, 470, 449, 428 ],
	[ 246 ],
	[ 217 ],
	[ 461 ],
	[
		470, 619, 525, 293, 340, 416, 399, 319, 498, 293, 496, 436, 443, 548,
		217, 469, 443, 621, 523, 408, 605, 452,
	],
];

bible.parseReference = function ( textReference ) {
	var bookID = -1;
	var chapter1 = -1;
	var verse1 = -1;
	var chapter2 = -1;
	var verse2 = -1;
	var input = new String( textReference );

	bookID = bible.getBookId( input );

	var afterRange = false;
	var afterSeparator = false;
	var startedNumber = false;
	var currentNumber = '';

	for ( var i = 1; i < input.length; i++ ) {
		var c = input.charAt( i );

		if ( c == ' ' || isNaN( c ) ) {
			if ( ! startedNumber ) continue;

			if ( c == '-' ) {
				afterRange = true;
				afterSeparator = false;
			} else if ( c == ':' || c == ',' || c == '.' ) {
				afterSeparator = true;
			} else {
				// ignore
			}

			// reset
			currentNumber = '';
			startedNumber = false;
		} else {
			startedNumber = true;
			currentNumber += c;

			if ( afterSeparator ) {
				if ( afterRange ) {
					verse2 = parseInt( currentNumber );
				} else {
					// 1:1
					verse1 = parseInt( currentNumber );
				}
			} else {
				if ( afterRange ) {
					chapter2 = parseInt( currentNumber );
				} else {
					// 1
					chapter1 = parseInt( currentNumber );
				}
			}
		}
	}

	// reassign 1:1-2
	if ( chapter1 > 0 && verse1 > 0 && chapter2 > 0 && verse2 <= 0 ) {
		verse2 = chapter2;
		chapter2 = chapter1;
	}
	// fix 1-2:5
	if ( chapter1 > 0 && verse1 <= 0 && chapter2 > 0 && verse2 > 0 ) {
		verse1 = 1;
	}

	// just book
	if (
		bookID > 0 &&
		chapter1 <= 0 &&
		verse1 <= 0 &&
		chapter2 <= 0 &&
		verse2 <= 0
	) {
		chapter1 = 1;
		verse1 = 1;
	}

	// validate max chapter
	if ( chapter1 == -1 ) {
		chapter1 = 1;
	} else if ( chapter1 > bible.Data.verses[ bookID - 1 ].length ) {
		chapter1 = bible.Data.verses[ bookID - 1 ].length;
		verse1 = 1;
	}

	// validate max verse
	if ( verse1 == -1 ) {
		verse1 = 1;
	} else if ( verse1 > bible.Data.verses[ bookID - 1 ][ chapter1 - 1 ] ) {
		verse1 = bible.Data.verses[ bookID - 1 ][ chapter1 - 1 ];
	}

	// finalize
	return new bible.Reference( bookID, chapter1, verse1, chapter2, verse2 );
};

bible.Reference = function () {
	var _bookID = -1;
	var _chapter1 = -1;
	var _verse1 = -1;
	var _chapter2 = -1;
	var _verse2 = -1;

	if ( arguments.length == 0 ) {
		// error
	} else if ( arguments.length == 1 ) {
		// a string that needs to be parsed
		return bible.parseReference( arguments[ 0 ] );
	} else {
		_bookID = arguments[ 0 ];
		_chapter1 = arguments[ 1 ];
		if ( arguments.length >= 3 ) _verse1 = arguments[ 2 ];
		if ( arguments.length >= 4 ) _chapter2 = arguments[ 3 ];
		if ( arguments.length >= 5 ) _verse2 = arguments[ 4 ];
	}

	function padLeft( input, length, s ) {
		while ( input.length < length ) input = s + input;
		return input;
	}

	return {
		bookID: _bookID,
		bookName: bible.getBook( _bookID ),
		chapter: _chapter1,
		verse: _verse1,
		chapter1: _chapter1,
		verse1: _verse1,
		chapter2: _chapter2,
		verse2: _verse2,

		isValid: false,

		toString: function () {
			if ( this.bookID < 1 || this.bookID > bible.Data.books.length )
				return 'invalid';

			var b = bible.Data.books[ this.bookID - 1 ][ 0 ] + ' ';

			if (
				this.chapter1 > 0 &&
				this.verse1 <= 0 &&
				this.chapter2 <= 0 &&
				this.verse2 <= 0
			)
				// John 1
				return b + this.chapter1;
			else if (
				this.chapter1 > 0 &&
				this.verse1 > 0 &&
				this.chapter2 <= 0 &&
				this.verse2 <= 0
			)
				// John 1:1
				return b + this.chapter1 + ':' + this.verse1;
			else if (
				this.chapter1 > 0 &&
				this.verse1 > 0 &&
				this.chapter2 <= 0 &&
				this.verse2 > 0
			)
				// John 1:1-5
				return (
					b + this.chapter1 + ':' + this.verse1 + '-' + this.verse2
				);
			else if (
				this.chapter1 > 0 &&
				this.verse1 <= 0 &&
				this.chapter2 > 0 &&
				this.verse2 <= 0
			)
				// John 1-2
				return b + this.chapter1 + '-' + this.chapter2;
			else if (
				this.chapter1 > 0 &&
				this.verse1 > 0 &&
				this.chapter2 > 0 &&
				this.verse2 > 0
			)
				// John 1:1-2:2
				return (
					b +
					this.chapter1 +
					':' +
					this.verse1 +
					'-' +
					( this.chapter1 != this.chapter2
						? this.chapter2 + ':'
						: '' ) +
					this.verse2
				);
			else return 'unknown';
		},
		toOsis: function () {
			if ( this.bookID <= 0 || this.bookID > bible.Data.books.length )
				return 'invalid';
			return (
				bible.Data.books[ this.bookID - 1 ][ 0 ] +
				'.' +
				this.chapter1 +
				'.' +
				this.verse1
			);
		},
		toChapterCode: function () {
			if ( this.bookID <= 0 || this.bookID > bible.Data.books.length )
				return 'invalid';
			//return this.bookID.toString() + this.chapter1.toString()
			return (
				'c' +
				padLeft( this.bookID.toString(), 3, '0' ) +
				padLeft( this.chapter1.toString(), 3, '0' )
			);
		},
		toVerseCode: function () {
			if ( this.bookID <= 0 || this.bookID > bible.Data.books.length )
				return 'invalid';
			return (
				'v' +
				padLeft( this.bookID.toString(), 3, '0' ) +
				padLeft( this.chapter1.toString(), 3, '0' ) +
				padLeft( this.verse1.toString(), 3, '0' )
			);
		},
		prevChapter: function () {
			this.verse1 = 1;
			this.chapter2 = -1;
			this.verse2 = -1;
			if ( this.chapter1 == 1 && this.bookID > 1 ) {
				this.bookID--;
				this.chapter1 = bible.Data.verses[ this.bookID - 1 ].length;
			} else if ( this.chapter1 === 1 && this.bookID === 1 ) {
				return null;
			} else {
				this.chapter1--;
			}

			this.bookName = bible.getBook( this.bookID );
			return Object.assign( {}, this );
		},
		nextChapter: function () {
			this.verse1 = 1;
			this.chapter2 = -1;
			this.verse2 = -1;
			if ( this.chapter1 < bible.Data.verses[ this.bookID - 1 ].length ) {
				this.chapter1++;
			} else if ( this.bookID < bible.Data.books.length ) {
				this.bookID++;
				this.chapter1 = 1;
			} else {
				return null;
			}

			this.bookName = bible.getBook( this.bookID );
			return Object.assign( {}, this );
		},
		isFirstChapter: function () {
			return this.bookID == 1 && this.chapter1 == 1; //  && this.verse1 == 1);
		},
		isLastChapter: function () {
			var v = bible.Data.verses[ this.bookID - 1 ];

			return (
				this.bookID == bible.Data.books.length &&
				this.chapter1 == v.length
			); //  &&  this.verse1 == v[v.length-1]);
		},
		getBook: function () {
			return bible.Data.books[ this.bookID - 1 ][ 0 ];
		},
	};
};
bible.utility = {};
bible.getBookId = function ( textReference ) {
	var input = textReference;
	var bookID = -1;
	// tear off book name
	for ( var i = bible.Data.books.length - 1; i >= 0; i-- ) {
		for ( var j = 0; j < bible.Data.books[ i ].length; j++ ) {
			var name = new String( bible.Data.books[ i ][ j ] ).toLowerCase();
			var possibleMatch = input
				.substring( 0, Math.floor( name.length, input.length ) )
				.toLowerCase();

			if ( possibleMatch == name ) {
				bookID = i + 1;
				input = input.substring( name.length );
				break;
			}
		}
		if ( bookID > -1 ) break;
	}
	return bookID;
};
bible.getBook = function ( bookId ) {
	if ( bible.Data.books[ bookId - 1 ] ) {
		return bible.Data.books[ bookId - 1 ][ 0 ];
	}
};

bible.getTranslatedBookNameByLanguage = function ( bookName, language ) {
	return bible.Data.bookNamesByLanguage[ language ][
		bible.getBookId( bookName ) - 1
	];
};

bible.getTranslatedBookName = function ( bookName, version ) {
	if ( ! bookName || ! version ) {
		return 'problemo';
	}
	var language = bible.Data.supportedVersions[ version ].language;
	return bible.getTranslatedBookNameByLanguage( bookName, language );
};

bible.isRtlVersion = function ( version, book ) {
	if ( ! version ) {
		return false;
	}

	var versionLanguage = bible.Data.supportedVersions[ version ].language;
	if ( bible.Data.rtlLanguages.indexOf( versionLanguage ) > -1 ) {
		return true;
	}

	if (
		versionLanguage === 'original' &&
		book &&
		bible.Data.otBooks.indexOf( book ) > -1
	) {
		return true;
	}
};

export default bible;
