/**
 * Represents a node in the Contentful GraphQL schema.
 */
 export interface ProjectNode {
    title: string
    projectType: string
    projectCategory: 'Work' | 'Extra'
}

/**
 * Takes a string of comma-separated items and returns an array of strings.
 * @param src the source string. Must contain items separated by commas.
 */
function getItemsFromCommaSeparatedString(src: string) {
    return src.split(',')
        .map(str => str.toLowerCase().trim())
}

export const getTagsOfNode = (node: ProjectNode) => {
    return getItemsFromCommaSeparatedString(node.projectType)
}

/**
 * Returns an array of all of the unique tags across all case studies. Sorted alphabetically.
 * @param {ProjectNode[]} nodes All of the case study nodes, retrieved via a `allContentfulCaseStudy`
 * GraphQL query
 */
export const getAllUniqueTags = (nodes: ProjectNode[]) => {
    return nodes.reduce((allTags: string[], node) => {
        let uniqueTags = []     // This array "collects" all of the new tags in the current node
        for (const tag of getItemsFromCommaSeparatedString(node.projectType)) {
            // Add unique tags to the "collector" array
            if (!allTags?.includes(tag)) {
                uniqueTags = [...uniqueTags, tag]
            }
        }
        return [...allTags, ...uniqueTags].sort()
    }, [])
}
