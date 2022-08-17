import React from "react"
import { Link } from 'gatsby'

import { footer } from './Footer.module.scss'

const Footer = () => {

    return (
        <footer className={footer}>
            <small>
                <strong>© {new Date().getFullYear()} Richard Lu</strong>
            </small>
            <small>Built with <a href="https://www.gatsbyjs.org">Gatsby</a></small>
            <small><Link to="/contact">Shoot me a message</Link> if you have any questions about working together.</small>
            <small>Have a good day!</small>
        </footer>
                    
            
    )
}

export default Footer
