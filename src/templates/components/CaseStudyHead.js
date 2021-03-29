import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { img, head, wide, info, titleClass } from '../CaseStudy.module.scss'

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
    <section className={head}>
        <div className={titleClass}>
            <nav><Link to="/work"><small>&larr; Back to portfolio</small></Link></nav>
            <h1>{title}</h1>  
            <p className="lead">{description}</p>
            {
                projectLink && 
                <p className="lead">
                    <strong>Try it out:</strong> <a href={projectLink}>{projectLink}</a>
                </p>
            }
            <ul className={info}>
                <li className="mb-2">
                    <strong>Date</strong>
                    {/* <hr /> */}
                    <div>{  startDate + ( endDate ? ` – ${endDate}` : `` ) }</div>
                </li>
                <li className="mb-2">
                    <strong>Project type</strong>
                    {/* <hr /> */}
                    <div>{ projectType }</div>
                </li>
                <li className="mb-2">
                    <strong>Role</strong>
                    {/* <hr /> */}
                    <div>{ role }</div>
                </li>
                {/* { projectLink && <li className="mb-2"><strong>View app website</strong><br /><a href={projectLink}>{projectLink}</a> </li> } */}
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