import React from 'react'
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import { Link } from 'react-router-dom';
import style from './header.module.css'
import {IoExitOutline, SiAtom} from "react-icons/all";
import Search from "../Search/Search";
import ProfileTemp from "../ProfileTemp/ProfileTemp";

const Header = () => {
    const statusPanel = useSelector((state: RootState) => state.settings.statusLeftPanel)
    let name = 'ALEX NAME'
    return (
        <div className={style.header}>
            <Link to={'/'} className={style.logo} style={{fontSize: '19px', width: statusPanel ? '260px' : '70px'}}>
                <SiAtom />
                <p className={statusPanel ? '' : 'activeMenuLink'}>GET START</p>
            </Link>
            <Search />
            <ProfileTemp name={name} />
            <div className="exit">
                <IoExitOutline />
            </div>
        </div>
    )
}

export default Header;