import * as utils from '@mkitio/gatsby-theme-password-protect/src/utils/utils'

const storage = typeof window !== "undefined" ? window.sessionStorage : null
const STORAGE_NAME = `gatsby-theme-password-protect`

export const setSessionPassword = (passwordCandidate: string) => {
    if (storage) {
        storage.setItem(STORAGE_NAME, passwordCandidate)
    }
}

export const getSessionPassword = () => {
    if (storage) {
        return storage.getItem(STORAGE_NAME)
    }
}

export const {
    getQueryPassword,
    isProtectedPage
} = utils