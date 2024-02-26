import express from 'express'
import { testConnection } from '../db.js'

const port = 3333

const app = express()

app.use(express.json())






app.listen(port, () => {
  testConnection()
  console.log('server on port: ' + port)
})