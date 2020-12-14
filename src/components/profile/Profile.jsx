import React from 'react';
import Post from './posts/Post';
import s from './Profile.module.css';

let Profile = () => {
    return (
        <div className={s.content}>
            <img src='https://html5css.ru/css/img_lights.jpg'></img>
            <div>Main content</div>
            <div>
                ava+description
        </div>
            <div>
               <Post text={'Пост1'}/>
        </div>
            <div>
                <Post text={'Пост2'}/>
          <div>Pos1</div>
                <div>Pos2</div>
            </div>
        </div>
    );
}

export default Profile