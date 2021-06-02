import React from 'react'
import { card } from './Card.module.scss'

const Card = ({ children }) => {
    return (
        <aside className={card}>
            { children }
        </aside>
    )
}

export default Card