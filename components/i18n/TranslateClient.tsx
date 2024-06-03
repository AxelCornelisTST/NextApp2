"use client"
import {useTranslation} from '@/i18n/client'

export default function TranslateClient(params: { lang: string, text: any, variables?: {}, className?: string }) {
    const {t} = useTranslation(params.lang)
    return (<p className={params.className}>{t(params.text, params.variables)}</p>);
}