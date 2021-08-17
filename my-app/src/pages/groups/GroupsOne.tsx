import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux";
import style from './groups.module.css'
import {clearOneGroup, getGroupNewApi, getGroupOneApi, subscribeToggle} from "../../redux/groups/groupsSlice";
import {ImUsers, IoIosArrowDropdown } from 'react-icons/all';
import Avatar from "../../components/avatar/avatar";
import Post from "../../components/post/post";
import Button from "../../components/button/Button";
import Loader from '../../components/loader/Loader';
import { RootState } from '../../redux/store';

interface GroupsOneProps {
    match: any
}

const GroupsOne = ({ match }: GroupsOneProps ) => {
    const [statusInfo, toggleStatusInfo] = useState(false)
    const [countSkip, setCountSkip] = useState(0)
    const groupsOne = useSelector((state: RootState) => state.group.groupOne)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getGroupNewApi({id: match.params.id, skip: countSkip}))
    }, [match.params.id, dispatch, countSkip]);

    useEffect(() => {
        dispatch(getGroupOneApi(match.params.id))
        return () => {
            dispatch(clearOneGroup())
        };
    }, [dispatch, match.params.id]);

    return (
        <>
            <div className={style.groups__left}>
                <div className={style.groups__info}>
                    <div className="flexLine">
                        <Avatar width={'70px'} height={'70px'} circle={true} cover={true} src={groupsOne.logo} />
                        <h1>{groupsOne.name}</h1>
                        <button className={style.info__button}
                                onClick={() => toggleStatusInfo(statusInfo ? false : true)}
                                style={{transform: statusInfo ? 'rotate(180deg)' : ''}}>
                            <IoIosArrowDropdown />
                        </button>
                    </div>
                    {statusInfo ? groupsOne.info : null}
                </div>
                {groupsOne ? groupsOne.news.map((item : any, index: number) =>
                    <Post key={`${item._id}:${index}`} title={item.title} text={item.text}  img={item.img} minHeight={'380px'}/>
                ) : null}
                {groupsOne.statusNews === 'loading' ? <Loader center={true} margin={'0 0 10px 0'} /> : null }
                {groupsOne.statusNews !== 'empty'
                    ?   <div onClick={() => setCountSkip(countSkip + 5)}>
                            <Button  xCenter={true} color={'#4db8f7'} textColor={'#fff'}  >
                                {groupsOne.statusNews === 'loading' ? 'Loading...' : 'More'}
                            </Button>
                        </div>
                    :   'Новостей нет 😢'
                }
            </div>
            <div className={style.groups__right}>
                <img src={groupsOne.banner ?
                    groupsOne.banner
                    : 'https://raw.githubusercontent.com/wdsrocha/wallpapers/master/wallpapers/minimalist_dark/labyrinth.png'}
                     style={{width: '100%', borderRadius: '8px'}} alt=""/>
                <p className="flexLine"><ImUsers /> Users: {groupsOne.users}</p>
                <div onClick={() => dispatch(subscribeToggle())}>
                    <Button  color={'#4db8f7'} textColor={'#fff'}  >
                        {groupsOne.subscribe ? 'Отписаться' : 'Подписаться'}
                    </Button>
                </div>
            </div>
        </>
    )
}

export default GroupsOne