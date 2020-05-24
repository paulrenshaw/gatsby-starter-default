import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const headerStyle = {
  background: `rebeccapurple`,
  marginBottom: `1.45rem`,
}

const navStyle = {
  margin: `0 auto`,
  maxWidth: 960,
  padding: `1.45rem 1.0875rem`,
}

const navLinkStyle = {
  color: `white`,
  marginRight: '1em',
  textDecoration: `none`,
}

const NavLink = ({ style, text, to }) => (
  <Link to={to} style={{...navLinkStyle, ...style}}>
    {text}
  </Link>
)

const Header = ({ siteTitle }) => (
  <header style={headerStyle}>
    <nav style={navStyle}>
      <NavLink to="/" text={siteTitle} style={{ fontSize: '1.3em', fontWeight: 'bold' }} />
      <NavLink to="/" text="Home" />
      <NavLink to="/typescript" text="TypeScript" />
      <NavLink to="/404" text="404" />
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
