import React from 'react';
import { NavLink } from 'react-router-dom'

import Badge from '../Common/Badge'

import './HeaderNav.css'

const HeaderNav = ({issues}) => (

    <nav>
        <ul>
            <li>
                <NavLink to="/" exact>
                    {/* <i className="material-icons">&#xE565;</i> */}
                    <i className="material-icons">&#xE7F5;</i>
                    Status
                    <Badge total={issues} />
                </NavLink>
            </li>
            <li>
                <NavLink to="/planner/lookup">
                    <i className="material-icons">&#xE52E;</i>
                    Planner
                </NavLink>
            </li>
            {/* <li><NavLink to="/arrivals/lookup">Arrivals</NavLink></li> */}
        </ul>
    </nav>

)

export default HeaderNav



