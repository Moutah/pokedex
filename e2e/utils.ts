import { environment } from './environment';

export async function fakeLogin() {
  await page.goto(environment.appUrl);

  await page.evaluate(() => {
    window.localStorage.setItem('trainer-token', 'fake-token');
  });
}
