import React from 'react'

// import Button from '../button/Button'
// import { Envelope } from 'react-bootstrap-icons'

import styles from './Intro.module.scss'

const { wrapper, title, introContent } = styles

const today = new Date().toDateString()
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

    // const data = useStaticQuery(graphql`
    // query Intro {
    //     markdownRemark(frontmatter: {title: {eq: "Intro"}}) {
    //       html
    //     }
    //   }
    // `)

    const [subtitle, setSubtitle] = React.useState(getSubtitle())

    return(
        <section id="intro" className={wrapper}>
            <div className={title}>
                <h1>Welcome to richardblu.com!</h1>
                <span>Today's date: {today} • </span><span>{subtitle}</span>
            </div>
            <div 
                className={introContent} 
                // dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} 
            >
                This is where the intro content will go.
            </div>
            {/* <Button
                variant='outline'
                renderContainer={(props) => (
                    <Link to="/contact" {...props}>
                        <span>Get in touch!</span>
                        <Envelope size={20} />
                    </Link>
                )}
            /> */}
        </section>
    )
}

export default IntroSection