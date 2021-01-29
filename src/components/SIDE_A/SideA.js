import React from 'react'
import './SideA.css'
import AddIcon from '@material-ui/icons/Add';
import GetAppIcon from '@material-ui/icons/GetApp';

function SideA() {
    return (
        <div className='side--a'>
            <div className="logo--box">
                <img src='https://www.freepnglogos.com/uploads/discord-logo-png/discord-u2013-swiss-geeks-23.png' alt='Discord Clone' />
            </div>
            <div className="icon--box">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <h2>JIL</h2>
            </div>
            <div className="add--box">
                <AddIcon/>
            </div>
            <div className="download--box">
                <GetAppIcon/>
            </div>
        </div>
    )
}

export default SideA
