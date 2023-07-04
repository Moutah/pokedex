import { environment } from '../environment';
import { fakeLogin } from '../utils';

interface Species {
  id: number;
  name: string | '???';
  image: string;
}

describe('List page', () => {
  beforeAll(fakeLogin);

  it('is plugged to service', async () => {
    void page.goto(environment.appUrl);

    const response = await hijackSpeciesResponse();

    const bodyTextContent = await page.evaluate(() => document.body.textContent?.toLowerCase());
    for (const species of response.data) {
      expect(bodyTextContent).toContain(species.id.toString());
      expect(bodyTextContent).toContain(species.name);
    }
  });

  it('displays species', async () => {
    void page.goto(environment.appUrl);

    const response = await hijackSpeciesResponse();

    for (const species of response.data) {
      const imgCount = await page.$$eval(
        `img[src="${species.image}"]`,
        (imgElements: Element[]) => imgElements.length
      );
      expect(imgCount).toBeGreaterThanOrEqual(1);
    }
  });
});

async function hijackSpeciesResponse() {
  const rawResponse = await page.waitForResponse((res) => {
    return res.url() === `${environment.apiUrl}/species` && res.request().method() === 'GET';
  });
  expect(rawResponse).toBeTruthy();

  const response = await rawResponse.json();
  expect(response).toBeTruthy();

  return response as { data: Species[] };
}
