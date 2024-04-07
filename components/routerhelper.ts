export function infoPage(data: string) {
    if (data)
        return "/$lang/info/" + data
    return homePage()
}

export function scanPage() {
    return "/$lang/scannow"
}

export function homePage() {
    return "/$lang"
}

export function lookupPage() {
    return "/$lang//lookup"
}

export function aboutPage() {
    return "/$lang/about"
}