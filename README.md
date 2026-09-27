# kalli.no

Personal page. Plain HTML and CSS in [`site/`](site) — no build step, no dependencies, no tracking.

Pushing to `main` copies `site/` to the `gh-pages` branch, which GitHub Pages serves. See [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

Preview locally:

```sh
python3 -m http.server -d site 8000
```
