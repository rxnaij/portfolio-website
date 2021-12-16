import React, { useState } from 'react'
import classNames from 'classnames'

// import { generateSlugFromTitle } from './slugUtil'
import { ChevronCompactUp, ChevronCompactDown } from 'react-bootstrap-icons'

import { tocClass, iconClass, chevronIsOpen, activeLinkClass, labelClass } from './TableOfContents.module.scss'
// import { exampleData } from '../exampleData'
import { UnorderedListNode, UnorderedListNodeProps } from './UnorderedListNode'
import { HeadingNode } from './HeadingUtils'

interface TableOfContentsProps extends UnorderedListNodeProps {
    headings: Array<HeadingNode>
}

const getIDs = (headings: Array<HeadingNode>) => {
    return headings.reduce((accumulator, heading) => {
        if (heading.slug) {
            accumulator.push(heading.slug)
        }
        return accumulator
    })
}

const useActiveId = () => {

}

const TableOfContents = ({ headings }: TableOfContentsProps) => {
    const [isOpen, setOpen] = useState(true)
    return (
        <nav className={tocClass}>
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