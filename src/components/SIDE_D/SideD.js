import React,{useState} from 'react'
import SearchIcon from '@material-ui/icons/Search';
import InboxIcon from '@material-ui/icons/Inbox';
import HelpIcon from '@material-ui/icons/Help';
import './SideD.css'
import Personnel from './Personnel';
import ProfilePopup from './ProfilePopup';
import Profile from './Profile';

function SideD({setShowList,showList}) {
    const [profilePopUp,setProfilePopUp]=useState(false)
    const [profileUser, setProfileUser] = useState(false)
    
    const openProfile = () => {
        setProfilePopUp(false)
        setProfileUser(true)
    }
    return (
        <>
            <div className={`side--d ${!showList && 'side--d--re' } `}>
                <div className="side--dHeader">
                    <div className="side--dHeader--search">
                        <input type='text' placeholder='Search' />
                        <SearchIcon/>
                    </div>
                    <InboxIcon />
                    <HelpIcon/>
                </div>
                <Personnel setProfilePopUp={setProfilePopUp}  />
            </div>
            {profilePopUp && <ProfilePopup openProfile={openProfile} />}
            {profileUser  &&  <Profile/>}
        </>
    )
}

export default SideD
