import React,{useState} from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import RedditIcon from '@material-ui/icons/Reddit';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import TransitEnterexitIcon from '@material-ui/icons/TransitEnterexit';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './Profile.css'


function Profile() {
    const [uInfo, setUInfo] = useState(true)
    const [server, setServer] = useState(false)
    const [frnd, setFnd] = useState(false)
    const [pop,setPop]=useState(true)
    

    const onlyInfo = () => {
        setUInfo(true)
        setServer(false)
        setFnd(false)
    }
    const onlyServer = () => {
        setUInfo(false)
        setServer(true)
        setFnd(false)
    }
    const onlyFrnd = () => {
        setUInfo(false)
        setServer(false)
        setFnd(true)
    }
    

    return (
        <>
            <div className='profile'>
                <div className="profile--content">
                    <div className="profile--header">
                        <div className="profile--header--details">
                            <div className="profile--header--dp">
                                <img src="https://images.unsplash.com/photo-1540375849459-0d009b2f80d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
                                <FiberManualRecordIcon/>        
                            </div>
                            <div className="profile--header--info">
                                <h2>Clean Neat  <span>#1009</span></h2>
                            </div>
                        </div>
                        <div className="profile--header--btn">
                            <button>send friend request</button>
                            <div onClick={setPop}>
                                <MoreVertIcon/>
                            </div>
                        </div>
                    </div>
                    <div className="profile--info--tab">
                        <h4 onClick={onlyInfo} className={`${uInfo && 'focused--tab'}`}>user info</h4>
                        <h4 onClick={onlyServer}   className={`${server && 'focused--tab'}`}>mutual servers</h4>
                        <h4 onClick={onlyFrnd} className={`${frnd && 'focused--tab'}`}>mutual friends</h4>
                    </div>
                    <div className="profile--info--tab--content">
                        {uInfo &&
                            <>
                                <div className="user--info">
                                    <div className="user--info--header">
                                    <h5>NOTE</h5>
                                    <textarea name="" id="" placeholder='Click to add a note' ></textarea>
                                    </div>
                                    <div className="user--info--body">
                                        <div className="row--link">
                                            <div className="site--logo">
                                                <GitHubIcon className='git--acc' />
                                                <div>
                                                    <p>Clean__Neat</p>
                                                    <CheckCircleIcon/>
                                                </div>
                                            </div>
                                            <TransitEnterexitIcon/>
                                        </div>
                                        <div className="row--link">
                                            <div className="site--logo">
                                                <TwitterIcon className='tweet--acc' />
                                                <div>
                                                    <p>Clean__Neat</p>
                                                    <CheckCircleIcon/>
                                                </div>
                                            </div>
                                            <TransitEnterexitIcon/>
                                        </div>
                                        <div className="row--link">
                                            <div className="site--logo">
                                                <RedditIcon className='reddit--acc'/>
                                                <div>
                                                    <p>Clean__Neat</p>
                                                    <CheckCircleIcon/>
                                                </div>
                                            </div>
                                            <TransitEnterexitIcon/>
                                        </div>
                                    </div>
                                </div>
                            </>
                        }

                        {server &&  
                            <>
                                <div className="mutual--server">
                                    <div>
                                        <div className="server--logo">
                                            <img src="https://images.unsplash.com/photo-1540375849459-0d009b2f80d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                                        </div>
                                        <h2>the clean family</h2>
                                    </div>
                                </div>
                            </>
                        }

                        {frnd && 
                            <>
                                <div className="mutual--frnds">
                                    <img src="https://discord.com/assets/ca3f5ec71bb86c6aeb015bb0d54a10fa.svg" alt="" />
                                    <p>no friends in common</p>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
            {pop &&
                <>
                <div className="pop--container">
                    <div className="pop--content">
                        <p className="red-c">block</p>
                        <p className="send-c">Message</p>
                    </div>
                </div>
                </>
            }
            </>
    )
}

export default Profile
