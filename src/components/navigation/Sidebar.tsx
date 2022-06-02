import React, { useState } from 'react'
import { Link } from 'gatsby'
import { sidebar, menuBar, controls, nav, navLink, active, sidebarIsOpen, sidebarIsClosed, openButton, overlay } from './Sidebar.module.scss'
import cn from 'classnames'
import { Icon, HouseFill, PersonFill, LaptopFill, EnvelopeFill, JournalText, List, BookFill, ChevronLeft, ArrowUpRightSquareFill, Github, Behance } from 'react-bootstrap-icons'

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
        name: "Blog",
        href: '/blog',
        icon: BookFill,
        external: false
    },
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
            <MenuBar isOpen={isOpen} setOpen={setOpen} />
            {isOpen && <Overlay handleClick={() => setOpen(false)} />}
            <div className={cn(
                sidebar,
                !isOpen && sidebarIsClosed
            )}>
                <div className={controls}>
                    <button className={openButton} onClick={() => setOpen(false)}>
                        <ChevronLeft width={16} height={16} /> Close menu
                    </button>
                    <strong><Link to="/" className="a-no-style">Richard Lu</Link></strong>
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
        <div className={overlay} onClick={handleClick} />
    )
}

const MenuBar = ({ isOpen, setOpen }) => {
    return(
        <div className={menuBar}>
            <button 
                onClick={() => setOpen(true)}
                className={openButton}
            >
                <List width={24} height={24}/>
            </button>
        </div>
    )
}