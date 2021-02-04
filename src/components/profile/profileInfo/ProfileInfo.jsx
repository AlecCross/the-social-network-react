import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />

    }

    return (
        <>
            <div>
                <img className={s.avatar}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBxpj2OOGlOnaXrRmZQ0-s3nOhCBwJEFfwZQ&usqp=CAU"
                    alt="avatar" />
                <p>User1</p>
                <p>Description</p>
            </div>
            <div>
                <img src={props.profile.photos.large} alt="Avatar" />
            </div>
        </>
    )
}

export default ProfileInfo