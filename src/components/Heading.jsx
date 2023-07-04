import React from 'react';

import css from './Heading.module.css';

function Heading(props) {
    return (
        <h1 className={css.style}>{props.title}</h1>
    )
}

export default Heading;