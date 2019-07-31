import React from 'react';
import "./MainBlock.css";

const MainBlock = ({children}) => {
    return (
        <div className="MainBlock">
            <div className="Container">
                <h1 className="MainTitle">Best ever camp for your child </h1>
                {children}
            </div>
        </div>
    );
};

export default MainBlock;