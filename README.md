# My personal profile page

[My personal profile page](https://181192.github.io) is a static page build with Gatsby, React, Graphql and tailwind CSS.

Big inspiration from https://github.com/wkocjan/gatsby-theme-intro, the goal is to gather all relevant data from external sources like LinkedIn, GitHub and Medium etc so that this personal profile page always stays up to date with whats going on in my life.

The website shows my latest github projects that I have beeing working on, latest projects/repositories that I have starred on GitHub, my work and education history and my latest recommendations on articles on medium.com.

## LinkedIn

LinkedIn doesn't have an API for getting information about yourself such as work and education history unless you are a registered "Partner". They have a "light" API for getting very basic information such as name and location...

To be able to get some information from LinkedIn I'm using this project called [linkedin-profile-scraper](https://github.com/jvandenaardweg/linkedin-profile-scraper).

LinkedIn profile scraper is using Puppeteer, a headless browser, to scrape a given LinkedIn profile using your own session cookie. It returns the given linkedIn profile page as structured data in JSON format.

## Medium

[Medium](https://medium.com) have the possibility to return an JSON respons by adding `?format=json` at the end of the URL. It is protected by [JSON hijacking](https://haacked.com/archive/2009/06/25/json-hijacking.aspx/) with a prepend of `])}while(1);</x>`.

I'm using the _has recommended_ or _claps_ feed [@kalliainen.k/has-recommended](https://medium.com/@kalliainen.k/has-recommended) that is all articles that I've given a _clap_ to.

## GitHub

Togheter with the [gatsby-source-github](https://www.gatsbyjs.org/packages/gatsby-source-github/) I'm able to use the [GitHub GraphQL API v4](https://developer.github.com/v4/) (see the [explorer](https://developer.github.com/v4/explorer/)) and generate Gatsby GraphQL nodes.

## Build / run

Required environment variables:

| NAME                            | EXAMPLE VALUE   | DESCRIPTION                                                                                                                    |
| ------------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `LINKEDIN_SESSION_COOKIE_VALUE` |                 | The `li_at` session cookie on linkedin.com                                                                                     |
| `LINKEDIN_BASE_PATH`            | `./build`       | where to output the result JSON file (relative path to script)                                                                 |
| `LINKEDIN_USERNAME`             | `kalliainen`    | Your profile URL at linkedIn `https://www.linkedin.com/in/<some-user-name>/`                                                   |
| `GITHUB_ACCESS_TOKEN`           |                 | GitHub access token to be able to use the API [https://github.com/settings/tokens/new](https://github.com/settings/tokens/new) |
| `GITHUB_USERNAME`               | `181192`        | GitHub profile username to get data from                                                                                       |
| `MEDIUM_BASE_PATH`              | `./build`       | where to output the result JSON file (relative path to script)                                                                 |
| `MEDIUM_USERNAME`               | `@kalliainen.k` | Medium profile username                                                                                                        |

```
yarn
yarn build:linkedin-scraper
yarn build:medium-rss-to-json
yarn develop
```

Access [localhost:8000](http://localhost:8000) to view the page, and [localhost:8000/___graphql](http://localhost:8000/___graphql) for the GraphiQL explorer.

## Deploy to GitHub pages

```
yarn workspace web deploy
```

## Build linkedin-scraper

```
yarn build:linkedin-scraper
```

## Build medium-rss-to-json

```
yarn build:medium-rss-to-json
```
