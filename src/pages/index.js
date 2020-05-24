import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../layouts/default"
import Astronaut from "../components/images/astronaut"
import SEO from "../components/utils/seo"

const IndexPage = () => {
  
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      
      <h1>{data.site.siteMetadata.title}</h1>
      
      <h2>Hi people!</h2>
      <p>Welcome to the Home page of your new Gatsby site.</p>
      
      <h2>TypeScript</h2>
      <p>Gatsby now has native support for TypeScript. Visit the <Link to="/typescript">TypeScript page</Link> for more info.</p>
      
      <h2>404 Page</h2>
      <p>When visitors try to navigate to a page that doesn't exist on your built site, they will see this <Link to="/404">404 page</Link>.</p>
      
      <p>Now go build something great!</p>
      
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Astronaut />
      </div>
    </Layout>
  )
}

export default IndexPage
