import React from 'react'

interface ButtonInterface {
    color: string;
    textColor: string;
    fill?: true ;
    fontSize?: string;
    xCenter? : true;
}

const Button: React.FC<ButtonInterface> = React.memo((
    {   xCenter,
        fill,
        color,
        fontSize,
        textColor,
        children}) => {
    return (
        <button className="btn" style={{
            fontSize: fontSize,
            border: fill ? '' : `2px solid ${color}`,
            background: fill ? color : '',
            color: textColor,
            margin: xCenter ? '0 auto' : ''
        }}>
            {children}
        </button>
    )
})

export  default Button