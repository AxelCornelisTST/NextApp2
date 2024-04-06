export function infoPage(data: string) {
    if (data)
        return "./info/" + data
    return "/"
}

export function scanPage() {
    return "/scannow"
}

export function homePage() {
    return "/"
}

export function lookupPage() {
    return "/lookup"
}

export function aboutPage() {
    return "/about"
}