import React from 'react'
import { wrapper, content, categoryClass } from './BlogPostHead.module.scss'

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
}) => (
    <header className={wrapper}>
        <div className={content}>

        <span className={categoryClass}>{category}</span>
        <h1>{title}</h1>  
        <p>{subtitle}</p>
        <p style={{ '--date-color': '#C8CCC8' } as React.CSSProperties}>Published {datePublished}</p>
        </div>
    </header>
)

export default BlogPostHead