export function finalpath(locale, path, def = 'en') {
  const filteredpath = path.replace(/\//g, '')
  const result = path === '/' ? filteredpath : `${filteredpath}/`
  if (locale === def) {
    return `/${result}`
  }

  return `/${locale}/${result}`
}

export function contentExtractor(input) {
  return input.split('\n').map((text) => {
    /* eslint no-useless-escape: 0 */
    const matched = `${text} `.match(
      /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/g
    )
    let transformed = text
    if (matched) {
      matched.forEach((link) => {
        let validLink = link.split(' ')[0]
        if (validLink[validLink.length - 1] === '.') {
          validLink = validLink.slice(0, -1)
        }

        transformed = text.replace(
          validLink,
          `<a href="${validLink}" target="_blank">${validLink}</a>`
        )
      })
    }

    return transformed
  })
}
