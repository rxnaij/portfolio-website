import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"

import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

const Footer = ({ siteTitle }) => {

    return (
        <Container>
            <div className="border-top pt-4">
                Find me around the internet:
                <div className="d-flex justify-content-start">
                    <Image src="../images/icons/github-32.png" />
                    <Image roundedCircle />
                    <Image roundedCircle />
                    <Image roundedCircle />
                </div>
                <span className="small">
                    © {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
                </span>
            </div>
            
        </Container>
    )
}

export default Footer
