const News = require('../models/News')

class newsController {
    async createNews(req, res) {
        try {
            const {text, title, img, idAuthor, banner } = req.body;
            const dateLoc = new Date().toLocaleDateString().slice(0,-5);
            const time = new Date().toLocaleTimeString().slice(0,-3);
            let date = `${dateLoc} ${time}`
            const newsOne = new News({text, title, img, idAuthor, date, banner})
            await newsOne.save()
            return res.json({message: "Новость успешна создана"})
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Ошибка создания'})
        }
    }

    async getNews(req, res) {
        try {
            const news = await News.find()
            res.json(news)
        } catch (e) {
            console.log(e)
        }
    }
    async getOneNews(req, res) {
        try {
            const newsOne = await News.findOne({_id: req.params.id})
            res.json(newsOne)
        } catch (e) {
            console.log(e)
        }
    }
    async deleteNews(req, res) {
        try {
            const newsOne = await News.findOne({_id: req.params.id})
            await newsOne.remove()
            return res.json({message: "Новость удалена"})
        } catch (e) {
            console.log(e)
            return res.json({message: "Ошибка удаления"})
        }
    }
}

module.exports = new newsController()
