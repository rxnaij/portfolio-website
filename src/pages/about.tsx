import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'

import Stack from '../components/stack/Stack'
import Button from '../components/button/Button'
import { Github, Behance, Globe, Controller, CloudMoonFill, FileMusicFill } from 'react-bootstrap-icons'

const AboutPage = ({ data }) => {
    const { html } = data.markdownRemark

    return (
        <Layout>
            <SEO title="About me" />
            <section className="longform-text main-and-sidebar-container">
                <h1 className="main">About me</h1>
                <div className="main">
                    <div dangerouslySetInnerHTML={{ __html: html }} />
                </div>
                <aside className="sidebar">
                    <Stack asList={true} flexDirection="column" gap="sm" className="unstyled-list">
                        <li>
                            <Button 
                                icon={Github}
                                variant="outline"
                                renderContainer={props =>
                                    <a href="https://github.com/rxnaij" {...props} />
                                }
                            >
                                GitHub
                            </Button>
                        </li>
                        <li>
                            <Button 
                                icon={Behance}
                                variant="outline"
                                renderContainer={props =>
                                    <a href="https://www.behance.net/richardbludesign" {...props} />
                                }
                            >
                                Behance
                            </Button>
                        </li>
                        <li>
                            <Button
                                icon={Controller}
                                variant="outline"
                                renderContainer={props => <a href="https://kind-lumiere-cbb8a1.netlify.app/" {...props} />}
                            >
                                Super Save Slot (my gaming blog!)
                            </Button>
                        </li>
                    </Stack>
                    <hr className="divider" />
                    <Stack gap="md" flexDirection='column'>
                        <div>
                            <h3>Games I'm playing</h3>
                            <h4><Controller size={24} style={{ display: 'inline-block' }}/> Now playing</h4>
                            <ul className="unstyled-list">
                                <li>Dark Souls III</li>
                                <li>Persona 5</li>
                                <li>God of War (2018)</li>
                            </ul>
                        </div>
                        <div>
                            <h4><CloudMoonFill size={24} style={{ display: 'inline-block' }}/> On deck</h4>
                            <ul className="unstyled-list">
                                <li>Metroid Dread</li>
                                <li>Dragon Quest XI: Echoes of an Elusive Age</li>
                                <li>Persona 5 Strikers</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Music</h3>
                            <p>
                                In <strong>love</strong> with <a href="https://open.spotify.com/album/4pJT0WKggr4xk149X8A6KC?si=_8sWFb-4Tqm4iajYh3Yu2g">Persona 5's soundtrack</a>, and trying to learn its songs on guitar!
                            </p>
                        </div>
                    </Stack>
                </aside>
            </section>
        </Layout>
    )
}

export default AboutPage

export const query = graphql`
    query AboutMe {
        markdownRemark( id: { eq: "0c5efa91-d0ea-55e6-a4f9-7d5d8ad7f25b" } ) {
            frontmatter {
                title
            }
            html
        } 
    }
`
