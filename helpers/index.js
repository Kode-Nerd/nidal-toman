export function finalpath(locale, path, def = 'en') {
  const filteredpath = path.replace(/\//g, '')
  const result = path === '/' ? filteredpath : `${filteredpath}/`
  if (locale === def) {
    return `/${result}`
  }

  return `/${locale}/${result}`
}
