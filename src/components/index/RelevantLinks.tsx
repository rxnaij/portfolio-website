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
            <ul className={content}>
                <Link href="https://github.com/rxnaij" icon={Github} label="GitHub" />
                <Link href="https://be.net/richardbludesign" icon={Behance} label="Behance" />
                <Link href="data.contentfulAsset.file.url" icon={JournalText} label="Resume" />
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
                    <Icon size={32} color="#40B59E" />
                </div>
                <span>{label}</span>
            </a>
        </li>
    )
}

export default RelevantLinks