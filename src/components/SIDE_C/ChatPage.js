import React from 'react'
import ChatPageHeader from './ChatPageHeader'
import ChatText from './ChatText'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import './ChatPage.css'

function ChatPage({setShowList,showList,setPinnedContent}) {
    return (
        <div className="chat--page">
            <ChatPageHeader setShowList={setShowList} showList={showList} setPinnedContent={setPinnedContent} />
            <div className="chat--page--scroll">
                <ChatText />
            </div>
            <div className="chat--pageInput">
                <AddCircleIcon/>
                <input placeholder='Type your message' type='text' />
                <CardGiftcardIcon />
                <GifIcon />
                <InsertEmoticonIcon/>
            </div>
            
        </div>
    )
}

export default ChatPage
