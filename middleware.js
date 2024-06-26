import {NextResponse} from 'next/server'
import acceptLanguage from 'accept-language'
import {cookieName, fallbackLng, languages} from './i18n/settings'

acceptLanguage.languages(languages)

//image exclusion
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico).*)']
}

export async function middleware(req) {
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

    return NextResponse.next()
}