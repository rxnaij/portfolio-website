import React from 'react'
import UnorderedListNode, { UnorderedListNodeProps } from './UnorderedListNode'

export interface ListItemNodeProps {
    title: string
    siblings: ListItemNodeProps
}

function instanceOfListItemNodeProps(object: any): object is ListItemNodeProps {
  return "title" in object && "siblings" in object
}

const ListItemNode = ({ title, siblings }: ListItemNodeProps) => {
  return (
    <>
        <li>{title}</li>
        {
          siblings.map(child => {
            if (instanceOfListItemNodeProps(child)) {
              return <ListItemNode title={child.title} siblings={child.siblings} />
            } else {
              return <UnorderedListNode children={child.children} />
            }
          })
        }
    </>
  )
}

export default ListItemNode
