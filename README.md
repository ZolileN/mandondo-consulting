# Mandondo Consulting Website

Business compliance & advisory website for **Mandondo Consulting** — built with plain HTML, CSS, and JavaScript. No frameworks, no build tools. Works out of the box.

---

## Project Structure

```
mandondo-consulting/
├── index.html          ← Main page (all sections)
├── css/
│   └── style.css       ← All styles
├── js/
│   └── main.js         ← Scroll animations, WhatsApp, form logic
├── assets/             ← Add images, logo, og-image here
├── .gitignore
└── README.md
```

---

## Before You Go Live — Checklist

Open these files and find the `TODO` comments:

**`index.html`**
- [ ] Replace `+27 000 000 0000` with Ludwe's real phone number (2 places)
- [ ] Replace `info@mandondoconsulting.co.za` with the real email
- [ ] Update the stats in the hero section (years in business, clients, etc.)
- [ ] Uncomment and add `assets/og-image.jpg` for WhatsApp/Facebook link previews

**`js/main.js`**
- [ ] Replace `27000000000` with the real number (no `+` or spaces)

---

## Deploy to GitHub Pages (Free Hosting)

### Step 1 — Create a GitHub account
Go to [github.com](https://github.com) and sign up (free).

### Step 2 — Create a new repository
1. Click the **+** icon → **New repository**
2. Name it: `mandondo-consulting` (or `mandondoconsulting.co.za` for a custom domain)
3. Set it to **Public**
4. Do NOT initialise with README (we already have one)
5. Click **Create repository**

### Step 3 — Push the project to GitHub

Open a terminal (or Git Bash on Windows) in the project folder and run:

```bash
git init
git add .
git commit -m "Initial commit — Mandondo Consulting website"
git branch -M master
git remote add origin https://github.com/ZolileN/mandondo-consulting
git push -u origin master
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 4 — Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → scroll to **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Choose branch: `master`, folder: `/ (root)`
5. Click **Save**

Your site will be live at:
`https://ZolileN.github.io/mandondo-consulting`

(Takes about 1–2 minutes to appear.)

---

## Deploy to Netlify (Easier, with drag-and-drop)

1. Go to [netlify.com](https://netlify.com) and sign up (free)
2. Click **Add new site** → **Deploy manually**
3. Drag and drop the entire `mandondo-consulting/` folder onto the page
4. Your site is live instantly with a Netlify URL (e.g. `mandondo-abc123.netlify.app`)
5. You can rename the site under **Site settings → Site name**

### To update the site later (Netlify):
- Drag and drop the folder again — Netlify will deploy the new version automatically.

### To update the site later (GitHub Pages):
```bash
git add .
git commit -m "Update content"
git push
```
GitHub Pages will redeploy automatically within ~1 minute.

---

## Custom Domain (Optional)

If you have a domain like `mandondoconsulting.co.za`:

**On GitHub Pages:**
1. Settings → Pages → Custom domain → enter your domain
2. At your domain registrar, add a CNAME record pointing to `YOUR_USERNAME.github.io`

**On Netlify:**
1. Site settings → Domain management → Add custom domain
2. Follow Netlify's DNS instructions (they provide free SSL/HTTPS too)

---

## Making Content Changes

Everything is in `index.html`. The file is clearly commented with section labels:
- `<!-- HERO -->` — headline, subtext, stats
- `<!-- SERVICES -->` — service cards (add/remove cards here)
- `<!-- ABOUT -->` — founder quote, pillars
- `<!-- CONTACT -->` — phone, email, form

Styles are in `css/style.css`. All colours use CSS variables at the top of the file — change `--maroon`, `--gold`, etc. to update the entire colour scheme in one place.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 |
| Styling | CSS3 (custom properties, grid, flexbox) |
| Behaviour | Vanilla JavaScript (ES6) |
| Fonts | Google Fonts (Cormorant Garamond + DM Sans) |
| Hosting | GitHub Pages or Netlify (free tier) |
| Forms | WhatsApp deep link (no backend needed) |
