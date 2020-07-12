import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import Card from 'react-bootstrap/Card'

const WorkBlurb = props => (
    <Card>
        <Card.Body className="d-flex flex-direction-row">
            <div className="mr-2">
                <Img fixed={props.thumbnail} />
            </div>
            <div>
                <Card.Title>
                    <Link className="h3" to={props.slug}>{props.title}</Link>
                </Card.Title>
                <Card.Subtitle className="text-muted mb-1">
                    {props.projectDates}
                </Card.Subtitle>
                <Card.Subtitle className="text-muted mb-2">
                    {props.projectType}
                </Card.Subtitle>
                <Card.Text>
                    {props.description}
                </Card.Text>
            </div>
        </Card.Body>
    </Card>
)

export default WorkBlurb