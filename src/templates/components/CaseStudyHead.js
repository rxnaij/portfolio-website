import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { img, head, wide, info } from '../CaseStudy.module.scss'

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
        <h1 className="display-4 font-weight-bold mt-0 mb-4">{title}</h1>
        <p className="lead">{description}</p>
        <ul className={info}>
            <li className="mb-2"><strong>Date</strong><br />{  startDate + ( endDate ? ` – ${endDate}` : `` ) }</li>
            <li className="mb-2"><strong>Project type</strong><br />{ projectType }</li>
            <li className="mb-2"><strong>Role</strong><br />{ role }</li>
            { projectLink && <li className="mb-2"><strong>View app website</strong><br /><a href={projectLink}>{projectLink}</a> </li> }
        </ul>
        <GatsbyImage 
            image={coverPhoto.gatsbyImageData} 
            alt={coverPhoto.title} 
            className={`${img} ${wide}`} 
            loading="eager" 
        />
    </section>
)

export default CaseStudyHead