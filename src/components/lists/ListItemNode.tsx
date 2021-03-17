import React from 'react'

interface ListItemNodeProps {
  title: string
}

const ListItemNode = ({ title }: ListItemNodeProps) => {
  return (
    <li>{title}</li>
  )
}

export {
  ListItemNodeProps,
  ListItemNode
}
