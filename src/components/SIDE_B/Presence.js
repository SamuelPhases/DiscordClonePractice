import React from 'react'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Brightness3RoundedIcon from '@material-ui/icons/Brightness3Rounded';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import MoodIcon from '@material-ui/icons/Mood';

import './Presence.css'

function Presence({setOnline,setIdle,changeToOnline,changeToIdle,changeToDnd,changeToInv,changeStatus}) {
    return (
        <div className='presence--container'>
            <div className="presence--content">
                <div className="online" onClick={changeToOnline}>
                    <FiberManualRecordIcon />   
                    <h4>Online</h4>
                </div>
                <div className="idle" onClick={changeToIdle}>
                    <Brightness3RoundedIcon />
                    <h4>Idle</h4>
                </div>
                <div className="dnd" onClick={changeToDnd}>
                    <div>
                    <RemoveCircleIcon />
                        <h4>Do Not Disturb</h4>
                    </div>
                        <p className="dnd--txt">You will not receive any desktop notification</p>
                </div>
                <div className="dnd" onClick={changeToInv}>
                    <div className='inv'>
                    <RadioButtonUncheckedIcon />
                    <h4>Invisible</h4>
                    </div>
                    <p>You will not appear online but will have full access to all of Discord.</p>

                </div>
                <div className=" set--status" onClick={changeStatus} >
                    <MoodIcon />
                    <h4>Set a custom status</h4>
                </div>
            </div>
        </div>
    )
}

export default Presence
