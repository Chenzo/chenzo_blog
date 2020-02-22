import { Link } from "gatsby"
// import PropTypes from "prop-types"

import React from "react"
import Avatar from "./avatar"

import headerStyles from "./header.module.scss"

/* const Header = ({ siteTitle, isBlogPost }) => (
  <header className={`${headerStyles.head} dS`}>
    <div className={`${headerStyles.imageholder} torn`} />
    <h1 className="dropshadow_effect_1"><Link to="/">MR. CHENZO</Link></h1>
    <h3 className="windlass">{siteTitle}</h3>
  </header>
)


export default Header
 */

export default ({ siteTitle, isBlogPost }) => {

  let returnedHeader = (
    <header className={`${headerStyles.head} dS`}>
      <div className={`${headerStyles.imageholder} torn`} />
      {/* <h1 className="dropshadow_effect_1"><Link to="/">MR. CHENZO</Link></h1> */}
      <h1 className="windlass">{siteTitle}</h1>
      <div className={`${headerStyles.avatar_holder}`}>
        <Avatar width="120" />
      </div>
    </header>
  )

  if (isBlogPost === "true") {
    returnedHeader = (
      <header className={`${headerStyles.bloghead} dS`}>
        <div className={`${headerStyles.imageholder} torn`} />
        {/* <h1 className="dropshadow_effect_1"><Link to="/">MR. CHENZO</Link></h1> */}
        <h1 className="windlass">{siteTitle}</h1>
        {/* <div className={`${headerStyles.avatar_holder}`}>
          <Link to="/">
            <Avatar width="100" />
          </Link>
        </div> */}
        
      </header>
    )
  } 

  return (returnedHeader)

}