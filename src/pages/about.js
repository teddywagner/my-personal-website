import * as React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>Hi there... More stuff about me...</p>
        </Layout>
    )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage