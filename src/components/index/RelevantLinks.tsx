import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Behance, Github, JournalText } from 'react-bootstrap-icons'
import { wrapper, content, linkWrapper, iconWrapper, labelWrapper } from './RelevantLinks.module.scss'

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
            <h3>Find me elsewhere</h3>
            <ul 
                className={content}
            >
                <Link href="data.contentfulAsset.file.url" icon={JournalText} label="Resume" />
                <Link href="https://github.com/rxnaij" icon={Github} label="GitHub" />
                <Link href="https://be.net/richardbludesign" icon={Behance} label="Behance" />
            </ul>
        </section>
    )
}

const Link = ({ href, icon, label }) => {
    const Icon = icon
    return(
        <li>
            <a 
                className={linkWrapper} 
                href={href}
                style={{ 
                    '--button-color': '#96B3AC',
                    '--label-size': `${14 / 16}rem`,
                } as React.CSSProperties}
            >
                <div className={iconWrapper}>
                    <Icon size={24} color="var(--button-color)" />
                </div>
                <div className={labelWrapper}>
                    {label}
                </div>
            </a>
        </li>
    )
}

export default RelevantLinks