import React from 'react'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function PersonnelList({setProfilePopUp}) {
    return (
        <div className="personnel--info" onClick={()=>setProfilePopUp(true)}>
            <div className="personnel--info--dp">
                <div>
                    <img src="https://images.unsplash.com/photo-1591348591856-6b5b07541e1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                </div>
                <FiberManualRecordIcon/>
            </div>
            <div className="personnel--info--details">
                <p className='name'>Clean  Neat</p>
                <p className='status'>Let's Fly</p>
            </div>
        </div>
    )
}

export default PersonnelList
