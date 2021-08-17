import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {getGroupApi} from "../../redux/groups/groupsSlice";
import style from './groups.module.css'
import GroupsItem from "./GroupsItem";

const Groups = () => {
    const groups = useSelector((state: RootState) => state.group)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getGroupApi())
    }, [dispatch]);


    return (
        <div className={style.allGroups}>
            <h1>All Groups</h1>
                {groups.groups.map(groupsItem =>
                    <GroupsItem
                        _id={groupsItem._id}
                        key={groupsItem._id}
                        slogan={groupsItem.slogan}
                        name={groupsItem.name}
                        logo={groupsItem.logo}
                        users={groupsItem.users}

                    />
                )}
        </div>
    )
}

export default Groups