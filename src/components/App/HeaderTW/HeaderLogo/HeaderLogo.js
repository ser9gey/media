import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

const HeaderLogo = () => {
    return (
        <div className="header-logo">
            <Link to="/" className="header-logo__a" href="/">
                <FontAwesomeIcon icon={faTwitter} style={{fontSize: "35px", color: "#00BFFF"}} />
            </Link>
        </div>
    )
}

export default HeaderLogo