import React from 'react'
import Avatar from "../avatar/avatar";

interface ProfileTempProps {
    name?: string
}

const ProfileTemp = ({name}: ProfileTempProps) => {
    return (
        <div  className="flexLine">
            <p>
                {name}
            </p>
            <Avatar
                cover={true}
                circle={true}
                src={'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/350cd1d2-a524-4468-a383-8e636fc5292d/d3l1fyj-84de1f22-2ad6-4fad-8df2-485df8117ab6.jpg/v1/fill/w_1600,h_1130,q_75,strp/neytiri_hq2_by_lorenzothekiller-d3l1fyj.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sIm9iaiI6W1t7InBhdGgiOiIvZi8zNTBjZDFkMi1hNTI0LTQ0NjgtYTM4My04ZTYzNmZjNTI5MmQvZDNsMWZ5ai04NGRlMWYyMi0yYWQ2LTRmYWQtOGRmMi00ODVkZjgxMTdhYjYuanBnIiwid2lkdGgiOiI8PTE2MDAiLCJoZWlnaHQiOiI8PTExMzAifV1dfQ.DPa3uuM3sbciTJOf6YWdawgcBhgptQUxPuPGAf7eE0s'}
            />
        </div>
    )
}

export default ProfileTemp;