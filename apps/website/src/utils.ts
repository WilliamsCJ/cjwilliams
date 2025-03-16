export function prepareTagsForDisplay(tags: string[]): string {
  return tags.map((t: string) => `#${t}`).join(" ")
}

export function removeTrailingSlash(path: string): string {
  if (path === "/") {
    return path
  }

  if (path.slice(-1) === "/") {
    return path.slice(0, -1)
  }

  return path
}