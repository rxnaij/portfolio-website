import React, { useState } from 'react'
import styles from './Sidebar.module.scss'

const { wrapper, menuBar, controls, nav, navLink, active, sidebarIsClosed, openButton, overlay } = styles
import cn from 'classnames'
import type { Icon } from 'react-bootstrap-icons'
import { HouseFill, PersonFill, LaptopFill, EnvelopeFill, List, X } from 'react-bootstrap-icons'
import VisuallyHidden from '../hidden/VisuallyHidden'

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
    // {
    //     name: "Blog",
    //     href: '/blog',
    //     icon: BookFill,
    //     external: false
    // },
    {
        name: "Contact",
        href: '/contact',
        icon: EnvelopeFill,
        external: false
    },
]

interface SidebarProps {
    currentPath?: string
}

const Sidebar = ({ currentPath }: SidebarProps) => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <MenuBar setOpen={setOpen} />
            { isOpen && <Overlay handleClick={() => setOpen(false)} /> }
            <nav className={cn(
                wrapper,
                !isOpen && sidebarIsClosed
            )}>
                <div className={controls}>
                    <button className={openButton} onClick={() => setOpen(false)}>
                        <X size={24} /> Close menu
                    </button>
                    <strong><a href="/" className="a-no-style">Richard Lu</a></strong>
                </div>
                <Nav currentPath={currentPath} />
            </nav>
        </>
    )
}

export default Sidebar

/**
 * Dark overlay underneath sidebar.
 * When clicked, closes sidebar.
 */
const Overlay = ({ handleClick }: { handleClick: () => void }) => {
    return(
        <div className={overlay} onClick={handleClick} />
    )
}

/**
 * Mobile: Menu bar with hamburger navigation
 */
const MenuBar = ({ setOpen }: { setOpen: (isOpen: boolean) => void }) => {
    return(
        <div className={menuBar}>
            <button 
                onClick={() => setOpen(true)}
                className={openButton}
            >
                <List size={24}/>
                <VisuallyHidden>Open menu</VisuallyHidden>
            </button>
        </div>
    )
}

/**
 * Navigation
 */
// Astro may render paths with or without a trailing slash, so compare normalized forms.
const normalizePath = (path: string) => path.replace(/\/+$/, '') || '/'

const Nav = ({ currentPath }: SidebarProps) => {
    return(
        <ul className={nav}>
            {
                navigation.map(item => {
                    if (!item.external) {
                        return (
                            <NavLink key={item.name} {...item} currentPath={currentPath} />
                        )
                    }
                })
            }
        </ul>
    )
}

type NavLinkProps = NavLink & SidebarProps

const NavLink = ({ name, href, icon, currentPath }: NavLinkProps) => {
    const Icon = icon
    const isActive = currentPath !== undefined && normalizePath(currentPath) === normalizePath(href)

    return (
        <li className={navLink}>
            <a href={href} className={cn(isActive && active)} aria-current={isActive ? 'page' : undefined}>
                <Icon width={20} height={20}/>
                { name }
            </a>
        </li>
    )
}