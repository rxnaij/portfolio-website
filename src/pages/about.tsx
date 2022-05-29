import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'

import Stack from '../components/stack/Stack'
import Button from '../components/button/Button'
import { Github, Behance, Globe, Controller, CloudMoonFill, FileMusicFill } from 'react-bootstrap-icons'
import { wrapper } from './about.module.scss'

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

            <section>
                <aside>

                    <Stack asList={true} flexDirection="column" gap="sm" className="unstyled-list">
                        <li><Github size={24} style={{ display: 'inline-block', marginRight: 8 }} /><a href="">GitHub</a></li>
                        <li><Behance size={24} style={{ display: 'inline-block', marginRight: 8 }} /><a href="">Behance</a></li>
                        <li><Controller size={24} style={{ display: 'inline-block', marginRight: 8 }} /><a href="https://kind-lumiere-cbb8a1.netlify.app/">Super Save Slot (my gaming blog!)</a></li>
                    </Stack>
                    <div>
                        <h4><Controller size={24} style={{ display: 'inline-block' }} /> Now playing</h4>
                        <ul className="unstyled-list">
                            <li>Dark Souls III</li>
                            <li>Persona 5</li>
                            <li>God of War (2018)</li>
                        </ul>
                    </div>
                    <div>
                        <h4><CloudMoonFill size={24} style={{ display: 'inline-block' }} /> On deck</h4>
                        <ul className="unstyled-list">
                            <li>Metroid Dread</li>
                            <li>Dragon Quest XI: Echoes of an Elusive Age</li>
                            <li>Persona 5 Strikers</li>
                        </ul>
                    </div>
                    <div>
                        <h4><FileMusicFill size={24} style={{ display: 'inline-block' }} /> Music</h4>
                        <p>
                            In <strong>love</strong> with <a href="https://open.spotify.com/album/4pJT0WKggr4xk149X8A6KC?si=_8sWFb-4Tqm4iajYh3Yu2g">Persona 5's soundtrack</a>, and trying to learn its songs on guitar!
                        </p>
                    </div>
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
