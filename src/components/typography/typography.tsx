import React from 'react'
import { titleWrapper } from './typography.module.scss'

interface TitleProps {
    title: string
    level: 1 | 2 | 3
    subtitle?: string
}

export const Title = ({ title, level, subtitle }: TitleProps) => {
    const Heading = "h" + level
    return(
        <div className={titleWrapper}>
            <Heading>{ title }</Heading>
            { subtitle && <p>{subtitle}</p> }
            <div></div>
        </div>
    )
}
