import React from 'react';
import s from './ProfileData.module.css';

const ProfileData = () =>{
    return(
        <div>
            <img className={s.avatar}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBxpj2OOGlOnaXrRmZQ0-s3nOhCBwJEFfwZQ&usqp=CAU" 
            alt="avatar"/>
            <p>User1</p>
            <p>Description</p>
        </div>
    )
}

export default ProfileData