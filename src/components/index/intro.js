import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Button from '../button/Button'
import { Behance, Github, Envelope, JournalText } from 'react-bootstrap-icons'

import { wrapper, title, ctaButton } from './Intro.module.scss'

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
    query Intro {
        markdownRemark(frontmatter: {title: {eq: "Intro"}}) {
          html
        }
      }
    `)

    const [subtitle, setSubtitle] = React.useState(getSubtitle())

    return(
        <section id="intro" className={wrapper}>
            <div className={title}>
                <h1>Welcome to richardblu.com!</h1>
                <small>April 27, 2022</small>
                <small>enjoy your stay</small>
            </div>
            <div className="longform-text" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
            <Button
                renderContainer={(props) => (
                    <Link to="/contact" {...props}>
                        <Envelope size={24} />
                        <div>
                            <span>Get in touch!</span>
                        </div>
                    </Link>
                )}
            />
        </section>
    )
}

export default IntroSection