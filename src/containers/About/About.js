import React, {Component, Fragment} from 'react';
import MainBlock from "../../components/MainBlock/MainBlock";

import './About.css';

class MainPage extends Component {
    render() {
        return (
            <Fragment>
                <MainBlock/>
                <div className="About">
                    <h2 className="AboutTitle">About</h2>
                    <p className="AboutText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                </div>
            </Fragment>
        );
    }
}

export default MainPage;