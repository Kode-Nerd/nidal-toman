export function finalpath(locale, path, def = 'en') {
  if (locale === def) {
    return path
  }

  return `/${locale}/${path}`
}
