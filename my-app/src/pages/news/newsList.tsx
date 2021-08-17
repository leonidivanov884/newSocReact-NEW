import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux";
import { getNewsApi } from '../../redux/news/newsSlice';
import { RootState } from '../../redux/store';
import { AiTwotoneThunderbolt } from 'react-icons/all';

import NewsItem from "./NewsItem";
import Loader from "../../components/loader/Loader";


const NewsList = () => {
    const news = useSelector((state: RootState) => state.news)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getNewsApi())
    }, [dispatch]);


    return (
        <div className="newsList">
            <h2>
                <AiTwotoneThunderbolt className="news__icon" />
                News
            </h2>
            {news.news.map(newsItem =>
                <NewsItem
                    key={newsItem._id}
                    _id={newsItem._id}
                    title={newsItem.title}
                    img={newsItem.img}
                    date={newsItem.date}
                />
            )}
            {news.status ? <Loader /> : null}
            {news.error ? 'Возникла ошибка с сервером 😑': null}
        </div>
    )
}

export default NewsList