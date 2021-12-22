import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import classNames from 'classnames'
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
            <h1>Hey! Welcome to richardblu.com.</h1>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <p>{getSubtitle()}</p>
                <p>today's date: December 12, 2021</p>
            </div>
            <div>
                <p>
                    Hey, I'm Richard! I'm a product designer, developer, and human being.
                </p>
                <p>
                    As a designer, I'm on a quest to create technology that's compassionate, inclusive, delightful, and grounded in real human needs. After all, the last thing we need is more tech-related stress, right?
                </p>
                <p>
                    Currently, I'm interested in designing for the web, and building bridges between designs and code. Check out some of the cool projects I made (and likely coded) below!
                </p>
                <Stack gap="base">
                    <Button>
                        <AnchorLink to="#contact">
                            Get in touch!
                        </AnchorLink>
                    </Button>
                    <Button variant="outline">
                        <a href={data.contentfulAsset.file.url}>View résumé</a>
                    </Button>
                </Stack>
            </div>
            <div>
                <h2>Across the internet</h2>
                <ul>
                    <li>
                        <a href="https://github.com/rxnaij" className="secondary-link">
                            <Icon src={githubIcon} alt="GitHub logo" />
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a href="https://be.net/richardbludesign" className="secondary-link">
                            <Icon src={behanceIcon} alt="Behance logo" />
                            Behance
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <h2>Current Status</h2>
                <p>I'm open to full-time and freelance opportunities!</p>
            </div>
        </section>  
    )
}

export default IntroSection