export function laptopInfoPage(data: string) {
    if (data)
        return "./lookup/" + data
    return homePage()
}

export function userInfoPage(data: string) {
    if (data)
        return "./laptopuser/" + data
    return homePage()
}

export function userPage(data: string) {
        return "$lang/laptopuser"
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
export function laptopUserPage() {
    return "/$lang/laptopuser"
}
export function aboutPage() {
    return "/$lang/about"
}

export function logoutPage() {
    return "/api/auth/signout";
}

export function loginPage() {
    return "/api/auth/signin";
}

