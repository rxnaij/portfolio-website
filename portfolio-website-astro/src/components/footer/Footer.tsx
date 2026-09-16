import React from "react"

import styles from './Footer.module.scss'

const Footer = () => {

    return (
        <footer className={styles.footer}>
            <small>
                <strong>© {new Date().getFullYear()} Richard Lu</strong>
            </small>
            <small>Built with <a href="https://astro.build">Astro</a></small>
            <small><a href="/contact">Shoot me a message</a> if you have any questions about working together.</small>
            <small>Have a good day!</small>
        </footer>
    )
}

export default Footer
