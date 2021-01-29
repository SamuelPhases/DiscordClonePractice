import React from 'react'
import FiberManualRecordRoundedIcon from '@material-ui/icons/FiberManualRecordRounded';
import './ProfilePopup.css'

function ProfilePopup({openProfile}) {
    return (
        <div className='profile--popup'>
            <div className="profile--popup--content">
                <div className="profile--popup--header">
                    <div className="profile--popup--dp" onClick={openProfile} >
                        <img src="https://images.unsplash.com/photo-1540375849459-0d009b2f80d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
                        <FiberManualRecordRoundedIcon className='current--status' />
                        <p className="view--profile">
                            View  Profile
                        </p>
                    </div>
                    <div className="profile--popup--id">
                        <h2>Clean Neat  <span>#1009</span></h2>
                    </div>
                    <div className="profile--popup--status">
                        <h4>Looking Clean..... Cleanliness is next to GODLINESS</h4>
                    </div>
                </div>
                <div className="profile--popup--body">
                        <h4>role</h4>
                    <div className="role--section">
                    <div>
                        <div>
                            <FiberManualRecordRoundedIcon className='role--primary' />
                            <p>
                            Clean
                            </p>
                        </div>
                    </div>

                    </div>
                    <div className='note--section'>
                        <h4>note</h4>
                    <textarea name="" id="" placeholder='Click to add a note' ></textarea>
                    </div>
                    <input type="text" name="" id="" placeholder='Message @Sam Phases' />
                    <p>Right click user for more actions</p>
                </div>
            </div>
        </div>
    )
}

export default ProfilePopup
