import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faHome, faBell, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import HeaderMenuItem from '../HeaderMenuItem/HeaderMenuItem'
import './_HeaderMenu.scss'

const HeaderMenu = () => {
    const menu = [
        {id: 1, section: "Home", url: "", img: <FontAwesomeIcon icon={faHome} style={{fontSize: "25px"}} />},
        {id: 2, section: "Moments",  url: "moments", img: <FontAwesomeIcon icon={faBolt} style={{fontSize: "25px"}} />},
        {id: 3, section: "Notifications",  url: "notifications", img: <FontAwesomeIcon icon={faBell} style={{fontSize: "25px"}} />},
        {id: 4, section: "Massage", url: "massage", img: <FontAwesomeIcon icon={faEnvelope} style={{fontSize: "25px"}} />}
    ];

    const [curState] = useState(menu)

    const menuItems = curState.map((item) => {
        return (
            <HeaderMenuItem 
                key={item.id} 
                section={item.section}
                img={item.img}
                url={item.url} 
            />
        )
    })

    return (
        <div className="header-menu">
            <ul className="header-menu__ul">
                { menuItems }
            </ul>
        </div>
    )
}

export default HeaderMenu