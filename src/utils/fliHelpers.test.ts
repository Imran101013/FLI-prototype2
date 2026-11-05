import test from 'node:test';
import assert from 'node:assert/strict';
import { FLI_LANGUAGES, VERNACULAR_BOOKS, FLI_ABOUT, LANGUAGE_TREE_DATA, GEOGRAPHIC_REGIONS } from '../data/fliData';
import { filterLanguages, computeLanguageStats, filterPublications, getAllPublications } from './fliHelpers';

test('FLI_LANGUAGES contains all 29 target languages', () => {
  assert.equal(FLI_LANGUAGES.length, 29);
});

test('computeLanguageStats accurately tallies endangerment levels', () => {
  const stats = computeLanguageStats(FLI_LANGUAGES);
  assert.equal(stats.total, 29);
  assert.ok(stats.criticallyEndangered > 0, 'Should have critically endangered languages');
  assert.ok(stats.severelyEndangered > 0, 'Should have severely endangered languages');
  assert.ok(stats.distinctFamiliesCount >= 4, 'Should cover multiple language families');
});

test('filterLanguages filters by query string', () => {
  const result = filterLanguages(FLI_LANGUAGES, { query: 'Burushaski' });
  assert.equal(result.length, 1);
  assert.equal(result[0].name, 'Burushaski');
  assert.equal(result[0].code, 'bsk');
});

test('filterLanguages filters by family', () => {
  const dardic = filterLanguages(FLI_LANGUAGES, { family: 'Dardic' });
  assert.ok(dardic.length >= 10, 'Dardic is the dominant family in northern Pakistan');
  const iranian = filterLanguages(FLI_LANGUAGES, { family: 'Iranian' });
  assert.ok(iranian.length >= 3, 'Should include Wakhi, Yadgha, Ormuri, Pashto, Madaklashti');
});

test('filterPublications filters by text and category', () => {
  const all = getAllPublications();
  assert.ok(all.length >= 40, 'Should have rich bibliography of publications');
  
  const palulaBooks = filterPublications(all, 'Palula', 'all');
  assert.ok(palulaBooks.length >= 2, 'Should find Palula publications');
  
  const vernacularOnly = filterPublications(all, '', 'vernacular');
  assert.equal(vernacularOnly.length, VERNACULAR_BOOKS.length);
});

test('FLI_ABOUT contains complete institutional data from fli-online.org', () => {
  assert.equal(FLI_ABOUT.coreValues.length, 6, 'Must contain all 6 core values');
  assert.equal(FLI_ABOUT.strategicObjectives.length, 5, 'Must contain all 5 strategic objectives');
  assert.ok(FLI_ABOUT.boardMembers.length >= 7, 'Must have at least 7 board members');
  assert.ok(FLI_ABOUT.executiveDirector.name.includes('Fakhruddin'), 'Fakhruddin Akhunzada must be Executive Director');
  assert.ok(LANGUAGE_TREE_DATA.length >= 4, 'Must have classification for multiple language families');
  assert.ok(GEOGRAPHIC_REGIONS.length >= 5, 'Must cover high mountain administrative zones');
});

