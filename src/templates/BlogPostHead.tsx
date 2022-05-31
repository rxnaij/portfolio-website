import React from 'react'
import { wrapper, content, categoryClass } from './BlogPostHead.module.scss'
import { CalendarFill } from 'react-bootstrap-icons'

interface BlogPostHeadProps {
    title: string
    subtitle: string
    datePublished: string
    category: string
}

/* Head of the case study, with intro content */
const BlogPostHead = ({
    title,
    subtitle,
    datePublished,
    category,
}: BlogPostHeadProps) => (
    <header className={wrapper}>
        <div className={content}>
            <span className={categoryClass}>{category}</span>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <p style={{ '--date-color': '#AFB3B2' } as React.CSSProperties}>
                <CalendarFill size={16} fill="var(--date-color)" />
                Published {datePublished}
            </p>
        </div>
    </header>
)

export default BlogPostHead