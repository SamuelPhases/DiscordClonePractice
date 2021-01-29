import React,{useState} from 'react'
import './SideB.css'
import BrandingWatermarkIcon from '@material-ui/icons/BrandingWatermark';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Brightness3RoundedIcon from '@material-ui/icons/Brightness3Rounded';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';
import SidebarChannels from './SidebarChannels';
import Setting from '../PAGES/Setting';
import Presence from './Presence';
import CustomStatus from './CustomStatus';
import PersonalSettings from './PersonalSettings';

function SideB() {
    const [settings, setSettings] = useState(false)
    const [presence, setPresence] = useState(false)
    
    const [online, setOnline] = useState(true)
    const [idle, setIdle] = useState(false)
    const [dnd, setDnd] =useState(false)
    const [inv, setInv] = useState(false)
    const [updateStatus, setUpdateStatus] = useState(false)
    const [personalSetting, setPersonalSetting]=useState(false)
    
    const changeToIdle = () => {
        setIdle(true)
        setOnline(false)
        setDnd(false)
        setInv(false)
        setPresence(false)  
    }

    const changeToOnline = () => {
        setIdle(false)
        setOnline(true)
        setDnd(false)
        setInv(false)
        setPresence(false)
    }

    const changeToDnd = () => {
        setDnd(true)
        setIdle(false)
        setOnline(false)
        setInv(false)
        setPresence(false)
    }

    const changeToInv = () => {
        setDnd(false)
        setIdle(false)
        setOnline(false)
        setInv(true)
        setPresence(false)
    }

    const changeStatus = () => {
        setPresence(false)
        setUpdateStatus(true)
    }

    return (
        <>
        <div className='side--b'>
            <div className="side--bHeader" onClick={()=>setPersonalSetting(true)}>
                <div>
                    <BrandingWatermarkIcon className='bwi'/>
                    <h4>The Clean Family</h4>
                </div>
                <KeyboardArrowDownIcon/>
            </div>
            <div className='sideb--channels'>
            <SidebarChannels/>
            <SidebarChannels/>
            <SidebarChannels/>
            <SidebarChannels/>
            <SidebarChannels/>
            </div>
            
                <div className="sideb--profile">
                    <div className="sideb--profile--splitA">
                    <div className="sideb--profile--imgBox" onClick={()=>{setPresence(!presence)}}>
                        <div className='img--container'>
                        <img src="https://www.freepnglogos.com/uploads/discord-logo-png/discord-u2013-swiss-geeks-23.png" alt="Phases Profile" />
                            </div>
                            {
                                online && <FiberManualRecordIcon className='onl' />
                                
                            }
                            {
                                idle && <Brightness3RoundedIcon className='bri' />
                            }
                            {
                                dnd && <RemoveCircleIcon className='rci' />
                            }
                            {
                                inv && <RadioButtonUncheckedIcon className='rbu' />
                            }
                    </div>
                    <div className="sideb--profile--details">
                        <h3>Sam Phases</h3>
                        <p>#1029</p>
                    </div>
                </div>
                <div className="sideb--profile--splitB">
                    <div className="mute--mic">
                        <MicIcon/>
                    </div>
                    <div>
                    <HeadsetIcon />
                    </div>
                    <div onClick={()=>setSettings(!settings)}>
                    <SettingsIcon/>
                    </div>
                </div>
            </div>
            </div>
            {settings && <Setting setSettings={setSettings} />}
            {presence && <Presence setOnline={setOnline} setIdle={setIdle} changeToIdle={changeToIdle} changeToOnline={changeToOnline} changeToDnd={changeToDnd} changeToInv={changeToInv} changeStatus=  {changeStatus}  />}
            {updateStatus && <CustomStatus setUpdateStatus={setUpdateStatus} />}
            {personalSetting && <PersonalSettings/> }
            
            </>
    )
}

export default SideB
