# AGENTS.md — One-Page Restaurant Website

## Your role
You are Codex, acting as a frontend developer. Build a polished, fast, fully responsive **static, single-page restaurant website** in this project. Make the implementation yourself; do not stop after producing a plan. Use sensible defaults and placeholder restaurant information wherever real details are unavailable.

## Non-negotiable requirements
1. **Exactly one HTML file:** `index.html`, located in the project root. Do not create any other `.html` files anywhere in the project.
2. **All image assets must be stored in the root-level `images/` folder.** Reference them with relative URLs such as `images/chicken-corn-soup.jpg`. No remote image hotlinks in the finished site.
3. The website must be **one page**, not a multi-page site. Navigation should use anchors to sections in `index.html`.
4. Use only lightweight **HTML5, CSS3, and minimal vanilla JavaScript**. A separate root-level `styles.css` and `script.js` are fine if useful. **Do not use React, Vue, Next.js, Bootstrap, Tailwind, npm, a bundler, a CMS, a backend, or a database.** The website should run by simply opening `index.html` in a browser.
5. **No shopping functionality.** No cart, quantities, ordering, checkout, account/login, payment, or e-commerce dependencies. Menu cards are display-only: **image, food name, and price**.
6. Optimize the layout and interaction for **mobile, tablet, and desktop**. Never allow horizontal overflow.
7. Include exactly these eight menu categories, in this order and using these exact visible headings:
   - Featured Items
   - Most Ordered
   - Soup
   - Chicken Appetizers
   - Starter
   - Rice
   - Noodles
   - Add On & Soft Drinks
8. Initially show **three sample food items per category**, for a total of **24 menu cards**. On desktop, each category has **one row of three columns**; tablet may use two columns; mobile must use one column. Keep cards consistent.
9. Use **realistic dummy food names, prices, and images**. Clearly treat them as placeholders for replacement by the client later. Do not invent actual restaurant address, telephone number, opening hours, testimonials, awards, or business claims and present them as fact.
10. Do not copy the reference website's branding, logo, photography, or written content. Create an original restaurant identity and original layout with a **similar upscale mood and color palette**.

## Visual references and styling
The client likes the overall aesthetic of this example:
https://templateup.site/veyssette/?storefront=envato-elements

The user also supplied screenshots of the example website. Use them as **visual guidance** if they are accessible in the project or conversation. Do not depend on their presence: the specifications below are sufficient.

Design direction:
- Premium dining atmosphere, **nearly black and charcoal backgrounds**, subtle darker-brown alternate sections, muted metallic-gold accents, and warm ivory typography.
- Suggested CSS colors (adjust only as needed for contrast): `--bg: #100E0C`, `--surface: #1C1814`, `--surface-alt: #242019`, `--gold: #C7A15B`, `--text: #F4EBDD`, `--muted: #B9AEA0`, `--border: #3E3426`.
- Elegant large serif headings (e.g., Georgia or a locally available serif) and clean, legible sans-serif body text (system sans-serif is fine). Avoid requiring external font downloads.
- Spacious sections, finely detailed gold rules/borders, large atmospheric food imagery, restrained hover effects, and premium but simple cards.
- A cohesive **restaurant site**, not a chef-booking site: replace chef/service-oriented messaging from the reference with dining/menu-focused text.
- Avoid excessive animation, sliders, pop-ups, video backgrounds, visual clutter, and overly ornate decoration.
- Prioritize readable contrast and a refined result over a pixel-for-pixel copy of the reference.

## Required page composition (top to bottom)

### 1. Header / navigation
- Small original restaurant wordmark/logo, e.g., `EMBER & SPICE` (placeholder name, easy to replace).
- Desktop navigation: `Home`, `About`, `Menu`, `Contact` with functional in-page anchor links.
- A subtle gold `View Menu` button linking to `#menu`.
- On mobile, use a simple functional accessible menu (a CSS-based solution or a few lines of vanilla JS). No dependency needed.
- A sticky header is optional, but if used, anchor links must not hide section headings.

### 2. Hero
- Strong premium first impression: split text-and-image layout on desktop; stacked layout on mobile.
- Small gold eyebrow text, serif headline such as `An Invitation to Exceptional Flavor`, one brief paragraph, and primary CTA `Explore Our Menu` linking to `#menu`.
- One large attractive restaurant/food image, stored locally in `images/`.
- No false reviews, ratings, awards, or fabricated customer counts.

### 3. Short introduction / about section
- ID `about`.
- Short original, generic placeholder description of the cuisine and dining atmosphere.
- Optional small secondary image, locally stored.
- Keep this section compact; the **food menu is the central focus**.

### 4. Food menu — the main content
- Outer wrapper with ID `menu`, and a tasteful introductory heading such as `Explore Our Menu`.
- The eight mandatory menu category sections appear in the specified order.
- Use each exact category name as its visible `<h2>` heading; optionally put a short muted subtitle beneath it.
- Provide **exactly three cards per category**.
- Desktop: **3 equal-width cards per row**. Tablet: **2 columns where space allows**. Mobile: **1 column**.
- Each card needs a food photograph/illustration in a consistent aspect ratio (suggested `4:3`), a clear food name and a visible price in gold. Optional one-line dummy description is acceptable, but keep emphasis on image/name/price.
- Keep cards display-only. Do not include `Add to Cart`, plus/minus quantity controls, price calculators, or ordering links.
- Use a consistent currency placeholder throughout (for example `$12.99`). Do not imply these are genuine prices.
- Give each category an appropriate section ID: `featured-items`, `most-ordered`, `soup`, `chicken-appetizers`, `starter`, `rice`, `noodles`, `add-ons-drinks`.
- Optional compact category jump links may point to these IDs, but they must remain readable on small screens.

### 5. Contact / closing CTA
- ID `contact`.
- Elegant short invitation and a clear `Contact Us` heading.
- Use plainly labeled **placeholder** contact information (e.g., `Phone: [Your phone number]`, `Address: [Your restaurant address]`) rather than inventing real details.
- No backend contact form or reservation system. Avoid dead buttons; if placeholder contact destinations cannot work, show placeholder text instead of fake links.

### 6. Footer
- Placeholder restaurant name, a short tagline, and in-page navigation links.
- Simple copyright line. Use the current year dynamically only if JavaScript already exists, or use a neutral non-dated line.

## Suggested dummy menu content
Use these exact or comparable examples; all names and prices are **fictional placeholders**. Match each item's image to the food type as closely as possible.

| Category | Sample item 1 | Sample item 2 | Sample item 3 |
|---|---|---|---|
| Featured Items | Signature Hakka Chicken — $16.99 | Spicy Garlic Noodles — $14.99 | Sizzling Chili Paneer — $15.99 |
| Most Ordered | Chicken Fried Rice — $13.99 | Crispy Chili Chicken — $16.49 | Vegetable Hakka Noodles — $12.99 |
| Soup | Sweet Corn Chicken Soup — $7.99 | Hot & Sour Soup — $7.49 | Thai Coconut Soup — $8.49 |
| Chicken Appetizers | Chicken Lollipop — $12.99 | Honey Garlic Wings — $13.49 | Chicken 65 — $13.99 |
| Starter | Vegetable Spring Rolls — $8.99 | Crispy Cauliflower — $10.49 | Paneer Tikka — $12.49 |
| Rice | Schezwan Fried Rice — $14.49 | Egg Fried Rice — $11.99 | Jeera Rice — $8.99 |
| Noodles | Singapore Noodles — $14.99 | Chili Garlic Noodles — $13.99 | Chicken Chow Mein — $15.49 |
| Add On & Soft Drinks | Garlic Naan — $3.99 | Mango Lassi — $5.49 | Fresh Lime Soda — $3.99 |

## Images / asset handling
- Create `images/` in the root.
- Provide **working local images for the hero and all menu cards**, plus any optional about-section image. The final website must not have empty or broken image boxes.
- Prefer properly licensed, relevant food photography that can be legally used on a client site. Download files into `images/` and optimize/compress them appropriately (prefer `.webp` or well-compressed `.jpg`). Do not scrape or reuse the reference website's images or branding.
- If the environment cannot obtain licensed photographs, **create attractive local food-themed SVG placeholder illustrations** (individual `.svg` files in `images/`) instead of referencing missing external URLs or silently hotlinking to third-party services. The SVGs should feel intentional and coordinate with the black-and-gold theme. Use real photos where feasible.
- Use lowercase, descriptive, hyphenated file names.
- All `<img>` tags must have useful `alt` text, explicit dimensions or stable aspect ratios to reduce layout shift, and `loading="lazy"` for non-hero images.
- Keep every image in `images/`; no stray assets in the root, and no remote images fetched at runtime.
- If the project contains user-supplied reference screenshots, treat them as *references only*, not as website content.

## Responsive behavior and accessibility
- Mobile-first CSS. Suggested targets: narrow phones around 320–390px, tablets around 768px, and desktop 1024–1440px+.
- Default menu grid: 1 column; at `min-width: 640px`: 2 columns; at `min-width: 1024px`: 3 columns.
- Hero: stacked on mobile, side-by-side on wider screens.
- Readable typography and line lengths; generous tap targets; flexible padding; safe image crops via `object-fit: cover`.
- Use semantic `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` elements, a single `<h1>`, and a logical heading hierarchy.
- Ensure keyboard-accessible navigation, obvious focus styles, labeled mobile-menu controls, correct button/link semantics, and WCAG-friendly text contrast.
- Respect `prefers-reduced-motion`; use small optional hover transitions only.
- Use `scroll-margin-top` on anchor targets if the header is sticky.

## Performance, SEO, and maintenance
- Valid HTML with `<html lang="en">`, viewport meta, descriptive placeholder `<title>`, and meta description.
- Avoid unnecessary JavaScript, external frameworks, large images, excessive fonts, and blocked CDN dependencies.
- Set up obvious CSS custom properties for theme colors and spacing.
- Keep content easy for the client to edit later: plainly organized markup, meaningful class names, and clear section comments. If generating cards from JavaScript, ensure the site still works when opened locally without a server; simplest is static HTML cards.
- Use relative file paths, not absolute paths tied to a developer machine.
- The finished page must load without requiring installation, compilation, API keys, or internet access.

## Required project structure
```text
project-root/
├── AGENTS.md
├── index.html            # The ONLY HTML file
├── styles.css            # Optional but preferred
├── script.js             # Optional; only for truly needed interactions
└── images/
    ├── hero-dining.webp  # Or a local SVG/JPG equivalent
    ├── ...                # All 24 menu item images + optional about image
    └── ...
```
Do not add unnecessary folders, tools, build files, or pages.

## Implementation workflow for Codex
1. Inspect the existing project to avoid overwriting useful work. Read this file and study any available user-provided screenshots.
2. Create the root-level `index.html` and lightweight styles (and script only if needed).
3. Create `images/`, obtain or generate all needed **local** visual assets, and ensure the file names match the markup exactly.
4. Build the header, hero, about, eight menu sections (24 cards), contact, and footer.
5. Implement and refine responsive layouts at mobile, tablet, and desktop sizes.
6. Check that every in-page link works, all 24 images display, all eight headings match exactly, and no card has shopping controls.
7. Test locally (using a browser if available). Fix overflow, broken paths, inaccessible controls, and obvious visual inconsistencies. Do not claim tests you did not run.
8. Finish by reporting the files created and any remaining genuine placeholders (restaurant identity, contacts, images, and prices).

## Definition of done
- [ ] `index.html` exists at the root and is the **only HTML file**.
- [ ] A single scrollable page has a refined dark/black-and-gold design inspired by the supplied screenshots, without directly copying them.
- [ ] The page has responsive desktop, tablet, and mobile layouts.
- [ ] All eight required menu section headings are present, in the right order.
- [ ] Every menu section has exactly three cards, and each card shows an image, name, and price.
- [ ] The menu has 3 columns on desktop, 2 on tablet, and 1 on mobile.
- [ ] The `images/` folder contains every referenced image; none are broken or hotlinked.
- [ ] All navigation and CTA anchors work within the one page.
- [ ] No cart, checkout, online ordering, login, backend, or unrequested functionality exists.
- [ ] The website works by opening `index.html`, without a build step.

**Primary instruction:** Keep it beautiful, clear, easy to maintain, and **simple**. The client wants a premium **one-page food menu website**, not a complicated web application.
