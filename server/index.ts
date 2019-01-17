import express = require("express")
import cors from "cors"

const app = express()

app.use(cors())

const ANSWERS = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes - definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful.",
]

app.get("/answer", (req, res) => {
  res.send({ answer: ANSWERS[Math.floor(Math.random() * ANSWERS.length)] })
})

const PORT = 3030
app.listen(PORT, () => console.log(`Listening on port ${PORT}.`))
