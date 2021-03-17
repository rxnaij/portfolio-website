import { ListItemNodeProps } from './ListItemNode'
import { UnorderedListNodeProps } from './UnorderedListNode'

export function instanceOfListItemNodeProps(object: any): object is ListItemNodeProps {
  return "title" in object
}

export function instanceOfUnorderedListNodeProps(object: any): object is UnorderedListNodeProps {
  return "children" in object
}
