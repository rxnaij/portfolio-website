export const generateSlugFromTitle = (title: string) => {
    return (
        title.toLowerCase()
            .replace(' ', '-')
            .replace(/\W-/g, '')
        )
}