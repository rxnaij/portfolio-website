import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import classNames from 'classnames'
import { Behance, Github } from 'react-bootstrap-icons'
import { useThemeState } from '../../hooks/ThemeContext.ts'

import Button from '../button/Button'
import Stack from '../stack/Stack'
import Flipcard from '../flipcard/Flipcard'
import Icon from '../icon/Icon'

import githubIcon from '../../images/icons/github-32.png'
import behanceIcon from '../../images/icons/behance-32.png'
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
            <div>
                <h1>Hey! Welcome to richardblu.com.</h1>
                <Stack justifyContent="space-between">
                    <p><em>{getSubtitle()}</em></p>
                    <p><em>today's date: December 12, 2021</em></p>
                </Stack>
            </div>
            <Stack flexDirection="row">
                <Stack gap="2xl" paddingY="2xl" flexDirection="column">
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
                    <Stack gap="base">
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
                    </Stack>
                </Stack>
                <div>
                    <h2>Across the internet</h2>
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
                    <h2>Current Status</h2>
                    <p>I'm open to full-time and freelance opportunities!</p>
                </div>
            </Stack>
        </section>  
    )
}

export default IntroSection