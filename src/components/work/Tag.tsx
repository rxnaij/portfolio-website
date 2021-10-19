import React from 'react'
import { tag, activeTag } from './WorkSection.module.scss'
import { XCircleFill } from 'react-bootstrap-icons'

interface TagProps {
    name: string
    active?: boolean
    reset?: boolean
    handleClick: () => void
}

const Tag = ({ name, active, reset, handleClick }: TagProps) => {
    const activeClass = active ? activeTag : ''
    return (
        <div className={`${tag} ${activeClass}`} onClick={handleClick}>
            <span>
                { name }
            </span>
            { (active || reset) && <XCircleFill /> }
        </div>
    )
}

export default Tag