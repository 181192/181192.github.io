require("dotenv").config()
const fs = require("fs")
const axios = require("axios")

const MEDIUM_URL = `https://medium.com/${process.env.MEDIUM_USERNAME}/has-recommended?format=json`

async function getHasRecommended() {
  let result = ""

  try {
    const response = await axios.get(MEDIUM_URL)

    let i = response.data.indexOf("{")
    result = response.data.substr(i)
  } catch (error) {
    console.error(error)
  }

  const data = JSON.stringify(JSON.parse(result), null, 4)
  const basePath = process.env.MEDIUM_BASE_PATH || "./build"

  try {
    fs.mkdirSync(basePath, { recursive: true })
    fs.writeFileSync(`${basePath}/medium.json`, data)
    console.log("JSON data is saved.")
  } catch (err) {
    console.error(err)
  }
}

getHasRecommended()
