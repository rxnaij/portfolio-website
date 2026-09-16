import React from 'react'
import styles from './typography.module.scss'

const { titleWrapper } = styles

interface TitleProps {
    title: string
    level: 1 | 2 | 3
    subtitle?: string
}

export const Title = ({ title, level, subtitle }: TitleProps) => {
    const Heading = `h${level}` as 'h1' | 'h2' | 'h3'
    return(
        <div className={titleWrapper}>
            <Heading>{ title }</Heading>
            { subtitle && <p>{subtitle}</p> }
            <div></div>
        </div>
    )
}
