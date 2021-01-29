import React from 'react'

import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CameraEnhanceIcon from '@material-ui/icons/CameraEnhance';
import './Account.css'

function Account({setSettings}) {
    return (
        <div className="setting--content">
        <div className="setting--content--header">
            <h2>my account</h2>
        </div>
        <div className="setting--content--edit">
            <div className='setting--content--container'>
                
            <div className="setting--content--edit--header">
                <div className="setting--content--split">
                    <div className='setting--icon'>
                        <div className="setting--profile--dp">
                            <img src="
                            https://www.freepnglogos.com/uploads/discord-logo-png/discord-u2013-swiss-geeks-23.png" alt=""/>
                        </div>
                        <CameraEnhanceIcon/>
                    </div>
                    <h2>Sam Phases </h2>
                    <span>#1009</span>
                </div>
                <button>upload  avatar</button>
            </div>
            <div className="setting--content--edit--body">
                <div className="row">
                    <div className="left">
                        <p className="header">username</p>
                        <h3>Sam Phases <span>#1009</span></h3>
                    </div>
                    <button>edit</button>
                </div>
                <div className="row">
                    <div className="left">
                        <p className="header">email</p>
                        <div>
                            <h3>**************@gmail.com</h3>
                            <p>reveal</p>
                        </div>
                    </div>
                    <button>edit</button>
                </div>
                <div className="row">
                    <div className="left">
                        <p className="header">phone number</p>
                        <h3>You haven't added a phone number yet.</h3>
                    </div>
                    <button>add</button>
                </div>
            </div>
            </div>
            <div className="setting--password">
                <h2>password and   authentication</h2>
                <button className="pwd--reset">change password</button>
            </div>

            <div className="tfa">
                <p className='title'>TWO-FACTOR AUTHENTICATION</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ducimus distinctio nesciunt ea animi a ipsa deserunt nulla! Sapiente corporis tempore a quos ipsam repellat minus accusamus doloribus repellendus ullam.
                </p>
                <button className="btn tfa--btn">Enable Two-Factor Auth</button>
            </div>

            <div className="remove--account tfa">
                <p  className='title'>account  removal</p>
                <button className="disable  btn">Disable Account</button>
                <button className="delete   btn">Delete Account</button>
            </div>
        </div>
        <div className="close--setting" onClick={()=>setSettings(false)}>
            <HighlightOffIcon/>
        </div>
    </div>
    )
}

export default Account
