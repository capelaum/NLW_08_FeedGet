import cors from 'cors'
import express from 'express'
import { routes } from './routes'

const app = express()

app.use(cors())
app.use(express.json({ limit: '10mb' }))
app.use(
  express.urlencoded({
    limit: '10mb',
    extended: true,
    parameterLimit: 100000
  })
)
app.use(routes)

const port = 3333
app.listen(process.env.PORT || port, () =>
  console.log(`Server listening on port ${port}`)
)
