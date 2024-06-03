"use server"
import {useTranslation} from '../../i18n'

export default async function TranslateServer(params: { lang: string, text: any, variables?: {}, className?: string }) {
    const {t} = await useTranslation(params.lang)

    return (<p className={params.className}>{t(params.text, params.variables)}</p>);
}