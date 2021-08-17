import React from 'react'
import { Link } from 'react-router-dom';
import Avatar from "../avatar/avatar";

interface IFriendProps {
    id: string;
    name: string;
    follow: boolean;
    followToggle: any;
    ava?: string;
}

const User = ({ ava, name, id, follow, followToggle  }: IFriendProps) => {

    return (
        <div className="user">
            <Avatar cover={true} circle={true} width={'75px'} height={'75px'} src={ava ? ava : 'https://yt3.ggpht.com/a/AGF-l7_2JMTa1o02NK0yNCyia-CiydYY_8VCScpT7g=s900-c-k-c0xffffffff-no-rj-mo'} />
            <p>{name}</p>
            <div className="flexLine">
                <button onClick={() => followToggle()} className="user__btn">{follow ? 'unfollow' : 'follow'}</button>
                <Link className="user__btn" to={`/Users/${id}`}>profile</Link>
            </div>
        </div>
    )
}

export default User