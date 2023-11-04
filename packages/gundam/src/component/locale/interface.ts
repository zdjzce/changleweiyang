export type Lang = 'zh' | 'en'

// TODO remove
export interface TestButtonLocal {
  test: string
}

export interface Locale {
  locale: Lang
  // TODO remove
  Button: TestButtonLocal
}

export type ComponentLocaleName = Exclude<keyof Locale, 'locale'>
