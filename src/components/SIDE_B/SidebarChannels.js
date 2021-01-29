import React from 'react'
import SidebarChannelBody from './SidebarChannelBody'
import SidebarChannelHeader from './SidebarChannelHeader'
import  './SidebarChannels.css'

function SidebarChannels() {
    return (
        <div  className='sidebar--channels'>
            <SidebarChannelHeader/>
            <SidebarChannelBody/>
        </div>
    )
}

export default SidebarChannels
