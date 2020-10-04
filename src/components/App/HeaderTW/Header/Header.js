import React from 'react'
import HeaderNav from '../HeaderNav/HeaderNav'
import HeaderMain from '../HeaderMain/HeaderMain'
import Moments from '../../OtherPages/Moments/Moments'
import Notifications from '../../OtherPages/Notifications/Notifications'
import { Switch, Route } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <HeaderNav />
            <Switch>
                <Route exact path="/moments" component={Moments} />
                <Route exact path="/notifications" component={Notifications} />
                <Route exact path="/" component={HeaderMain} />
            </Switch>
        </header>
    )
}

export default Header