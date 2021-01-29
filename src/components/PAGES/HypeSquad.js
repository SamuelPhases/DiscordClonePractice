import React from 'react'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import './HypeSquad.css'

function HypeSquad({setSettings}) {
    return (
        <div className='hypesquad--container'>
            <h1>Join the HypeSquad!</h1>
            <p>You're excited about Discord Clone. I'm exicted that you're excited about Discord Clone.</p>
            <p>Let's get other people excited about Discord Clone, together.</p>
            <div className="hype--row">
                <p>Ready to rep Discord Clone?</p>
                <button>Join HypeSquad</button>
            </div>
            <p className="hype--text">
                Wumpus' lawyers wanted us to let you know that joining the HypeSquad will sign you up for our newsletter.
            </p>
            <div className="perks">
                <h4>perks of being a hype</h4>
                <div className="row no--border">
                    <div className="row--img">
                    <img src="https://discord.com/assets/c970061def69b8226617841ca3089219.svg" alt="Super-secret-newsletter" />
                    </div>
                    <div className="row--text">
                        <h2>Super secret  newsletter</h2>
                        <p>
                            We regularly send out newsletter with contests, giveaways, and more
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="row--img">
                    <img src="https://discord.com/assets/46b24114f7276738329be3ae84e22da4.svg" alt="Hype-Profile-Badge" />
                    </div>
                    <div className="row--text">
                        <h2>hype profile badge</h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="row--img">
                    <img src="https://discord.com/assets/b13ade832d7f19e30c5d2452b6cbdd53.svg" alt="Squad-Challenges" />
                    </div>
                    <div className="row--text">
                        <h2>squad challenges</h2>
                        <p> Natus incidunt reiciendis earum dolorem repudiandae, soluta expedita atque consequatur fugit numquam.
                        </p>
                    </div>
                </div>
            </div>
            <div className="hype--notice">
                <p>Interested in repping the HypeSquad at a local event? Coordinating an event of your own? <span>Apply here!</span></p>
            </div>
            <div className="close--setting--hypesquad" onClick={()=>setSettings(false)}>
            <HighlightOffIcon/>
        </div>
        </div>
    )
}

export default HypeSquad
