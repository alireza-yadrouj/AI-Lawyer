# Handoff — محامي AI (AI Lawyer Platform)

> **EN + فارسی** developer/designer handoff. This document is self-sufficient: a designer or developer who was not part of the design process can rebuild the product from this file alone.
>
> این سند به دو زبان انگلیسی و فارسی است و به‌تنهایی کافی است؛ طراح یا توسعه‌دهنده‌ای که در فرایند طراحی نبوده می‌تواند تنها با همین فایل، محصول را بازسازی کند.

---

## 1. Overview / معرفی

**EN —** *محامي AI* is a tri-lingual (Arabic / Kurdish Sorani / Persian) legal platform for lawyers in Iraq & the Kurdistan Region. It combines an AI legal consultation chat, a searchable law database (Iraq + Kurdistan), cassation rulings, case management, client messaging, financial management, reminders/calendar, a lawyer directory, and subscriptions. Two design references are included: a **desktop/web** layout and a **native-style mobile app** layout.

**FA —** «محامي AI» یک پلتفرم حقوقی سه‌زبانه (عربی / کردی سورانی / فارسی) برای وکلای عراق و اقلیم کردستان است. شامل: مشاورهٔ حقوقی هوش مصنوعی، پایگاه قوانین قابل‌جستجو (عراق + کردستان)، آرای تمییزی، مدیریت پرونده‌ها، پیام‌رسانی با موکل، مدیریت مالی، یادآوری‌ها/تقویم، راهنمای وکلا و اشتراک‌ها. دو نمونهٔ طراحی ارائه شده است: نسخهٔ **دسکتاپ/وب** و نسخهٔ **اپلیکیشن موبایل** (شبیه اپ بومی).

---

## 2. About the design files / دربارهٔ فایل‌ها

**EN —** The files in this bundle are **design references built in HTML** — high-fidelity prototypes showing the intended look and behaviour. They are **not** production code to ship as-is. The task is to **recreate these designs in the target codebase** (React / Vue / Flutter / native, etc.) using its own patterns and libraries. If no codebase exists yet, choose the most suitable framework and implement the designs there. The standalone `.html` files render identically on any device with no internet and no build step — use them as the visual source of truth.

**FA —** فایل‌های این بسته **مرجع طراحی ساخته‌شده با HTML** هستند — نمونهٔ اولیهٔ باکیفیت که ظاهر و رفتار موردنظر را نشان می‌دهد؛ کد نهایی برای انتشار مستقیم نیستند. وظیفه این است که این طرح‌ها در کدبیس هدف (React / Vue / Flutter / بومی و…) با الگوها و کتابخانه‌های همان پروژه **بازسازی** شوند. فایل‌های standalone بدون اینترنت و بدون مرحلهٔ build روی هر دستگاهی یکسان نمایش داده می‌شوند و منبع رسمی طراحی هستند.

---

## 3. Fidelity / سطح دقت

**High-fidelity (هایفای).** Final colors, typography, spacing and interactions. Recreate pixel-for-pixel using the codebase's libraries. / رنگ‌ها، تایپوگرافی، فاصله‌ها و تعامل‌ها نهایی هستند؛ عیناً بازسازی شوند.

---

## 4. What's in this bundle / محتوای بسته

```
design_handoff_ai_lawyer/
├── README.md                         ← this file / همین فایل
├── standalone/
│   ├── ai-lawyer-desktop.html        ← self-contained desktop build (offline, stable)
│   └── ai-lawyer-mobile.html         ← self-contained mobile build (offline, stable)
└── source/
    ├── ai-lawyer-desktop.dc.html     ← editable desktop source
    ├── ai-lawyer-mobile.dc.html      ← editable mobile source
    ├── support.js                    ← the runtime the .dc.html sources need
    └── assets/logo.png               ← brand logo
```

**EN —** Open the two files in `standalone/` in any browser to review the design — they never change and never break. The `source/*.dc.html` files are the editable originals; open them with the same `support.js` present alongside.

**FA —** برای مرور طراحی، دو فایل داخل `standalone/` را در هر مرورگری باز کنید — هرگز تغییر نمی‌کنند و خراب نمی‌شوند. فایل‌های `source/*.dc.html` نسخهٔ اصلی قابل‌ویرایش هستند و به `support.js` کنارشان نیاز دارند.

> ⚠️ **Why the previous send looked broken / چرا ارسال قبلی خراب دیده شد:** the raw `.dc.html` source needs `support.js` next to it and a UTF-8 server; sent alone it shows gibberish. **Always send the files in `standalone/`** — everything (fonts, icons, logo, code) is embedded and UTF-8-safe. / فایل خام `.dc.html` بدون `support.js` و سرور UTF-8 به‌هم‌ریخته دیده می‌شود. همیشه فایل‌های داخل `standalone/` را بفرستید؛ همه‌چیز (فونت، آیکون، لوگو، کد) درون فایل جاسازی شده است.

---

## 5. Languages & RTL / زبان‌ها و راست‌به‌چپ

- Three languages, all **RTL**: Arabic (`ar`), Kurdish Sorani (`ku`), Persian (`fa`). Toggle cycles `ar → ku → fa`.
- Every string, list, and data table has a value per language (no fallbacks). When the language changes, **all** content changes — headings, body, sample data, dates, currency labels.
- Fonts per language: **El Messiri** (Arabic display), **Noto Kufi Arabic** (Arabic/Kurdish body), **Vazirmatn** (Persian), **Cormorant Garamond** (numerals/prices accent).
- سه زبان، همگی راست‌به‌چپ؛ دکمهٔ زبان چرخه‌ای است. با تغییر زبان، همهٔ محتوا (عنوان‌ها، متن، دادهٔ نمونه، تاریخ‌ها) عوض می‌شود.

---

## 6. Design tokens / توکن‌های طراحی

### Colors — Dark theme (default)
| Token | Value | Use |
|---|---|---|
| `--bg` | `#080D18` | page background |
| `--sidebar` | `linear-gradient(#0c1626,#0a1220)` | app sidebar / drawer |
| `--panel` | `linear-gradient(#111d31,#0d1728)` | cards |
| `--panelHi` | `linear-gradient(#13233c,#0e1a2e)` | highlighted cards |
| `--ink` | `#F4E9CC` | primary text |
| `--body` | `#C6CBD4` | body text |
| `--muted` | `#8FA9B6` | secondary text |
| `--line` / `--line2` | `rgba(255,255,255,.08)` / `.06` | borders |
| Gold primary | `#C89B3C` | brand / CTAs |
| Gold light | `#E3C77A` | accents, active icons |
| Teal | `#2E7C97` / `#7FC7DE` | secondary accent |
| Green | `#3ddc84` | success / income |
| Red | `#e0847e` | danger / expense |

### Colors — Light theme (`.om-light`)
`--bg:#F1EBDD; --panel:#ffffff; --panelHi:#FBF5E9; --ink:#14202e; --body:#3d4a5a; --muted:#6b7787;` (gold/teal accents unchanged).

### Type scale
Display headings 40–56px (desktop) / 22–32px (mobile) · section titles 24–30px · body 14.5–17px · small 12–13px. Prices use Cormorant Garamond 32–42px.

### Radius & shadow
Cards `16–22px` · pills/buttons `10–12px` · circular controls `999px`. Card shadow ≈ `0 10px 26px rgba(0,0,0,.4)`; drawer `-14px 0 44px rgba(0,0,0,.55)`.

### Spacing
Base rhythm 4/8/12/16/20/24/40px. Desktop page padding 40px; mobile 16px. Mobile column is capped at **440px, centered**, with a fixed bottom tab bar (64px) and a fixed pager pill above it.

---

## 7. Screens / صفحات

Both builds share the same screens; the mobile build presents them one-at-a-time inside a 440px phone column with a top app-bar, a slide-in drawer (all screens), a bottom tab bar, and a fixed prev/next pager above the tab bar.

1. **Home / خانه** — hero, right-to-left news ticker, feature grid, latest news, government links, articles, subscription CTA, footer.
2. **Auth / ورود‑ثبت‌نام** — login + register tabs, role picker (lawyer / jurist / judge / student), brand panel.
3. **Subscriptions / اشتراک‌ها** — lawyer plans (trial + daily + base + advanced + annual) and office plans (2 / 5 / 10 lawyers). Mobile shows two compact cards per row.
4. **AI Consultation / مشاوره** — chat with an animated typewriter greeting (retypes every 10s), suggestion chips, tools, chat history, attachments, voice, disclaimer.
5. **Laws / قوانین** — pick region (Iraq / Kurdistan / both) → search + search-mode chips → law list → **law detail** (per-law article search + numbered articles, full-screen).
6. **Cassation rulings / آرای تمییزی** — list → detail with legal principle, full ruling text, and a PDF-style preview.
7. **Case management / پرونده‌ها** — list, new-case form, and **case detail** (case subject text, parties, witnesses, evidence/documents grid).
8. **Financial / مالی** — stat cards, monthly revenue bar chart, transactions table (income/expense).
9. **Reminders & calendar / یادآوری‌ها و تقویم** — month grid with per-day session events.
10. **Directory / راهنمای وکلا** — searchable lawyer cards with rating & specialty chips.
11. **Client messaging / پیام‌رسانی** — conversation list + thread, files, E2E-encrypted note.
12. **Profile / پروفایل** — professional info, bio, credential documents.
13. **News & articles / اخبار و مقالات** — dedicated page (news feed + articles), linked from home and the drawer.
14. **Invoice / فاکتور** — subscription invoice with payment methods and bank-transfer details.

---

## 8. Interactions / تعامل‌ها

- **Language toggle** cycles ar→ku→fa; re-renders every string and flips fonts.
- **Theme toggle** dark ⇄ light via `.om-light` class on root.
- **Mobile drawer** — opens from the top-bar show/hide button; slides in from the start side (RTL right) over a scrim; closes on scrim tap, on the same show/hide button, or on navigating.
- **Pager pill** — fixed above the bottom tab bar, centered; left/right arrows move between screens; always in the same place for quick access.
- **Typewriter greeting** — types the greeting character-by-character, repeats every 10 seconds, wraps to multiple lines (never clipped), per language. (Implemented as an isolated `om-typer` custom element using Shadow DOM so it survives re-renders.)
- **News ticker** scrolls right→left.
- **AI chat** posts a question and shows a typing indicator, then an answer. In the live prototype this calls an online model; in production wire it to your backend.

---

## 9. State / وضعیت

Key state: `lang` (ar/ku/fa), `theme` (dark/light), `page` (route), `authed`, `drawerOpen`, `lawsCat` / `lawsQuery` / `lawsMode`, `lawSub` (list/detail) + `selLaw` + `lawArtQuery`, `caseSub` (list/new/detail) + `selCase`, `casSub` + `casSel`, `msgSel`, `chat` / `chatInput` / `chatBusy`, `notifOpen`, `attachments`, `recording`.

---

## 10. Assets / دارایی‌ها

- **Logo:** `source/assets/logo.png` (gold scales + circuit-tree + «محامي AI» wordmark). Embedded in the standalone builds.
- **Icons:** Phosphor Icons (regular + fill). Embedded in the standalone builds; in production add the Phosphor package or export SVGs.
- **Fonts:** Google Fonts (El Messiri, Noto Kufi Arabic, Vazirmatn, Cormorant Garamond). Embedded in the standalone builds.

---

## 11. Notes for the developer / نکات پیاده‌سازی

- The AI consultation is the only feature needing a live backend; everything else is front-end + data.
- Keep all three languages and RTL as first-class — do not hard-code Arabic only.
- Mobile is a **single centered 440px column** by design (native-app feel); the fixed chrome (top bar, drawer, bottom tabs, pager) is aligned to that column.
- Currency is Iraqi Dinar (د.ع). Dates/numerals localize per language.
- تنها بخش نیازمند سرور، مشاورهٔ هوش مصنوعی است؛ بقیه فرانت‌اند + داده است. سه‌زبانه و RTL را دست‌کم نگیرید.
