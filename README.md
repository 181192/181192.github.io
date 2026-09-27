# kalli.no

Personal page. Plain HTML and CSS in [`site/`](site) — no build step, no dependencies, no tracking.

Pushing to `source` deploys `site/` to GitHub Pages via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

Preview locally:

```sh
python3 -m http.server -d site 8000
```
