import { useState } from 'react'

import './appbar.css'

import AppbarActions from './appbarActions'

import logout from '../../Assets/logout.svg'
import logo from '../../Assets/logo.svg'
import logoBlack from '../../Assets/logoBlack.svg'
import logoBigWhite from '../../Assets/logoBigWhite.svg'
import home from '../../Assets/home.svg'
import homeWhite from '../../Assets/homeWhite.svg'
import profile from '../../Assets/profile.svg'
import settings from '../../Assets/settings.svg'
import hamburger from '../../Assets/hamburger.svg'
import cancel from '../../Assets/cancel.svg'

const Appbar = () => {

    // state to toggle menu display for mobile screens:
    const [showMenu, setShowMenu] = useState(false)

    return (
        <nav className="appbar">
            <div className="brandBanner">
                <div className="logoDiv">
                    <img alt="" src={logo} width="30px" height="30px" />
                </div>

                <div className="helloText">
                    Hallo, LIQID!
                </div>

                <div className="logoutAction" style={{ margin: "0 20px", color: "white", fontSize: "36px" }}> | </div>

                <AppbarActions className="logoutAction" logo={logout} text="logout" />
            </div>

            <div className="appbarActionsDiv">

                <AppbarActions logo={home} text="Home" selected />

                <AppbarActions logo={profile} text="Profile" />

                <AppbarActions logo={settings} text="Settings" />

            </div>

            <img onClick={() => setShowMenu(true)} className="hamburger" alt="" src={hamburger} width="25px" height="25px" />

            {
                showMenu ?
                    (
                        <div className="hamburgerMenu">

                            <div className="menuTitlebar">
                                <div style={{display:"flex", alignItems:"center"}}>
                                    <div className="menuLogoDiv">
                                        <img alt="" src={logoBlack} width="28px" height="28px" />
                                    </div>
                                    <div className="helloText">
                                        Hallo, LIQID!
                                    </div>
                                </div>

                                <img onClick={() => setShowMenu(false)} alt="" src={cancel} width="28px" height="28px" />
                            </div>

                            <div className="menuActionsDiv" >
                                <AppbarActions logo={logout} text="logout" />

                                <AppbarActions logo={homeWhite} text="Home" />

                                <AppbarActions logo={profile} text="Profile" />

                                <AppbarActions logo={settings} text="Settings" />
                            </div>

                            <div className="menuBottombar">
                                <img alt="" src={logoBigWhite} />
                            </div>
                        </div>
                    )
                    : null
            }

        </nav>
    )
}

export default Appbar