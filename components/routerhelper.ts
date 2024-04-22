export function infoPage(data: string) {
    if (data)
        return "./info/" + data
    return homePage()
}

export function scanPage() {
    return "/$lang/scannow"
}

export function homePage() {
    return "/$lang"
}

export function lookupPage() {
    return "/$lang/lookup"
}

export function aboutPage() {
    return "/$lang/about"
}

export function loginPage() {
    return "./signin";
}

export function logoutRoute() {
    return "/api/oauth/signout";
}


export function loginRoute(): string {
    return "/api/oauth/github";
}

