import React from 'react'
import './_HeaderNav.scss'
import HeaderMenu from '../HeaderMenu/HeaderMenu'
import HeaderLogo from '../HeaderLogo/HeaderLogo'
import HeaderSearch from '../HeaderSearch/HeaderSearch'

const HeaderNav = () => {
    return (
        <div className="header-nav">
            <div className="header-nav-wrapper">
                <HeaderMenu />
                <HeaderLogo />
                <HeaderSearch />
            </div>
        </div>
    )
}

export default HeaderNav