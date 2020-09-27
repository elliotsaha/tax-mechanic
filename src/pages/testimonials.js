import React from "react"
import PanelOne from "../components/testimonials/PanelOne"
import PanelTwo from "../components/testimonials/PanelTwo"
import Layout from "../components/layout"
import SEO from "../components/seo"
export default function testimonials() {
  return (
    <Layout>
      <SEO title="Testimonials" />
      <PanelOne />
      <PanelTwo />
    </Layout>
  )
}
