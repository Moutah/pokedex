describe('Search bar', () => {
  beforeAll(async () => {
    await page.goto('https://google.com');
  });

  it('can filter list', async () => {
    console.log('can filter list');
    await expect(page.title()).resolves.toMatch('Google');
  });
});
