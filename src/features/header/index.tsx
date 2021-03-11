import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import './headerStyle.css';

const Header = () => {
    return (
        <div className="header">
            <div className="menu leftSide">
                <div className="first-menu-line"></div>
                <div className="second-menu-line"></div>
                <div className="third-menu-line"></div>
            </div>
            <div className="logo">
                <span>Shuts</span>
            </div>
        </div>
    );
};

export default Header;