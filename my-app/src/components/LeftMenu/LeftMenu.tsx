import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import { Link } from 'react-router-dom'
import {RootState} from "../../redux/store";
import { toggleStatusPanel } from '../../redux/settings/settingsSlice';
import style from './leftMenu.module.css'
import {BiMessageSquareDots, BsArrowBarRight, CgProfile, FaUserFriends, FaUserPlus, FcTodoList, HiUserGroup} from "react-icons/all";

enum IconsNav {
    CgProfile = "CgProfile",
    FaUserFriends = "FaUserFriends",
    BiMessageSquareDots = "BiMessageSquareDots",
    HiUserGroup = "HiUserGroup",
    FaUserPlus = "FaUserPlus",
    FcTodoList = "FcTodoList",
}
interface INav {
    text: string;
    icon: string;
}

const pages: Array<INav> = [
    {text: 'Profile', icon: IconsNav.CgProfile},
    {text: 'Friends', icon: IconsNav.FaUserFriends},
    {text: 'Users', icon: IconsNav.FaUserPlus},
    {text: 'Messages', icon: IconsNav.BiMessageSquareDots},
    {text: 'Groups', icon: IconsNav.HiUserGroup},
    {text: 'Todo', icon: IconsNav.FcTodoList},
]

const LeftMenu = () => {
    const statusPanel = useSelector((state: RootState) => state.settings.statusLeftPanel)
    const dispatch = useDispatch()

    return (
        <div style={{width: statusPanel ? '260px' : '70px'}} className={style.wrapper}>
            <button className={style.toggleBtn} onClick={() => dispatch(toggleStatusPanel())}>
                <BsArrowBarRight style={{transform: statusPanel ? 'rotate(180deg)' : ''}}/>
                <p className={statusPanel ? '' : 'activeMenuLink'}>Little panel</p>
            </button>
            <ul className={style.nav}>
                {pages.map((page, index) =>
                    <li key={index}>
                        <Link to={'/' + page.text}>
                            {page.icon === IconsNav.CgProfile ? <CgProfile  /> : null }
                            {page.icon === IconsNav.FaUserFriends ? <FaUserFriends  /> : null }
                            {page.icon === IconsNav.FaUserPlus ? <FaUserPlus  /> : null }
                            {page.icon === IconsNav.BiMessageSquareDots ? <BiMessageSquareDots  /> : null }
                            {page.icon === IconsNav.HiUserGroup ? <HiUserGroup  /> : null }
                            {page.icon === IconsNav.FcTodoList ? <FcTodoList  /> : null }
                            <p className={statusPanel ? '' : 'activeMenuLink'}>{page.text}</p>
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default LeftMenu