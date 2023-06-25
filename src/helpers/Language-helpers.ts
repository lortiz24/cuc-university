import { Language, LanguagesSupport } from "@/interfaces/language.interface"

export const loadLanguageLocalStorage = (): Language => {
    const lenguage = localStorage.getItem('language') ?? ''
    if (!LanguagesSupport.includes(lenguage)) {
        if (window !== undefined && LanguagesSupport.includes(navigator.language.split('-')[0])) return navigator.language.split('-')[0] as Language
        return 'en'
    } else {
        return lenguage as Language
    }
}

export const saveLanguageLocalStorage = (language: Language) => {
    localStorage.setItem('language', language)
}