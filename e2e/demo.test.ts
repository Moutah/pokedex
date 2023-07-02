describe('Google', () => {
  beforeAll(async () => {
    await page.goto('https://google.com');
  });

  it('doit être titré "Google"', async () => {
    await expect(page.title()).resolves.toMatch('Google');
  });
});
