#!/usr/bin/env bash
# Publish site/ to the gh-pages branch, which GitHub Pages serves as-is.
# Run from a clean, pushed main: ./scripts/publish.sh
set -euo pipefail

root="$(git rev-parse --show-toplevel)"
cd "$root"

if [[ -n "$(git status --porcelain)" ]]; then
  echo "Working tree is not clean. Commit or stash first." >&2
  exit 1
fi

remote="$(git remote get-url origin)"
sha="$(git rev-parse --short HEAD)"
tmp="$(mktemp -d)"
trap 'rm -rf "$tmp"' EXIT

cp -R site/. "$tmp"
touch "$tmp/.nojekyll"

git -C "$tmp" init -q -b gh-pages
git -C "$tmp" add -A
git -C "$tmp" -c user.name="$(git config user.name)" -c user.email="$(git config user.email)" \
  commit -q -m "Publish $sha"
git -C "$tmp" push -q -f "$remote" gh-pages

echo "Published $sha to gh-pages."
