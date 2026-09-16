import React from 'react'
import styles from './Icon.module.scss'

const { iconClass } = styles

interface IconProps {
    src: string
    alt: string
}

const Icon = ({ src, alt }: IconProps) => {
    return (
        <div className={iconClass}>
            <img src={src} alt={alt} />
        </div>
    )
}

export default Icon
