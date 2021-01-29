import React from 'react'
import './Pinned.css'
import PinnedText from './PinnedText'

function Pinned() {
    return (
        <div className="pinned">
            <div className="pinned--content">
                <div className="pinned--header">
                    <h3>pinned messages</h3>
                </div>
                <div className="pinned--body">
                    <PinnedText/>
                    <PinnedText/>
                    <PinnedText/>
                    <PinnedText />
                    {/* <ChatText/> */}
                </div>
            </div>
        </div>
    )
}

export default Pinned
