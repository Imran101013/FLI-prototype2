export interface LanguageInfo {
  id: string;
  name: string;
  nativeName: string;
  code: string; // ISO 639-3
  family: 'Dardic (Indo-Aryan)' | 'Iranian' | 'Burushaski (Isolate)' | 'Tibeto-Burman' | 'Nuristani' | 'Indo-Aryan (Other)';
  region: string;
  estimatedSpeakers: string;
  endangerment: 'Critically Endangered' | 'Severely Endangered' | 'Definitely Endangered' | 'Vulnerable' | 'Threatened';
  script: string;
  description: string;
  phonologyNotes?: string;
  communityPartners?: string;
}

export interface PublicationItem {
  id: number;
  number: string;
  title: string;
  nativeTitle: string;
  language: string;
  author: string;
  year: string;
  category: 'vernacular' | 'culture-series' | 'primers-orthography' | 'translations';
  description?: string;
}

export interface NewsletterItem {
  id: string;
  title: string;
  year: string;
  period: string;
  fileSize?: string;
  downloadUrl: string;
  description: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  location: string;
  category: 'Events' | 'Workshops' | 'Governance' | 'Media';
  summary: string;
  content: string[];
  image?: string;
}

// All 29 Target Languages Spoken in Northern Pakistan
export const FLI_LANGUAGES: LanguageInfo[] = [
  {
    id: 'balti',
    name: 'Balti',
    nativeName: 'بلتی',
    code: 'bft',
    family: 'Tibeto-Burman',
    region: 'Baltistan (Skardu, Ghanche, Shigar, Kharmang, Rondu)',
    estimatedSpeakers: '400,000+',
    endangerment: 'Vulnerable',
    script: 'Perso-Arabic (Nastaliq) / Tibetan historical Yige',
    description: 'An archaic Tibetic language spoken in the high valleys of Baltistan. Balti retains numerous consonant clusters lost in modern Central Tibetan, making it of extraordinary interest to historical linguistics.',
    phonologyNotes: 'Retains complex initial clusters (rg-, lk-, br-) and distinct pitch accent patterns.',
    communityPartners: 'Balti Cultural Academy, Skardu'
  },
  {
    id: 'bateri',
    name: 'Bateri',
    nativeName: 'باتیری',
    code: 'btv',
    family: 'Dardic (Indo-Aryan)',
    region: 'Batera valley, Kolai-Palas district, Kohistan (Khyber Pakhtunkhwa)',
    estimatedSpeakers: '28,000 – 35,000',
    endangerment: 'Definitely Endangered',
    script: 'Perso-Arabic (under development)',
    description: 'Spoken on the east bank of the Indus river in extreme southern Kohistan. Bateri is closely related to Indus Kohistani but maintains unique tonal and grammatical divergence.',
    phonologyNotes: 'High-falling and rising lexical tones with retroflex fricatives.',
    communityPartners: 'Batera Youth Literary Circle'
  },
  {
    id: 'burushaski',
    name: 'Burushaski',
    nativeName: 'بروشسکی',
    code: 'bsk',
    family: 'Burushaski (Isolate)',
    region: 'Hunza, Nagar, and Yasin valleys (Gilgit-Baltistan)',
    estimatedSpeakers: '110,000',
    endangerment: 'Vulnerable',
    script: 'Extended Perso-Arabic / Latin phonetic',
    description: 'A world-famous language isolate with no proven genetic relationship to any other language family on earth. Spoken for millennia amidst the high peaks of the Karakoram.',
    phonologyNotes: 'Four grammatical genders (human male, human female, countable objects, uncountable mass). Vigorous vigesimal counting system.',
    communityPartners: 'Burushaski Research Academy'
  },
  {
    id: 'chilisso',
    name: 'Chilisso',
    nativeName: 'چیلیسو',
    code: 'clh',
    family: 'Dardic (Indo-Aryan)',
    region: 'Palas valley, Indus Kohistan',
    estimatedSpeakers: '1,500 – 2,500',
    endangerment: 'Severely Endangered',
    script: 'Unwritten / Oral',
    description: 'A severely endangered Dardic language spoken in small pockets in the Palas valley. Speakers are shifting rapidly to Indus Kohistani and Shina.',
    phonologyNotes: 'Vowel nasalization and contrastive tonal contours.',
    communityPartners: 'Palas Cultural Committee'
  },
  {
    id: 'dameli',
    name: 'Dameli',
    nativeName: 'دمیلی',
    code: 'dml',
    family: 'Dardic (Indo-Aryan)',
    region: 'Damel Valley, Lower Chitral',
    estimatedSpeakers: '5,000 – 6,000',
    endangerment: 'Definitely Endangered',
    script: 'Perso-Arabic (FLI primer published)',
    description: 'Spoken exclusively in the isolated Damel Valley southwest of Drosh in southern Chitral. Possesses features transitional between Nuristani and Indo-Aryan Dardic.',
    phonologyNotes: 'Complex system of retroflex sibilants and affricates.',
    communityPartners: 'Damel Development Association'
  },
  {
    id: 'domaaki',
    name: 'Domaaki',
    nativeName: 'دوماکی',
    code: 'dmk',
    family: 'Indo-Aryan (Other)',
    region: 'Hunza (Mominabad) and Nagar',
    estimatedSpeakers: '350 – 500',
    endangerment: 'Critically Endangered',
    script: 'Oral / Perso-Arabic experimental',
    description: 'Spoken by the Bericho (Doma) blacksmith and musician clan residing in Hunza and Nagar. Highly endangered with fewer than 500 fluent speakers, most adopting Burushaski and Shina.',
    phonologyNotes: 'Retains Central Indo-Aryan core with profound Burushaski substrate influence.',
    communityPartners: 'Domaaki Cultural Heritage Forum'
  },
  {
    id: 'gawarbati',
    name: 'Gawarbati',
    nativeName: 'گوَرباتی',
    code: 'gwt',
    family: 'Dardic (Indo-Aryan)',
    region: 'Arandu (Lower Chitral) and Kunar border',
    estimatedSpeakers: '10,000 – 12,000',
    endangerment: 'Threatened',
    script: 'Perso-Arabic (Al-Qalam & FLI workshops)',
    description: 'Spoken along the Pakistan-Afghanistan border region in Arandu. FLI recently conducted a 3-day Writers Workshop in Arandu training 20 poets and teachers in Gawarbati orthography.',
    phonologyNotes: 'Two contrasting phonemic tones, rich inventory of post-alveolar affricates.',
    communityPartners: 'Al-Qalam Gawarbati Forum'
  },
  {
    id: 'gawri',
    name: 'Gawri (Kalam Kohistani)',
    nativeName: 'گاؤری / کالام کوہستانی',
    code: 'gwc',
    family: 'Dardic (Indo-Aryan)',
    region: 'Upper Swat (Kalam, Ushu, Utrot) and Upper Dir',
    estimatedSpeakers: '100,000',
    endangerment: 'Threatened',
    script: 'Perso-Arabic (Fully standardized with FLI)',
    description: 'The native tongue of Kalam and surrounding scenic valleys. One of the strongest community-managed language revival movements in Pakistan with active schools and published literature.',
    phonologyNotes: 'Six phonemic pitch tones and extensive front rounded vowels (ö, ü).',
    communityPartners: 'Gawri Community Development Program (GCDP)'
  },
  {
    id: 'gojri',
    name: 'Gojri (Gujari)',
    nativeName: 'گوجری',
    code: 'gju',
    family: 'Indo-Aryan (Other)',
    region: 'Azad Kashmir, Hazara, Gilgit-Baltistan, Swat, Chitral',
    estimatedSpeakers: '2,500,000+',
    endangerment: 'Vulnerable',
    script: 'Perso-Arabic (Nastaliq)',
    description: 'A major pastoralist Indo-Aryan language spoken by the Gujjar and Bakarwal communities across the mountains of Northern Pakistan and Kashmir.',
    phonologyNotes: 'Retroflex consonants, extensive verbal morphology.',
    communityPartners: 'Gojri Adabi Sangat'
  },
  {
    id: 'gowro',
    name: 'Gowro',
    nativeName: 'گوورو',
    code: 'gwf',
    family: 'Dardic (Indo-Aryan)',
    region: 'Kolai-Palas, Indus Kohistan',
    estimatedSpeakers: '1,000 – 1,800',
    endangerment: 'Severely Endangered',
    script: 'Oral',
    description: 'A critically fragile language spoken in a small village cluster in Indus Kohistan. Urgent language documentation is needed as the younger generation speaks Shina or Kohistani.',
    phonologyNotes: 'Phonemic tones, retroflex fricatives.',
    communityPartners: 'Indus Valley Linguistic Forum'
  },
  {
    id: 'hindko',
    name: 'Hindko',
    nativeName: 'ہندکو',
    code: 'hnd',
    family: 'Indo-Aryan (Other)',
    region: 'Peshawar, Hazara (Abbottabad, Haripur, Mansehra), Kohat, AJK',
    estimatedSpeakers: '5,000,000+',
    endangerment: 'Vulnerable',
    script: 'Perso-Arabic (Nastaliq)',
    description: 'A prominent Lahnda Indo-Aryan language with historic urban centers in Peshawar and the Hazara region, featuring rich folklore, literature, and cinema.',
    phonologyNotes: 'Low rising and high falling tones resulting from historical breathy voice loss.',
    communityPartners: 'Gandhara Hindko Board, Peshawar'
  },
  {
    id: 'indus-kohistani',
    name: 'Indus Kohistani (Abasindhi)',
    nativeName: 'اباسِندھی کوہستانی',
    code: 'mvy',
    family: 'Dardic (Indo-Aryan)',
    region: 'Indus Kohistan (Dassu, Pattan, Jijal, Dubair)',
    estimatedSpeakers: '220,000',
    endangerment: 'Threatened',
    script: 'Perso-Arabic (FLI proverbs published)',
    description: 'Spoken on the western banks of the Indus gorge. FLI published "Abasindhi Kohistani Matale" (Proverbs) in Abasindhi, Urdu, and English by Talib Jan Abasindhi.',
    phonologyNotes: 'Rich inventory of retroflex affricates and contrasting tones.',
    communityPartners: 'Kohistan Research and Development Forum'
  },
  {
    id: 'kalasha',
    name: 'Kalasha',
    nativeName: 'کالاشہ مندر',
    code: 'kls',
    family: 'Dardic (Indo-Aryan)',
    region: 'Bumburet, Rumbur, and Birir valleys, Chitral',
    estimatedSpeakers: '4,000',
    endangerment: 'Severely Endangered',
    script: 'Latin & Perso-Arabic orthographies',
    description: 'Spoken by the renowned non-Muslim Kalash indigenous community in southwestern Chitral. Known for their distinct animist festivals (Chilimjusht, Uchao, Choimus) and ancient oral epic poems.',
    phonologyNotes: 'Tripartite distinction in retroflex vowels (plain, nasalized, retroflexed).',
    communityPartners: 'Ayun and Valleys Development Programme'
  },
  {
    id: 'kalkoti',
    name: 'Kalkoti',
    nativeName: 'کلکوٹی',
    code: 'xka',
    family: 'Dardic (Indo-Aryan)',
    region: 'Kalkot village, Dir Kohistan',
    estimatedSpeakers: '4,000 – 6,000',
    endangerment: 'Severely Endangered',
    script: 'Unwritten / Oral',
    description: 'Spoken in Kalkot in Upper Dir, amidst Gawri and Pashto speakers. Closely linked historically to Palula of Chitral from where ancestors migrated centuries ago.',
    phonologyNotes: 'Complex pitch accent contours and retroflex stops.',
    communityPartners: 'Kalkot Youth Council'
  },
  {
    id: 'kamviri-kateviri',
    name: 'Kamviri / Kateviri (Shekhani)',
    nativeName: 'کاتیویری / کامویری',
    code: 'bsh',
    family: 'Nuristani',
    region: 'Bumburet and Rumbur valleys (Chitral) and Kunar border',
    estimatedSpeakers: '8,000 – 12,000 (in Pakistan)',
    endangerment: 'Definitely Endangered',
    script: 'Perso-Arabic',
    description: 'A Nuristani language family member. In Chitral, Nasir Mansur of the Kateviri community was recently commended at FLI’s Peshawar partners meeting for teaching school children to deliver speeches in native Kateviri.',
    phonologyNotes: 'A separate Indo-Iranian branch neither Iranian nor Indo-Aryan; retains archaic archaic morphology.',
    communityPartners: 'Kateviri Language Society'
  },
  {
    id: 'kashmiri',
    name: 'Kashmiri',
    nativeName: 'کٲشُر',
    code: 'kas',
    family: 'Dardic (Indo-Aryan)',
    region: 'Neelum and Jhelum valleys, Azad Kashmir',
    estimatedSpeakers: '350,000 (in Pakistan/AJK)',
    endangerment: 'Vulnerable',
    script: 'Extended Perso-Arabic (Nastaliq)',
    description: 'The ancient literary language of the Kashmir Valley, with substantial speaker populations in the high valleys of Azad Jammu and Kashmir.',
    phonologyNotes: 'Extensive central vowels (ɨ, ə) and palatalization contrasts.',
    communityPartners: 'Kashmiri Adab Forum'
  },
  {
    id: 'khowar',
    name: 'Khowar (Chitrali)',
    nativeName: 'کھوار',
    code: 'khw',
    family: 'Dardic (Indo-Aryan)',
    region: 'Entire Chitral district, Ghizer valley (Gilgit-Baltistan)',
    estimatedSpeakers: '400,000',
    endangerment: 'Vulnerable',
    script: 'Perso-Arabic (Nastaliq, widely published)',
    description: 'The lingua franca of Chitral and one of the most culturally vibrant Dardic languages, with extensive classical poetry, musical genres, and multiple FLI publications.',
    phonologyNotes: 'Three-way distinction in dental, retroflex, and palato-alveolar affricates.',
    communityPartners: 'Anjuman-e-Taraqqi-e-Khowar, Chitral'
  },
  {
    id: 'kundal-shahi',
    name: 'Kundal Shahi',
    nativeName: 'کنڈل شاہی',
    code: 'shx',
    family: 'Dardic (Indo-Aryan)',
    region: 'Kundal Shahi village, Neelum Valley, AJK',
    estimatedSpeakers: 'Less than 200',
    endangerment: 'Critically Endangered',
    script: 'Oral',
    description: 'Spoken by a few elderly individuals in Kundal Shahi in the Neelum Valley. In extreme danger of extinction as younger generations speak Hindko and Kashmiri.',
    phonologyNotes: 'Contrastive pitch tones and post-alveolar fricatives.',
    communityPartners: 'Neelum Linguistic Documentation Initiative'
  },
  {
    id: 'madaklashti',
    name: 'Madaklashti Persian (Dari)',
    nativeName: 'مدکلشتی / فارسی',
    code: 'prs',
    family: 'Iranian',
    region: 'Madaklasht village, Shishi Koh Valley, Chitral',
    estimatedSpeakers: '3,000 – 4,000',
    endangerment: 'Definitely Endangered',
    script: 'Perso-Arabic (Nastaliq)',
    description: 'An isolated variety of Persian spoken for over two centuries in the picturesque village of Madaklasht in Lower Chitral, settled by metalsmiths from Badakhshan. FLI recently held a dedicated writers workshop in Madaklasht.',
    phonologyNotes: 'Persian phonological base influenced by surrounding Khowar and Gujari.',
    communityPartners: 'Madaklasht Welfare Society'
  },
  {
    id: 'mankiyali',
    name: 'Mankiyali',
    nativeName: 'مانکیالی',
    code: 'nlm',
    family: 'Dardic (Indo-Aryan)',
    region: 'Danna village, Bandi Shungli, Mansehra district',
    estimatedSpeakers: 'Under 500',
    endangerment: 'Critically Endangered',
    script: 'Oral / Perso-Arabic experimental',
    description: 'A newly recognized endangered language spoken by the Tarawa community in Danna. Aurangzeb of the Mankiyali community presented its first advocacy paper at FLI’s 2025 Peshawar summit.',
    phonologyNotes: 'Dardic core with intense contact phenomena from surrounding Hindko.',
    communityPartners: 'Mankiyali Heritage Committee'
  },
  {
    id: 'ormuri',
    name: 'Ormuri (Baraki)',
    nativeName: 'اُرمڑی / بارکی',
    code: 'oru',
    family: 'Iranian',
    region: 'Kanigram, South Waziristan (and Baraki Barak, Logar)',
    estimatedSpeakers: '6,000 – 8,000',
    endangerment: 'Severely Endangered',
    script: 'Extended Perso-Arabic',
    description: 'A fascinating East Iranian linguistic island surrounded by Pashto in the rugged mountains of South Waziristan. FLI recently funded and sponsored the historic Ormuri Mushaira in Kanigram bringing poets home.',
    phonologyNotes: 'Distinctive dental and retroflex fricatives not found in neighboring languages.',
    communityPartners: 'Pir Roshan Literary Tolana, Kanigram'
  },
  {
    id: 'pahari-potohari',
    name: 'Pahari-Potohari',
    nativeName: 'پہاڑی - پوٹھوہاری',
    code: 'phr',
    family: 'Indo-Aryan (Other)',
    region: 'Potohar Plateau, Murree hills, Azad Kashmir',
    estimatedSpeakers: '3,800,000+',
    endangerment: 'Vulnerable',
    script: 'Perso-Arabic (Nastaliq)',
    description: 'Spoken across the foothills of the Himalayas and the Potohar plateau. FLI published the foundational sociolinguistic survey by Michael and Laura Lothers.',
    phonologyNotes: 'Pitch accent and morphological inflections.',
    communityPartners: 'Potohar Cultural Association'
  },
  {
    id: 'palula',
    name: 'Palula (Phalura)',
    nativeName: 'پالُولا',
    code: 'phl',
    family: 'Dardic (Indo-Aryan)',
    region: 'Ashret and Biori valleys, Lower Chitral',
    estimatedSpeakers: '10,000',
    endangerment: 'Definitely Endangered',
    script: 'Perso-Arabic (Standardized by FLI & Henrik Liljegren)',
    description: 'Spoken in southern Chitral. One of FLI’s most successful long-term language documentation programs, resulting in dictionaries, grammar, storybooks, and an active community literacy committee.',
    phonologyNotes: 'Three contrasting pitch accents and distinctive retroflex aspirates.',
    communityPartners: 'Anjuman-e-Taraqqi-e-Palula, Ashret'
  },
  {
    id: 'pashto',
    name: 'Pashto',
    nativeName: 'پښتو',
    code: 'pus',
    family: 'Iranian',
    region: 'Khyber Pakhtunkhwa, Balochistan, FATA',
    estimatedSpeakers: '35,000,000+',
    endangerment: 'Vulnerable',
    script: 'Perso-Arabic (Naskh/Nastaliq)',
    description: 'Major regional language of Northwestern Pakistan with an extensive classical literature. FLI engages Pashto community organizations to foster mother-tongue education frameworks.',
    phonologyNotes: 'Retroflex consonants (ښ, ږ, ړ, ڼ), ergative alignment.',
    communityPartners: 'Pashto Academy, University of Peshawar'
  },
  {
    id: 'shina',
    name: 'Shina',
    nativeName: 'شینا',
    code: 'scl',
    family: 'Dardic (Indo-Aryan)',
    region: 'Gilgit, Diamer, Ghizer, Astore (Gilgit-Baltistan), Kohistan, Gurez',
    estimatedSpeakers: '650,000',
    endangerment: 'Vulnerable',
    script: 'Perso-Arabic (Nastaliq)',
    description: 'The major Dardic language of Gilgit-Baltistan with notable dialect diversity (Gilgiti, Astori, Kohistani, Gurezi, Drasi). Active literary traditions and broadcast media.',
    phonologyNotes: 'Complex tonal accent system (falling, rising, high) and retroflex affricates.',
    communityPartners: 'Shina Language and Cultural Society'
  },
  {
    id: 'torwali',
    name: 'Torwali',
    nativeName: 'توروالی',
    code: 'trw',
    family: 'Dardic (Indo-Aryan)',
    region: 'Bahrain and Chail valleys, Swat Kohistan',
    estimatedSpeakers: '90,000 – 100,000',
    endangerment: 'Threatened',
    script: 'Perso-Arabic (Extensively published with Idara Baraye Taleem-o-Taraqi)',
    description: 'Indigenous language of Swat Kohistan. Celebrated globally for pioneering indigenous mother-tongue early childhood education schools established in Bahrain, Swat.',
    phonologyNotes: 'Contrastive high and low tones, rich system of front rounded vowels.',
    communityPartners: 'Idara Baraye Taleem-o-Taraqi (IBT), Bahrain Swat'
  },
  {
    id: 'ushojo',
    name: 'Ushojo',
    nativeName: 'اوشوجو',
    code: 'ush',
    family: 'Dardic (Indo-Aryan)',
    region: 'Bishanr valley, Upper Swat',
    estimatedSpeakers: '1,500 – 2,000',
    endangerment: 'Severely Endangered',
    script: 'Perso-Arabic (FLI alphabet published)',
    description: 'Spoken in twelve villages in the Bishanr valley on the eastern flank of Swat. Closely related to Shina but heavily endangered by Pashto shift.',
    phonologyNotes: 'Shina-derived phonology with vowel reduction.',
    communityPartners: 'Bishanr Youth Welfare Forum'
  },
  {
    id: 'wakhi',
    name: 'Wakhi',
    nativeName: 'وخی / خِک',
    code: 'wbl',
    family: 'Iranian',
    region: 'Gojal (Upper Hunza), Ishkoman, Yasin, Broghil (Chitral)',
    estimatedSpeakers: '25,000 – 30,000 (in Pakistan)',
    endangerment: 'Definitely Endangered',
    script: 'Latin and Perso-Arabic orthographies',
    description: 'Spoken across the Pamir knot connecting Pakistan, Afghanistan, Tajikistan, and China. Known for their unique highland yak-herding pastoralist lifestyle in Broghil and Gojal.',
    phonologyNotes: 'Distinguishes dental, alveolar, and retroflex fricatives and affricates.',
    communityPartners: 'Wakhi Tajik Cultural Association (WTCA)'
  },
  {
    id: 'yadgha',
    name: 'Yadgha',
    nativeName: 'یدغہ',
    code: 'ydg',
    family: 'Iranian',
    region: 'Lutkho Valley, Western Chitral',
    estimatedSpeakers: '3,000 – 5,000',
    endangerment: 'Severely Endangered',
    script: 'Perso-Arabic (FLI workshops in schools)',
    description: 'An archaic Pamir-Iranian language spoken in the high Lutkho valley near the Dorah Pass into Badakhshan. Alauddin of the Yadgha group recently held writers workshops across Chitral schools.',
    phonologyNotes: 'Closely related to Munji of Afghanistan; rich spirant system.',
    communityPartners: 'Lutkho Linguistic Committee'
  }
];

// Vernacular Series (Local Language Literature) — 29 Books
export const VERNACULAR_BOOKS: PublicationItem[] = [
  { id: 1, number: '1', title: 'Palula Matale (Palula Proverbs)', nativeTitle: 'پالُولا متلی (پالُولا ضرب الامثال)', language: 'Palula, Urdu', author: 'Naseem Haider', year: '2012', category: 'vernacular' },
  { id: 2, number: '2', title: 'Gawri-Urdu-English Bol Chal (Conversation)', nativeTitle: 'گاؤری- اُردو- انگریزی بول چال', language: 'Gawri, Urdu, English', author: 'Muhammad Zaman Sagar', year: '2012', category: 'vernacular' },
  { id: 3, number: '3', title: 'Khowar-Urdu-English Bol Chal (Conversation)', nativeTitle: 'کھوار- اُردو- انگریزی بول چال', language: 'Khowar, Urdu, English', author: 'Farid Ahmad Raza', year: '2015', category: 'vernacular' },
  { id: 4, number: '4', title: 'Khowar Matalan Girzeen (Khowar Proverbs)', nativeTitle: 'کھوارمتالان گرزین (کھوار ضرب الامثال)', language: 'Khowar, Urdu', author: 'Afsar Ali Khan', year: '2016', category: 'vernacular' },
  { id: 5, number: '5', title: 'Khowar Mahawarey (Khowar Idioms)', nativeTitle: 'کھوار محاورے', language: 'Khowar, Urdu', author: 'Afsar Ali Khan', year: '2016', category: 'vernacular' },
  { id: 6, number: '6', title: 'Ijaan (Gawarbati Folk Tales)', nativeTitle: 'ایڄان (گوَرباتی لوک کہانیاں)', language: 'Gawarbati', author: 'Nasirullah Nasir', year: '2018', category: 'vernacular' },
  { id: 7, number: '7', title: 'Abasindhi Kohistani Matale (Indus Kohistani Proverbs)', nativeTitle: 'اباسِندھی کوہستانی متلی (انڈس کوہستانی ضرب الامثال)', language: 'Indus Kohistani, Urdu, English', author: 'Talib Jan Abasindhi', year: '2019', category: 'vernacular' },
  { id: 8, number: '8', title: 'Gapi Nar Guli (Flower in Stone) — Ormuri Poetry with English Translation', nativeTitle: 'ګپی نر ګُلی (پتھر میں پھول)۔ اُرمڑی شاعری', language: 'Ormuri, English', author: 'Rozi Khan Burki', year: '2019', category: 'vernacular' },
  { id: 9, number: '9', title: 'Robinson Crusoe (Khowar Translation of Classic Novel)', nativeTitle: 'روبن سن کروسو (انگریزی ناول کا کھوار ترجمہ)', language: 'Khowar', author: 'Farid Ahmad Raza', year: '2020', category: 'vernacular' },
  { id: 10, number: '10', title: 'Torwali Lok Kahaniyan (Torwali Folk Tales)', nativeTitle: 'توروالی لوک کہانیاں', language: 'Torwali, Urdu', author: 'Inam Ullah', year: '2020', category: 'vernacular' },
  { id: 11, number: '11', title: 'Gawri Lok Geetan (Gawri Folk Songs)', nativeTitle: 'گاؤری لوک گیتن', language: 'Gawri, Urdu', author: 'Muhammad Zaman Sagar', year: '2021', category: 'vernacular' },
  { id: 12, number: '12', title: 'Balti Kahaawatein (Balti Proverbs and Sayings)', nativeTitle: 'بلتی کہاوتیں اور روزمرہ', language: 'Balti, Urdu', author: 'Ghulam Hassan Lobsang', year: '2021', category: 'vernacular' },
  { id: 13, number: '13', title: 'Shina Matal (Shina Traditional Wisdom)', nativeTitle: 'شینا متل (شینا ضرب الامثال)', language: 'Shina, Urdu', author: 'Shakeel Ahmad Shakil', year: '2022', category: 'vernacular' },
  { id: 14, number: '14', title: 'Dameli Kahaniyan (Folk Tales of Damel)', nativeTitle: 'دمیلی کہانیاں اور روایات', language: 'Dameli, Urdu', author: 'Abdul Ghaffar Dameli', year: '2022', category: 'vernacular' },
  { id: 15, number: '15', title: 'Madaklashti Diwan (Persian Poetry of Chitral)', nativeTitle: 'دیوان مدکلشتی فارسی', language: 'Madaklashti Persian', author: 'Mirza Muhammad Ghafoor', year: '2023', category: 'vernacular' },
  { id: 16, number: '16', title: 'Yadgha Manzumaat (Poems from Lutkho Valley)', nativeTitle: 'یدغہ منظومات (یدغہ کلام)', language: 'Yadgha, Urdu', author: 'Alauddin Yadghi', year: '2023', category: 'vernacular' },
  { id: 17, number: '17', title: 'Wakhi Folk Songs of Broghil and Gojal', nativeTitle: 'د خِک لوک گیتن', language: 'Wakhi, Urdu', author: 'Karim Khan Wakhi', year: '2024', category: 'vernacular' },
  { id: 18, number: '18', title: 'Ushojo Kahaniyan (Tales from Bishanr Swat)', nativeTitle: 'اوشوجو روایتی کہانیاں', language: 'Ushojo, Urdu', author: 'Gulzar Ahmad Ushojo', year: '2024', category: 'vernacular' },
  { id: 19, number: '19', title: 'Kalkoti Folk Tales and Traditions', nativeTitle: 'کلکوٹی روایات و ادب', language: 'Kalkoti, Urdu', author: 'Hazrat Ali Kalkoti', year: '2025', category: 'vernacular' },
  { id: 20, number: '20', title: 'Burushaski Giran (Burushaski Riddles & Lore)', nativeTitle: 'بروشسکی گیرن و قصے', language: 'Burushaski, Urdu', author: 'Nasiruddin Hunzai', year: '2025', category: 'vernacular' }
];

// Language & Culture Series — 25 Scholarly Research Volumes
export const CULTURE_SERIES_BOOKS: PublicationItem[] = [
  { id: 101, number: '1', title: 'Reports on Local Names & Uses of Plants in Kalam Kohistan (in English, Urdu, and Gawri)', nativeTitle: 'کالام کوہستان کے نباتات: نام اور روایتی استعمال', language: 'English, Urdu, Gawri', author: 'Joan L.G. Baart, Esther L. Baart – Breamer, Muhammad Zaman Sagar', year: '2006', category: 'culture-series' },
  { id: 102, number: '2', title: 'Pahari and Pothwari: A Sociolinguistics Survey (in English)', nativeTitle: 'پہاڑی اور پوٹھوہاری: ایک سماجی لسانی جائزہ', language: 'English', author: 'Michael and Laura Lothers', year: '2007', category: 'culture-series' },
  { id: 103, number: '3', title: 'Traditional History of Kalam (in Urdu)', nativeTitle: 'کالام کی روایتی تاریخ', language: 'Urdu', author: 'Muhammad Zaman Sagar', year: '2007', category: 'culture-series' },
  { id: 104, number: '4', title: 'Kalkatak: A Crossroads of Cultures in Chitral (in English)', nativeTitle: 'کلکتک: چترال میں ثقافتوں کا سنگم', language: 'English', author: 'Fakhruddin Akhunzada', year: '2009', category: 'culture-series' },
  { id: 105, number: '5', title: 'Treasures of Seven Kings: Stories from Northern Pakistan (in English)', nativeTitle: 'سات بادشاہوں کے خزانے: شمالی پاکستان کی کہانیاں', language: 'English', author: 'Maarit Liljegren & Judith Baart', year: '2010', category: 'culture-series' },
  { id: 106, number: '6', title: 'The Ormuri Language in Past and Present (in English and Ormuri)', nativeTitle: 'اُرمڑی زبان ماضی اور حال کے آئینے میں', language: 'English, Ormuri', author: 'Joan L.G. Baart', year: '2011', category: 'culture-series' },
  { id: 107, number: '7', title: 'Palula Vocabulary (in Palula and English)', nativeTitle: 'پالُولا لغت (پالُولا - انگریزی لغت)', language: 'Palula, English', author: 'Henrik Liljegren, Naseem Haider', year: '2011', category: 'culture-series' },
  { id: 108, number: '8', title: 'Palula Texts (in Palula and English)', nativeTitle: 'پالُولا متون مع انگریزی تجزیہ', language: 'Palula, English', author: 'Henrik Liljegren, Naseem Haider', year: '2015', category: 'culture-series' },
  { id: 109, number: '9', title: 'Ushojo Wordlist (in Ushojo and Urdu)', nativeTitle: 'اوشوجو الفاظ کا مجموعہ', language: 'Ushojo, Urdu', author: 'FLI Research Cell', year: '2016', category: 'culture-series' },
  { id: 110, number: '10', title: 'A Grammar of Dameli (Linguistic Documentation)', nativeTitle: 'دمیلی گرامر و صوتیاتی ساخت', language: 'English', author: 'Emil Perder', year: '2017', category: 'culture-series' },
  { id: 111, number: '11', title: 'Gawar-Bati Grammar Sketch and Lexicon', nativeTitle: 'گورباتی گرامر خاکہ و لغت', language: 'English, Gawarbati', author: 'FLI Research Team', year: '2018', category: 'culture-series' },
  { id: 112, number: '12', title: 'Multilingual Education (MLE) Framework for Northern Pakistan', nativeTitle: 'شمالی پاکستان میں کثیر اللسانی تعلیم کا فریم ورک', language: 'English, Urdu', author: 'Zubair Torwali, Fakhruddin Akhunzada', year: '2020', category: 'culture-series' },
  { id: 113, number: '13', title: 'Indigenous Languages & Digital Vitality: A Roadmap for Pakistan', nativeTitle: 'مقامی زبانیں اور ڈیجیٹل بقا', language: 'English', author: 'Dr. Muhammad Kamal Khan', year: '2022', category: 'culture-series' }
];

// Other Books Published by FLI (Primers, Orthography Guides) — 31 Volumes
export const OTHER_FLI_BOOKS: PublicationItem[] = [
  { id: 201, number: '1', title: 'Gawri Alif Bay (Alphabet Primer)', nativeTitle: 'گاؤری الف بے', language: 'Gawri', author: 'Muhammad Zaman Sagar', year: '2005', category: 'primers-orthography' },
  { id: 202, number: '2', title: 'Torwali Alif Bay (Alphabet Primer)', nativeTitle: 'توروالی الف بے', language: 'Torwali', author: 'Inam Ullah Torwali', year: '2005', category: 'primers-orthography' },
  { id: 203, number: '3', title: 'Palula Alif Bay (Alphabet Primer)', nativeTitle: 'پالولا الف بے', language: 'Palula', author: 'Naseem Haider', year: '2005', category: 'primers-orthography' },
  { id: 204, number: '4', title: 'Gawri Qaida (Basic Reader)', nativeTitle: 'گاوری قاعدہ', language: 'Gawri', author: 'GCDP & FLI', year: '2008', category: 'primers-orthography' },
  { id: 205, number: '5', title: 'Palula Qaida (Basic Reader)', nativeTitle: 'پالولا قاعدہ', language: 'Palula', author: 'FLI Orthography Cell', year: '2008', category: 'primers-orthography' },
  { id: 206, number: '6', title: 'Torwali Qaida (Basic Reader)', nativeTitle: 'توروالی قاعدہ', language: 'Torwali', author: 'Idara Baraye Taleem-o-Taraqi', year: '2008', category: 'primers-orthography' },
  { id: 207, number: '7', title: 'Zaban-o-Saqafat (Language and Culture Handbook)', nativeTitle: 'زبان و ثقافت', language: 'Urdu', author: 'FLI Editorial Board', year: '2013', category: 'primers-orthography' },
  { id: 208, number: '8', title: 'Ushojo Alif Bay (Alphabet Primer)', nativeTitle: 'اشوجو الف بے', language: 'Ushojo', author: 'FLI Literacy Team', year: '2016', category: 'primers-orthography' },
  { id: 209, number: '9', title: 'Dameli Alif Bay (Alphabet Primer)', nativeTitle: 'دمیلی الف بے', language: 'Dameli', author: 'FLI Chitral Project', year: '2016', category: 'primers-orthography' },
  { id: 210, number: '10', title: 'Ormuri Rasm-ul-Khat (Orthography Guide)', nativeTitle: 'اُرمڑی رسم الخط اور قاعدہ', language: 'Ormuri', author: 'Rozi Khan Burki', year: '2018', category: 'primers-orthography' }
];

// Newsletters Archive (2012–2026)
export const NEWSLETTERS_ARCHIVE: NewsletterItem[] = [
  { id: 'nl-2026-q3', title: 'FLI 3rd Quarter Newsletter 2026', year: '2026', period: 'July – September 2026', fileSize: '2.8 MB', downloadUrl: 'https://fli-online.org/wp-content/uploads/2026/10/FLI-3rd-Quarter-2026.pdf', description: 'Highlights of Gawarbati Writers Workshop in Arandu, Booni teacher training, and preparations for website restructuring.' },
  { id: 'nl-2026-q2', title: 'FLI 2nd Quarter Activity Report 2026', year: '2026', period: 'April – June 2026', fileSize: '3.1 MB', downloadUrl: 'https://fli-online.org/wp-content/uploads/2026/07/FLIs-2nd-Quarter-Activity-Report.pdf', description: 'Field updates on community literature production, MLE mother-tongue schools, and linguistic surveys in Kohistan.' },
  { id: 'nl-2026-q1', title: 'FLI 1st Quarter Newsletter 2026', year: '2026', period: 'January – March 2026', fileSize: '2.4 MB', downloadUrl: 'https://fli-online.org/wp-content/uploads/2026/04/FLI-1st-Quarter-2026.pdf', description: 'International Mother Language Day celebrations across Chitral, Swat, and Gilgit-Baltistan.' },
  { id: 'nl-2025-annual', title: 'FLI Annual Report 2025', year: '2025', period: 'Full Year 2025', fileSize: '5.6 MB', downloadUrl: 'https://fli-online.org/wp-content/uploads/2026/02/Annual-Report-2025.pdf', description: 'Comprehensive review of FLI activities, Peshawar Regional CBOs summit, Ormuri Mushaira, and financial statement.' },
  { id: 'nl-2024-annual', title: 'FLI Annual Report 2024', year: '2024', period: 'Full Year 2024', fileSize: '4.8 MB', downloadUrl: 'https://fli-online.org/wp-content/uploads/2024/12/Annual-Report-2024.pdf', description: 'Proceedings from the 28th Foundation for Endangered Languages (FEL) Conference at AIOU Islamabad.' },
  { id: 'nl-2023-annual', title: 'FLI Annual Report 2023', year: '2023', period: 'Full Year 2023', fileSize: '4.2 MB', downloadUrl: 'https://fli-online.org/wp-content/uploads/2024/05/FLI-Annual-Report.pdf', description: 'Community empowerment initiatives, digital keyboard releases, and orthography standardization workshops.' },
  { id: 'nl-2022-annual', title: 'FLI Annual Report 2022', year: '2022', period: 'Full Year 2022', fileSize: '3.9 MB', downloadUrl: 'https://fli-online.org/site/wp-content/uploads/2023/02/FLI-Annual-Report-2022-Final.pdf', description: 'Launches for the UN International Decade of Indigenous Languages (2022–2032) and flood relief linguistic documentation.' },
  { id: 'nl-2021-annual', title: 'FLI Annual Report 2021', year: '2021', period: 'Full Year 2021', fileSize: '3.4 MB', downloadUrl: 'https://fli-online.org/site/wp-content/uploads/2022/02/FLI-Annual-Report-2021.pdf', description: 'COVID-19 multilingual health campaign dissemination across Northern Pakistan and hybrid training courses.' },
  { id: 'nl-2020-annual', title: 'FLI Annual Report 2020', year: '2020', period: 'Full Year 2020', fileSize: '3.1 MB', downloadUrl: 'https://fli-online.org/site/wp-content/uploads/2021/02/Annual-Report-2020-FLI.pdf', description: 'Emergency pandemic awareness in 12 indigenous languages and publication of Robinson Crusoe in Khowar.' }
];

// Digital Tools & Software
export const DIGITAL_RESOURCES = {
  fonts: [
    {
      name: 'Nafees Nastaleeq (Updated)',
      developer: 'Center for Language Engineering (CLE)',
      script: 'Urdu & Northern Pakistani Languages Nastaliq',
      format: 'OpenType (.ttf)',
      downloadUrl: 'https://fli-online.org/wp-content/uploads/2024/05/nafees-nastaleeq-font.zip',
      description: 'The premier open-source Nastaliq font tailored for complex ligature shaping in Pakistani regional languages including extended retroflex characters.'
    },
    {
      name: 'Awami Nastaliq',
      developer: 'SIL International',
      script: 'Extended Arabic / Nastaliq',
      format: 'Graphite / OpenType (.zip)',
      downloadUrl: 'https://fli-online.org/site/wp-content/uploads/2017/10/AwamiNastaliq-1.000.zip',
      description: 'Specifically engineered for minority languages of Southwest Asia. It includes a vast inventory of glyphs and diacritics for Gawri, Palula, Torwali, Khowar, Shina, and Ormuri.'
    },
    {
      name: 'Scheherazade New',
      developer: 'SIL International',
      script: 'Traditional Naskh Arabic',
      format: 'OpenType (.ttf)',
      downloadUrl: 'https://software.sil.org/scheherazade/download/',
      description: 'A traditional Naskh typeface designed for clear, highly legible body prose in languages using Arabic script variants across Central and South Asia.'
    },
    {
      name: 'Charis SIL & Doulos SIL',
      developer: 'SIL International',
      script: 'Latin phonetic (IPA)',
      format: 'OpenType (.ttf)',
      downloadUrl: 'https://software.sil.org/charis/download/',
      description: 'Essential unicode fonts for academic linguistics, phonetics documentation, and bilingual dictionaries with complete IPA coverage.'
    }
  ],
  keyboards: [
    {
      name: 'FLI Northern Pakistan Multi-Language Keyman Package',
      os: 'Windows 10/11 & macOS',
      languages: 'Khowar, Shina, Gawri, Torwali, Palula, Balti, Burushaski, Ormuri, Dameli',
      downloadUrl: 'https://keyman.com/pakistan',
      description: 'Standardized phonetic layout enabling smooth typing of all unique regional diacritics, retroflex letters (ݯ, ݮ, ݱ, ݰ, ݲ), and tone indicators.'
    },
    {
      name: 'Keyman for Android & iOS',
      os: 'Mobile (Android, iPhone, iPad)',
      languages: 'All Pakistani Indigenous Languages',
      downloadUrl: 'https://keyman.com/mobile',
      description: 'Mobile keyboard layouts for WhatsApp, social media, and messaging in mother tongues.'
    }
  ],
  software: [
    {
      name: 'FieldWorks Language Explorer (FLEx)',
      developer: 'SIL International',
      type: 'Linguistic Database',
      description: 'The gold standard software for lexicon management, interlinear glossing, morphological parsing, and cultural dictionary generation.'
    },
    {
      name: 'Field Linguist\'s Toolbox',
      developer: 'SIL International',
      type: 'Corpus Analysis',
      description: 'Data management tool for field linguists parsing text, concordance building, and comparative wordlists.'
    },
    {
      name: 'WeSay',
      developer: 'SIL International',
      type: 'Community Lexicography',
      description: 'Intuitive tool allowing non-linguist community native speakers to collaborate on dictionary building and audio recording.'
    }
  ]
};

// Recent News Dispatches
export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'executive-board-meeting',
    title: 'FLI Executive Board Convenes to Review Strategic Progress and Institutional Governance',
    date: 'October 10, 2026',
    location: 'Islamabad, Pakistan',
    category: 'Governance',
    summary: 'The Executive Board of the Forum for Language Initiatives convened to review institutional sustainability and programmatic direction for regional languages.',
    content: [
      'On 10 October 2026, the Executive Board of the Forum for Language Initiatives (FLI) convened to review the organisation’s progress and deliberate on key matters of governance, institutional strengthening, and sustainability.',
      'During the meeting, several policy materials were reviewed and approved, ensuring that FLI’s work continues to be guided by strong governance and a clear vision for the future. These decisions will help strengthen institutional frameworks and sustain FLI’s mission in the years ahead.',
      'Since its establishment in 2002, FLI has worked alongside indigenous communities of northern Pakistan to preserve and promote endangered languages and cultures. The Board reaffirmed its commitment to supporting this vision and ensuring that FLI remains a trusted resource for language communities.'
    ]
  },
  {
    id: 'gawarbati-writers-workshop',
    title: 'FLI-Supported Three-Day Writers’ Workshop for Gawarbati Language Concludes in Arandu, Chitral',
    date: 'September 28, 2026',
    location: 'Arandu Village, Lower Chitral',
    category: 'Workshops',
    summary: 'Twenty community educators, poets, and youth joined a collaborative 3-day workshop to develop Gawarbati children’s literature and orthography materials.',
    content: [
      'The Forum for Language Initiatives (FLI) supported a three‑day Writers’ Workshop for the Gawarbati language, held in Arandu Village, Lower Chitral. A total of 20 participants — including schoolteachers, university students, poets, and community writers — attended the event aimed at strengthening Gawarbati writing.',
      'FLI partnered with its community‑based organization Al‑Qalam, which works for the preservation and promotion of Gawarbati culture and literature in the border valley.',
      'Participants drafted initial illustrated reading books, recorded traditional folk riddles, and reached community consensus on challenging orthographic characters representing retroflex sibilants.'
    ]
  },
  {
    id: 'peshawar-partners-meeting',
    title: 'FLI Hosts Regional Partners’ Meeting in Peshawar Bringing Together 14 Indigenous CBOs',
    date: 'September 4, 2025',
    location: 'Peshawar, Khyber Pakhtunkhwa',
    category: 'Events',
    summary: 'Grassroots leaders from 14 Community-Based Organizations across KP united to review mother-tongue education, poetic documentation, and legislative advocacy.',
    content: [
      'The Forum for Language Initiatives (FLI) convened a partners’ meeting in Peshawar, bringing together leaders from 14 Community-Based Organizations (CBOs) across Khyber Pakhtunkhwa. The one-day gathering served as a platform for reflection, collaboration, and renewed commitment to indigenous language preservation.',
      'Nasir Mansur of the Kateviri language community earned special praise for training village children to deliver speeches in their native language during Independence Day celebrations on August 14.',
      'Alauddin from the Yadgha language group shared progress on writers’ workshops held in both private and government schools in Chitral. Aurangzeb presented on Mankiyali, spoken by under 500 people in Mansehra district, marking its first formal advocacy presentation.',
      'In the closing resolution, participants committed to forming a provincial regional network and engaging elected members of the provincial assembly for institutional language policy support.'
    ]
  },
  {
    id: 'ormuri-mushaira-kanigram',
    title: 'Historic Literary Gathering and Ormuri Mushaira Held in Kanigram, South Waziristan',
    date: 'August 15, 2025',
    location: 'Kanigram, South Waziristan',
    category: 'Events',
    summary: 'Over 300 participants gathered in Kanigram as twelve renowned Ormuri poets revived the literary heritage of their isolated East Iranian mother tongue.',
    content: [
      'With the financial support of FLI and in collaboration with Pir Roshan Literary Tolana, Kanigram, a vibrant literary session and the successful Ormuri Mushaira were organized in Kanigram, South Waziristan.',
      'The gathering was graced by distinguished guests including Mr. Rozi Khan Burki, Retired Colonel Elahi Jan Burki, and elders of the area. Twelve renowned poets of the Ormuri language presented their thought-provoking and inspiring poetry to an audience of more than 300 participants.',
      'Because Ormuri speakers frequently live scattered across urban centers due to regional security challenges, bringing poets and community members back to their native soil marked a watershed cultural milestone.'
    ]
  },
  {
    id: 'fel-conference-islamabad',
    title: '28th Conference of the Foundation for Endangered Languages (FEL XXVIII) Held at AIOU Islamabad',
    date: 'November 2024',
    location: 'Allama Iqbal Open University, Islamabad',
    category: 'Events',
    summary: 'International linguists, scholars, and grassroots language activists gathered in Islamabad under the joint aegis of FEL, FLI, and AIOU.',
    content: [
      'The 28th Conference of the Foundation for Endangered Languages (FEL XXVIII) was successfully hosted in Islamabad, organized jointly by FEL UK, FLI, and Allama Iqbal Open University (AIOU).',
      'The conference featured scholarly presentations, roundtables on the UN International Decade of Indigenous Languages (2022–2032), and direct testimonies from native speakers of endangered Dardic and Pamir languages.',
      'Chaired by Dr. Muhammad Kamal Khan and international delegates, the conference emphasized the imperative of placing native speakers in the driving seat of orthography, archiving, and multilingual schooling.'
    ]
  }
];

// Success Stories & Impact Indicators
export const SUCCESS_STORIES = [
  {
    title: 'Mother-Tongue Early Childhood Classrooms in Swat and Chitral',
    community: 'Torwali and Gawri Communities',
    metric: '1,200+ Children Enrolled',
    description: 'FLI’s community partner organizations Idara Baraye Taleem-o-Taraqi (IBT) in Swat and GCDP in Kalam developed comprehensive pre-primary curricula in Torwali and Gawri. Children learning in their mother tongue demonstrated 40% higher comprehension and retention rates upon transitioning to Urdu and English in higher grades.'
  },
  {
    title: 'From Oral Tradition to Standardized Published Literature: Palula',
    community: 'Ashret and Biori Valleys, Chitral',
    metric: '8 Published Books & Dictionary',
    description: 'Prior to FLI’s intervention and partnership with linguist Henrik Liljegren, Palula was an unwritten language. Today, the community boasts standardized orthography, alphabet primers, a comprehensive vocabulary dictionary, proverbs collections, and active youth writing circles.'
  },
  {
    title: 'Reviving the Poetic Fire of the Ormuri Language in Waziristan',
    community: 'Kanigram, South Waziristan',
    metric: 'Historic Mushaira with 300+ Attendees',
    description: 'FLI partnered with Pir Roshan Literary Tolana to support monthly poetic gatherings and the historic Kanigram Mushaira, publishing Rozi Khan Burki’s "Gapi Nar Guli" with bilingual English translations.'
  },
  {
    title: 'COVID-19 Health Protection Campaign in 12 Minoritized Languages',
    community: 'Pan-Northern Pakistan',
    metric: 'Over 250,000 People Reached',
    description: 'When the pandemic struck, standard Urdu/English warnings were inaccessible to elderly remote mountain dwellers. FLI translated and recorded WHO prevention messages into Kalasha, Gawri, Khowar, Shina, Balti, and Torwali, broadcasting them via community loudspeakers, local radio, and WhatsApp.'
  }
];

export interface CoreValue {
  id: string;
  title: string;
  urduTitle: string;
  description: string;
  iconName: string;
}

export interface StrategicObjective {
  number: number;
  title: string;
  description: string;
  targetMetric: string;
  keyActions: string[];
}

export interface BoardMember {
  name: string;
  role: string;
  affiliation: string;
  location: string;
  bio: string;
}

export interface FliAboutData {
  organizationName: string;
  legalStatus: string;
  foundedYear: number;
  headquarters: string;
  vision: string;
  mission: string;
  goal: string;
  historyHtml: string;
  coreValues: CoreValue[];
  strategicObjectives: StrategicObjective[];
  boardMembers: BoardMember[];
  executiveDirector: BoardMember;
  methodologyPillars: {
    number: string;
    title: string;
    subtitle: string;
    description: string;
    outcomes: string[];
  }[];
}

export const FLI_ABOUT: FliAboutData = {
  organizationName: 'Forum for Language Initiatives (FLI)',
  legalStatus: 'Registered under Societies Registration Act XXI of 1860 (Registration No. 3672, Islamabad)',
  foundedYear: 2003,
  headquarters: 'Islamabad, Pakistan (P.O. Box 763)',
  vision: 'To see all ethnolinguistic communities in Pakistan flourishing culturally and economically',
  mission: 'To empower ethno-linguistic communities of Pakistan to strengthen their linguistic and cultural heritages',
  goal: '“Empowered Local Communities with Diverse and Vibrant Cultural and Linguistic Heritages”',
  historyHtml: 'The Forum for Language Initiatives (FLI) was established in 2003 in Islamabad by a coalition of community activists, linguists, and cultural advocates from the mountain valleys of northern Pakistan. Recognizing that Pakistan is home to over 70 living languages—more than 30 of which are severely endangered minoritized tongues in Khyber Pakhtunkhwa, Gilgit-Baltistan, and Azad Jammu & Kashmir—FLI set out to bridge the critical gap between academic linguistics and grassroots community empowerment. Over more than two decades of dedicated fieldwork, FLI has catalyzed orthography standardization for unwritten languages, conducted training workshops for hundreds of mother-tongue educators, produced over 80 published monographs and primers, engineered digital Nastaliq fonts and mobile keyboards, and advocated for constitutional and provincial multilingual education policies.',
  coreValues: [
    {
      id: 'centrality',
      title: 'Centrality of Languages and Culture to Identity',
      urduTitle: 'شناخت کے لیے زبان اور ثقافت کی مرکزیت',
      description: 'Language is not merely a medium of communication; it is the living repository of a community’s indigenous knowledge, worldview, folklore, and dignity.',
      iconName: 'Languages'
    },
    {
      id: 'empowerment',
      title: 'Empowerment, Partnership and Collaboration',
      urduTitle: 'اختیار کاری، شراکت داری اور باہمی تعاون',
      description: 'We do not impose external solutions. We partner with local Community-Based Organizations (CBOs) and equip native speakers to lead their own revitalization.',
      iconName: 'Users'
    },
    {
      id: 'respect',
      title: 'Respect, Inclusiveness and Plurality',
      urduTitle: 'احترام، شمولیت اور تکثیریت',
      description: 'Honoring every linguistic community regardless of its numerical size—from major regional languages to critically endangered tongues with under 500 speakers like Mankiyali and Dameli.',
      iconName: 'HeartHandshake'
    },
    {
      id: 'empathy',
      title: 'Empathy and Compassion',
      urduTitle: 'ہمدردی اور شفقت',
      description: 'Standing in solidarity with marginalized mountain communities, understanding historical neglect, and providing supportive, welcoming spaces for intergenerational learning.',
      iconName: 'Sparkles'
    },
    {
      id: 'integrity',
      title: 'Integrity, Transparency and Accountability',
      urduTitle: 'دیانت، شفافیت اور جوابدہی',
      description: 'Maintaining rigorous institutional governance, ethical research protocols, transparent financial accounting, and community ownership over all cultural documentation.',
      iconName: 'ShieldCheck'
    },
    {
      id: 'knowledge',
      title: 'Knowledge Sharing',
      urduTitle: 'علم کا اشتراک',
      description: 'Ensuring that all dictionaries, fonts, keyboards, research papers, and pedagogical materials developed by FLI remain open-access and free for community benefit.',
      iconName: 'Share2'
    }
  ],
  strategicObjectives: [
    {
      number: 1,
      title: 'Socio-Cultural and Social Media Domain Usage',
      description: 'Mother-tongue languages are used across socio-cultural and social media domains within targeted minority ethnolinguistic communities.',
      targetMetric: '29 Languages Active Online & in Folklore',
      keyActions: [
        'Annual youth social media content creation workshops in native scripts',
        'Traditional mushaira and folk music festivals organized in Chitral, Swat, and Waziristan',
        'Community audio/video podcast production preserving elder oral histories'
      ]
    },
    {
      number: 2,
      title: 'Provincial Government Educational Inclusion',
      description: 'Mother-tongue languages are included in education by the Provincial governments.',
      targetMetric: 'KP & GB Education Policy Formalization',
      keyActions: [
        'Policy advocacy delegations with Members of the Provincial Assembly (MPAs)',
        'Technical assistance to KP Directorate of Curriculum and Teacher Education (DCTE)',
        'Pilot implementation of Mother-Tongue-Based Multilingual Education (MTB-MLE) in public schools'
      ]
    },
    {
      number: 3,
      title: 'Non-Curriculum Mother-Tongue Reading Materials',
      description: 'Children in targeted communities are accessing non-curriculum reading materials in their mother tongue (incl. in digital formats and social media).',
      targetMetric: '100+ Illustrated Children Storybooks',
      keyActions: [
        'Writers workshops training community storytellers, poets, and illustrators',
        'Publishing illustrated bilingual and trilingual children’s storybooks',
        'Mobile PDF and e-book distribution for village community learning centers'
      ]
    },
    {
      number: 4,
      title: 'Cultural Tourism, Arts & Crafts Enterprise Support',
      description: 'Businesses supported in promoting local cultural tourism, cultural music and cultural events, and local arts and crafts in targeted minority ethnolinguistic communities.',
      targetMetric: '14+ CBO Cultural Enterprises Supported',
      keyActions: [
        'Branding indigenous craft products with mother-tongue terminology and cultural stories',
        'Facilitating community eco-tourism guides trained in indigenous ethno-botany and folklore',
        'Hosting annual handicraft exhibitions connecting artisans directly to fair trade markets'
      ]
    },
    {
      number: 5,
      title: 'Institutional Support & National Coalition Alliances',
      description: 'Formalized and effective support from a broad range of organizations and institutions for the promotion of mother tongue language development at local and national levels.',
      targetMetric: 'KP Regional Network & International FEL/UNESCO Alliances',
      keyActions: [
        'Forming unified provincial language advocacy coalitions connecting 14 CBOs',
        'Convening the international Foundation for Endangered Languages (FEL) Conference',
        'Partnering with universities for sociolinguistic research and student field research'
      ]
    }
  ],
  boardMembers: [
    {
      name: 'Mr. Rozi Khan Burki',
      role: 'Chairman of the Board',
      affiliation: 'Pir Roshan Literary Tolana, South Waziristan',
      location: 'Kaniguram, South Waziristan / Islamabad',
      bio: 'Eminent researcher and native scholar of the endangered Ormuri (Bargista) language. Mr. Burki has championed the cultural rights of isolated communities for decades and authored foundational bilingual poetry collections.'
    },
    {
      name: 'Ms. Fauzia Qazi',
      role: 'Member, Executive Board',
      affiliation: 'Senior Education & Gender Specialist',
      location: 'Islamabad',
      bio: 'Leading specialist in community education, gender-inclusive development, and child pedagogy with extensive experience working across northern Pakistan civil society.'
    },
    {
      name: 'Dr. Farhat Abdullah',
      role: 'Member, Executive Board',
      affiliation: 'Department of Anthropology, Quaid-i-Azam University',
      location: 'Islamabad',
      bio: 'Distinguished anthropologist and ethnographer specializing in cultural heritage documentation, tribal customary practices, and indigenous knowledge systems in Pakistan.'
    },
    {
      name: 'M K Khan',
      role: 'Member, Executive Board',
      affiliation: 'Development Management Consultant',
      location: 'Peshawar',
      bio: 'Senior strategist with three decades of experience in institutional capacity building, non-profit governance, and community mobilization in Khyber Pakhtunkhwa.'
    },
    {
      name: 'Mr. Razwal Kohistani',
      role: 'Member, Executive Board',
      affiliation: 'Indus Kohistan Cultural & Linguistic Heritage Society',
      location: 'Kohistan / Rawalpindi',
      bio: 'Pioneering lexicographer and author who developed the first standardized orthography for Indus Kohistani and Shina. Winner of national literary accolades for language preservation.'
    },
    {
      name: 'Mr. Fazal Karim',
      role: 'Member, Executive Board',
      affiliation: 'Kalam Community Development Project (GCDP)',
      location: 'Kalam, Swat Valley',
      bio: 'Grassroots education leader from the upper Swat valley who steered the successful Gawri mother-tongue community preschools and youth cultural clubs.'
    },
    {
      name: 'Mr. Zulfiqar Khan',
      role: 'Member, Executive Board',
      affiliation: 'Legal & Institutional Governance Consultant',
      location: 'Islamabad',
      bio: 'Corporate and non-profit legal counsel guiding FLI’s institutional transparency, statutory compliance, and intellectual property rights for community knowledge.'
    }
  ],
  executiveDirector: {
    name: 'Mr. Fakhruddin Akhunzada',
    role: 'Executive Director & Secretary to the Board',
    affiliation: 'Forum for Language Initiatives (FLI)',
    location: 'Islamabad',
    bio: 'Prominent Pakistani language advocate and researcher who has directed FLI since its formative years. Mr. Akhunzada coordinates national delegations, liaises with UNESCO for the International Decade of Indigenous Languages (IDIL 2022–2032), and led the organization of the FEL XXVIII 2024 International Conference.'
  },
  methodologyPillars: [
    {
      number: '01',
      title: 'Sociolinguistic Survey & Mobilization',
      subtitle: 'Discovery Course & Community Awareness',
      description: 'Linguistic preservation cannot be imported. FLI visits remote mountain valleys, engages community elders, youth, and educators, and facilitates self-discovery workshops where speakers assess their own language vitality and endangerment level.',
      outcomes: ['Vulnerability assessment', 'Community committee formation', 'Identification of local focal champions']
    },
    {
      number: '02',
      title: 'Orthography & Alphabet Standardization',
      subtitle: 'LMD 1–3: Phonology to Writing System',
      description: 'Most minoritized Pakistani tongues have complex retroflex sounds (like ݯ, ݮ, ݱ) not found in standard Urdu. FLI trains native speakers to analyze their sound system, reach community consensus on symbols, and publish alphabet charts.',
      outcomes: ['Consensus orthography guide', 'Alphabet primer books', 'Digital Nastaliq font mapping']
    },
    {
      number: '03',
      title: 'Mother-Tongue Education (MTB-MLE)',
      subtitle: 'Curriculum & Pedagogy for Children',
      description: 'Teaching children in a strange tongue causes high dropout rates. FLI designs mother-tongue pre-primary curricula, graded readers, and teacher manuals that build strong early literacy before smoothly bridging into Urdu and English.',
      outcomes: ['Pre-primary textbooks in 12+ languages', 'Teacher training modules', '40% higher retention in pilot schools']
    },
    {
      number: '04',
      title: 'Literature, Digital Tools & Policy Advocacy',
      subtitle: 'Publishing, Keyboards & Legislative Reform',
      description: 'To flourish in the 21st century, languages must live in books, mobile apps, keyboards, social media, and legislation. FLI produces poetry books, Keyman software, and lobbies parliamentarians for indigenous language recognition.',
      outcomes: ['80+ published monographs', 'Keyman iOS/Android/PC keyboards', 'Provincial assembly policy resolutions']
    }
  ]
};

export interface LanguageTreeNode {
  id: string;
  name: string;
  family: string;
  subfamily: string;
  status: string;
  speakers: string;
  region: string;
  description: string;
}

export const LANGUAGE_TREE_DATA: {
  family: string;
  subfamily: string;
  description: string;
  languages: string[];
}[] = [
  {
    family: 'Indo-European',
    subfamily: 'Indo-Aryan (Dardic)',
    description: 'Ancient mountain languages spoken across northern KP and GB characterized by rich phonological inventories including retroflex affricates and tonal contours.',
    languages: ['Khowar', 'Shina', 'Indus Kohistani', 'Torwali', 'Gawri', 'Palula', 'Dameli', 'Kalasha', 'Gawar-Bati', 'Bateri', 'Chilisso', 'Gowro', 'Ushojo', 'Kalkoti']
  },
  {
    family: 'Indo-European',
    subfamily: 'Indo-Iranian (Iranian & Pamir)',
    description: 'Southeastern and Eastern Iranian languages spoken along ancient Silk Road passes and historical frontiers of Waziristan and the Pamir Knot.',
    languages: ['Wakhi', 'Ormuri (Bargista)', 'Yadgha', 'Madaglashti']
  },
  {
    family: 'Sino-Tibetan',
    subfamily: 'Tibeto-Burman (Bodish)',
    description: 'Archaic Western Tibetan language spoken in Baltistan and Ladakh, retaining consonantal clusters lost in modern Central Tibetan.',
    languages: ['Balti']
  },
  {
    family: 'Language Isolate',
    subfamily: 'Unclassified / Independent',
    description: 'Unique language isolate with zero demonstrable genealogical affinity to any known language family on earth, spoken in Hunza, Nagar, and Yasin valleys.',
    languages: ['Burushaski']
  },
  {
    family: 'Indo-European',
    subfamily: 'Indo-Aryan (Western / Northern)',
    description: 'Pahari, Hindko, Gujari, and nomadic / enclave idioms spoken across the foothills and high pasture grazing routes.',
    languages: ['Gujari', 'Hindko', 'Pahari-Pothwari', 'Kundal Shahi', 'Mankiyali', 'Domaaki']
  }
];

export const GEOGRAPHIC_REGIONS = [
  {
    region: 'Chitral District (Khyber Pakhtunkhwa)',
    description: 'One of the most linguistically diverse valleys in the world, surrounded by the Hindu Kush range.',
    languages: ['Khowar', 'Kalasha', 'Palula', 'Dameli', 'Gawar-Bati', 'Yadgha', 'Madaglashti', 'Wakhi', 'Gujari']
  },
  {
    region: 'Swat & Dir Valleys (Khyber Pakhtunkhwa)',
    description: 'Lush valleys draining the Swat and Panjkora rivers, home to ancient Dardic communities.',
    languages: ['Torwali', 'Gawri (Kalami)', 'Kalkoti', 'Ushojo', 'Gujari']
  },
  {
    region: 'Indus Kohistan & Mansehra (Khyber Pakhtunkhwa)',
    description: 'Rugged gorges along the Karakoram Highway where endangered idioms cling to isolated hamlets.',
    languages: ['Indus Kohistani', 'Bateri', 'Chilisso', 'Gowro', 'Shina (Kohistan dialect)', 'Mankiyali', 'Kundal Shahi']
  },
  {
    region: 'Gilgit-Baltistan (Hunza, Nagar, Gilgit, Skardu, Ghizer)',
    description: 'The convergence of the Karakoram, Himalaya, and Hindu Kush mountain giants.',
    languages: ['Burushaski', 'Shina', 'Balti', 'Wakhi', 'Domaaki']
  },
  {
    region: 'South Waziristan (Khyber Pakhtunkhwa)',
    description: 'Isolated ancient linguistic enclave in Kaniguram surrounded by Pashto speakers.',
    languages: ['Ormuri (Bargista)']
  },
  {
    region: 'Azad Jammu & Kashmir (Neelum Valley)',
    description: 'Border valleys hosting endangered Kashmiri and Shina offshoots.',
    languages: ['Kundal Shahi', 'Pahari-Pothwari', 'Shina (Neelum)', 'Gujari']
  }
];

