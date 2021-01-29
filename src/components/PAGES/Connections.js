import React from 'react'
import RedditIcon from '@material-ui/icons/Reddit';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import './Connections.css'

function Connections({setSettings}) {
    return (
        <div className='connection--content'>
            <h2>connections</h2>
            <div className="connection--content--box">
                <p className="title">connect your accounts</p>
                <p>
                    Connect these accounts and unlock special Discord integrations
                </p>
                <div className="connection--row">
                    <div className="yt">
                        <YouTubeIcon />
                    </div>
                    <div className="rd">
                        <RedditIcon/>
                    </div>
                    <div className="fb">
                        <FacebookIcon/>
                    </div>
                    <div className="tw">
                        <TwitterIcon/>
                    </div>
                    <div className="gh">
                        <GitHubIcon/>
                    </div>
                </div>
            </div>
            <div className="close--setting--connection" onClick={()=>setSettings(false)}>
            <HighlightOffIcon/>
        </div>
        </div>
    )
}

export default Connections
