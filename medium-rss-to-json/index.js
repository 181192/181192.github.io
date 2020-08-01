require("dotenv").config()
const fs = require("fs")
const axios = require("axios")

const MEDIUM_URL = `https://medium.com/${process.env.MEDIUM_USERNAME}/has-recommended?format=json`

async function getHasRecommended() {
  let result

  try {
    const response = await axios.get(MEDIUM_URL)

    const i = response.data.indexOf("{")
    const tmp = response.data.substr(i)
    result = await JSON.parse(tmp)
  } catch (error) {
    console.error(error)
  }

  posts = result.payload.references.Post
  posts = Object.values(posts)

  users = result.payload.references.User
  posts = posts.map(post => {
    let author = users[post.creatorId]
    let props = {
      author,
      url: `https://medium.com/@${author.username}/${post.uniqueSlug}`,
    }
    return { ...post, ...props }
  })

  const data = JSON.stringify(posts, null, 4)
  const basePath = process.env.MEDIUM_BASE_PATH || "./build"

  try {
    fs.mkdirSync(basePath, { recursive: true })
    fs.writeFileSync(`${basePath}/medium-has-recommended.json`, data)
    console.log("JSON data is saved.")
  } catch (err) {
    console.error(err)
  }
}

getHasRecommended()
