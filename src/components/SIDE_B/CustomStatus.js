import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import './CustomStatus.css'


function CustomStatus({setUpdateStatus}) {
    return (
        <div className='custom--status--container'>
            <div className="custom--status--content">
                <div className="header--container">
                <div className="header">
                    <img src="https://discord.com/assets/c65bdfef89fe3a7456a727a4cf58933c.svg" alt="Set Status" />
                    <CloseIcon onClick={()=>setUpdateStatus(false)} />
                </div>
                </div>
                <h2>Set a custom status</h2>
                <form action="">
                    <div>
                    <label htmlFor="">
                            what's cookin', Sam Phases?
                    </label>
                        <div className="input--emoji">
<EmojiEmotionsIcon/>
                    <input type="text" placeholder ='Support has arrived!' />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">clear after</label>
                        <select name="" id="">
                            <option value="Today">Today</option>
                            <option value="4 hours">4 hours</option>
                            <option value="1 hour">1 hour</option>
                            <option value="30 minutes">30 minutes</option>
                            <option value="Don't clear">Don't clear</option>
                        </select>
                    </div>
                    <div className='btn--container'>
                        <div>
                        <button>Cancel</button>
                        <button className='btn--save'>Save</button>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CustomStatus
