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
            <h2>Relevant links</h2>
            <ul className={content}>
                <li>
                    <a href="https://github.com/rxnaij">
                        <Github size={16} /> GitHub
                    </a>
                </li>
                <li>
                    <a href="https://be.net/richardbludesign">
                        <Behance size={16}/> Behance
                    </a>
                </li>
                <li>
                    <a href={data.contentfulAsset.file.url}>
                        <JournalText size={16} /> Resume
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default RelevantLinks