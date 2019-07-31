import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import './MainNav.css';


class Nav extends Component {

    render() {
        return (
            <nav className="MainNav">
                <div className="Container">
                    <p className="Logo"/>
                    <NavLink className="NavLink" activeClassName="Active" exact={true} to="/">Home</NavLink>
                    <NavLink className="NavLink" activeClassName="Active" exact={true} to="/about">About</NavLink>
                </div>
            </nav>
        );
    }
}

export default Nav;