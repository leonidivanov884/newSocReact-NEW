import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import { Link } from 'react-router-dom';
import style from './newsItem.module.css'
import {IoArrowBack} from 'react-icons/all';
import {clearOneNews, getOneNewsApi} from "../../redux/news/newsSlice";
import Avatar from "../../components/avatar/avatar";

interface NewsOneProps {
    match: any
}

const NewsOne = ({ match }: NewsOneProps) => {
    const newsOne = useSelector((state: any) => state.news.newsOne)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getOneNewsApi(match.params.id))
        return () => {dispatch(clearOneNews())};
    }, [dispatch, match.params.id]);

    return (
        <div className={style.newOne}>
            <div className={style.newOne_head}>
                <Link className={style.back} to={`/`} >
                    <IoArrowBack />
                    Back
                </Link>
                <Link to={`/Groups/${newsOne.idAuthor}`}>
                    <Avatar
                        width={'55px'}
                        height={'55px'}
                        src={newsOne.img}
                        circle={true}
                        cover={true}
                        border={true} />
                </Link>
            </div>
            <div>
                { newsOne.banner ?
                    <div className={style.banner}>
                        <img src={newsOne.banner} alt=""/>
                    </div>
                    : null
                }                
                <p className={style.date}>{newsOne.date}</p>
                <h2>{newsOne.title}</h2>
                <p>{newsOne.text}</p>
            </div>
        </div>
    )
}

export default NewsOne