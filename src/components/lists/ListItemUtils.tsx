import { ListItemNodeProps } from './ListItemNode'
import { UnorderedListNodeProps } from './UnorderedListNode'

export function instanceOfListItemNodeProps(object: any): object is ListItemNodeProps {
  return "title" in object && "siblings" in object
}

export function instanceOfUnorderedListNodeProps(object: any): Object is UnorderedListNodeProps {
  return "children" in object
}
