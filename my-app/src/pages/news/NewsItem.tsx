import React from 'react'
import { Link } from 'react-router-dom';

import style from "./newsItem.module.css"
import Avatar from "../../components/avatar/avatar";
import { INewsItem } from '../../types/news';



const NewsItem = ({ _id, img, date , title}: INewsItem) => {
    return (
        <div className={style.box}>
            <div className={style.head}>
                <Avatar
                    cover={true}
                    circle={true}
                    src={img} />
                <p className={style.text}>{title}</p>
            </div>
            <div className={style.bot}>
                <div className={style.date}>{date}</div>
                <Link to={`/news/${_id}`} className={style.link}>Read</Link>
            </div>
        </div>
    )
}

export default NewsItem