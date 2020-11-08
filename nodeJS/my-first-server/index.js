// Code from external libraries
const express = require('express')
const cors = require('cors')

// setup for Express
const app = express()
app.use(cors())

const charlene = {
  firstName: 'Charlene',
  lastName: 'Grant',
  favouriteColour: 'yellow',
  favouriteFood: 'Chocolate Hobnobs'
}

const affirmations = [
  "I am powerful",
  "I am beautiful",
  "I am a Git Genius",
  "I am an amazing Full Stack Developer",
  "I am an asset",
  "I am a css pro"
]

// routes or endpoints

app.get('/', (req, res) => {
  res.json({ message: 'Divination, Motivation, Transformation, My name is Charlene Grant and I am the Affirmed Visionary!' })
})

app.get('/about-me', (req, res) => {
  res.json(charlene)
})

app.get('/affirmations', (req, res) => {
  const randomIndex = Math.floor
  (Math.random() * affirmations.length)
  const randomAffirmations = affirmations[randomIndex]
  res.json(randomAffirmations)
})



// code to start the server

app.listen(2202, () => {
  console.log('MY CUSTOM SERVER START MESSAGE')
})