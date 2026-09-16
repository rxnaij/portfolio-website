import React, { useState } from 'react'
import { Link } from 'gatsby'
import { wrapper, menuBar, controls, nav, navLink, active, sidebarIsClosed, openButton, overlay } from './Sidebar.module.scss'
import cn from 'classnames'
import { Icon, HouseFill, PersonFill, LaptopFill, EnvelopeFill, List, BookFill, ChevronLeft, ArrowUpRightSquareFill, X } from 'react-bootstrap-icons'
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

const Sidebar = () => {
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
                    <strong><Link to="/" className="a-no-style">Richard Lu</Link></strong>
                </div>
                <Nav />
            </nav>
        </>
    )
}

export default Sidebar

/**
 * Dark overlay underneath sidebar.
 * When clicked, closes sidebar.
 */
const Overlay = ({ handleClick }) => {
    return(
        <div className={overlay} onClick={handleClick} />
    )
}

/**
 * Mobile: Menu bar with hamburger navigation
 */
const MenuBar = ({ setOpen }) => {
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
const Nav = () => {
    return(
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
    )
}

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