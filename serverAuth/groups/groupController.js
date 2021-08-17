const Group = require('../models/Group')


class groupController {
    async getGroups(req, res) {
        try {
            const news = await Group.find().select('-news')
            res.json(news)
        } catch (e) {
            console.log(e)
            res.json({message: 'Ошибка'})
        }
    }
    async createGroup(req, res) {
        try {
            const {logo, name,  users, banner, news, info, slogan} = req.body;
            console.log(req.body)
            const newsOne = new Group({logo, name,  users, banner, news, info, slogan})
            await newsOne.save()
            return res.json({message: "Группа успешна создана"})
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Ошибка создания'})
        }
    }
    async deleteGroup(req, res) {
        try {
            const newsOne = await Group.findOne({_id: req.params.id})
            await newsOne.remove()
            return res.json({message: "Группа удалена"})
        } catch (e) {
            console.log(e)
            return res.json({message: "Ошибка удаления"})
        }
    }
    async getOneGroup(req, res) {
        try {
            const newsOne = await Group.findOne({_id: req.params.id}).select('-news')
            res.json(newsOne)
        } catch (e) {
            console.log(e)
        }
    }

    async getNews(req, res) {
        try {
            const newsOne = await Group.findOne({_id: req.params.idGroup})
            const {limit = newsOne.news.length, skip = 0} = req.query;
            res.json(newsOne.news.slice(skip,  +limit + +skip))
        } catch (e) {
            console.log(e)
        }
    }

    // async createNewsGroup(req, res) {
    //     try {
    //         const {text, title, img, banner} = req.body;
    //         console.log(req.body)
    //         const dateLoc = new Date().toLocaleDateString().slice(0,-5);
    //         const time = new Date().toLocaleTimeString().slice(0,-3);
    //         let date = `${dateLoc} ${time}`
    //         Group.findByIdAndUpdate(req.params.idGroup,
    //             { "$push": {
    //                     "set": {
    //                         "text": text,
    //                         "title": title,
    //                         "img": img,
    //                         "banner": banner,
    //                         "date": date
    //                     }
    //                 } }
    //         );
    //         return res.json({message: "Новость успешна создана"})
    //     } catch (e) {
    //         console.log(e)
    //         res.status(400).json({message: 'Ошибка создания'})
    //     }
    // }

}

module.exports = new groupController()
