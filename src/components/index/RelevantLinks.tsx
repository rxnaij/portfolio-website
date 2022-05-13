import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Behance, Github, Envelope, JournalText } from 'react-bootstrap-icons'
import { wrapper, content, linkWrapper, iconWrapper } from './RelevantLinks.module.scss'

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
                {/* <li>
                    <a href="https://github.com/rxnaij">
                        <Github size={32} /> GitHub
                    </a>
                </li> */}
                <Link href="https://github.com/rxnaij" icon={Github} label="GitHub" />
                <Link href="https://be.net/richardbludesign" icon={Behance} label="Behance" />
                <Link href="data.contentfulAsset.file.url" icon={JournalText} label="Resume" />
                {/* <li>
                    <a href="https://be.net/richardbludesign">
                        <Behance size={32}/> Behance
                    </a>
                </li>
                <li>
                    <a href={data.contentfulAsset.file.url}>
                        <JournalText size={32} /> Resume
                    </a>
                </li> */}
            </ul>
        </section>
    )
}

const Link = ({ href, icon, label }) => {
    const Icon = icon
    return(
        <li>
            <a className={linkWrapper} href={href}>
                <div className={iconWrapper}>
                    <Icon size={32} />
                </div>
                <span>{label}</span>
            </a>
        </li>
    )
}

export default RelevantLinks