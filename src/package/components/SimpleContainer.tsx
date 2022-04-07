import React from 'react'

interface SimpleContainerProps {
  code: string
  scrollerClass?: string
  // deactivated?: boolean  // USED FOR LOTTIE OR VIDEO
  // bgType?: string  // USED FOR LOTTIE OR VIDEO
  // lottieOptions?: string   // USED FOR LOTTIE OR VIDEO
  onScroll?: () => void
  onClick?: () => void
  simple?: boolean
  children: any
  className: string
}

/**
 * A simple container, only called by KapixContainer
 * in "simple" mode, className is "outer-style kapix-simple", else it is "property-style ${propertyClass}"
 */
const SimpleContainer = ({
  code,
  scrollerClass = '',
  onScroll,
  onClick,
  simple,
  children,
  className = '',
}: SimpleContainerProps) => {
  const Tag = onClick ? 'a' : 'div'

  return (
    <Tag onClick={onClick} className={className}>
      {/* if simple, put directly scroll-style, else put a scroll container before */}
      {simple ? (
        <div
          id={code}
          className={['scroll-style', code, scrollerClass].join(' ')}
          onScroll={onScroll}
        >
          {children}
          {/* KapixLottiePlayern KapixVideoPlayer */}
        </div>
      ) : (
        <div className={'template-style scroll-container ' + code}>
          <div
            id={code}
            className={['scroll-style', code, scrollerClass].join(' ')}
            onScroll={onScroll}
          >
            {children}
            {/* KapixLottiePlayern KapixVideoPlayer */}
          </div>
        </div>
      )}
    </Tag>
  )
}
export default SimpleContainer
