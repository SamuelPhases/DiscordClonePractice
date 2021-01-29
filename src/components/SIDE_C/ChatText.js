import React from 'react'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import AddIcon from '@material-ui/icons/Add';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import './ChatText.css'

function ChatText() {
    return (
        <div className="chat--text">
            <div className="chat--text--dp">
                <img src="https://images.unsplash.com/photo-1540375849459-0d009b2f80d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
            </div>
            <div className="chat--text--content">
                <div className='chat--text--details'>
                    <p>Claire</p>
                    <span>10 / 25 / 2020</span>
                </div>
                <div className='t--span'>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, molestiae dignissimos odit deleniti saepe.</p>
                    <p>10:05 AM</p>
                </div>

            </div>
            <div className="chat--text--hover">
                <div className='chat--text--hover--split'>
                    <div className="chat--text--icon">
                        <InsertEmoticonIcon />
                    </div>
                    <AddIcon/>
                </div>
                <MoreHorizIcon/>
            </div>
            </div>
    )
}

export default ChatText
