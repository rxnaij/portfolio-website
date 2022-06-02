import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

interface ListItemNodeProps {
  title: string
  slug: string
  children: Array<ListItemNodeProps>
}

const ListItemNode = ({ title, slug }: ListItemNodeProps) => {
  return (
    <li>
      <AnchorLink to={slug}>
        {title}
      </AnchorLink>
    </li>
  )
}

export {
  ListItemNodeProps,
  ListItemNode
}
