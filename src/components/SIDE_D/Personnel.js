import React from 'react'

import './Personnel.css'
import PersonnelList from './PersonnelList';

function Personnel({setProfilePopUp}) {
    return (
        <div className="personnel--container">
            <div className="personnel--header">
                <h3>active popper</h3>
            </div>
            <PersonnelList setProfilePopUp={setProfilePopUp} />
        </div>

    )
}

export default Personnel
