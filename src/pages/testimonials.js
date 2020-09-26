import React from "react"
import PanelOne from "../components/testimonials/PanelOne"
import PanelTwo from "../components/testimonials/PanelTwo"
import Layout from "../components/layout"
export default function testimonials() {
  return (
    <Layout>
      <div>
        <PanelOne />
        <PanelTwo />
      </div>
    </Layout>
  )
}
