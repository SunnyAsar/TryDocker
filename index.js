const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.json([
    {
      name: 'sunny',
      occupation: 'developer'
    },
    {
      name: 'bob',
      occupation: 'the builder'
    }
  ])
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})