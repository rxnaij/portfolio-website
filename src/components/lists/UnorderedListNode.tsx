
import React from 'react'
import { ListItemNodeProps, ListItemNode } from './ListItemNode'
import { SiblingsNode } from './SiblingsNode'

interface UnorderedListNodeProps {
  children: Array<ListItemNodeProps | UnorderedListNodeProps>
}

const UnorderedListNode = ({ children }: UnorderedListNodeProps) => {
  return (
    <ul>
      <SiblingsNode siblings={children} />
    </ul>
  )
}

export {
  UnorderedListNodeProps,
  UnorderedListNode
}
