// @ts-nocheck
// eslint-disable-next-line no-undef
import { test, expect } from '@playwright/test';

const LOCALHOST_URL = 'http://localhost:5173/'

test('Test Image and Text', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const text = await page.$('p');
  const image = await page.$('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc).not.toBeNull()
})
