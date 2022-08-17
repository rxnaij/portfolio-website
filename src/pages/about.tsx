import React from 'react'
import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import cn from 'classnames'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'

import { Github, Behance, Globe, Controller, CloudMoonFill, FileMusicFill } from 'react-bootstrap-icons'
import { wrapper, bioWrapper, photo, asideContent, links, interests, title } from './about.module.scss'
import { Title } from '../components/typography/typography'


const AboutPage = ({ data }) => {
    const { html } = data.markdownRemark

    return (
        <Layout>
            <SEO title="About me" />
            <Layout.Title>
                <h1>About me</h1>
                <p>What's up!</p>
            </Layout.Title>
            <section className={bioWrapper}>
                <div className="main">
                    <div dangerouslySetInnerHTML={{ __html: html }} />
                </div>
                <StaticImage
                    src="../images/profile_image.jpg"
                    alt="I'm standing by the water with an orange mask on."
                    className={photo}
                />
            </section>
            <Layout.WideSection tagName="aside" className={asideContent}>
                <Title
                    title="Across the internet"
                    level={2}
                />
                <div>
                    <h3>Relevant links</h3>
                    <div className={links}>
                        <div>
                            <a className={title} href="https://be.net/richardbludesign">Behance <Behance size={20} /></a>
                            <p>UI and visual design work.</p>
                        </div>
                        <div>
                            <a className={title} href="https://github.com/rxnaij">GitHub <Github size={20} /></a>
                            <p>Code.</p>
                        </div>
                        <div>
                            <a className={title} href="https://kind-lumiere-cbb8a1.netlify.app/">Super Save Slot <Globe size={20} /></a>
                            <p>Video game blog: reviews, thoughts, and critique.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3>Current interests</h3>
                    <div className={interests}>
                        <div>
                            <p className={title}>Now playing <Controller size={20} style={{ display: 'inline-block' }} /></p>
                            <ul>
                                <li>Yakuza: Like a Dragon</li>
                                <li>Fire Emblem Warriors: Three Hopes</li>
                                <li>Metroid Dread</li>
                            </ul>
                        </div>
                        <div>
                            <p className={title}>On deck <CloudMoonFill size={20} style={{ display: 'inline-block' }} /></p>
                            <ul>
                                <li>Live A Live</li>
                                <li>Dragon Quest XI: Echoes of an Elusive Age</li>
                                <li>SteamWorld Dig 2 (3DS)</li>
                            </ul>
                        </div>
                        <div>
                            <p className={title}>Music <FileMusicFill size={20} style={{ display: 'inline-block' }} /></p>
                            <p>
                                In <strong>love</strong> with <a href="https://open.spotify.com/album/4pJT0WKggr4xk149X8A6KC?si=_8sWFb-4Tqm4iajYh3Yu2g">Persona 5's soundtrack</a>, and trying to learn its songs on guitar!
                            </p>
                        </div>
                    </div>
                </div>
            </Layout.WideSection>
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
