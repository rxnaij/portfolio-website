export const generateSlugFromTitle = (title: string) => {
    return encodeURIComponent(
        title.toLowerCase()
            .replaceAll(' ', '-')
            .replaceAll(/\W-/g, '')
        )
}