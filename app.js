const express = require('express')
const cors = require('cors')
const db = require('./models')
const app = express()

const corsOptions = {
    origin :'http://localhost:8888'
}

app.use(cors(corsOptions))

app.use(express.json())

app.use(express.urlencoded({extended:true}))


db.mongoose.connect(db.url,{ useNewUrlParser:true, useUnifiedTopology:true}).then(() =>{
    console.log("Connected to DB")
}).catch(err =>{
    console.log("Cannot connect to DB", err)
    process.exit()
})

app.get("/",(req,res) =>{
    res.json({message:"Server is working fine"})
})
require('./routes/productRoutes')(app)

const PORT = 7777

app.listen(PORT,() =>{
    console.log("Listening on : ",PORT)
})