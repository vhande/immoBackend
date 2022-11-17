const express = require('express')
const mongoose = require("mongoose")
const app = express()
app.use(express.json())
require('dotenv').config()
const cors = require("cors");
app.use(cors());

app.use(express.static(path.join(__dirname, "/immo/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/immo/build', 'index.html'));
});


const product = require("./endpoints/product")
const ad = require("./endpoints/ad")
const classified = require("./endpoints/classified")
const search = require("./endpoints/search")
const register = require("./endpoints/register")
const profile = require("./endpoints/profile")
const latest = require("./endpoints/latest")
const getall = require("./endpoints/getall")
const login = require("./endpoints/login")



main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(process.env.DIGITALCITY, (err) => console.log('connected'))
}

app.use("/api/product", product)
app.use("/api/ad", ad)
app.use("/api/classified", classified)
app.use("/api/search", search)
app.use("/api/register", register)
app.use("/api/profile", profile)
app.use("/api/latest", latest)
app.use("/api/getall", getall)
app.use("/api/login", login)

app.listen(process.env.PORT || 8000, ()=> (console.log("Server is running")))
