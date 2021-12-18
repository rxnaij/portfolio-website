import React from 'react'
import { Link } from 'gatsby'
import { sidebar, nav, navLink, active } from './Sidebar.module.scss'
import cn from 'classnames'
import { Icon, HouseFill, PersonFill, LaptopFill, EnvelopeFill, JournalText } from 'react-bootstrap-icons'

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
    return (
        <div className={sidebar}>
            <div style={{ marginBottom: '24px' }}>
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
    )
}

export default Sidebar

type NavLinkProps = NavLink

const NavLink = ({ name, href, icon }: NavLinkProps) => {
    const Icon = icon
    return (
        <li className={navLink}>
            <Link to={href} activeClassName={active} partiallyActive>
                <Icon width={20} height={20}/>
                { name }
            </Link>
        </li>
    )
}

