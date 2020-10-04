import React from 'react'
import './_HeaderMenuItem.scss'
import { Link } from 'react-router-dom';

const HeaderMenuItem = (props) => {
    const {img, section, url} = props;
    return (
        <li className="header-menu__ul-li">
            <Link to={`/${url}`} className="header-menu__ul-li-a">
                <span className="header-menu__ul-li-a-icon">{img}</span>
                <span className="header-menu__ul-li-a-section">{section}</span>  
            </Link>
        </li>
    )
}

export default HeaderMenuItem