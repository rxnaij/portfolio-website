import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import cn from 'classnames'
import Stack from '../stack/Stack'

import { LockFill, CalendarFill, TagFill } from 'react-bootstrap-icons'

import { blurb, details, detailsContainer, icon, coverImage, protectedTag } from './WorkSection.module.scss'

const WorkBlurb = props => {

    return(
        <Link 
            className={cn(
                blurb,
                `a-no-style`
            )} 
            to={props.protected ? `/work/secret/${props.slug}` : `/work/${props.slug}`}
        >
            <div className={coverImage}>
                <GatsbyImage
                    image={props.thumbnail}
                    alt={props.alt}
                />
            </div>
            <div className="typography">
                <h3>
                    {
                        props.protected && 
                        <span className={protectedTag}>
                            <LockFill className={icon} size={14} />
                            protected
                        </span>
                    }
                    {props.title}
                </h3>
                <p>{props.description}</p>
            </div>
            <div className={detailsContainer}>
                <div className={details}><CalendarFill size={14} /> {props.projectDates}</div> 
                <div className={details}><TagFill size={14} /> {props.projectType}</div>
            </div>
        </Link>
    )
}

export default WorkBlurb