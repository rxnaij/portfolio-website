import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import styles from './WorkBlurb.module.scss'

const WorkBlurb = props => (
    <Link className={'a-no-style'} to={`/work/${props.slug}`}>
        <Row className={`mb-5 ${styles.workblurb}`}>
            <Col md={6} className="mb-3 mb-md-0">
                <Img fluid={props.thumbnail} />
            </Col>
            <Col md={6} className={"d-flex flex-column justify-content-center " + styles.info}>
                <h3 className={styles.title}>{props.title}</h3>
                <p className="text-muted mb-0">{props.projectDates}</p>
                <p className="text-muted">{props.projectType}</p>
                <p className="">{props.description}</p>
            </Col>
        </Row>
    </Link>
    
)

export default WorkBlurb