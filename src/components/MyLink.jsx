import React from 'react';

import css from './MyLink.module.css';

const MyLink = (props) => {

    const style = {
        color: 'blueviolet',
        fontSize: '15px',
        textDecoration: 'none',
        margin: '2px 5px'
    }

    //return <a href={props.link} style={style}>{props.text}</a>
    return <a href={props.link} className={css.style}>{props.text}</a>
}

export default MyLink;