import React from 'react'

interface AvatarInterface  {
    src: string;
    width?: string;
    height?: string;
    circle?: boolean;
    cover?: boolean;
    border? : boolean;
}

const Avatar = ({src,width , height, circle, cover, border}: AvatarInterface) => {
    return (
        <div className="ava" style={{width, height,
            border: border ? '2px solid #4db8f7': '',
            borderRadius: circle ? '50%' : ''}} >
            <img alt='' src={src} style={{
                objectFit: cover ? 'cover' : 'contain',
                borderRadius: circle ? '50%' : '' }} />
        </div>
    )
}

export default Avatar;