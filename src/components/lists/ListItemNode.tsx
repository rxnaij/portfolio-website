import React from 'react'
import { UnorderedListNodeProps } from './UnorderedListNode'

interface ListItemNodeProps {
  title: string
  children: Array<ListItemNodeProps>
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
