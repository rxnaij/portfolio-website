import React, { useState } from 'react'
import { Link } from 'gatsby'
import { sidebar, nav, navLink, active, sidebarIsOpen, sidebarIsClosed, openButton, overlay } from './Sidebar.module.scss'
import cn from 'classnames'
import { Icon, HouseFill, PersonFill, LaptopFill, EnvelopeFill, JournalText } from 'react-bootstrap-icons'

import Stack from '../stack/Stack'

export type NavLink = {
    name: string
    href: string
    icon: Icon
}

const navigation: Array<NavLink> = [
    {
        name: "Home",
        href: '/',
        icon: HouseFill
    },
    {
        name: "About me",
        href: '/about',
        icon: PersonFill
    },
    {
        name: "Portfolio",
        href: '/work',
        icon: LaptopFill
    },
    {
        name: "Contact",
        href: '/contact',
        icon: EnvelopeFill
    },
    {
        name: "Resume",
        href: '#',
        icon: JournalText
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
                Open Menu
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
                            return (
                                <NavLink {...item} />
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default Sidebar

type NavLinkProps = NavLink

const NavLink = ({ name, href, icon }: NavLinkProps) => {
    const Icon = icon
    return (
        <li className={navLink}>
            <Link to={href} activeClassName={active}>
                <Icon width={20} height={20}/>
                { name }
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