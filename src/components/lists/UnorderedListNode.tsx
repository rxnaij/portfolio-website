
import React from 'react'
import { ListItemNodeProps } from './ListItemNode'

export interface UnorderedListNodeProps {
  children: Array<ListItemNodeProps>
}

const UnorderedListNode = ({ children }: UnorderedListNodeProps) => {
  const h = children[0]
  const t = children.slice(1) 
  return (
    <ul>
        <ListItemNode title={h.title} siblings={None} />
    </ul>
  )
}

export default UnorderedListNode
