import express from 'express'
import { listings } from './listings'
const app = express()
const port = 9000
app.use(express.json())

// listings
app.get('/listings', (_req, resp) => {
  return resp.send(listings)
})

// delete listings
app.post('/delete-listing', (req, resp) => {
  const { id } = req.body
  const result = listings.filter((listing) => listing.id !== id)
  return resp.send(result)
})

app.listen(port, () => console.log(`Server is running on ${port}`))
