/* ════════════════════════════════════════════
           TRANSLATIONS
        ════════════════════════════════════════════ */
const L = {
  en: {
    nav_resale: "Resale",
    nav_rental: "Rental",
    nav_saved: "Saved",
    nav_cats: "Tags",
    sl_calculators: "Calculators",
    sl_categories: "Categories",
    tab_calc: "Calculator",
    tab_saved: "Saved",
    add_item: "Add item",
    add_object: "Add object",
    save_calc: "Save",
    chart_months_label: "Cumulative profit, months:",
    chart_rental_label: "Income vs Expenses over period",
    save_modal_title: "Save calculation",
    field_name: "Name",
    field_category: "Category",
    no_cat: "— No category —",
    cancel: "Cancel",
    save: "Save",
    cat_modal_title: "New category",
    field_cat_name: "Category name",
    field_color: "Color",
    create: "Create",
    rename_title: "Rename",
    new_cat: "New category",
    theme_light: "Light",
    theme_dark: "Dark",
    export_btn: "Export",
    f_purchase: "Purchase price",
    f_selling: "Selling price",
    f_delivery: "Delivery",
    f_commission: "Commission %",
    f_qty: "Quantity",
    f_name: "Item name",
    f_obj_name: "Object name",
    f_buy: "Purchase / cost",
    f_income: "Monthly income",
    f_expenses: "Monthly expenses",
    f_vacancy: "Vacancy %",
    f_period: "Period (months)",
    r_profit_per: "Profit/item",
    r_margin: "Margin",
    r_comm: "Commission",
    r_net_mo: "Net/month",
    r_total_net: "Total net",
    r_roi: "ROI",
    r_eff: "Eff. income",
    r_payback: "Payback",
    r_tot_inc: "Total income",
    s_total_profit: "Total profit",
    s_revenue: "Revenue",
    s_costs: "Costs",
    s_avg_margin: "Avg margin",
    s_return: "Total net return",
    s_invested: "Invested",
    s_port_roi: "Portfolio ROI",
    remove: "Remove",
    empty_items: "No items yet. Add one to start.",
    empty_objects: "No objects yet. Add one.",
    empty_saved: "No saved calculations found.",
    empty_saved_type: "No saved calculations here.",
    empty_cats: "No categories yet.",
    toast_loaded: "Loaded!",
    toast_saved: "Saved!",
    toast_deleted: "Deleted",
    toast_renamed: "Renamed",
    toast_exported: "Exported",
    toast_cat: "Category created",
    confirm_del: "Delete this calculation?",
    confirm_del_cat: "Delete this category?",
    all_cats: "All categories",
    all_types: "All types",
    type_resale: "Resale",
    type_rental: "Rental",
    n_items: (n) => (n === 1 ? "1 item" : `${n} items`),
    search_ph: "Search saved…",
  },
  ru: {
    nav_resale: "Продажа",
    nav_rental: "Аренда",
    nav_saved: "Сохранено",
    nav_cats: "Теги",
    sl_calculators: "Калькуляторы",
    sl_categories: "Категории",
    tab_calc: "Расчёт",
    tab_saved: "Сохранённые",
    add_item: "Добавить товар",
    add_object: "Добавить объект",
    save_calc: "Сохранить",
    chart_months_label: "Накоп. прибыль, месяцы:",
    chart_rental_label: "Доходы vs Расходы за период",
    save_modal_title: "Сохранить расчёт",
    field_name: "Название",
    field_category: "Категория",
    no_cat: "— Без категории —",
    cancel: "Отмена",
    save: "Сохранить",
    cat_modal_title: "Новая категория",
    field_cat_name: "Название категории",
    field_color: "Цвет",
    create: "Создать",
    rename_title: "Переименовать",
    new_cat: "Новая категория",
    theme_light: "Светлая",
    theme_dark: "Тёмная",
    export_btn: "Экспорт",
    f_purchase: "Цена покупки",
    f_selling: "Цена продажи",
    f_delivery: "Доставка",
    f_commission: "Комиссия %",
    f_qty: "Количество",
    f_name: "Название товара",
    f_obj_name: "Название объекта",
    f_buy: "Стоимость покупки",
    f_income: "Ежемесячный доход",
    f_expenses: "Ежемесячные расходы",
    f_vacancy: "Простой %",
    f_period: "Период (месяцев)",
    r_profit_per: "Прибыль/шт",
    r_margin: "Маржа",
    r_comm: "Комиссия",
    r_net_mo: "Чистая/мес",
    r_total_net: "Итого чистая",
    r_roi: "ROI",
    r_eff: "Эфф. доход",
    r_payback: "Окупаемость",
    r_tot_inc: "Итого доход",
    s_total_profit: "Итого прибыль",
    s_revenue: "Выручка",
    s_costs: "Затраты",
    s_avg_margin: "Ср. маржа",
    s_return: "Чистый возврат",
    s_invested: "Вложено",
    s_port_roi: "ROI портфеля",
    remove: "Удалить",
    empty_items: "Нет товаров. Добавьте первый.",
    empty_objects: "Нет объектов. Добавьте первый.",
    empty_saved: "Сохранённые не найдены.",
    empty_saved_type: "Нет сохранённых расчётов.",
    empty_cats: "Категорий пока нет.",
    toast_loaded: "Загружено!",
    toast_saved: "Сохранено!",
    toast_deleted: "Удалено",
    toast_renamed: "Переименовано",
    toast_exported: "Экспортировано",
    toast_cat: "Категория создана",
    confirm_del: "Удалить этот расчёт?",
    confirm_del_cat: "Удалить категорию?",
    all_cats: "Все категории",
    all_types: "Все типы",
    type_resale: "Перепродажа",
    type_rental: "Аренда",
    n_items: (n) =>
      n === 1 ? "1 товар" : n < 5 ? `${n} товара` : `${n} товаров`,
    search_ph: "Поиск…",
  },
  uk: {
    nav_resale: "Продаж",
    nav_rental: "Оренда",
    nav_saved: "Збережено",
    nav_cats: "Теги",
    sl_calculators: "Калькулятори",
    sl_categories: "Категорії",
    tab_calc: "Розрахунок",
    tab_saved: "Збережені",
    add_item: "Додати товар",
    add_object: "Додати об'єкт",
    save_calc: "Зберегти",
    chart_months_label: "Накоп. прибуток, місяці:",
    chart_rental_label: "Доходи vs Витрати за період",
    save_modal_title: "Зберегти розрахунок",
    field_name: "Назва",
    field_category: "Категорія",
    no_cat: "— Без категорії —",
    cancel: "Скасувати",
    save: "Зберегти",
    cat_modal_title: "Нова категорія",
    field_cat_name: "Назва категорії",
    field_color: "Колір",
    create: "Створити",
    rename_title: "Перейменувати",
    new_cat: "Нова категорія",
    theme_light: "Світла",
    theme_dark: "Темна",
    export_btn: "Експорт",
    f_purchase: "Ціна купівлі",
    f_selling: "Ціна продажу",
    f_delivery: "Доставка",
    f_commission: "Комісія %",
    f_qty: "Кількість",
    f_name: "Назва товару",
    f_obj_name: "Назва об'єкту",
    f_buy: "Вартість купівлі",
    f_income: "Щомісячний дохід",
    f_expenses: "Щомісячні витрати",
    f_vacancy: "Простій %",
    f_period: "Період (місяці)",
    r_profit_per: "Прибуток/шт",
    r_margin: "Маржа",
    r_comm: "Комісія",
    r_net_mo: "Чиста/міс",
    r_total_net: "Разом чиста",
    r_roi: "ROI",
    r_eff: "Еф. дохід",
    r_payback: "Окупність",
    r_tot_inc: "Разом дохід",
    s_total_profit: "Загальний прибуток",
    s_revenue: "Виручка",
    s_costs: "Витрати",
    s_avg_margin: "Сер. маржа",
    s_return: "Чистий дохід",
    s_invested: "Вкладено",
    s_port_roi: "ROI портфелю",
    remove: "Видалити",
    empty_items: "Товарів немає. Додайте перший.",
    empty_objects: "Об'єктів немає. Додайте перший.",
    empty_saved: "Збережені не знайдено.",
    empty_saved_type: "Немає збережених розрахунків.",
    empty_cats: "Категорій поки немає.",
    toast_loaded: "Завантажено!",
    toast_saved: "Збережено!",
    toast_deleted: "Видалено",
    toast_renamed: "Перейменовано",
    toast_exported: "Експортовано",
    toast_cat: "Категорію створено",
    confirm_del: "Видалити цей розрахунок?",
    confirm_del_cat: "Видалити категорію?",
    all_cats: "Всі категорії",
    all_types: "Всі типи",
    type_resale: "Перепродаж",
    type_rental: "Оренда",
    n_items: (n) =>
      n === 1 ? "1 товар" : n < 5 ? `${n} товари` : `${n} товарів`,
    search_ph: "Пошук…",
  },
};

/* ════════════════════════════════════════════
           STATE
        ════════════════════════════════════════════ */
const CAT_COLORS = [
  "#c8f060",
  "#60b4f0",
  "#b07ef0",
  "#ffbb45",
  "#ff6b6b",
  "#60f0c8",
  "#f060b0",
  "#f0a060",
];
const STORE = "profitlab_v3";

let ST = {
  lang: "en",
  saved: [],
  cats: [],
  selColor: CAT_COLORS[0],
  saveTarget: null,
  renameTarget: null,
};
let rObjs = [],
  nObjs = [];
let rId = 0,
  nId = 0;
let rChart = null,
  nChart = null;

/* ── persist ── */
function loadSt() {
  try {
    const d = JSON.parse(localStorage.getItem(STORE) || "{}");
    if (d.saved) ST.saved = d.saved;
    if (d.cats) ST.cats = d.cats;
    if (d.lang) ST.lang = d.lang;
    if (d.theme) applyTheme(d.theme, false);
  } catch (e) {}
}
function saveSt() {
  localStorage.setItem(
    STORE,
    JSON.stringify({
      saved: ST.saved,
      cats: ST.cats,
      lang: ST.lang,
      theme: document.documentElement.dataset.theme,
    })
  );
  updateBadges();
}

/* ── i18n ── */
function t(k) {
  return L[ST.lang]?.[k] ?? L.en[k] ?? k;
}
function applyI18n() {
  document.querySelectorAll("[data-i]").forEach((el) => {
    const v = t(el.dataset.i);
    if (typeof v === "string") el.textContent = v;
  });
  const si = document.getElementById("searchInput");
  if (si) si.placeholder = t("search_ph");
  rebuildSelects();
  updateBadges();
}
function setLang(l) {
  ST.lang = l;
  document.getElementById("langSel").value = l;
  applyI18n();
  renderResaleObjs();
  renderRentalObjs();
  renderSavedPage();
  renderCatPage();
  renderCatSidebar();
  saveSt();
}

/* ════════════════════════════════════════════
           RESPONSIVE: sidebar vs bottom-nav logic
        ════════════════════════════════════════════ */
const MOBILE_BP = 600;
const COLLAPSE_BP = 900;

function onResize() {
  const w = window.innerWidth;
  const body = document.body;
  const bn = document.getElementById("bottomNav");
  const so = document.getElementById("sidebarOverlay");

  if (w <= MOBILE_BP) {
    // bottom nav ON, sidebar off-canvas
    bn.style.display = "block";
    body.classList.add("has-bottom-nav");
    // hide sidebar overlay ref — handled by mobile-open class
  } else {
    // no bottom nav
    bn.style.display = "none";
    body.classList.remove("has-bottom-nav");
    // close mobile sidebar if open
    document.getElementById("sidebar").classList.remove("mobile-open");
    so.classList.add("hidden");
  }
}

function openMobileSidebar() {
  document.getElementById("sidebar").classList.add("mobile-open");
  document.getElementById("sidebarOverlay").classList.remove("hidden");
}
function closeMobileSidebar() {
  document.getElementById("sidebar").classList.remove("mobile-open");
  document.getElementById("sidebarOverlay").classList.add("hidden");
}
function toggleSidebarCollapse() {
  document.getElementById("sidebar").classList.toggle("collapsed");
}

window.addEventListener("resize", onResize);

/* ════════════════════════════════════════════
           NAVIGATION
        ════════════════════════════════════════════ */
const PAGE_TITLES = {
  resale: () => `Resale <em>${t("nav_resale")}</em>`,
  rental: () => `<em>${t("nav_rental")}</em>`,
  saved: () => `<em>${t("nav_saved")}</em>`,
  cats: () => `<em>${t("nav_cats")}</em>`,
};

function goPage(p) {
  document
    .querySelectorAll(".page")
    .forEach((el) => el.classList.remove("active"));
  document
    .querySelectorAll(".nav-item,.bn-btn")
    .forEach((el) => el.classList.remove("active"));
  document.getElementById("page-" + p).classList.add("active");
  const ni = document.getElementById("ni-" + p);
  if (ni) ni.classList.add("active");
  const bn = document.getElementById("bn-" + p);
  if (bn) bn.classList.add("active");
  document.getElementById("topbarTitle").innerHTML = PAGE_TITLES[p]();
  document.getElementById("scrollBody").scrollTop = 0;
  if (p === "saved") renderSavedPage();
  if (p === "cats") renderCatPage();
  if (window.innerWidth <= MOBILE_BP) closeMobileSidebar();
}

function switchCalcTab(type, mode) {
  const cp = document.getElementById(`${type}-calc-pane`);
  const sp = document.getElementById(`${type}-saved-pane`);
  const tc = document.getElementById(`ct-${type}-calc`);
  const ts = document.getElementById(`ct-${type}-saved`);
  tc.classList.toggle("active", mode === "calc");
  ts.classList.toggle("active", mode === "saved");
  cp.style.display = mode === "calc" ? "block" : "none";
  sp.style.display = mode === "saved" ? "block" : "none";
  if (mode === "saved") renderCalcSaved(type);
}

/* ════════════════════════════════════════════
           THEME
        ════════════════════════════════════════════ */
function applyTheme(th, save = true) {
  document.documentElement.dataset.theme = th;
  const btn = document.getElementById("themeBtn");
  const isDark = th === "dark";
  if (btn) {
    btn
      .querySelector("use")
      .setAttribute("href", isDark ? "#ic-sun" : "#ic-moon");
    const lbl = btn.querySelector(".sf-label");
    if (lbl) lbl.textContent = t(isDark ? "theme_light" : "theme_dark");
  }
  if (save) saveSt();
  setTimeout(() => {
    renderResaleChart();
    renderRentalChart();
  }, 60);
}
function toggleTheme() {
  applyTheme(
    document.documentElement.dataset.theme === "dark" ? "light" : "dark"
  );
}

/* ════════════════════════════════════════════
           SAFE NUMBER — prevents crash on huge values
        ════════════════════════════════════════════ */
const MAX = 1e12;
function sn(v) {
  const n = parseFloat(v);
  if (!isFinite(n) || isNaN(n)) return 0;
  return Math.min(Math.max(n, -MAX), MAX);
}
function gn(id) {
  return sn(document.getElementById(id)?.value);
}
function fmt(n) {
  if (!isFinite(n)) return "—";
  const a = Math.abs(n);
  if (a >= 1e9) return (n / 1e9).toFixed(2) + "B";
  if (a >= 1e6) return (n / 1e6).toFixed(2) + "M";
  if (a >= 1e3)
    return n.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  return n.toFixed(2);
}
function esc(s) {
  return String(s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
function sel(id, v) {
  const e = document.getElementById(id);
  if (e) e.textContent = v;
}
function scl(id, c) {
  const e = document.getElementById(id);
  if (e) e.className = c;
}

/* ════════════════════════════════════════════
           RESALE CALCULATOR
        ════════════════════════════════════════════ */
function addResaleObj(d) {
  const id = ++rId;
  rObjs.push({
    id,
    name: d?.name || "",
    purchase: d?.purchase || "",
    selling: d?.selling || "",
    delivery: d?.delivery || "",
    commission: d?.commission || "",
    qty: d?.qty || "1",
    open: true,
  });
  renderResaleObjs();
}
function removeResaleObj(id) {
  rObjs = rObjs.filter((o) => o.id !== id);
  renderResaleObjs();
}

function calcR(id) {
  const sell = gn(`ro_${id}_s`);
  const buy = gn(`ro_${id}_p`);
  const del = gn(`ro_${id}_d`);
  const cp = Math.min(100, Math.max(0, gn(`ro_${id}_c`)));
  const qty = Math.max(1, Math.round(gn(`ro_${id}_q`)) || 1);
  const comm = (sell * cp) / 100;
  const per = sell - buy - del - comm;
  return {
    sell,
    buy,
    del,
    comm,
    per,
    total: per * qty,
    margin: sell > 0 ? (per / sell) * 100 : 0,
    qty,
  };
}

function renderResaleObjs() {
  const w = document.getElementById("resaleObjects");
  if (!rObjs.length) {
    w.innerHTML = `<div class="empty"><div class="empty-icon"><svg class="ico" style="width:36px;height:36px"><use href="#ic-box"/></svg></div>${t(
      "empty_items"
    )}</div>`;
    renderResaleSummary();
    renderResaleChart();
    return;
  }
  w.innerHTML = rObjs.map((o) => rObjHTML(o)).join("");
  rObjs.forEach((o) => {
    [
      ["p", "purchase"],
      ["s", "selling"],
      ["d", "delivery"],
      ["c", "commission"],
      ["q", "qty"],
    ].forEach(([k, f]) => {
      const el = document.getElementById(`ro_${o.id}_${k}`);
      if (el) {
        el.value = o[f] || "";
        el.oninput = () => syncR(o.id);
      }
    });
    const ne = document.getElementById(`ro_${o.id}_n`);
    if (ne) {
      ne.value = o.name || "";
      ne.oninput = () => {
        o.name = ne.value;
        sel(`ro_${o.id}_disp`, o.name || t("f_name"));
      };
    }
  });
  updateResaleResults();
}

function rObjHTML(o) {
  const r = calcR(o.id);
  const pos = r.per >= 0;
  const sv = sn(o.selling);
  return `<div class="obj-card" id="roc-${o.id}">
<div class="obj-header" onclick="toggleRBody(${o.id})">
  <div class="obj-left">
    <div class="obj-title" id="ro_${o.id}_disp">${
    esc(o.name) || t("f_name")
  }</div>
    <div class="obj-sub">${t("f_qty")}: ${o.qty || 1} &middot; ${t(
    "f_selling"
  )}: $${fmt(sv)}</div>
  </div>
  <span class="obj-badge ${pos ? "pos" : "neg"}" id="rb_${o.id}">${
    pos ? "+" : ""
  }$${fmt(Math.abs(r.total))}</span>
  <span class="obj-chevron ${o.open ? "open" : ""}" id="rch_${
    o.id
  }"><svg class="ico ico-sm"><use href="#ic-chevron-d"/></svg></span>
</div>
<div class="obj-body" id="rb_body_${o.id}" ${
    o.open ? "" : 'style="display:none"'
  }>
  <div class="field-grid" style="margin-top:.9rem">
    <div class="field full"><label>${t(
      "f_name"
    )}</label><input type="text" id="ro_${o.id}_n" placeholder="${t(
    "f_name"
  )}"></div>
    <div class="field"><label>${t(
      "f_purchase"
    )}</label><div class="iw"><span class="isym">$</span><input type="number" id="ro_${
    o.id
  }_p" min="0" step="0.01" placeholder="0.00"></div></div>
    <div class="field"><label>${t(
      "f_selling"
    )}</label><div class="iw"><span class="isym">$</span><input type="number" id="ro_${
    o.id
  }_s" min="0" step="0.01" placeholder="0.00"></div></div>
    <div class="field"><label>${t(
      "f_delivery"
    )}</label><div class="iw"><span class="isym">$</span><input type="number" id="ro_${
    o.id
  }_d" min="0" step="0.01" placeholder="0.00"></div></div>
    <div class="field"><label>${t(
      "f_commission"
    )}</label><div class="iw"><span class="isym">%</span><input type="number" id="ro_${
    o.id
  }_c" min="0" max="100" step="0.1" placeholder="0.0"></div></div>
    <div class="field"><label>${t(
      "f_qty"
    )}</label><input type="number" id="ro_${
    o.id
  }_q" min="1" step="1" placeholder="1" class="ns"></div>
  </div>
  <div class="metrics" style="margin-top:.75rem">
    <div class="metric"><div class="m-label">${t(
      "r_profit_per"
    )}</div><div class="m-val ${pos ? "pos" : "neg"}" id="rm_per_${o.id}">${
    pos ? "+" : ""
  }$${fmt(Math.abs(r.per))}</div></div>
    <div class="metric"><div class="m-label">${t(
      "r_margin"
    )}</div><div class="m-val ${pos ? "pos" : "neg"}" id="rm_mg_${
    o.id
  }">${r.margin.toFixed(1)}%</div></div>
    <div class="metric"><div class="m-label">${t(
      "r_comm"
    )}</div><div class="m-val" id="rm_cm_${o.id}">$${fmt(r.comm)}</div></div>
  </div>
  <div class="btn-row"><button class="btn danger sm" onclick="removeResaleObj(${
    o.id
  })"><svg class="ico ico-sm"><use href="#ic-trash"/></svg>${t(
    "remove"
  )}</button></div>
</div></div>`;
}

function toggleRBody(id) {
  const o = rObjs.find((x) => x.id === id);
  if (!o) return;
  o.open = !o.open;
  const b = document.getElementById(`rb_body_${id}`);
  const c = document.getElementById(`rch_${id}`);
  if (b) b.style.display = o.open ? "" : "none";
  if (c) c.className = "obj-chevron" + (o.open ? " open" : "");
}
function syncR(id) {
  const o = rObjs.find((x) => x.id === id);
  if (!o) return;
  [
    ["p", "purchase"],
    ["s", "selling"],
    ["d", "delivery"],
    ["c", "commission"],
    ["q", "qty"],
  ].forEach(([k, f]) => {
    const el = document.getElementById(`ro_${id}_${k}`);
    if (el) o[f] = el.value;
  });
  const ne = document.getElementById(`ro_${id}_n`);
  if (ne) o.name = ne.value;
  updateResaleResults();
}

function clampCommission(el) {
  const v = parseFloat(el.value);
  if (!isNaN(v) && v > 100) {
    el.value = 100;
  }
  if (!isNaN(v) && v < 0) {
    el.value = 0;
  }
}

function updateResaleResults() {
  rObjs.forEach((o) => {
    const r = calcR(o.id);
    const pos = r.per >= 0;
    sel(`rb_${o.id}`, `${pos ? "+" : ""}$${fmt(Math.abs(r.total))}`);
    scl(`rb_${o.id}`, `obj-badge ${pos ? "pos" : "neg"}`);
    sel(`rm_per_${o.id}`, `${pos ? "+" : ""}$${fmt(Math.abs(r.per))}`);
    scl(`rm_per_${o.id}`, `m-val ${pos ? "pos" : "neg"}`);
    sel(`rm_mg_${o.id}`, `${r.margin.toFixed(1)}%`);
    scl(`rm_mg_${o.id}`, `m-val ${pos ? "pos" : "neg"}`);
    sel(`rm_cm_${o.id}`, `$${fmt(r.comm)}`);
    const sub = document.querySelector(`#roc-${o.id} .obj-sub`);
    if (sub)
      sub.textContent = `${t("f_qty")}: ${r.qty} · ${t("f_selling")}: $${fmt(
        r.sell
      )}`;
  });
  renderResaleSummary();
  renderResaleChart();
}
function renderResaleSummary() {
  const w = document.getElementById("resaleSummary");
  if (!rObjs.length) {
    w.innerHTML = "";
    return;
  }
  let rev = 0,
    cost = 0,
    profit = 0;
  rObjs.forEach((o) => {
    const r = calcR(o.id);
    rev += r.sell * r.qty;
    cost += (r.buy + r.del + r.comm) * r.qty;
    profit += r.total;
  });
  const pos = profit >= 0;
  const mg = rev > 0 ? (profit / rev) * 100 : 0;
  w.innerHTML = `
<div class="hero ${pos ? "pos" : "neg"}"><div class="hero-label">${t(
    "s_total_profit"
  )}</div><div class="hero-val ${pos ? "pos" : "neg"}">${pos ? "+" : "−"}$${fmt(
    Math.abs(profit)
  )}</div></div>
<div class="metrics">
  <div class="metric"><div class="m-label">${t(
    "s_revenue"
  )}</div><div class="m-val">$${fmt(rev)}</div></div>
  <div class="metric"><div class="m-label">${t(
    "s_costs"
  )}</div><div class="m-val">$${fmt(cost)}</div></div>
  <div class="metric"><div class="m-label">${t(
    "s_avg_margin"
  )}</div><div class="m-val ${pos ? "pos" : "neg"}">${mg.toFixed(
    1
  )}%</div></div>
</div>`;
}
function renderResaleChart() {
  const ctx = document.getElementById("resaleChart");
  if (!ctx) return;
  const mo = Math.min(
    120,
    Math.max(1, parseInt(document.getElementById("chartMonths")?.value) || 12)
  );
  const labels = Array.from({ length: mo }, (_, i) => `M${i + 1}`);
  const isDark = document.documentElement.dataset.theme !== "light";
  const gc = isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.06)";
  const tc = isDark ? "#7a7880" : "#6b6875";
  const ds = rObjs.map((o, i) => {
    const r = calcR(o.id);
    return {
      label: o.name || "Item " + o.id,
      data: labels.map((_, m) => +((m + 1) * r.total).toFixed(2)),
      borderColor: CAT_COLORS[i % CAT_COLORS.length],
      borderWidth: 2,
      tension: 0.4,
      fill: false,
      pointRadius: 2,
    };
  });
  if (rChart)
    try {
      rChart.destroy();
    } catch (e) {}
  try {
    rChart = new Chart(ctx, {
      type: "line",
      data: { labels, datasets: ds },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        plugins: {
          legend: {
            labels: {
              color: tc,
              font: { family: "'DM Mono'" },
              boxWidth: 10,
              padding: 8,
            },
          },
        },
        scales: {
          x: {
            grid: { color: gc },
            ticks: {
              color: tc,
              font: { family: "'DM Mono'", size: 10 },
              maxTicksLimit: 8,
            },
          },
          y: {
            grid: { color: gc },
            ticks: {
              color: tc,
              font: { family: "'DM Mono'", size: 10 },
              callback: (v) => "$" + fmt(v),
            },
          },
        },
      },
    });
  } catch (e) {
    console.warn(e);
  }
}

/* ════════════════════════════════════════════
           RENTAL CALCULATOR
        ════════════════════════════════════════════ */
function addRentalObj(d) {
  const id = ++nId;
  nObjs.push({
    id,
    name: d?.name || "",
    purchase: d?.purchase || "",
    income: d?.income || "",
    expenses: d?.expenses || "",
    vacancy: d?.vacancy || "",
    period: d?.period || "12",
    open: true,
  });
  renderRentalObjs();
}
function removeRentalObj(id) {
  nObjs = nObjs.filter((o) => o.id !== id);
  renderRentalObjs();
}

function calcN(id) {
  const buy = gn(`rn_${id}_p`);
  const inc = gn(`rn_${id}_i`);
  const exp = gn(`rn_${id}_e`);
  const vac = Math.min(100, Math.max(0, gn(`rn_${id}_v`)));
  const per = Math.min(600, Math.max(1, Math.round(gn(`rn_${id}_t`)) || 12));
  const eff = inc * (1 - vac / 100);
  const nm = eff - exp;
  const totNet = nm * per;
  const roi = buy > 0 ? (totNet / buy) * 100 : 0;
  const payback = nm > 0 ? buy / nm : null;
  return {
    buy,
    inc,
    exp,
    vac,
    per,
    eff,
    nm,
    totInc: eff * per,
    totExp: exp * per,
    totNet,
    roi,
    payback,
  };
}

function renderRentalObjs() {
  const w = document.getElementById("rentalObjects");
  if (!nObjs.length) {
    w.innerHTML = `<div class="empty"><div class="empty-icon"><svg class="ico" style="width:36px;height:36px"><use href="#ic-home"/></svg></div>${t(
      "empty_objects"
    )}</div>`;
    renderRentalSummary();
    renderRentalChart();
    return;
  }
  w.innerHTML = nObjs.map((o) => nObjHTML(o)).join("");
  nObjs.forEach((o) => {
    [
      ["p", "purchase"],
      ["i", "income"],
      ["e", "expenses"],
      ["v", "vacancy"],
      ["t", "period"],
    ].forEach(([k, f]) => {
      const el = document.getElementById(`rn_${o.id}_${k}`);
      if (el) {
        el.value = o[f] || "";
        el.oninput = () => syncN(o.id);
      }
    });
    const ne = document.getElementById(`rn_${o.id}_n`);
    if (ne) {
      ne.value = o.name || "";
      ne.oninput = () => {
        o.name = ne.value;
        sel(`rn_${o.id}_disp`, o.name || t("f_obj_name"));
      };
    }
  });
  updateRentalResults();
}

function nObjHTML(o) {
  const r = calcN(o.id);
  const pos = r.nm >= 0;
  const inc = sn(o.income);
  return `<div class="obj-card" id="noc-${o.id}">
<div class="obj-header" onclick="toggleNBody(${o.id})">
  <div class="obj-left">
    <div class="obj-title" id="rn_${o.id}_disp">${
    esc(o.name) || t("f_obj_name")
  }</div>
    <div class="obj-sub">${t("f_period")}: ${o.period || 12} &middot; ${t(
    "f_income"
  )}: $${fmt(inc)}</div>
  </div>
  <span class="obj-badge ${pos ? "pos" : "neg"}" id="nb_${o.id}">${
    pos ? "+" : ""
  }$${fmt(Math.abs(r.nm))}/mo</span>
  <span class="obj-chevron ${o.open ? "open" : ""}" id="nch_${
    o.id
  }"><svg class="ico ico-sm"><use href="#ic-chevron-d"/></svg></span>
</div>
<div class="obj-body" id="nb_body_${o.id}" ${
    o.open ? "" : 'style="display:none"'
  }>
  <div class="field-grid" style="margin-top:.9rem">
    <div class="field full"><label>${t(
      "f_obj_name"
    )}</label><input type="text" id="rn_${o.id}_n" placeholder="${t(
    "f_obj_name"
  )}"></div>
    <div class="field"><label>${t(
      "f_buy"
    )}</label><div class="iw"><span class="isym">$</span><input type="number" id="rn_${
    o.id
  }_p" min="0" step="0.01" placeholder="0.00"></div></div>
    <div class="field"><label>${t(
      "f_income"
    )}</label><div class="iw"><span class="isym">$</span><input type="number" id="rn_${
    o.id
  }_i" min="0" step="0.01" placeholder="0.00"></div></div>
    <div class="field"><label>${t(
      "f_expenses"
    )}</label><div class="iw"><span class="isym">$</span><input type="number" id="rn_${
    o.id
  }_e" min="0" step="0.01" placeholder="0.00"></div></div>
    <div class="field"><label>${t(
      "f_vacancy"
    )}</label><div class="iw"><span class="isym">%</span><input type="number" id="rn_${
    o.id
  }_v" min="0" max="100" step="0.1" placeholder="0.0"></div></div>
    <div class="field"><label>${t(
      "f_period"
    )}</label><input type="number" id="rn_${
    o.id
  }_t" min="1" max="600" step="1" placeholder="12" class="ns"></div>
  </div>
  <div class="metrics" style="margin-top:.75rem">
    <div class="metric"><div class="m-label">${t(
      "r_net_mo"
    )}</div><div class="m-val ${pos ? "pos" : "neg"}" id="nm_mo_${o.id}">${
    pos ? "+" : ""
  }$${fmt(Math.abs(r.nm))}</div></div>
    <div class="metric"><div class="m-label">${t(
      "r_total_net"
    )}</div><div class="m-val ${pos ? "pos" : "neg"}" id="nm_tn_${o.id}">${
    pos ? "+" : ""
  }$${fmt(Math.abs(r.totNet))}</div></div>
    <div class="metric"><div class="m-label">${t(
      "r_roi"
    )}</div><div class="m-val ${r.roi >= 0 ? "pos" : "neg"}" id="nm_roi_${
    o.id
  }">${r.roi.toFixed(1)}%</div></div>
    <div class="metric"><div class="m-label">${t(
      "r_eff"
    )}</div><div class="m-val" id="nm_eff_${o.id}">$${fmt(r.eff)}</div></div>
    <div class="metric"><div class="m-label">${t(
      "r_payback"
    )}</div><div class="m-val amber" id="nm_pb_${o.id}">${
    r.payback !== null ? fmt(r.payback) + "mo" : "∞"
  }</div></div>
    <div class="metric"><div class="m-label">${t(
      "r_tot_inc"
    )}</div><div class="m-val" id="nm_ti_${o.id}">$${fmt(r.totInc)}</div></div>
  </div>
  <div class="btn-row"><button class="btn danger sm" onclick="removeRentalObj(${
    o.id
  })"><svg class="ico ico-sm"><use href="#ic-trash"/></svg>${t(
    "remove"
  )}</button></div>
</div></div>`;
}

function toggleNBody(id) {
  const o = nObjs.find((x) => x.id === id);
  if (!o) return;
  o.open = !o.open;
  const b = document.getElementById(`nb_body_${id}`);
  const c = document.getElementById(`nch_${id}`);
  if (b) b.style.display = o.open ? "" : "none";
  if (c) c.className = "obj-chevron" + (o.open ? " open" : "");
}
function syncN(id) {
  const o = nObjs.find((x) => x.id === id);
  if (!o) return;
  [
    ["p", "purchase"],
    ["i", "income"],
    ["e", "expenses"],
    ["v", "vacancy"],
    ["t", "period"],
  ].forEach(([k, f]) => {
    const el = document.getElementById(`rn_${id}_${k}`);
    if (el) o[f] = el.value;
  });
  const ne = document.getElementById(`rn_${id}_n`);
  if (ne) o.name = ne.value;
  updateRentalResults();
}
function updateRentalResults() {
  nObjs.forEach((o) => {
    const r = calcN(o.id);
    const pos = r.nm >= 0;
    sel(`nb_${o.id}`, `${pos ? "+" : ""}$${fmt(Math.abs(r.nm))}/mo`);
    scl(`nb_${o.id}`, `obj-badge ${pos ? "pos" : "neg"}`);
    sel(`nm_mo_${o.id}`, `${pos ? "+" : ""}$${fmt(Math.abs(r.nm))}`);
    scl(`nm_mo_${o.id}`, `m-val ${pos ? "pos" : "neg"}`);
    sel(`nm_tn_${o.id}`, `${pos ? "+" : ""}$${fmt(Math.abs(r.totNet))}`);
    scl(`nm_tn_${o.id}`, `m-val ${pos ? "pos" : "neg"}`);
    sel(`nm_roi_${o.id}`, `${r.roi.toFixed(1)}%`);
    scl(`nm_roi_${o.id}`, `m-val ${r.roi >= 0 ? "pos" : "neg"}`);
    sel(`nm_eff_${o.id}`, `$${fmt(r.eff)}`);
    sel(`nm_pb_${o.id}`, r.payback !== null ? `${fmt(r.payback)}mo` : "∞");
    sel(`nm_ti_${o.id}`, `$${fmt(r.totInc)}`);
    const sub = document.querySelector(`#noc-${o.id} .obj-sub`);
    if (sub)
      sub.textContent = `${t("f_period")}: ${r.per} · ${t("f_income")}: $${fmt(
        r.inc
      )}`;
  });
  renderRentalSummary();
  renderRentalChart();
}
function renderRentalSummary() {
  const w = document.getElementById("rentalSummary");
  if (!nObjs.length) {
    w.innerHTML = "";
    return;
  }
  let inv = 0,
    net = 0,
    inc = 0;
  nObjs.forEach((o) => {
    const r = calcN(o.id);
    inv += r.buy;
    net += r.totNet;
    inc += r.totInc;
  });
  const pos = net >= 0;
  const roi = inv > 0 ? (net / inv) * 100 : 0;
  w.innerHTML = `
<div class="hero ${pos ? "pos" : "neg"}"><div class="hero-label">${t(
    "s_return"
  )}</div><div class="hero-val ${pos ? "pos" : "neg"}">${pos ? "+" : "−"}$${fmt(
    Math.abs(net)
  )}</div></div>
<div class="metrics">
  <div class="metric"><div class="m-label">${t(
    "s_invested"
  )}</div><div class="m-val">$${fmt(inv)}</div></div>
  <div class="metric"><div class="m-label">${t(
    "r_tot_inc"
  )}</div><div class="m-val">$${fmt(inc)}</div></div>
  <div class="metric"><div class="m-label">${t(
    "s_port_roi"
  )}</div><div class="m-val ${pos ? "pos" : "neg"}">${roi.toFixed(
    1
  )}%</div></div>
</div>`;
}
function renderRentalChart() {
  const ctx = document.getElementById("rentalChart");
  if (!ctx) return;
  const isDark = document.documentElement.dataset.theme !== "light";
  const gc = isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.06)";
  const tc = isDark ? "#7a7880" : "#6b6875";
  const maxP = Math.max(
    ...nObjs.map((o) => Math.min(120, Math.max(1, parseInt(o.period) || 12))),
    12
  );
  const labels = Array.from({ length: maxP }, (_, i) => `M${i + 1}`);
  const ds = [];
  nObjs.forEach((o, i) => {
    const r = calcN(o.id);
    const per = Math.min(120, r.per);
    ds.push({
      label: (o.name || "Obj " + o.id) + " inc",
      data: labels.map((_, m) =>
        m < per ? +(r.eff * (m + 1)).toFixed(2) : null
      ),
      borderColor: CAT_COLORS[(i * 2) % CAT_COLORS.length],
      borderWidth: 2,
      tension: 0.4,
      fill: false,
      pointRadius: 2,
    });
    ds.push({
      label: (o.name || "Obj " + o.id) + " exp",
      data: labels.map((_, m) =>
        m < per ? +(r.exp * (m + 1)).toFixed(2) : null
      ),
      borderColor: CAT_COLORS[(i * 2 + 1) % CAT_COLORS.length],
      borderWidth: 2,
      tension: 0.4,
      fill: false,
      pointRadius: 2,
      borderDash: [4, 4],
    });
  });
  if (nChart)
    try {
      nChart.destroy();
    } catch (e) {}
  try {
    nChart = new Chart(ctx, {
      type: "line",
      data: { labels, datasets: ds },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        plugins: {
          legend: {
            labels: {
              color: tc,
              font: { family: "'DM Mono'" },
              boxWidth: 10,
              padding: 8,
            },
          },
        },
        scales: {
          x: {
            grid: { color: gc },
            ticks: {
              color: tc,
              font: { family: "'DM Mono'", size: 10 },
              maxTicksLimit: 8,
            },
          },
          y: {
            grid: { color: gc },
            ticks: {
              color: tc,
              font: { family: "'DM Mono'", size: 10 },
              callback: (v) => "$" + fmt(v),
            },
          },
        },
      },
    });
  } catch (e) {
    console.warn(e);
  }
}

/* ════════════════════════════════════════════
           CATEGORIES
        ════════════════════════════════════════════ */
function openCatModal() {
  document.getElementById("catNameInput").value = "";
  ST.selColor = CAT_COLORS[0];
  renderSwatches();
  openModal("catModal");
}
function renderSwatches() {
  document.getElementById("swatchRow").innerHTML = CAT_COLORS.map(
    (c) =>
      `<div class="sw ${
        ST.selColor === c ? "sel" : ""
      }" style="background:${c}" onclick="ST.selColor='${c}';renderSwatches()"></div>`
  ).join("");
}
function confirmAddCat() {
  const name = document.getElementById("catNameInput").value.trim();
  if (!name) return;
  ST.cats.push({ id: "c" + Date.now(), name, color: ST.selColor });
  saveSt();
  rebuildSelects();
  renderCatPage();
  renderCatSidebar();
  closeModal("catModal");
  toast(t("toast_cat"));
}
function deleteCat(id) {
  if (!confirm(t("confirm_del_cat"))) return;
  ST.cats = ST.cats.filter((c) => c.id !== id);
  ST.saved = ST.saved.map((s) => (s.catId === id ? { ...s, catId: "" } : s));
  saveSt();
  rebuildSelects();
  renderCatPage();
  renderCatSidebar();
}
function renderCatSidebar() {
  const w = document.getElementById("catSidebarList");
  if (!ST.cats.length) {
    w.innerHTML = "";
    return;
  }
  w.innerHTML = ST.cats
    .map(
      (c) => `
<div class="cat-row" onclick="filterByCat('${c.id}')">
  <span class="cat-dot" style="background:${c.color}"></span>
  <span class="cat-name">${esc(c.name)}</span>
  <button class="cat-del-btn" onclick="event.stopPropagation();deleteCat('${
    c.id
  }')"><svg class="ico ico-sm"><use href="#ic-x"/></svg></button>
</div>`
    )
    .join("");
}
function renderCatPage() {
  const w = document.getElementById("catPageList");
  if (!ST.cats.length) {
    w.innerHTML = `<div class="empty"><div class="empty-icon"><svg class="ico" style="width:36px;height:36px"><use href="#ic-tag"/></svg></div>${t(
      "empty_cats"
    )}</div>`;
    return;
  }
  w.innerHTML = ST.cats
    .map(
      (c) => `
<div class="card" style="display:flex;align-items:center;gap:10px;padding:.85rem 1rem">
  <span style="width:10px;height:10px;border-radius:50%;background:${
    c.color
  };flex-shrink:0;display:inline-block"></span>
  <span style="flex:1;font-size:13px">${esc(c.name)}</span>
  <button class="ibc del" onclick="deleteCat('${
    c.id
  }')"><svg class="ico ico-sm"><use href="#ic-trash"/></svg></button>
</div>`
    )
    .join("");
}
function filterByCat(id) {
  goPage("saved");
  const fc = document.getElementById("filterCat");
  if (fc) fc.value = id;
  renderSavedPage();
}
function rebuildSelects() {
  const opts =
    `<option value="">${t("no_cat")}</option>` +
    ST.cats
      .map((c) => `<option value="${c.id}">${esc(c.name)}</option>`)
      .join("");
  const sc = document.getElementById("saveCatSel");
  if (sc) {
    const v = sc.value;
    sc.innerHTML = opts;
    sc.value = v;
  }
  const fc = document.getElementById("filterCat");
  if (fc) {
    const v = fc.value;
    fc.innerHTML =
      `<option value="">${t("all_cats")}</option>` +
      ST.cats
        .map((c) => `<option value="${c.id}">${esc(c.name)}</option>`)
        .join("");
    fc.value = v;
  }
  const ft = document.getElementById("filterType");
  if (ft)
    ft.innerHTML = `<option value="">${t(
      "all_types"
    )}</option><option value="resale">${t(
      "type_resale"
    )}</option><option value="rental">${t("type_rental")}</option>`;
}

/* ════════════════════════════════════════════
           SAVE / LOAD
        ════════════════════════════════════════════ */
function openSaveModal(type) {
  ST.saveTarget = type;
  document.getElementById("saveName").value = "";
  document.getElementById("saveCatSel").value = "";
  rebuildSelects();
  openModal("saveModal");
  setTimeout(() => document.getElementById("saveName").focus(), 200);
}
function confirmSave() {
  const name = document.getElementById("saveName").value.trim();
  if (!name) return;
  const catId = document.getElementById("saveCatSel").value;
  const type = ST.saveTarget;
  let snap;
  if (type === "resale") {
    snap = rObjs.map((o) => ({
      id: o.id,
      name: o.name,
      purchase: gn(`ro_${o.id}_p`),
      selling: gn(`ro_${o.id}_s`),
      delivery: gn(`ro_${o.id}_d`),
      commission: gn(`ro_${o.id}_c`),
      qty: gn(`ro_${o.id}_q`),
    }));
  } else {
    snap = nObjs.map((o) => ({
      id: o.id,
      name: o.name,
      purchase: gn(`rn_${o.id}_p`),
      income: gn(`rn_${o.id}_i`),
      expenses: gn(`rn_${o.id}_e`),
      vacancy: gn(`rn_${o.id}_v`),
      period: gn(`rn_${o.id}_t`),
    }));
  }
  ST.saved.push({
    id: "s" + Date.now(),
    name,
    type,
    catId,
    date: new Date().toLocaleDateString(),
    snap,
  });
  saveSt();
  closeModal("saveModal");
  toast(t("toast_saved"));
}
function loadSaved(id) {
  const s = ST.saved.find((x) => x.id === id);
  if (!s) return;
  if (s.type === "resale") {
    rObjs = [];
    rId = 0;
    s.snap.forEach((d) => addResaleObj(d));
    setTimeout(() => {
      s.snap.forEach((d) => {
        [
          ["p", "purchase"],
          ["s", "selling"],
          ["d", "delivery"],
          ["c", "commission"],
          ["q", "qty"],
        ].forEach(([k, f]) => {
          const el = document.getElementById(`ro_${d.id}_${k}`);
          if (el) el.value = d[f] || "";
        });
      });
      updateResaleResults();
    }, 60);
    goPage("resale");
    switchCalcTab("resale", "calc");
  } else {
    nObjs = [];
    nId = 0;
    s.snap.forEach((d) => addRentalObj(d));
    setTimeout(() => {
      s.snap.forEach((d) => {
        [
          ["p", "purchase"],
          ["i", "income"],
          ["e", "expenses"],
          ["v", "vacancy"],
          ["t", "period"],
        ].forEach(([k, f]) => {
          const el = document.getElementById(`rn_${d.id}_${k}`);
          if (el) el.value = d[f] || "";
        });
      });
      updateRentalResults();
    }, 60);
    goPage("rental");
    switchCalcTab("rental", "calc");
  }
  toast(t("toast_loaded"));
}
function deleteSaved(id) {
  if (!confirm(t("confirm_del"))) return;
  ST.saved = ST.saved.filter((s) => s.id !== id);
  saveSt();
  renderSavedPage();
  renderCalcSaved("resale");
  renderCalcSaved("rental");
  toast(t("toast_deleted"));
}
function openRename(id) {
  ST.renameTarget = id;
  const s = ST.saved.find((x) => x.id === id);
  if (!s) return;
  document.getElementById("renameInput").value = s.name;
  openModal("renameModal");
}
function confirmRename() {
  const name = document.getElementById("renameInput").value.trim();
  if (!name || !ST.renameTarget) return;
  const s = ST.saved.find((x) => x.id === ST.renameTarget);
  if (s) s.name = name;
  saveSt();
  closeModal("renameModal");
  renderSavedPage();
  toast(t("toast_renamed"));
}

function savedHTML(s) {
  const cat = ST.cats.find((c) => c.id === s.catId);
  const cl = s.type === "resale" ? "chip g" : "chip b";
  const tl = s.type === "resale" ? t("type_resale") : t("type_rental");
  return `<div class="saved-card" onclick="loadSaved('${s.id}')">
<div class="saved-info">
  <div class="saved-name">${esc(s.name)}</div>
  <div class="saved-meta">
    <span class="${cl}">${tl}</span>
    ${
      cat
        ? `<span class="cdb"><span class="cdot" style="background:${
            cat.color
          }"></span>${esc(cat.name)}</span>`
        : ""
    }
    <span>${s.date} &middot; ${t("n_items")((s.snap || []).length)}</span>
  </div>
</div>
<div class="saved-acts">
  <button class="ibc" onclick="event.stopPropagation();openRename('${
    s.id
  }')"><svg class="ico ico-sm"><use href="#ic-edit"/></svg></button>
  <button class="ibc del" onclick="event.stopPropagation();deleteSaved('${
    s.id
  }')"><svg class="ico ico-sm"><use href="#ic-trash"/></svg></button>
</div></div>`;
}
function renderSavedPage() {
  const w = document.getElementById("savedPageList");
  const q = (document.getElementById("searchInput")?.value || "").toLowerCase();
  const cat = document.getElementById("filterCat")?.value || "";
  const type = document.getElementById("filterType")?.value || "";
  let items = ST.saved;
  if (q) items = items.filter((s) => s.name.toLowerCase().includes(q));
  if (cat) items = items.filter((s) => s.catId === cat);
  if (type) items = items.filter((s) => s.type === type);
  if (!items.length) {
    w.innerHTML = `<div class="empty"><div class="empty-icon"><svg class="ico" style="width:36px;height:36px"><use href="#ic-folder"/></svg></div>${t(
      "empty_saved"
    )}</div>`;
    return;
  }
  w.innerHTML = items.map((s) => savedHTML(s)).join("");
}
function renderCalcSaved(type) {
  const w = document.getElementById(`${type}SavedList`);
  if (!w) return;
  const items = ST.saved.filter((s) => s.type === type);
  if (!items.length) {
    w.innerHTML = `<div class="empty"><div class="empty-icon"><svg class="ico" style="width:36px;height:36px"><use href="#ic-folder"/></svg></div>${t(
      "empty_saved_type"
    )}</div>`;
    return;
  }
  w.innerHTML = items.map((s) => savedHTML(s)).join("");
}
function updateBadges() {
  const n = ST.saved.length;
  const s = String(n);
  const si = document.getElementById("siBadge");
  if (si) si.textContent = s;
  const bn = document.getElementById("bnBadge");
  if (bn) {
    bn.textContent = s;
    bn.style.display = n ? "block" : "none";
  }
}

/* ════════════════════════════════════════════
           EXPORT
        ════════════════════════════════════════════ */
function exportData() {
  const d = {
    exported: new Date().toISOString(),
    saved: ST.saved,
    categories: ST.cats,
  };
  const blob = new Blob([JSON.stringify(d, null, 2)], {
    type: "application/json",
  });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "profitlab-export.json";
  a.click();
  toast(t("toast_exported"));
}

/* ════════════════════════════════════════════
           MODALS
        ════════════════════════════════════════════ */
function openModal(id) {
  document.getElementById(id).classList.remove("hidden");
}
function closeModal(id) {
  document.getElementById(id).classList.add("hidden");
}
document.querySelectorAll(".overlay").forEach((el) =>
  el.addEventListener("click", function (e) {
    if (e.target === this) this.classList.add("hidden");
  })
);

/* ════════════════════════════════════════════
           TOAST
        ════════════════════════════════════════════ */
let toastT;
function toast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastT);
  toastT = setTimeout(() => el.classList.remove("show"), 2000);
}

/* ════════════════════════════════════════════
           INIT
        ════════════════════════════════════════════ */
loadSt();
// determine language
const sysLang = (navigator.language || "en").substring(0, 2);
if (!["en", "ru", "uk"].includes(ST.lang))
  ST.lang = ["en", "ru", "uk"].includes(sysLang) ? sysLang : "en";
document.getElementById("langSel").value = ST.lang;

applyI18n();
rebuildSelects();
renderCatSidebar();
renderCatPage();
updateBadges();
onResize();

addResaleObj();
addRentalObj();

setTimeout(() => {
  renderResaleChart();
  renderRentalChart();
}, 150);
