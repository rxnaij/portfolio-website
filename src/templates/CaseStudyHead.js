import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import classNames from 'classnames'
import Button from '../components/button/Button'
import { coverImage, wrapper, projectDetails, titleWrapper, darkHead, lightHead } from './CaseStudyHead.module.scss'

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
    <section className={wrapper}>
        <div className={titleWrapper}>
            <nav><Link to="/work"><small>Portfolio</small></Link> &rarr; {title}</nav>
            <h1>{title}</h1>  
            <p className="lead">{description}</p>
        </div>
        <GatsbyImage 
            image={coverPhoto.gatsbyImageData} 
            alt={coverPhoto.title} 
            className={coverImage}
            loading="eager" 
        />
        <ul className={projectDetails}>
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
        {
            projectLink && 
            <a href={projectLink} className={`a-no-style`}>
                <Button>
                    Try it out &rarr;
                </Button>
            </a>
        }
    </section>
)

export default CaseStudyHead