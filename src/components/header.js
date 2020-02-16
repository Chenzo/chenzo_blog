import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import headerStyles from "./header.module.scss"

const Header = ({ siteTitle }) => (
  <header className={`${headerStyles.head} dS`}>
    <div className={`${headerStyles.imageholder} torn`} />
    <h1 className="dropshadow_effect_1"><Link to="/">MR. CHENZO</Link></h1>
    <h3 className="windlass">{/* siteTitle */}Musings from the Sea Of Thieves</h3>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
