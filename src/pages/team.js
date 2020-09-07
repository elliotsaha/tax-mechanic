import React from 'react'
import PanelOne from "../components/team/PanelOne"
import PanelTwo from "../components/team/PanelTwo"
import PanelThree from "../components/team/PanelThree"
import Layout from "../components/layout"
import SEO from "../components/seo"
export default function team() {
    return (
        <Layout>
            <SEO title="Meet The Team" />
            <PanelOne />
            <PanelTwo />
        </Layout>
    )
}
