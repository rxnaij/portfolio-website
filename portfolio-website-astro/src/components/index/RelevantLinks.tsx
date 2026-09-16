import React from 'react'
import type { Icon as IconType } from 'react-bootstrap-icons'
import { Behance, Github, JournalText } from 'react-bootstrap-icons'
import styles from './RelevantLinks.module.scss'

const { wrapper, content, linkWrapper, linkTitle } = styles
import { Title } from '../typography/typography'

interface RelevantLinksProps {
    resumeUrl: string
}

const RelevantLinks = ({ resumeUrl }: RelevantLinksProps) => {
    return (
        <section id="relevant-links" className={wrapper}>
            <Title 
                title="Across the world wide web"
                level={2}
            />
            <ul className={content}>
                <Link
                    href={resumeUrl}
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

interface LinkProps {
    href: string
    icon: IconType
    label: string
    description: string
}

const Link = ({ href, icon, label, description }: LinkProps) => {
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