import React, { useState } from 'react'

import { generateSlugFromTitle } from '../slugUtil'
import { ChevronCompactUp, ChevronCompactDown } from 'react-bootstrap-icons'

import { tocClass, iconClass, activeLinkClass, labelClass } from './TableOfContents.module.scss'
import { exampleData } from '../exampleData'
import { UnorderedListNode, UnorderedListNodeProps } from '../../components/lists/UnorderedListNode'
import { HeadingNode } from '../../components/lists/HeadingUtils'

interface TableOfContentsProps extends UnorderedListNodeProps {
    headings: Array<HeadingNode>
}

const TableOfContents = ({ headings }: TableOfContentsProps) => {
    const [isOpen, setOpen] = useState(false)
    return (
        <nav className={tocClass} onClick={() => setOpen(!isOpen)}>
            <div className={labelClass}>
                <div>Table of Contents</div>
                <div>
                    { isOpen 
                        ? <ChevronCompactUp className={iconClass} aria-label="Close section navigation" /> 
                        : <ChevronCompactDown className={iconClass} aria-label="Open section navigation" /> 
                    }
                </div>
            </div>
            { isOpen && <UnorderedListNode children={headings} /> }
        </nav>
    )
}

export default TableOfContents
