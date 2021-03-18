import React, { useState, createContext } from 'react'
import { Link } from 'gatsby'

import { generateSlugFromTitle } from './slugUtil'
import { ChevronCompactUp, ChevronCompactDown } from 'react-bootstrap-icons'

import { tocClass, iconClass, listClass, activeLinkClass, labelClass } from './TableOfContents.module.scss'
import { exampleData } from './exampleData'
import { UnorderedListNode, UnorderedListNodeProps } from '../components/lists/UnorderedListNode'
import { HeadingNode } from '../components/lists/HeadingUtils'

interface Data {
    title: string
    children: Data[] | null
}

interface TableOfContentsProps extends UnorderedListNodeProps {
    headings: HeadingNode[]
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
            {/* {
                isOpen && <ul className={listClass}>
                        { headings.map(heading => 
                            <li key={heading.content[0].value}>
                                <Link
                                    to={'/work/' + rootSlug + '#' + generateSlugFromTitle(heading.content[0].value)}
                                    activeClassName={activeLinkClass}
                                >
                                    {  heading.content[0].value }
                                </Link>
                            </li>
                        )}
                       </ul>
            } */}
            {
                isOpen && <UnorderedListNode children={headings} />
            }
        </nav>
    )
}

export default TableOfContents
