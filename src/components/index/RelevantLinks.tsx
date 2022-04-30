import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Behance, Github, Envelope, JournalText } from 'react-bootstrap-icons'
import { wrapper, content } from './RelevantLinks.module.scss'

const RelevantLinks = () => {
    const data = useStaticQuery(graphql`
    query {
        contentfulAsset(title: {eq: "Richard Lu Resume"}) {
          file {
            url
          }
        }
    }
    `)

    return (
        <section id="relevant-links" className={wrapper}>
            <h3>Relevant links</h3>
            <ul className={content}>
                <li>
                    <a href="https://github.com/rxnaij">
                        <Github size={32} /> GitHub
                    </a>
                </li>
                <li>
                    <a href="https://be.net/richardbludesign">
                        <Behance size={32}/> Behance
                    </a>
                </li>
                <li>
                    <a href={data.contentfulAsset.file.url}>
                        <JournalText size={32} /> Resume
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default RelevantLinks