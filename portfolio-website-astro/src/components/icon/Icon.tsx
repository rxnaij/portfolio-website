import React from 'react'
import { iconClass } from './Icon.module.scss'

interface IconProps {
    src: string
    alt: string
}

const Icon = ({ src, alt }) => {
    return (
        <div className={iconClass}>
            <img src={src} alt={alt} />
        </div>
    )
}

export default Icon
