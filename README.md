# kalli.no

Personal page. Plain HTML and CSS in [`site/`](site) — no build step, no dependencies, no tracking.

Preview locally:

```sh
python3 -m http.server -d site 8000
```

Publish from a clean, pushed `main`:

```sh
./scripts/publish.sh
```

It copies `site/` to the `gh-pages` branch, which GitHub Pages serves. There is no CI.
