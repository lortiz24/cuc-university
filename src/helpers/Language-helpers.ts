import { Language } from "@/interfaces/language.interface"

export const loadLanguageLocalStorage = (): Language => {
    const lenguage: Language = localStorage.getItem('language') as Language ?? 'en'
    return lenguage
}

export const saveLanguageLocalStorage = (language: Language) => {
    localStorage.setItem('language', language)
}