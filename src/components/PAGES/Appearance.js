import React from 'react'

import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import ChatText from '../SIDE_C/ChatText'
import './Appearance.css'
function Appearance({setSettings}) {
    return (
        <div className='appearance'>
            <h3>appearance</h3>
            <div className="appearance--text">
                <ChatText/>
            </div>
            <h5>theme</h5>
            <div className="appearance--theme">
                <label className='theme--active'><input type="checkbox" name="" id="" checked/><p>Dark</p>
                </label>
                <label>
                    <input type="checkbox" name="" id="" />
                    <p>Light</p>
                </label>
            </div>
            <h5>message display</h5>
            <div className="appearance--display appearance--theme">
                <label className='message--active'><input type="checkbox" name="" id="" checked/><span>Cozy: modern, beautiful, and easy on your eyes</span></label>
                <label><input type="checkbox" name="" id=""/><span>Compact: Fit more messages on screen at one time. #IRC</span></label>
            </div>
            <h3>accessibility</h3>
            <div className="d--sidebar">
                <label>
                    <p>Dark Sidebar</p>
                    <input type="checkbox" name="" id=""/>
                </label>
            </div>
            <div className="font-scaling">
                <p className="title">
                    chat font scaling
                </p>
                <div className="slide">
                <p className="one">12px</p>
                <p className="two">14px</p>
                <p className="three">15px</p>
                <p className="four">16px</p>
                <p className="five">18px</p>
                <p className="six">20px</p>
                <p className="seven">24px</p>
                </div>
            </div>
            <div className="font-scaling    space-scaling">
                <p className="title">
                    space between message groups
                </p>
                <div className="slide">
                <p className="one">0px</p>
                <p className="three">8px</p>
                <p className="five">16px</p>
                <p className="seven">24px</p>
                </div>
            </div>
            <div className="font-reduce">
                <p className="title">
                    reduced motion
                </p>
                <p className="text">
                    Reduce the amount and  intensity of animation, hover effects across Discord. Need help? Check our <span>Help Center</span> for more info!
                </p>
                <label><input type="checkbox" name="" id=""/><span>Sync with computer</span></label>
            </div>

            <div className="d--sidebar">
                <label>
                    <p>Enable reduced motion</p>
                    <input type="checkbox" name="" id=""/>
                </label>
            </div>

            <h3>advanced</h3>
            <div className="adv--sidebar">
                <div className="d--sidebar">
                    <label>
                        <p>Developer mode</p>
                        <input type="checkbox" name="" id=""/>
                    </label>
                </div>
                <p>
                    Developer mode exposes context menu items helpful for people writing bots using the <span>Discord API</span>
                </p>
            </div>
            <div className="app--test">
                <div className="d--sidebar">
                    <label>
                        <p>Application Test mode</p>
                        <input type="checkbox" name="" id=""/>
                    </label>
                </div>
                <p>
                    Enter your Discord application ID to enable test mode for that application.
                </p>
            </div>
            
            <div className="close--setting--hypesquad" onClick={()=>setSettings(false)}>
            <HighlightOffIcon/>
        </div>
        </div>
    )
}

export default Appearance
