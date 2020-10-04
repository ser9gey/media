import React, { useContext } from 'react'
import './_HeaderSearch.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {MyContext} from '../../App'

const HeaderSearch = () => {
    const { searchUser, currentValueInputSearch } = useContext(MyContext)

    return (
        <form className="header-search">
            <input className="header-search__input" placeholder="Search Twitt" value={currentValueInputSearch} onChange={(event) => searchUser(event)} />
            <FontAwesomeIcon className="header-search__input-search" icon={faSearch} />
        </form>
    )
}

export default HeaderSearch