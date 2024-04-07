import {NextResponse} from 'next/server'
import acceptLanguage from 'accept-language'
import {cookieName, fallbackLng, languages} from './app/i18n/settings'
import {loginPage} from "./components/routerhelper";

acceptLanguage.languages(languages)

export const config = {
    // matcher: '/:lng*'
    matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)']
}

export function middleware(req) {
    //localisation
    let lang
    if (req.cookies.has(cookieName)) lang = acceptLanguage.get(req.cookies.get(cookieName).value)
    if (!lang) lang = acceptLanguage.get(req.headers.get('Accept-Language'))
    if (!lang) lang = fallbackLng

    // Redirect if lng in path is not supported
    if (!languages.some(loc => req.nextUrl.pathname.startsWith(`/${loc}`)) && !req.nextUrl.pathname.startsWith('/_next')) {
        return NextResponse.redirect(new URL(`/${lang}${req.nextUrl.pathname}`, req.url))
    }

    if (req.headers.has('referer')) {
        const refererUrl = new URL(req.headers.get('referer'))
        const lngInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`))
        const response = NextResponse.next()
        if (lngInReferer) response.cookies.set(cookieName, lngInReferer)
        return response
    }

    //authorisation
    const currentUser = req.cookies.get('currentUser')?.value

    const noLang = req.nextUrl.pathname.substring(3);
    if (!currentUser && (noLang !== "" && !noLang.includes("about")))
        return NextResponse.redirect(new URL(loginPage(), req.nextUrl));

    return NextResponse.next()
}