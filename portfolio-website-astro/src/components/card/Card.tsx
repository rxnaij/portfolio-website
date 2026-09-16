import React from 'react'
import styles from './Card.module.scss'

const { card } = styles

interface CardProps {
    children: React.ReactNode
}

const Card = ({ children }: CardProps) => {
    return (
        <aside className={card}>
            { children }
        </aside>
    )
}

export default Card