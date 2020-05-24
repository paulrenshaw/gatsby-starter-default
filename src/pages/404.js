import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts/default"
import SEO from "../components/utils/seo"

const HomeLink = ({ text }) => (
  <Link to="/" >{ text }</Link>
)

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <p><HomeLink text="Go back to the Home page." /></p>
  </Layout>
)

export default NotFoundPage
