import React from 'react';
import { Link } from 'react-router-dom'

const HeaderNav = () => (

    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/planner/lookup">Planner</Link></li>
            {/* <li><Link to="/arrivals/lookup">Arrivals</Link></li> */}
        </ul>
    </nav>

)

export default HeaderNav



