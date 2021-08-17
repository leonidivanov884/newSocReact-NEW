const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const authRouter = require("./authRouter");
const newsRouter = require("./news/newsRouter");
const groupRouter = require("./groups/groupRouter");


const PORT = process.env.PORT || 5000

const app = express()

app.use(cors());
app.options('*', cors());

app.use(express.json())



// http://localhost:5000/auth
// Авторизация
app.use("/auth", authRouter)

// http://localhost:5000/news
// Новости
app.use("/news", newsRouter);

// http://localhost:5000/group
// Группы
app.use("/group", groupRouter);

const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://admin:admin@cluster0.w9asx.mongodb.net/social?retryWrites=true&w=majority`)
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()

