import React from 'react';

import rigoImage from "./img/rigo-baby.jpg";

import Heading from './components/Heading';
import { Menu } from './components/Menu';

const App = () => {
    return (
        <>
            <Menu />
            <Heading title="Heading 1" />
            <Heading title="Heading 2" />
            <Heading title="Heading 3" />
            <Heading title="Heading 4"/>
            <Heading title="Heading 5" />
            <Heading title="Heading 6" />
            <button className='btn btn-primary btn-sm'>Mi Boton</button>
        </>
    )
}

export default App;