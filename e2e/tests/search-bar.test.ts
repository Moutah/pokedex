import { environment } from '../environment';
import { fakeLogin, hijackSpeciesResponse } from '../utils';

describe('Search bar', () => {
  beforeAll(fakeLogin);

  it('can filter list', async () => {
    void page.goto(environment.appUrl);

    const initialResponse = await hijackSpeciesResponse('GET', `${environment.apiUrl}/species`);
    expect(initialResponse.data).toHaveLength(150);

    await page.type('input', 'pikachu');
    const searchResponse = await hijackSpeciesResponse(
      'GET',
      `${environment.apiUrl}/species?search=pikachu`
    );
    expect(searchResponse.data).toHaveLength(1);
  });
});
