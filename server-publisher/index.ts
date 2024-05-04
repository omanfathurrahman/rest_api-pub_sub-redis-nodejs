import express, { Request, Response } from 'express'
import cors from 'cors'
import { createClient } from 'redis'

// Create a new express application instance
const app = express()
app.use(cors())
const port = 3001
app.use(express.json());
// Create a new redis client
const client = createClient()


app.get('/', (req: Request, res: Response) => {
  client.publish('tes', 'Hello from publisher')
  res.send('Hello World!')
})

app.post('/messages', (req: Request, res: Response) => {
  const text = req
  console.log(text.body.text)
  client.publish('client', text.body.text)
  res.json({ message: 'Message sent' })
})

app.listen(port, async ()=> {
  await client.connect()
  console.log(`Server is running on port ${port}`)
})