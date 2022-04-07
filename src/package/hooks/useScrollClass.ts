interface UseScrollClassProps {
  flexDirection?: string
  overflow?: string
}
export function useScrollClass({
  overflow,
  flexDirection,
}: UseScrollClassProps) {
  const scrollerClass: string = [
    // TODO
    // if (flexDirection === 'row' && this.$breakpoint.xsOnly && !this.xsFlexDirection) { // simulate $important of yellow project
    //   flexDirection = null
    // }
    flexDirection ? `ka-flex-${flexDirection}` : '',
    overflow ? `a-overflow-${overflow}` : '',
  ].join(' ')

  const onScroll = () => null //TODO  see utils/scroll.ts

  return {
    scrollerClass,
    onScroll,
  }
}
