import {createInstance} from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import {initReactI18next} from 'react-i18next/initReactI18next'
import {getOptions} from './settings'

const initI18next = async (lng, ns) => {
    const i18nInstance = createInstance()
    await i18nInstance
        .use(initReactI18next)
        .use(resourcesToBackend((language, namespace) => import(`./locales/${language}.json`)))
        .init(getOptions(lng, ns))
    return i18nInstance
}

export async function useTranslation(lang, nameSpace, options = {}) {
    const i18nextInstance = await initI18next(lang, nameSpace)
    return {
        t: i18nextInstance.getFixedT(lang, Array.isArray(nameSpace) ? nameSpace[0] : nameSpace, options.keyPrefix),
        i18n: i18nextInstance
    }
}