import { Link } from "gatsby"
import React from "react"

import Seperator from "./seperator"



import "./footer.scss"


export default () => {


    const returnedFooter = (
        <footer>

           
            <div className="twitterCard">
                <a href="https://twitter.com/1Chenzo" target="_blank" rel="noopener noreferrer">
                    <img src="/images/twitter_icon.jpg" alt="chenzo twitter icon" />
                <h4>Find me on Twitter - Chenzo (@1Chenzo)</h4>
                </a>
            </div>

            <Seperator /> 

            <div className="twitchCard">
                <h4>Watch me sail alone on Twitch:</h4>
                <iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fplayer.twitch.tv%2F%3Fchannel%3Dchenzorama%26autoplay%3Dfalse&amp;url=https%3A%2F%2Fwww.twitch.tv%2Fchenzorama&amp;image=https%3A%2F%2Fstatic-cdn.jtvnw.net%2Fjtv_user_pictures%2Fchenzorama-profile_image-618c00dde0a7945d-300x300.png&amp;key=a19fcc184b9711e1b4764040d3dc5c07&amp;type=text%2Fhtml&amp;schema=twitch" allowFullScreen="" frameBorder="0" height="378" width="620" title="Chenzorama - Twitch" scrolling="auto"></iframe>
            </div>

            {/* <img className="fullbottom" src="/images/twitter_bg.jpg" alt="footer background" /> */}
        </footer>
    )
    
    return (returnedFooter)

}