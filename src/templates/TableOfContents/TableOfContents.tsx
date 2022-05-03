import React, { useState } from 'react'

// import { generateSlugFromTitle } from './slugUtil'
import { ChevronCompactUp, ChevronCompactDown } from 'react-bootstrap-icons'

import { wrapper, iconClass, chevronIsOpen, activeLinkClass, labelClass } from './TableOfContents.module.scss'
// import { exampleData } from '../exampleData'
import { UnorderedListNode, UnorderedListNodeProps } from './UnorderedListNode'
import { HeadingNode } from './HeadingUtils'

interface TableOfContentsProps {
    headings: Array<HeadingNode>
}

const TableOfContents = ({ headings }: TableOfContentsProps) => {
    const [isOpen, setOpen] = useState(true)
    return (
        <nav className={wrapper}>
            <div className={labelClass} onClick={() => setOpen(!isOpen)}>
                <div>Table of contents</div>
                <div>
                    {/* <ChevronCompactDown 
                        className={classNames(iconClass, isOpen && chevronIsOpen)} 
                        aria-label={isOpen ? "Close section navigation" : "Open section navigation"} 
                    /> */}
                    { isOpen 
                        ? <><ChevronCompactUp className={iconClass} aria-label="Close section navigation" /> </>
                        : <><ChevronCompactDown className={iconClass} aria-label="Open section navigation" /> </>
                    }
                </div>
            </div>
            { isOpen && <UnorderedListNode children={headings} /> }
        </nav>
    )
}

export default TableOfContents
