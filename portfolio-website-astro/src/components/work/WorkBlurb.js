import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import cn from 'classnames'
import { LockFill, CalendarFill, TagFill } from 'react-bootstrap-icons'
import { wrapper, details, detailsContainer, icon, coverImageBackground, coverImage, protectedTag } from './WorkBlurb.module.scss'

const WorkBlurb = props => {

    return (
        <Link
            className={cn(
                wrapper,
                `a-no-style`
            )}
            to={props.protected ? `/work/secret/${props.slug}` : `/work/${props.slug}`}
        >
            <div className={coverImageBackground}>
                <div className={coverImage}>
                    <GatsbyImage
                        image={props.thumbnail}
                        alt={props.alt}
                    />
                    {
                        props.protected &&
                        <span className={protectedTag}>
                            <LockFill className={icon} size={14} /> protected
                        </span>
                    }
                </div>
            </div>
            <div className={detailsContainer}>
                <div className={details}>{props.projectDates}</div>
                <div className={details}>{props.projectType}</div>
            </div>
            <div className="typography">
                <h3>
                    {props.title}
                </h3>
                <p>{props.description}</p>
            </div>
        </Link>
    )
}

export default WorkBlurb