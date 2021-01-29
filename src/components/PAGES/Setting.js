import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import './Setting.css'
import Account from './Account';
import Connections from './Connections';
import HypeSquad from './HypeSquad';
import Appearance from './Appearance';
import ChangeLog from './ChangeLog';

function Setting({setSettings}) {
    return (
        <div className="setting">
            <div className="setting--container">
                <div className="setting--nav">
                    <nav>
                    <h4>user settings</h4>
                        <ul>
                            <li className='active'>my
                             account
                            </li>
                            <li>privacy
                             &
                                safety
                            </li>
                            <li>
                                authorized
                                 apps
                            </li>
                            <li>
                                connections
                            </li>
                            <li>
                                billing
                            </li>
                        </ul>

                        <ul>
                            <h4>app settings</h4>
                            <li>
                                voice & video
                            </li>
                            <li>
                                notifications
                            </li>
                            <li>
                                text &  images
                            </li>
                            <li>
                                appearance
                            </li>
                            <li>streamer mode</li>
                            <li>
                                language
                            </li>
                        </ul>
                        <ul>
                            <li>change log</li>
                        </ul>
                        <ul>
                            <li>Log out</li>
                        </ul>
                        <ul>
                            <li>
                                <TwitterIcon/>
                            </li>
                            <li>
                                <FacebookIcon/>
                            </li>
                            <li>
                                <InstagramIcon/>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="settings--nav--active">
                    {/* <Account setSettings={setSettings} /> */}
                    {/* <Connections setSettings={setSettings} /> */}
                    {/* <HypeSquad setSettings={setSettings}/> */}
                    {/* <Appearance setSettings={setSettings}/> */}
                    <ChangeLog setSettings={setSettings} />
                </div>
            </div>
        </div>
    )
}

export default Setting
