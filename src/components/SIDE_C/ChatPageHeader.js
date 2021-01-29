import React from 'react'
import NotificationsIcon from '@material-ui/icons/Notifications';
import PinDropIcon from '@material-ui/icons/PinDrop';
import GroupIcon from '@material-ui/icons/Group';
import './ChatPageHeader.css'
// import SearchIcon from '@material-ui/icons/Search';
// import InboxIcon from '@material-ui/icons/Inbox';
// import HelpIcon from '@material-ui/icons/Help';

function ChatPageHeader({ setShowList, showList, setPinnedContent }) {
    return (
        <div className="chat--pageHeader">
            <div className="chat--pageHeader--split">
                <h1>#</h1>
                <p>+designers court</p>
            </div>
            <div className="chat--pageHeader--icons">
                <div className="icon">
                    <NotificationsIcon/>
                </div>
                <div className="icon" onClick={()=>setPinnedContent(true)}>
                    <PinDropIcon/>
                </div>
                <div className="icon" onClick={()=>setShowList(!showList)}>
                    <GroupIcon/>
                </div>
            </div>
        </div>
    )
}

export default ChatPageHeader
