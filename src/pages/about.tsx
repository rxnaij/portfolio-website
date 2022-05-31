import React from 'react'
import { graphql } from 'gatsby'
import cn from 'classnames'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'

import { Github, Behance, Globe, Controller, CloudMoonFill, FileMusicFill } from 'react-bootstrap-icons'
import { wrapper, asideWrapper, asideContent } from './about.module.scss'
const AboutPage = ({ data }) => {
    const { html } = data.markdownRemark

    return (
        <Layout>
            <SEO title="About me" />
            <section className={wrapper}>
                <h1 className="main page-title">About me</h1>
                <div className="main">
                    <div dangerouslySetInnerHTML={{ __html: html }} />
                </div>
            </section>
            <section className={asideWrapper}>
                <aside className={cn("typography", asideContent)}>
                    <h2>Across the internet</h2>
                    <ul>
                        <li><a href="https://github.com/rxnaij">GitHub -- coding stuff</a></li>
                        <li><a href="https://be.net/richardbludesign">Behance -- UI designs</a></li>
                        <li><a href="https://kind-lumiere-cbb8a1.netlify.app/">Super Save Slot (my gaming blog!)</a></li>
                    </ul>
                    <h2>Fun stuff</h2>
                    <h3><Controller size={24} style={{ display: 'inline-block' }} /> Now playing</h3>
                    <ul>
                        <li>Apex Legends</li>
                        <li>Sleeping Dogs: Definitive Edition</li>
                        <li>Pokemon Crystal</li>
                    </ul>
                    <h3><CloudMoonFill size={24} style={{ display: 'inline-block' }} /> On deck</h3>
                    <ul>
                        <li>Metroid Dread</li>
                        <li>Dragon Quest XI: Echoes of an Elusive Age</li>
                        <li>SteamWorld Dig 2 (3DS)</li>
                    </ul>
                    <h3><FileMusicFill size={24} style={{ display: 'inline-block' }} /> Music</h3>
                    <p>
                        In <strong>love</strong> with <a href="https://open.spotify.com/album/4pJT0WKggr4xk149X8A6KC?si=_8sWFb-4Tqm4iajYh3Yu2g">Persona 5's soundtrack</a>, and trying to learn its songs on guitar!
                    </p>
                </aside>
            </section>

        </Layout>
    )
}

export default AboutPage

export const query = graphql`
    query AboutMe {
        markdownRemark(frontmatter: {title: {eq: "About Me"}}) {
            frontmatter {
                title
            }
            html
        } 
    }
`
