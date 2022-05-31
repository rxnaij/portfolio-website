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
        <React.Fragment key={child.title + 'list-item-node'}>
          <ListItemNode
            title={child.title}
            slug={child.slug}
            children={null}
             
          />
          {child.children && child.children.length > 0 && <UnorderedListNode children={child.children} key={child.title + 'ul-node'} />}
        </React.Fragment>
      ))
    }
  </>
)


export {
  SiblingsNodeProps,
  SiblingsNode
}
