import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Button from '../button/Button'
import Stack from '../stack/Stack'
import { Behance, Github, Envelope, JournalText } from 'react-bootstrap-icons'

import { ctaButton } from './Intro.module.scss'

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

    const [subtitle, setSubtitle] = React.useState(getSubtitle())

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
                    <h1>Welcome to richardblu.com!</h1>
                    <Stack flexDirection="column" paddingY="base">
                        <small className="subtle"><em>{subtitle}</em></small>
                        <small className="subtle"><strong><em>today's date: December 12, 2021</em></strong></small>
                    </Stack>
                </Stack>
                <Stack alignSelf="stretch" flexDirection="row" gap="xl" justifyContent="space-between" >
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
                    <Stack gap="lg" flexDirection="column" alignItems="stretch" alignSelf="center">
                        <Button
                            className={ctaButton}
                            renderContainer={(props) => (
                                <Link to="/contact" {...props}>
                                    <Envelope size={24} />
                                    <div>
                                        <span>Get in touch!</span>
                                        <small>My mailbox needs some love.</small>
                                    </div>
                                </Link>
                            )}
                        />
                        <Button 
                            className={ctaButton}
                            renderContainer={(props) => (
                                <a href={data.contentfulAsset.file.url}  {...props}>
                                    <JournalText size={24} />
                                    <div>
                                        <span>View résumé</span>
                                        <small>I have many skills, you know.</small>
                                    </div>
                                </a>
                            )}
                        />
                    </Stack>
                </Stack>
            </Stack>
            
        </section>  
    )
}

export default IntroSection