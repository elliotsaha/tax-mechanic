import React from 'react'
import PanelOne from '../components/services/PanelOne'
import PanelTwo from '../components/services/PanelTwo'
import Layout from '../components/layout'
import SEO from "../components/seo"
export default function services() {
    return (
        <Layout>
            <SEO title="Services" />
            <PanelOne />
            <PanelTwo />
        </Layout>
    )
}
