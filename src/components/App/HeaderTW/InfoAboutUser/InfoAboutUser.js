import React, { useContext } from 'react'
import './_InfoAboutUser.scss'
import {MyContext} from '../../App'


const InfoAboutUser = () => {
    const { currCheckedUser, showAndHideFullAvatar } = useContext(MyContext)

    let className = "header-user_main-ava-full"
    if(currCheckedUser.imgFull) { className += " header-user_main-ava-full-active" }

    return (
        <div className="info-about-user">
            <div className="info-about-user-wrap">
                <div className="all-info-about-user">
                    <div className="header-info-about-user">
                        <div className="header-info-about-user-ava">
                            <img className="header-user_main-ava" src={currCheckedUser.avatar} alt="ava" onClick={() => showAndHideFullAvatar(currCheckedUser)} />
                            <div className="popup">
                                <img className={className} src={currCheckedUser.avatar} alt="ava" />
                            </div>
                        </div>
                        <div className="header-info-about-user_data">
                            <p className="header-user_name">Name: {currCheckedUser.name}</p>
                            <p className="header-user_birth-year">Year: {currCheckedUser.birth_year}</p>
                            <p className="header-user_eye-color">Eye Color: {currCheckedUser.eye_color}</p>
                            <p className="header-user_gender">Gender: {currCheckedUser.gender}</p>
                        </div>
                    </div>
                    <div className="main-info-about-user">
                        <p className="main-user_hair-color">Hair Color: {currCheckedUser.hair_color}</p>
                        <p className="main-user_height">Height: {currCheckedUser.height}</p>
                        <p className="main-user_mass">Mass: {currCheckedUser.mass}</p>
                    </div>
                    <div className="footer-info-about-user">
                        <p className="footer-user_skin-color">Skin Color: {currCheckedUser.skin_color}</p>
                        <p className="footer-user_created">Created: {currCheckedUser.created}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoAboutUser