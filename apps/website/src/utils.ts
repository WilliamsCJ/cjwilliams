export function prepareTagsForDisplay(tags: string[]): string {
  return tags.map((t: string) => `#${t}`).join(" ")
}