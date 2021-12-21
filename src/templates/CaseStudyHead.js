import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import classNames from 'classnames'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from '../components/button/Button'
import { img, head, info, titleClass, darkHead, lightHead } from './CaseStudyHead.module.scss'
import { useThemeState } from '../hooks/ThemeContext'

/* Head of the case study, with intro content */
const CaseStudyHead = ({ 
    title,
    coverPhoto,
    description,
    startDate,
    endDate,
    projectType,
    role,
    projectLink 
}) => (
    <section
        className={classNames(
            head, 
            useThemeState().theme === 'dark' ? darkHead : lightHead
        )}
    >
        <div className={titleClass}>
            <nav><Link to="/work"><small>&larr; Back to portfolio</small></Link></nav>
            <h1>{title}</h1>  
            <p className="lead">{description}</p>
            {
                projectLink && 
                <a href={projectLink} className={`a-no-style`}>
                    <Button>
                        Try it out &rarr;
                    </Button>
                </a>
            }
            <ul className={info}>
                <li>
                    <strong>Date</strong>
                    <div>{  startDate + ( endDate ? ` – ${endDate}` : `` ) }</div>
                </li>
                <li>
                    <strong>Project type</strong>
                    <div>{ projectType }</div>
                </li>
                <li>
                    <strong>Role</strong>
                    <div>{ role }</div>
                </li>
            </ul>
        </div>
        <GatsbyImage 
            image={coverPhoto.gatsbyImageData} 
            alt={coverPhoto.title} 
            className={img}
            loading="eager" 
        />
    </section>
)

export default CaseStudyHead