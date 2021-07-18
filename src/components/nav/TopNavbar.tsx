import React, { useState } from 'react'
import { OutsideAlerter } from './OutsideAlerter'
import logo from '../../assets/images/logos/inovact 1.png'
import bell from '../../assets/images/icons/notification-alert.svg'
import user from '../../assets/images/icons/user-profile.svg'

const TopNavbar: React.FC = () => {
    const [hamburger, setHamburger] = useState(false)
    const handleHamburger = () => {
        setHamburger(!hamburger)
    }
    return (
        <div>
            <div className="nav-component">
                <div className="nav-component__items">
                    <div
                        className="nav-component__hamburger"
                        onClick={handleHamburger}
                    >
                        <img
                            className="nav-component__hamburger"
                            src={user}
                            alt="User Profile"
                        />
                    </div>
                    <img
                        className="nav-component__logo"
                        src={logo}
                        alt="Inovact"
                    />
                    <div className="nav-component__search">
                        <input
                            type="search"
                            className="input-component--search"
                            placeholder="What are you looking for?"
                        ></input>
                        <i
                            className="fa fa-search fa-2x input-component--search__image"
                            aria-hidden="true"
                        ></i>
                    </div>
                    <a href="/" className="nav-component__link">
                        Home
                    </a>
                    <a href="/" className="nav-component__link">
                        Teams
                    </a>
                    <a href="/" className="nav-component__link">
                        Learn
                    </a>
                    <a href="/" className="nav-component__link">
                        Connect
                    </a>
                    <img
                        className="nav-component__notification"
                        src={bell}
                        alt="Notifications"
                    />
                    <img
                        className="nav-component__user-profile"
                        src={user}
                        alt="User Profile"
                    />
                </div>
            </div>
            {hamburger && (
                <OutsideAlerter
                    onClose={() => {
                        setHamburger(false)
                    }}
                >
                    <div id="ham" className="nav-hamburger"></div>
                </OutsideAlerter>
            )}
        </div>
    )
}

export default TopNavbar
