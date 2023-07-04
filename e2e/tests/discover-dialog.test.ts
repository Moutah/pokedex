describe('Discover dialog', () => {
  beforeAll(async () => {
    await page.goto('https://google.com');
  });

  it('is plugged to service', async () => {
    console.log('is plugged to service');
    await expect(page.title()).resolves.toMatch('Google');
  });

  it('can submit image', async () => {
    console.log('displays species');
    await expect(page.title()).resolves.toMatch('Google');
  });
});
