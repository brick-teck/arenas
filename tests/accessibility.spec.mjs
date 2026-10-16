import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("as seções e os estados abertos não apresentam violações automáticas WCAG AA", async ({
  page,
}) => {
  await page.goto("/");
  const scan = () =>
    new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
      .analyze();
  expect((await scan()).violations).toEqual([]);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole("button", { name: "Abrir menu" }).click();
  expect((await scan()).violations).toEqual([]);
  await page.keyboard.press("Escape");
  await page.getByRole("button", { name: "Conferir minha visita" }).click();
  expect((await scan()).violations).toEqual([]);
});

test("dados malformados preservam o formulário e focam o campo que precisa de correção", async ({
  page,
}) => {
  await page.goto("/#contato");
  await page.getByLabel("Nome completo").fill("Marina Costa");
  await page.getByLabel("E-mail").fill("invalido");
  await page.getByLabel("Telefone").fill("abc123");
  await page.getByLabel("Tenho interesse em").selectOption("geral");
  await page.getByRole("button", { name: "Conferir minha visita" }).click();
  await expect(page.getByLabel("E-mail")).toBeFocused();
  await expect(page.getByLabel("E-mail")).toHaveAttribute(
    "aria-invalid",
    "true",
  );
  await expect(page.getByLabel("Telefone")).toHaveAttribute(
    "aria-invalid",
    "true",
  );
  await expect(page.getByLabel("Nome completo")).toHaveValue("Marina Costa");
  await expect(page.getByRole("status")).toHaveCount(0);
});
