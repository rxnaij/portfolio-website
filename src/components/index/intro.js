import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import classNames from 'classnames'
import { Behance, Github } from 'react-bootstrap-icons'
import { useThemeState } from '../../hooks/ThemeContext.ts'

import Button from '../button/Button'
import Stack from '../stack/Stack'
import Flipcard from '../flipcard/Flipcard'

import profileImage from '../../images/cursor-face.jpg'

const today = new Date().toString()
const getSubtitle = () => {
    const subtitles = [
        'enjoy your stay...',
        'take your time...',
        'happy web-surfing...',
        `how's it going?`,
        `take it easy...`
    ]
    return subtitles[Math.floor(Math.random(0, subtitles.length - 1))]
}

const IntroSection = () => {
    const data = useStaticQuery(graphql`
    query {
        contentfulAsset(
            title: {
            eq: "Richard Lu Resume"
            }
        ) {
            file {
                url
            }
        }
    }
    `)

    const { theme } = useThemeState()

    return(
        <section id="intro">
            <Stack flexDirection="column" gap="2xl">
                <Stack 
                    flexDirection="column" 
                    alignItems="stretch" 
                    alignSelf="stretch"
                    style={{
                        borderBottom: '1px solid hsla(168, 48%, 48%, 0.2)'
                    }}
                >
                    <h1>Welcome to richardblu.com</h1>
                    <Stack justifyContent="space-between" alignSelf="stretch" paddingY="base">
                        <p><em>{getSubtitle()}</em></p>
                        <p><em>today's date: December 12, 2021</em></p>
                    </Stack>
                </Stack>
                <Stack flexDirection="row" gap="xl">
                    <Stack gap="2xl" flexDirection="column">
                        <div className="longform-text">
                            <p>
                                Hey, I'm Richard! I'm a product designer, developer, and human being.
                            </p>
                            <p>
                                As a designer, I'm on a quest to create technology that's compassionate, inclusive, delightful, and grounded in real human needs. After all, the last thing we need is more tech-related stress, right?
                            </p>
                            <p>
                                Currently, I'm interested in designing for the web, and building bridges between designs and code. Check out some of the cool projects I made (and likely coded) below!
                            </p>
                        </div>
                        {/* <Stack gap="base">
                            <Button
                                renderContainer={(props) => (
                                    <AnchorLink to="/contact" {...props}>
                                        Get in touch!
                                    </AnchorLink>
                                )}
                                />
                            <Button 
                                variant="outline"
                                renderContainer={(props) => (
                                    <a href={data.contentfulAsset.file.url} {...props}>View résumé</a>
                                    )}
                                    >
                            </Button>
                        </Stack> */}
                    </Stack>
                    <div>
                        {/* <h4>Across the internet</h4>
                        <ul className="unstyled-list">
                            <li>
                                <Button variant="secondary" renderContainer={(props) => (
                                    <a href="https://github.com/rxnaij" {...props}>
                                        <Stack gap="sm">
                                            <Github size={20} />
                                            <span>GitHub</span>
                                        </Stack>
                                    </a>
                                )} />
                            </li>
                            <li>
                                <Button variant="secondary" renderContainer={(props) => (
                                    <a href="https://be.net/richardbludesign" {...props}>
                                        <Stack gap="sm">
                                            <Behance size={20} />
                                            <span>
                                                Behance
                                            </span>
                                        </Stack>
                                    </a>
                                )} />
                            </li>
                        </ul>
                        <h4>Current Status</h4>
                        <p>I'm open to full-time and freelance opportunities!</p> */}
                    </div>
                </Stack>
            </Stack>
            
        </section>  
    )
}

export default IntroSection