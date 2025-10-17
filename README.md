# Personal Portfolio — Netlify Deployment

This is a simple, responsive personal portfolio you can customize and deploy to Netlify. It includes:

- About, Skills, Projects, and Contact sections
- A working contact form via Netlify Forms (no backend needed)
- Clean, responsive design with light/dark theme toggle
- Minimal Netlify config (netlify.toml) and a thanks page

## Customize

Open and edit these files:

- `index.html`: Replace "Your Name", update About text, Skills list, Projects cards, and social links
- `styles.css`: Optional style tweaks
- `script.js`: Keeps the theme toggle and dynamic year
- `thanks.html`: Post-submit page for the contact form

Tip: Update the favicon by replacing the `link rel="icon"` in `index.html`.

## Local preview

This is a static site. You can open `index.html` in your browser directly, or use a local server (optional) if you run into CORS issues with fonts.

## GitHub repo with commit history

From the project folder, create a Git repository and push to GitHub. The commands below are for Windows PowerShell:

```powershell
# 1) Initialize git in this folder
git -C "c:\Users\pinet\OneDrive\Documents\HACKERTHONN" init

# 2) Add all files and make an initial commit
git -C "c:\Users\pinet\OneDrive\Documents\HACKERTHONN" add .
git -C "c:\Users\pinet\OneDrive\Documents\HACKERTHONN" commit -m "feat: scaffold portfolio with Netlify form"

# (Optional) Make a couple of meaningful commits to build history
# e.g., tweak skills or project links, then commit again
# git -C "c:\Users\pinet\OneDrive\Documents\HACKERTHONN" commit -am "chore: update projects and socials"

# 3) Create a new empty repo on GitHub (via the website), then set your remote URL
# Replace <your-username> and <repo-name>
$remote = "https://github.com/<your-username>/<repo-name>.git"

git -C "c:\Users\pinet\OneDrive\Documents\HACKERTHONN" branch -M main

git -C "c:\Users\pinet\OneDrive\Documents\HACKERTHONN" remote add origin $remote

# 4) Push to GitHub
git -C "c:\Users\pinet\OneDrive\Documents\HACKERTHONN" push -u origin main
```

## Deploy to Netlify (your platform)

Two easy options:

1) Connect to GitHub (recommended)
- Go to https://app.netlify.com/ and create/login to your account
- New site from Git > GitHub > select your repo
- Build command: none (leave blank)
- Publish directory: `.` (the repo root)
- Deploy. Netlify will host your site and assign a URL (you can change the site name under Site settings).

2) Drag-and-drop
- From your repo or local folder, zip the files and drag the folder into Netlify: Sites > Add new site > Deploy manually

Netlify Forms notes:
- The contact form works because the form HTML is present at build time (`data-netlify="true"` plus the hidden `form-name` input). Submissions appear under Forms in your Netlify site dashboard.
- The form redirects to `/thanks.html` on success.

## Other platforms (team members)

Your teammates can deploy the same portfolio (or their own) to:
- GitHub Pages (via repository Settings > Pages)
- Vercel (import Git repo and deploy)

This satisfies the requirement of three hosting platforms across the team. If you individually also want GitHub Pages and Vercel:
- GitHub Pages: set Pages source to `main` root; it will serve `index.html`
- Vercel: New Project > Import GitHub repo > Framework preset: "Other"; Output directory: `.`

## Structure

- `index.html` — Main page (About, Skills, Projects, Contact)
- `styles.css` — Styles and layout (dark by default, light mode toggle)
- `script.js` — Theme toggle + dynamic year
- `thanks.html` — Redirect page after contact form submission
- `netlify.toml` — Basic headers and redirect for clean URLs

## License

You own your content. Code is MIT — feel free to reuse or adapt.

If you need help customizing content or linking your domain, let me know the details and I’ll wire it up.