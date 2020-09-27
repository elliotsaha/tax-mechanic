import React from "react"
import { Link } from "gatsby"
import PanelOne from "../components/home/PanelOne"
import PanelTwo from "../components/home/PanelTwo"
import PanelThree from "../components/home/PanelThree"
import PanelFour from "../components/home/PanelFour"
import PanelFive from "../components/home/PanelFive"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Homepage" />
    <PanelOne />
    <PanelTwo />
    <PanelThree />
    <PanelFour />
    <PanelFive />
  </Layout>
)

export default IndexPage
