import { FLI_LANGUAGES, VERNACULAR_BOOKS, CULTURE_SERIES_BOOKS, OTHER_FLI_BOOKS, LanguageInfo, PublicationItem } from '../data/fliData';

export interface FilterOptions {
  query?: string;
  family?: string;
  endangerment?: string;
  region?: string;
}

export function filterLanguages(languages: LanguageInfo[], options: FilterOptions): LanguageInfo[] {
  const query = options.query?.toLowerCase().trim() || '';
  
  return languages.filter(lang => {
    if (query) {
      const matchName = lang.name.toLowerCase().includes(query);
      const matchNative = lang.nativeName.includes(query);
      const matchRegion = lang.region.toLowerCase().includes(query);
      const matchCode = lang.code.toLowerCase().includes(query);
      const matchFamily = lang.family.toLowerCase().includes(query);
      if (!matchName && !matchNative && !matchRegion && !matchCode && !matchFamily) {
        return false;
      }
    }

    if (options.family && options.family !== 'all') {
      if (!lang.family.toLowerCase().includes(options.family.toLowerCase())) {
        return false;
      }
    }

    if (options.endangerment && options.endangerment !== 'all') {
      if (lang.endangerment !== options.endangerment) {
        return false;
      }
    }

    if (options.region && options.region !== 'all') {
      if (!lang.region.toLowerCase().includes(options.region.toLowerCase())) {
        return false;
      }
    }

    return true;
  });
}

export function computeLanguageStats(languages: LanguageInfo[]) {
  const total = languages.length;
  const criticallyEndangered = languages.filter(l => l.endangerment === 'Critically Endangered').length;
  const severelyEndangered = languages.filter(l => l.endangerment === 'Severely Endangered').length;
  const definitelyEndangered = languages.filter(l => l.endangerment === 'Definitely Endangered').length;
  const vulnerableOrThreatened = languages.filter(l => l.endangerment === 'Vulnerable' || l.endangerment === 'Threatened').length;
  
  const families = new Set(languages.map(l => l.family));
  
  return {
    total,
    criticallyEndangered,
    severelyEndangered,
    definitelyEndangered,
    vulnerableOrThreatened,
    distinctFamiliesCount: families.size
  };
}

export function filterPublications(
  books: PublicationItem[],
  query: string,
  category: string
): PublicationItem[] {
  const q = query.toLowerCase().trim();
  return books.filter(b => {
    if (category !== 'all' && b.category !== category) {
      return false;
    }
    if (q) {
      const matchTitle = b.title.toLowerCase().includes(q);
      const matchNative = b.nativeTitle.includes(q);
      const matchAuthor = b.author.toLowerCase().includes(q);
      const matchLang = b.language.toLowerCase().includes(q);
      const matchYear = b.year.includes(q);
      return matchTitle || matchNative || matchAuthor || matchLang || matchYear;
    }
    return true;
  });
}

export function getAllPublications(): PublicationItem[] {
  return [...VERNACULAR_BOOKS, ...CULTURE_SERIES_BOOKS, ...OTHER_FLI_BOOKS];
}
