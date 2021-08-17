import React from 'react'
import { Link } from 'react-router-dom';
import style from './groups.module.css'
import { GroupsItemProps } from '../../types/groups';
import Avatar from "../../components/avatar/avatar";



const GroupsItem = ({ _id, name, users, logo, slogan}:GroupsItemProps) => {
    return (
        <div className={style.groupsItem}>
            <div className={style.box}>
                <Link to={`/Groups/${_id}`}>
                    <Avatar width={'50px'} height={'50px'} src={logo} cover={true} circle={true}/>
                    <div className={style.info}>
                        <p className={style.name}>{name}</p>
                        <p className={style.slogan}>{slogan}</p>
                    </div>
                </Link>
            </div>
            <div className={style.stat}>
                <p>Users: {users}</p>
            </div>
        </div>
    )
}

export default GroupsItem