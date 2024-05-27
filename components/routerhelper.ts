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
        return "/laptopuser"
}

export function scanPage() {
    return "/scannow"
}

export function homePage() {
    return "/"
}

export function adminPage() {
    return "/admin"
}
export function lookupPage() {
    return "/lookup"
}
export function laptopUserPage() {
    return "/laptopuser"
}
export function aboutPage() {
    return "/about"
}

export function logoutPage() {
    return "/api/auth/signout";
}

export function loginPage() {
    return "/api/auth/signin";
}

