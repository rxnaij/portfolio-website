import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Button from '../components/button/Button'
import { CalendarFill, PersonFill, CardChecklist } from 'react-bootstrap-icons'
import { coverImage, wrapper, projectDetails, titleWrapper, lead, link } from './CaseStudyHead.module.scss'

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
    <header className={wrapper}>
        <div className={titleWrapper}>
            {/* <nav><Link to="/work">Portfolio</Link> &rsaquo; {title}</nav> */}
            <h1>{title}</h1>  
            <p className={lead}>{description}</p>
        </div>
        {
            projectLink && 
            <Button
                className={link}
                variant="outline"
                renderContainer={(props) => 
                    <a href={projectLink} {...props}>
                        Try it out! &rsaquo;
                    </a>
                }
            />
        }
        <ul className={projectDetails}>
            <li>
                <CalendarFill size={16} />
                <div>{ startDate + ( endDate ? ` – ${endDate}` : `` ) }</div>
            </li>
            <li>
                <PersonFill size={16} />
                <div>{ projectType }</div>
            </li>
            <li>
                <CardChecklist size={16} />
                <div>{ role }</div>
            </li>
        </ul>
        <GatsbyImage 
            image={coverPhoto.gatsbyImageData} 
            alt={coverPhoto.title} 
            className={coverImage}
            loading="eager" 
        />
    </header>
)

export default CaseStudyHead