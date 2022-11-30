import { formatShowsData, showsByGenre, genres, filterBySearchTerm } from '../formatData';
import { expectedShowsMockData, SearchInputShowsMockData, showsMockData } from './fixture/test-data';

describe.only('formatData.ts test', () => {

  test("formatShowsData method should return correct data", async () => {
    const result = await formatShowsData(showsMockData);
    expect(result).toEqual(expectedShowsMockData);
  });

  test("showsByGenre method should return correct data", async () => {
    const result = await showsByGenre(showsMockData, "Drama");
    expect(result).toEqual(expectedShowsMockData[0].showsList);
  });

  test("genres method should return correct data", async () => {
    const result = await genres(showsMockData);

    expect(result.has("Drama")).toEqual(true);
  });

  test("filterBySearchTerm method should return correct data", async () => {
    const result = await filterBySearchTerm(SearchInputShowsMockData, "Under");
    expect(result).toEqual(SearchInputShowsMockData);
  });
});

