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
            <nav><Link to="/work">&larr; Back to portfolio</Link></nav>
            <h1 className="display-4 font-weight-bold mt-0 mb-4">{title}</h1>  
            <p className="lead">{description}</p>
            {/* <ul className={info}>
                <li className="mb-2"><strong>Date</strong><br />{  startDate + ( endDate ? ` – ${endDate}` : `` ) }</li>
                <li className="mb-2"><strong>Project type</strong><br />{ projectType }</li>
                <li className="mb-2"><strong>Role</strong><br />{ role }</li>
                { projectLink && <li className="mb-2"><strong>View app website</strong><br /><a href={projectLink}>{projectLink}</a> </li> }
            </ul> */}
        </div>
        <div className={img}>
            <GatsbyImage 
                image={coverPhoto.gatsbyImageData} 
                alt={coverPhoto.title} 
                className={img}
                loading="eager" 
            />
        </div>
    </section>
)

export default CaseStudyHead