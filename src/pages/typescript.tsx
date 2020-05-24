// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps } from "gatsby"

import Layout from "../layouts/default"
import SEO from "../components/utils/seo"

const TypeScript = (props: PageProps) => {
  return (
    <Layout>
      <SEO title="TypeScript" />
      <h1>TypeScript</h1>
      <p>The source for this page is written using TypeScript in a .tsx file, which Gatsby now supports natively.</p>
      <p>If you look at src/pages/typescript.tsx you'll notice the type annotation for props, which you won't see in .js files.</p>
    </Layout>
  )
}

export default TypeScript
