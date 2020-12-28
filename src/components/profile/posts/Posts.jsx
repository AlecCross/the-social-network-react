//import s from './Posts.module.css';
import React from 'react';
import Post from '../post/Post';

const Posts = () =>{
    return(
        <div>
            <Post text='Пост1' avatar='https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png'/>
            <Post text='Пост2' avatar='https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png'/>
            <Post text='Пост3' avatar='https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png'/>
            <Post text='Пост4' avatar='https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png'/>
        </div>
    )
}

export default Posts