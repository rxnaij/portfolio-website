import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import Card from 'react-bootstrap/Card'

const WorkBlurb = props => (
    <Card className="work-blurb mb-4">
        <Card.Body className="work-blurb__body">
            <div className="work-blurb__container">
                <Link to={`/work/${props.slug}`}>
                    <Img fixed={props.thumbnail} className="work-blurb__thumbnail" />
                    {/* <img src={props.thumbnail} alt={props.title} className="work-blurb__thumbnail" backgroundColor /> */}
                </Link>
            </div>
            

            <div className="work-blurb__container">
                <Card.Title className="work-blurb__title">
                <Link className="h3" to={`/work/${props.slug}`}>{props.title}</Link>
                </Card.Title>
                <Card.Subtitle className="text-muted work-blurb__dates">
                    {props.projectDates}
                </Card.Subtitle>
                <Card.Subtitle className="text-muted work-blurb__type">
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