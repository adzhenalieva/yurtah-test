import React from 'react';

import './Layout.css';
import MainNav from "../MainMav/MainNav";

const Layout = ({children}) => (

            <div className="Layout">
                <MainNav/>
                <main className="Layout-Content">{children}</main>
            </div>
    );


export default Layout;