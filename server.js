import express from 'express'
import 'dotenv/config'
import {connectDB} from './config/mongodb.js'

const app = express();
const PORT = 3000;
app.use(express.static('public'))

// Connect to MongoDB, if we use await infront of connectBD,db will be connected first then server.
connectDB()

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.get('/url', (req, res) => {
    res.render('form.ejs')
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})