describe('Details page', () => {
  beforeAll(async () => {
    await page.goto('https://google.com');
  });

  it('is plugged to service', async () => {
    console.log('is plugged to service');
    await expect(page.title()).resolves.toMatch('Google');
  });

  it('displays single species', async () => {
    console.log('displays species');
    await expect(page.title()).resolves.toMatch('Google');
  });
});
