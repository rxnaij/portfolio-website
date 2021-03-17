import React from 'react'
import { ListItemNodeProps, ListItemNode } from './ListItemNode'
import { UnorderedListNodeProps, UnorderedListNode } from './UnorderedListNode'
import {
  instanceOfListItemNodeProps,
  instanceOfUnorderedListNodeProps
} from './ListItemUtils'

interface SiblingsNodeProps {
  siblings: Array<ListItemNodeProps | UnorderedListNodeProps>
}

const SiblingsNode = ({ siblings }: SiblingsNodeProps) => {
  return (
    <>
        {
          siblings.map(child => {
            if (instanceOfListItemNodeProps(child)) {
              return <ListItemNode title={child.title} />
            } else if (instanceOfUnorderedListNodeProps(child)) {
              return <UnorderedListNode children={child.children} />
            }
          })
        }
    </>
  )
}

export {
  SiblingsNodeProps,
  SiblingsNode
}
