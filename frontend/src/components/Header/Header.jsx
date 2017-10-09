import React from 'react';
import HeaderNav from './HeaderNav'

import './Header.css'

const Header = ({issues}) => (

    <header>
        
        {/* <h1>
            TfL
        </h1> */}

        <HeaderNav issues={issues} />

    </header>


)

export default Header



