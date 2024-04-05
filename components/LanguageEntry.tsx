"use server"

interface Dictionary {
    [key: string]: () => Promise<any>;
}

const dictionaries: Dictionary = {
    en: () => import('@/dictionary/en.json').then((module) => module.default),
    nl: () => import('@/dictionary/nl.json').then((module) => module.default),
    fr: () => import('@/dictionary/fr.json').then((module) => module.default),
};

export default async function LanguageEntry(param: { lang: string, text: any, args: string[] }) {
    const dict = await dictionaries[param.lang]();
    const lookup = (obj: any, path: string) => {
        const keys = path.split('.');
        let value = obj;
        for (const key of keys) {
            if (value && typeof value === 'object' && key in value) {
                value = value[key];
            } else {
                return null; // Property not found
            }
        }
        return value;
    };

    const value = lookup(dict, param.text);

    if (value === null) {
        throw new Error(`Key "${param.text}" not found in language file for "${param.lang}".`);
    }

    return (<p>{translate(value, param.args)}</p>);
}


const translate = (str: string, args: string[]) =>
    str.replace(/{(\d+)}/g, (match, index) => args[index] || '')
