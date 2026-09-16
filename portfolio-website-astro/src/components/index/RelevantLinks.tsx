import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Behance, Github, JournalText } from 'react-bootstrap-icons'
import { wrapper, content, linkWrapper, linkTitle } from './RelevantLinks.module.scss'
import { Title } from '../typography/typography'

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
            <Title 
                title="Across the world wide web"
                level={2}
            />
            <ul className={content}>
                <Link 
                    href={data.contentfulAsset.file.url} 
                    icon={JournalText} 
                    label="Resume" 
                    description="My experience." 
                />
                <Link 
                    href="https://github.com/rxnaij" 
                    icon={Github} 
                    label="GitHub" 
                    description="Code projects." 
                />
                <Link 
                    href="https://be.net/richardbludesign" 
                    icon={Behance} 
                    label="Behance" 
                    description="UI and visual design portfolio." 
                />
            </ul>
        </section>
    )
}

const Link = ({ href, icon, label, description }) => {
    const Icon = icon
    return(
        <li className={linkWrapper}>
            <a href={href} className={linkTitle}>
                {label}<Icon size={24} />
            </a>
            <p>{ description }</p>
        </li>
    )
}

export default RelevantLinks