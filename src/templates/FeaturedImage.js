import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

/* FeaturedImage: product images that appear at the top to describe the product */
const FeaturedImage = ({ image, description, index }) => {
    return(
        <Row className="py-4 align-items-center justify-content-center">
            <Col xs={9} sm={{ order: index % 2 === 0 ? 1 : 12 }} lg={5} className="mb-2 mb-md-0">
                <GatsbyImage image={image} alt={description} />
            </Col>
            <Col sm={{ order: index % 2 === 0 ? 12 : 1 }} lg={5} className="d-flex align-items-center">
                <p className="lead">{description}</p>
            </Col>
        </Row>
    )
}

export default FeaturedImage