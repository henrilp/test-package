export const hiddenEnum = Object.freeze({
  VISIBLE: false,
  HIDDEN: 0, // Element not visible but space is allocated for it on the page.
  NOT_VISIBLE: null, // Element will not appear on the page at all.
  EXCLUDED: true, // Remove this element from parent container displays.
})

export enum overflowEnum {
  HIDDEN = 'hidden',
  AUTO = 'auto',
  X = 'x',
  Y = 'y',
}

export enum breakpointEnum {
  MD = 'md',
  SM = 'sm',
  XS = 'xs',
}

export enum stateEnum {
  NONE = 'none',
  HOVER = 'hover',
  SELECTED = 'selected',
}

export enum imgFitEnum {
  CUSTOM = 'custom',
  COVER = 'cover',
  CONTAIN = 'contain',
}

export enum fontFormatEnum {
  BOLD = 'bold',
  ITALIC = 'italic',
  UNDERLINED = 'underlined',
  STRIKETHROUGH = 'strikethrough',
}

export enum sizeUnitEnum {
  PX = 'px',
  PERCENTAGE = '%',
}

export enum hAlignEnum {
  JUSTIFY = 'justify',
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}

export enum vAlignEnum {
  JUSTIFY = 'justify',
  TOP = 'top',
  MIDDLE = 'middle',
  BOTTOM = 'bottom',
}
