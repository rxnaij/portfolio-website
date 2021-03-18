import React from 'react'
import { ListItemNodeProps, ListItemNode } from './ListItemNode'
import { UnorderedListNodeProps, UnorderedListNode } from './UnorderedListNode'

interface SiblingsNodeProps {
  siblings: Array<ListItemNodeProps>
}

const SiblingsNode = ({ siblings }: SiblingsNodeProps) => (
  <>
    {
      siblings.map(child => (
        <>
          <ListItemNode
            title={child.title}
            slug={child.slug}
            children={null}
            key={child.title + 'list-item-node'} 
          />
          {child.children && <UnorderedListNode children={child.children} key={child.title + 'ul-node'} />}
        </>
      ))
    }
  </>
)


export {
  SiblingsNodeProps,
  SiblingsNode
}
