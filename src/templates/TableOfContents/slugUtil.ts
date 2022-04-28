/**
 * Returns a valid slug to use in anchor links for page sections. 
 * @param title the title of the page section, to be converted into a slug
 * @returns the page section title as a valid slug, removed of illegal characters
 */
export const generateSlugFromTitle = (title: string) => {
    return (
        title.toLowerCase()
            .replace(/[^a-z0-9\s]/g, '')
            .replace(/\s/g, '-')
        )
}