import React,{useState} from 'react'
import ChatPage from './ChatPage'
import Pinned from './Pinned'
import './SideC.css'

function SideC({setShowList,showList}) {
    const [pinnedContent,setPinnedContent]=useState(false)
    return (
        <>
            <div className={`side--c ${!showList && 'side--c--big'}`}>
                <ChatPage setShowList={setShowList} showList={showList} setPinnedContent={setPinnedContent}/>
            </div>
            {pinnedContent  &&  <Pinned/>}
        </>
    )
}

export default SideC
