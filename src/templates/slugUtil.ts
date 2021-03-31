export const generateSlugFromTitle = (title: string) => {
    return (
        title.toLowerCase()
            .replace(/' '/g, '-')
            .replace(/\W-/g, '')
        )
}