import React from 'react'
import CloseSharpIcon from '@material-ui/icons/CloseSharp';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';


import './ChangeLog.css'

function ChangeLog({setSettings}) {
    return (
        <div className='change--log'>
            <div className="change--log--container">
            <div className="change--log--header">
                <div>
                    <h2>what's new</h2>
                    <p>September 29, 2020</p>
                    </div>
                    <div onClick={()=>setSettings(false)}>
                <CloseSharpIcon/>
                    </div>
            </div>
                <div className="change--scroll">
                    
                <div className="change--log--box">
                <img src="https://cdn.discordapp.com/attachments/713208534786899972/760561253504254052/1_QIilNpi84ZrJad4K5If90A.png" alt="change--log--image"/>
            </div>
            <div className="change--log--content">
            
                <div className="change--log--content--header">
                    <h2>news features</h2>
                    <div className="line"></div>
                        </div>
                        

                <div className="change--log--content--box">
                    <ul>
                        <li>
                            <strong>
                                        You can now designate your server as a "Community Server."
                                        </strong>  &nbsp; 
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dolore, sint vitae labore dolores at esse. Iusto, fugiat. Corporis, deleniti deserunt. Quas exercitationem minima dolores? Temporibus, excepturi. Quidem vel aliquam at accusamus necessitatibus quisquam odio suscipit aliquid esse, asperiores aut, distinctio aspernatur magnam rem ipsam odit, dolore quis possimus libero.
                             
                        </li>
                                <li>
                                    <strong>
                                        1.Welcome Screen: 
                                        
                                    </strong>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti illum fuga quo dicta. Excepturi nam doloremque pariatur vel laudantium ratione consequatur quisquam maiores obcaecati magni culpa, numquam reiciendis qui blanditiis.
                                    
                        </li>
                                <li>
                                    <strong>

                                    2.Announcement Channels: 
                                    </strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, beatae temporibus sed nobis animi quasi ipsam soluta voluptas voluptates fuga quo dolor consequuntur quae cupiditate velit numquam. Reprehenderit, libero accusantium.
                        </li>
                                <li>
                                    <strong>3.Discovery:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nisi rerum eligendi, reiciendis deserunt in possimus veniam similique quidem eum, beatae velit sunt! Cum provident, ad vitae sed at odio?
                        </li>
                                <li>
                                    <strong>4.Direct Community Updates from us:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis neque sint cumque nihil, eius quia! Libero, minima asperiores. Ratione, animi!
                        </li>
                    </ul>
                </div>
                <div className="change--log--content--header header--gold">
                    <h2>fixes and  updates</h2>
                    <div className="line"></div>
                </div>

                <div className="change--log--content--box">
                    <ul>
                        <li>
                            <strong>
                                Verification Applications are now open.</strong>   Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dolore, sint vitae labore dolores at esse. Iusto, fugiat. Corporis, deleniti deserunt. Quas exercitationem minima dolores? Temporibus, excepturi. Quidem vel aliquam at accusamus necessitatibus quisquam odio suscipit aliquid esse, asperiores aut, distinctio aspernatur magnam rem ipsam odit, dolore quis possimus libero.
                             
                        </li>
                                <li>
                                    <strong>
                                        Partner Program applications are now open.
                                        </strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti illum fuga quo dicta. Excepturi nam doloremque pariatur vel laudantium ratione consequatur quisquam maiores obcaecati magni culpa, numquam reiciendis qui blanditiis.
                        </li>

                                
                               
                    </ul>
                </div>
                <div className="change--log--content--header header--red">
                    <h2>US election day is november 3, 2020</h2>
                    <div className="line"></div>
                </div>

                <div className="change--log--content--box">
                    <ul>
                        <li>
                                    <strong>
                                        Check your voter  registration status.
                            </strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dolore, sint vitae labore dolores at esse. Iusto, fugiat. Corporis, deleniti deserunt. Quas exercitationem minima dolores? Temporibus, excepturi. Quidem vel aliquam at accusamus necessitatibus quisquam odio suscipit aliquid esse, asperiores aut, distinctio aspernatur magnam rem ipsam odit, dolore quis possimus <span>
                                    libero</span>.
                             
                        </li>
                                
                    </ul>
                </div>
            </div>
            </div>
                
                <div className="change--log--social--links">
                    <TwitterIcon />
                    <FacebookIcon />
                    <InstagramIcon />
                    <p>Follow me for more updates!</p>
            </div>
            </div>
        </div>
    )
}

export default ChangeLog
