import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import classNames from 'classnames'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { img, head, info, titleClass, darkHead, lightHead } from './CaseStudyHead.module.scss'
import { useThemeState } from '../../hooks/ThemeContext'

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
    <section className={classNames(head, useThemeState().theme === 'dark' ? darkHead : lightHead)}>
        <Container className="pb-5 pb-lg-0">
            <Row>
                <Col lg={6}>
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
                            <li>
                                <strong>Date</strong>
                                {/* <hr /> */}
                                <div>{  startDate + ( endDate ? ` – ${endDate}` : `` ) }</div>
                            </li>
                            <li>
                                <strong>Project type</strong>
                                {/* <hr /> */}
                                <div>{ projectType }</div>
                            </li>
                            <li>
                                <strong>Role</strong>
                                {/* <hr /> */}
                                <div>{ role }</div>
                            </li>
                            {/* { projectLink && <li className="mb-2"><strong>View app website</strong><br /><a href={projectLink}>{projectLink}</a> </li> } */}
                        </ul>
                    </div>
                </Col>
                <Col lg={6} className="d-flex flex-column justify-content-center">
                    <GatsbyImage 
                        image={coverPhoto.gatsbyImageData} 
                        alt={coverPhoto.title} 
                        className={img}
                        loading="eager" 
                    />
                </Col>
            </Row>
                
            
        </Container>
        
    </section>
)

export default CaseStudyHead