import React from 'react'
import { FcLike, GrFormView } from 'react-icons/all'

interface IPost {
    title?: string;
    text: string;
    img?: string;
    minHeight?: string;
    likes?: number;
    views?: number;
    onLike?: boolean;
    onLikeToggle?: any;
}

const Post = ({title, img, text, minHeight, likes, views, onLike, onLikeToggle}: IPost) => {
    return (
        <div className="post" style={{minHeight: minHeight}}>
            {title ? <h3>{title}</h3> : null}
            <div>
                {img ? <img src={img} alt=""/> : null}
                <p>{text}</p>
                {(likes && views)
                    ?   <div className='flexLine' style={{marginTop: '10px'}} >
                            <button  onClick={() => onLikeToggle()}
                                     className={onLike ? 'flexLine liked' : 'flexLine'}
                                     style={{marginRight: '10px', fontSize: '16px'}}
                            >
                                <FcLike className="svg__white-fill"  style={{width: '20px'}}/>{likes}
                            </button>
                            <div className="flexLine"><GrFormView className="svg__white-stroke"/>{views}</div>
                        </div>
                    :   null
                }
            </div>
        </div>
    )
}

export default Post