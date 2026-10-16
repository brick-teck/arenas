import { test, expect } from "@playwright/test";

test("os links principais levam às seções corretas", async ({ page }) => {
  await page.goto("/");
  await page
    .getByRole("link", { name: "Explorar modalidades", exact: true })
    .click();
  await expect(page).toHaveURL(/#atividades$/);
  await page
    .getByRole("banner")
    .getByRole("link", { name: "Agendar visita" })
    .click();
  await expect(page).toHaveURL(/#contato$/);
});

test("as modalidades funcionam por teclado e por links diretos", async ({
  page,
}) => {
  await page.goto("/#tenis");
  await expect(
    page.getByRole("tab", { name: "Tênis", exact: true }),
  ).toHaveAttribute("aria-selected", "true");
  await page.getByRole("tab", { name: "Tênis", exact: true }).focus();
  await page.keyboard.press("Home");
  await expect(page.getByRole("tab", { name: "Futevôlei" })).toHaveAttribute(
    "aria-selected",
    "true",
  );
  await page.keyboard.press("ArrowRight");
  await expect(page.getByRole("tabpanel")).toContainText("Beach Tennis");
  await page
    .getByRole("contentinfo")
    .getByRole("link", { name: "Pickleball", exact: true })
    .click();
  await expect(page.getByRole("tab", { name: "Pickleball" })).toHaveAttribute(
    "aria-selected",
    "true",
  );
});

test("o formulário valida campos e deixa claro que não houve envio", async ({
  page,
}) => {
  await page.goto("/#contato");
  await page.getByRole("button", { name: "Conferir minha visita" }).click();
  await expect(page.getByLabel("Nome completo")).toBeFocused();
  await expect(page.getByLabel("Nome completo")).toHaveAttribute(
    "aria-invalid",
    "true",
  );
  await page.getByLabel("Nome completo").fill("Marina Costa");
  await page.getByLabel("E-mail").fill("marina@example.com");
  await page.getByLabel("Telefone").fill("11987654321");
  await page.getByLabel("Tenho interesse em").selectOption("beach-tennis");
  await page.getByRole("button", { name: "Conferir minha visita" }).click();
  await expect(page.getByRole("status")).toContainText("Marina Costa");
  await expect(page.getByRole("status")).toContainText("não foi enviado");
  await page.getByRole("button", { name: "Editar informações" }).click();
  await expect(page.getByLabel("Nome completo")).toHaveValue("Marina Costa");
});

test("o menu móvel fecha com Escape e ao navegar, sem largura excedente", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const menu = page.getByRole("button", { name: "Abrir menu" });
  await menu.click();
  await expect(
    page.getByRole("button", { name: "Fechar menu" }),
  ).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Escape");
  await expect(menu).toBeFocused();
  await menu.click();
  await page
    .getByRole("navigation", { name: "Navegação móvel" })
    .getByRole("link", { name: "Bem-estar" })
    .click();
  await expect(page).toHaveURL(/#bem-estar$/);
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
});

test("a página respeita movimento reduzido e carrega os recursos locais", async ({
  page,
}) => {
  const failures = [];
  page.on("pageerror", (error) => failures.push(error.message));
  page.on("response", (response) => {
    if (response.status() >= 400) failures.push(response.url());
  });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.getByRole("contentinfo").scrollIntoViewIfNeeded();
  await expect(page.locator("html")).toHaveAttribute("lang", "pt-BR");
  expect(
    await page.evaluate(
      () => getComputedStyle(document.documentElement).scrollBehavior,
    ),
  ).toBe("auto");
  expect(failures).toEqual([]);
});
