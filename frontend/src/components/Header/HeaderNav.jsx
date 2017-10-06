import React from 'react';
import { NavLink } from 'react-router-dom'

import './HeaderNav.css'

const HeaderNav = () => (

    <nav>
        <ul>
            <li><NavLink to="/" exact>Status</NavLink></li>
            <li><NavLink to="/planner/lookup">Planner</NavLink></li>
            {/* <li><NavLink to="/arrivals/lookup">Arrivals</NavLink></li> */}
        </ul>
    </nav>

)

export default HeaderNav



