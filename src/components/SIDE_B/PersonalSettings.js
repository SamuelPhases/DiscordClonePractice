import React from 'react'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import SecurityRoundedIcon from '@material-ui/icons/SecurityRounded';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import CheckBoxOutlineBlankRoundedIcon from '@material-ui/icons/CheckBoxOutlineBlankRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import PolymerOutlinedIcon from '@material-ui/icons/PolymerOutlined';
import './PersonalSettings.css'

function PersonalSettings() {
    return (
        <div className='personal--settings'>
            <div className="personal--settings--content">
                <div className='single--item  boost--server'>
                    <h4>server boost</h4>
                    <PolymerOutlinedIcon  className='boost' />
                </div>
                <div className="single--line"></div>
                <div className='single--item  item--blue'>
                    <h4>invite people</h4>
                    <PersonAddIcon className='person--invite'/>
                </div>
                <div className="single--line"></div>
                <div className='group--items'>
                    <div>
                        <h4>Notification settings</h4>
                        <NotificationsRoundedIcon/>
                    </div>
                    <div>
                        <h4>privacy settings</h4>
                        <SecurityRoundedIcon/>
                    </div>
                </div>
                <div className="single--line"></div>
                <div className="group--items">
                    <div>
                        <h4>change nickname</h4>
                        <CreateRoundedIcon/>
                    </div>
                    <div>
                        <h4>hide muted channels</h4>
                        <CheckBoxOutlineBlankRoundedIcon/>
                    </div>
                </div>
                <div className="single--line"></div>
                <div className="single--item item--red ">
                    <h4>leave server</h4>
                    <ExitToAppRoundedIcon/>
                </div>
            </div>
        </div>
    )
}

export default PersonalSettings
