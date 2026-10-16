import { test, expect } from "@playwright/test";

test("um link de modalidade já presente no hash continua funcionando depois de trocar a aba", async ({
  page,
}) => {
  await page.goto("/#tenis");
  await page.getByRole("tab", { name: "Beach Tennis" }).click();
  await page
    .getByRole("contentinfo")
    .getByRole("link", { name: "Tênis", exact: true })
    .click();
  await expect(
    page.getByRole("tab", { name: "Tênis", exact: true }),
  ).toHaveAttribute("aria-selected", "true");
});

test("a menor tela suportada mantém a página dentro da largura disponível", async ({
  page,
}) => {
  await page.setViewportSize({ width: 320, height: 800 });
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
});
