import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import { RootState } from '../../redux/store';
import {followToggleOneUser, onLikeToggle } from '../../redux/users/usersSlice';
import Avatar from "../../components/avatar/avatar";
import Button from "../../components/button/Button";
import Post from "../../components/post/post";

interface IUsersOne {
    match: any
}

const UsersOne = ({match}: IUsersOne) => {
    const user = useSelector((state: RootState) => state.users.oneUser)
    const dispatch = useDispatch()

    return (
        <div style={{width: '100%'}}>
            <div className="flexLine">
                <Avatar width={'160px'} height={'160px'} circle={true} cover={true} src={user.ava} />
                <div className="user__inf" style={{marginLeft: '10px'}}>
                    <h1>{user.name}</h1>
                    <p>Birthday: {user.info.birthday}</p>
                    <p>City: {user.info.city}</p>
                    <p>Followers: {user.followers}</p>
                    <p>Groups: {user.groups}</p>
                </div>
                <div  style={{marginLeft: 'auto'}} className="flexLine " >
                    <div onClick={() => dispatch(followToggleOneUser())}>
                        <Button color={'#4db8f7'} textColor={'#fff'} >
                            {user.follow ? 'Unfollow' : 'Follow'}
                        </Button>
                    </div>
                    <p style={{margin: '8px'}}></p>
                    <Button color={'#4db8f7'} textColor={'#fff'} >
                        Message
                    </Button>
                </div>

            </div>
            <h1 style={{margin: '50px 0 20px 0'}}>Posts</h1>
            <div >
                {user.posts.map((post, index) =>
                    <Post onLikeToggle={() => dispatch(onLikeToggle(post._id))}
                          key={`${post._id}:${index}`}
                          text={post.text}
                          likes={post.likes}
                          views={post.view}
                          onLike={post.onLike}
                    />
                )}
            </div>
        </div>
    )
}

export default UsersOne