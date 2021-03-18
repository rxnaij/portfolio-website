import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Container, Row, Col } from 'react-bootstrap'
import { img, head, info } from '../CaseStudy.module.scss'

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
    <section className="mb-4">
        <Container fluid className={head}>
            <Row>
                <Col xs={12}>
                    <GatsbyImage image={coverPhoto.gatsbyImageData} alt={coverPhoto.title} className={img} loading="eager" />
                </Col>
                <Col xs={12}>
                    <h1 className="display-3 mb-4">{title}</h1>
                    <p className="lead">{description}</p>
                    <ul className={info}>
                        <li className="mb-2"><strong>Date</strong>: {  startDate + ( endDate ? ` – ${endDate}` : `` ) }</li>
                        <li className="mb-2"><strong>Project type</strong>: { projectType }</li>
                        <li className="mb-2"><strong>Role</strong>: { role }</li>
                        { projectLink && <li className="mb-1"><strong>View app website</strong>: <a href={projectLink}>{projectLink}</a> </li> }
                    </ul>
                </Col>
            </Row>
        </Container>
    </section>
)

export default CaseStudyHead