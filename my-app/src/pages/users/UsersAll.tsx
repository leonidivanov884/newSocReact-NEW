import React from 'react'
import User from "../../components/user/user";
import {useDispatch, useSelector} from "react-redux";
import { RootState } from '../../redux/store';
import { followToggle } from '../../redux/users/usersSlice';


const UsersAll = () => {
    const AllUsers = useSelector((store: RootState) => store.users.users)
    const dispatch = useDispatch()

    return (
        <div className="users">
            <h1>UsersAll</h1>
            <div className="users__wrapper">
                {AllUsers.map(user =>
                    <User
                        key={user._id}
                        id={user._id}
                        follow={user.follow}
                        name={user.name}
                        ava={user.ava}
                        followToggle={() => dispatch(followToggle(user._id))}
                    />
                )}
            </div>
        </div>
    )
}

export default UsersAll