import { test, expect } from "@playwright/test";

for (const width of [320, 390, 768, 1440]) {
  test(`layout e imagens em ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto("/");
    await page.evaluate(async () => {
      for (const image of document.images) image.loading = "eager";
      await Promise.all([...document.images].map((image) => image.decode()));
      await document.fonts.ready;
    });
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    await page.screenshot({
      path: `artifacts/final-${width}.png`,
      fullPage: true,
    });
    await page.screenshot({ path: `artifacts/hero-${width}.png` });
    await page.locator("#atividade").scrollIntoViewIfNeeded();
    await page.locator("#atividade").focus();
    await page.keyboard.press("Space");
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("Enter");
    await expect(page.locator("#atividade")).not.toHaveValue("");
  });
}
