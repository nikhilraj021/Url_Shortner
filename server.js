import express from 'express'
import 'dotenv/config'
import {connectDB} from './config/mongodb.js'
import {shortner, getOriginalUrl} from './controllers/Url.js'

const app = express();
const PORT = 3000;
app.use(express.static('public'))

// middleware to parse form data
app.use(express.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

// Connect to MongoDB, if we use await infront of connectBD,db will be connected first then server.
connectDB()

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.get('/url', (req, res) => {
    res.render('form.ejs', { shortUrl: null})
})

app.post('/short', shortner)
app.get("/:shortCode", getOriginalUrl)

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})