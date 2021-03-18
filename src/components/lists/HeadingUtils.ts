import { generateSlugFromTitle } from '../../templates/slugUtil'

interface HeadingNode {
    title: string
    slug: string
    id: number,
    hierarchy: number,
    parentID: number,
    childIDs: Array<number>,
    children: Array<HeadingNode> | null
}

interface ContentfulContentNode {
    content: [
        {
            value: string
        }
    ]
    nodeType: string
}

/**
 * helper function to determine hierarchy of header
 * @param str the heading nodeType, equivalent to a Contentful block type ("heading-2", etc.)
 * @returns the hierarchy level of the heading
 */
const hierarchyOf = (str: string) => Number.parseInt(str[str.length - 1])

/**
 * Takes content nodes generated from a raw Contentful Rich Text .content JSON
 * and returns all of the heading-* nodes as HeadingNode objects.
 * When used with a Contentful GraphQL query, the argument to the function should
 * be a parsed JSON, looking something like `JSON.parse(contentfulRichText.raw).content`.
 * @param content The rich text `.content` JSON provided by Contentful.
 * @param rootSlug The root slug to create all of the anchor slugs from.
 * @returns An array of all of the heading nodes, as `HeadingNode` objects.
 */
const createHeadingNodesFromContentNodes = (content: Array<ContentfulContentNode>, rootSlug: string): Array<HeadingNode> => {
    const sanitized = 
        content
        .filter(({ nodeType }: ContentfulContentNode) => nodeType.includes('heading'))
        .map((heading, index) => ({
            title: heading.content[0].value,
            slug: `/${rootSlug}/#${generateSlugFromTitle(heading.content[0].value)}`,
            id: index,
            hierarchy: hierarchyOf(heading.nodeType),
            parentID: null,
            childIDs: [],
            children: null
        }))
    const withRelationships = generateNodeRelationships(sanitized)
    const nested = createNestingFromRelationships(withRelationships)
    return nested
}

/**
 * Helper function for createHeadingNodesFromContentNodes. Takes an array of HeadingNodes
 * and returns that array with their parentID and childID properties filled out,
 * describing their hierarchical relationships with each other.
 * @param {Array<HeadingNode>} arr an array of HeadingNode objects
 */
const generateNodeRelationships = (arr: Array<HeadingNode>): Array<HeadingNode> => {
    const headings = arr
    headings.forEach((heading: HeadingNode, i: number) => {
        // we begin by checking all nodes following the current one
        let j = i + 1
        while (j < headings.length - 1) {
            // we only want to target direct children (1 level down)
            if (headings[j].hierarchy === heading.hierarchy + 1) {
                const { id } = headings[j]
                heading.childIDs.push(id)       // we add the child's IDs to the parent...
                headings[id].parentID = heading.id   // ...and the parent's ID to the children
            // when we've reached the next sibling (same level), we know we're done checking for
            // children, so we advance the loop
            } else if (headings[j].hierarchy === heading.hierarchy) {
                break
            }
            // advance the loop
            j++     
        }
    })
    return headings
}

/**
 * Helper function for `createHeadingNodesFromContentNodes()`.
 * Transforms a 1-dimensional array of `HeadingNodes` into a multi-dimensional nested array,
 * with all child nodes existing within their parents' `children[]` array.
 * @param arr The 1-dimensional array of `HeadingNodes` to transform
 * @returns The original array, but with all child nodes moved to their respective parent's 
 * `children[]` array.
 */
const createNestingFromRelationships = (arr: Array<HeadingNode>): Array<HeadingNode> => {
    /**
     * Helper function for createNestingFromRelationships.
     * Searches for each element's children via their `childID[]` property. If that element has children,
     * recursively adds those child nodes to that element's `children[]` property. Returns an array where children
     * exist both in their parents' `children[]` array and the base hierarchy of the original array.
     * @param arr A 1-dimensional array of nodes. We want to transform this array by adding the
     * appropriate child nodes to their parents' `children[]` arrays.
     * @param root (optional) The original array, used as a reference for finding the children elements. If not provided,
     * defaults to the value of `arr`.
     * @returns The original array, but with all child elements (denoted in `arr.childIDs[]`) added to their parents' `children[]` arrays.
     */
    const addChildNodesToParent = (arr: Array<HeadingNode>, root?: Array<HeadingNode>): Array<HeadingNode> => {
        const rootArr = root || arr     // If root isn't provided, we assume that arr[] is the root
        // Adds all child nodes to their parent elements
        const headings = arr.map(heading => {
            const children = heading ? heading.childIDs.map(id => rootArr.find(h => h.id === id)) : []
            return {
                ...heading,
                children: children
            }
        })
        // Looks into each element's children[] arrays and recursively adds those children's children
        headings.forEach(heading => {
            if (heading.children && heading.children.length) {
                heading.children = addChildNodesToParent(heading.children, rootArr)
            }
        })
        return headings
    }

    /**
     * Helper function for createNestingFromRelationships
     * The array `arr` processed by `addChildNodesToParent()` will contain duplicate nodes—e.g. a child
     * will exist both in the root array and in its parent's `children[]` array. We want to remove all
     * duplicate nodes, such that child nodes exist only in their parent's `children[]` array.
     * @param arr A multi-dimensional array of nodes—ideally, the result of the `addChildNodesToParent()` function
     * @param currentHierarchy The hierarchy level that we want to clean duplicate nodes from
     * @returns The original array, but with all duplicate children elements removed
     */
    const cleanIndirectChildrenFromHierarchy = (arr: Array<HeadingNode>, currentHierarchy: number): Array<HeadingNode> => {
        // filter out all of the non-hierarchical elements from the base hierarchy
        const cleaned = arr.filter(heading => {
            return heading.hierarchy === currentHierarchy
        })
        // Remove non-direct children from the current array
        cleaned.forEach(heading => {
            if (heading.children && heading.children.length) {
                heading.children = cleanIndirectChildrenFromHierarchy(heading.children, heading.hierarchy + 1)
            }
        })
        return cleaned
    }

    const nested = addChildNodesToParent(arr)
    const cleaned = cleanIndirectChildrenFromHierarchy(nested, 2)
    return cleaned
}

export {
    HeadingNode,
    createHeadingNodesFromContentNodes
}