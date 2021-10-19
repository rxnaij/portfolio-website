/**
 * Represents a node in the Contentful GraphQL schema.
 */
 interface Node {
    title: string
    projectType: string
}

/**
 * Takes a string of comma-separated items and returns an array of strings.
 * @param src the source string. Must contain items separated by commas.
 */
function getItemsFromCommaSeparatedString(src: string) {
    return src.split(',')
        .map(str => str.toLowerCase().trim())
}

export const getTagsOfNode = (node: Node) => {
    return getItemsFromCommaSeparatedString(node.projectType)
}

/**
 * Returns an array of all of the unique tags across all case studies. Sorted alphabetically.
 * @param {Node[]} nodes All of the case study nodes, retrieved via a `allContentfulCaseStudy`
 * GraphQL query
 */
export const getAllUniqueTags = (nodes: Node[]) => {
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
/**
 * Returns an array of objects corresponding to every tag and their related topics.
 * @param {string[]} tags All of the unique tags throughout the case studies. Should be the result of
 * the getAllUniqueTags() function.
 * @param {Node[]} nodes All of the case study nodes, retrieved via a `allContentfulCaseStudy`
 * GraphQL query
 */
export const getAllTopicsByTag = (tags: string[], nodes: Node[]) => {
    return tags.map(tag => {
        return {
            tag,
            topics: nodes.filter(node => node.tags.includes(tag))
        }
    }
)}

export const sortAllTopicsByTag = (tags: string[], nodes: Node[]) => {
    return tags.map(tag => ({
        [tag]: nodes.filter(node => node.tags.includes(tag))
    }))
}