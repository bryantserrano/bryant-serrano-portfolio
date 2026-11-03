# Bryant Serrano Portfolio

A responsive, single page portfolio presenting Bryant Serrano Sánchez’s professional profile, skills, work history, education, certifications, and contact information. The portfolio content is centralized in `src/data/resume.ts`. The standalone LaTeX CV source is `bryant_serrano_cv.tex`; compile it to `public/bryant_serrano_cv.pdf` for the portfolio's downloadable CV.

## Built with

- React and TypeScript
- Vite
- Tailwind CSS
- Lucide React

## Run locally

Requires Node.js 20 or newer.

```sh
npm install
npm run dev
```

Create a production build with `npm run build`, then preview it using `npm run preview`.

## Edit and build the LaTeX CV

Install [Tectonic](https://tectonic-typesetting.github.io/) as the local LaTeX compiler. On macOS with Homebrew:

```sh
brew install tectonic
```

For a VS Code preview, install the **LaTeX Workshop** extension and open this repository as a workspace. In `.vscode/settings.json` (open it with **Preferences: Open Workspace Settings (JSON)** from the Command Palette), add:

```json
{
  "latex-workshop.latex.tools": [
    {
      "name": "tectonic",
      "command": "tectonic",
      "args": ["%DOC%.tex", "-o", "%OUTDIR%"]
    }
  ],
  "latex-workshop.latex.recipes": [
    { "name": "tectonic", "tools": ["tectonic"] }
  ],
  "latex-workshop.latex.recipe.default": "tectonic",
  "latex-workshop.latex.outDir": "%DIR%/public"
}
```

The `.tex` extension in `"%DOC%.tex"` is required because LaTeX Workshop's `%DOC%` placeholder omits it. To build and preview, open `bryant_serrano_cv.tex`, run **LaTeX Workshop: Build LaTeX project** from the Command Palette, then run **LaTeX Workshop: View LaTeX PDF**. The output is `public/bryant_serrano_cv.pdf`, which the portfolio links to directly. Commit the `.tex` source and generated PDF to keep both in GitHub. The website content in `src/data/resume.ts` is maintained separately, so update both sources when changing resume details.

## Deploy

The workflow in `.github/workflows/deploy.yml` builds the site and deploys it to GitHub Pages whenever changes are pushed to `main`. In the repository's **Settings → Pages**, set **Build and deployment → Source** to **GitHub Actions**. The portfolio will be available at `https://bryantserrano.github.io/bryant-serrano-portfolio/` after the first successful workflow run. The Vite base path is already set for this project URL.

## Update content

Edit `src/data/resume.ts` to update the resume content. Add public project entries and profile URLs there when available. Avoid committing secrets or generated build output; `.gitignore` covers local environment files, dependencies, and build artifacts.
