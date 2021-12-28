import React, { useState } from 'react'
import { Link } from 'gatsby'
import { sidebar, nav, navLink, active, sidebarIsOpen, sidebarIsClosed, openButton, overlay } from './Sidebar.module.scss'
import cn from 'classnames'
import { Icon, HouseFill, PersonFill, LaptopFill, EnvelopeFill, JournalText, List, X, ArrowUpRightSquareFill, GitHub, Behance } from 'react-bootstrap-icons'

import Stack from '../stack/Stack'

export type NavLink = {
    name: string
    href: string
    icon: Icon
    external?: boolean
}

const navigation: Array<NavLink> = [
    {
        name: "Home",
        href: '/',
        icon: HouseFill,
        external: false
    },
    {
        name: "About me",
        href: '/about',
        icon: PersonFill,
        external: false
    },
    {
        name: "Portfolio",
        href: '/work',
        icon: LaptopFill,
        external: false
    },
    {
        name: "Contact",
        href: '/contact',
        icon: EnvelopeFill,
        external: false
    },
    {
        name: "Resume",
        href: '#',
        icon: JournalText,
        external: false
    },
    {
        name: "GitHub",
        href: "https://github.com/rxnaij",
        icon: GitHub,
        external: true
    },
    {
        name: "Behance",
        href: "https://be.net/richardbludesign",
        icon: Behance,
        external: true
    },
]



const Sidebar = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <> 
            {isOpen && <Overlay handleClick={() => setOpen(false)} />}
            <button 
                onClick={() => setOpen(!isOpen)}
                className={cn(
                    openButton
                )}
            >
                {isOpen ? <X width={24} height={24} /> : <List width={24} height={24}/>}
            </button>
            <div className={cn(
                sidebar,
                !isOpen && sidebarIsClosed
            )}>
                <div>
                    <strong>
                        Richard Lu
                    </strong>
                </div>
                <ul className={nav}>
                    {
                        navigation.map(item => {
                            if (!item.external) {
                                return (
                                    <NavLink key={item.name} {...item} />
                                )
                            }
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default Sidebar

type NavLinkProps = NavLink

const NavLink = ({ name, href, icon, external }: NavLinkProps) => {
    const Icon = icon

    return (
        <li className={navLink}>
            <Link to={href} activeClassName={active}>
                <Icon width={20} height={20}/>
                { name }
                { external && <ArrowUpRightSquareFill width={20} height={20} /> }
            </Link>
        </li>
    )
}



const Overlay = ({ handleClick }) => {
    return(
        <div className={overlay} onClick={handleClick}>
        </div>
    )
}
