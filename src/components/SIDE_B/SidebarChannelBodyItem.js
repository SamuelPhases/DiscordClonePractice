import React from 'react'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import './SidebarChannelBodyItem.css'

function SidebarChannelBodyItem() {
    return (
        <div className='sidebar--channelBodyItem'>
            <FiberManualRecordIcon />
            <div className="sidebar--channelBodyItem--split">
                <div>
            <h1>#</h1>
            <p>Item</p>
                </div>
                <PersonAddIcon/>
            </div>
        </div>
    )
}

export default SidebarChannelBodyItem
