import React from 'react'
import preloader from '../../../assets/images/Preloader.gif'

let Preloader = (props) => {
    return (
        <div style={{ backgroundColor: 'white' }}>
            <img src={preloader} alt="preloader" />
        </div>
    )
}

export default Preloader;
//Общая анимация загрузки для социальной сети