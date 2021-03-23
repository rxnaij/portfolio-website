export const generateSlugFromTitle = (title: string) => {
    return encodeURIComponent(
        title.toLowerCase()
            .replace(' ', '-')
            .replace(/\W-/g, '')
        )
}