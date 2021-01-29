import React from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './SidebarChannelHeader.css'


function SidebarChannelHeader() {   
    return (
        <div className='sidebar--channelHeader'>
            <ArrowForwardIosIcon />
            <h5>text channels</h5>
        </div>
    )
}

export default SidebarChannelHeader
