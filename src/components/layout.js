/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Menu from "./menu"
import "./layout.css"
import 'font-awesome/css/font-awesome.min.css';
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Menu></Menu>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          
        <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
         
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
          <p class="copyright-text"> Follow Me
            </p>
            <ul class="social-icons">
              <li><a class="facebook"  aria-label="Mute volume" href="https://www.facebook.com/"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" aria-label="Mute volume" href="https://www.facebook.com/"><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" aria-label="Mute volume" href="https://www.facebook.com/"><i class="fa fa-instagram"></i></a></li>
              <li><a class="linkedin" aria-label="Mute volume" href="https://www.facebook.com/"><i class="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
