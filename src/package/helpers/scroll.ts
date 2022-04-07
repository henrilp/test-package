export function scrollLeftPercent(element: Element) {
  if (element && element.scrollLeft) {
    const maxLeft = element.scrollWidth - element.clientWidth
    return Math.max(Math.min(element.scrollLeft / maxLeft, 1), 0)
  } else {
    return 0
  }
}
export function scrollTopPercent(element: Element) {
  if (element && element.scrollTop) {
    const maxTop = element.scrollHeight - element.clientHeight
    return Math.max(Math.min(element.scrollTop / maxTop, 1), 0)
  } else {
    return 0
  }
}
