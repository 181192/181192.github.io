require("dotenv").config()
const fs = require("fs")
const { LinkedInProfileScraper } = require("linkedin-profile-scraper")

async function main() {
  const scraper = new LinkedInProfileScraper({
    sessionCookieValue: process.env.LINKEDIN_SESSION_COOKIE_VALUE,
    keepAlive: false,
  })

  // Prepare the scraper
  // Loading it in memory
  await scraper.setup()

  const result = await scraper.run("https://www.linkedin.com/in/kalliainen/")

  // When keepAlive: true, you can manually close the session using the method below.
  // This will free up your system's memory. Otherwise Puppeteer will sit idle in the background consuming memory.
  await scraper.close()

  const data = JSON.stringify(result, null, 4)
  const basePath = process.env.LINKEDIN_BASE_PATH || "./build"

  try {
    fs.mkdirSync(basePath, { recursive: true })
    fs.writeFileSync(`${basePath}/profile.json`, data)
    console.log("JSON data is saved.")
  } catch (err) {
    console.error(err)
  }
}

main()
