import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const WorkBlurb = props => (
    <Row className="mb-5">
        <Col md={6} className="mb-3">
            <Link to={`/work/${props.slug}`}>
                <Img fluid={props.thumbnail} />
            </Link>
        </Col>
        <Col md={6} className="d-flex flex-column justify-content-center">
            <Link className="h3 basic-link" to={`/work/${props.slug}`}>{props.title}</Link>
            <p className="text-muted mb-0">{props.projectDates}</p>
            <p className="text-muted">{props.projectType}</p>
            <p className="">{props.description}</p>
        </Col>
    </Row>
)

export default WorkBlurb