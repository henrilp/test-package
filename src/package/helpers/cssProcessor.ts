import cxs from "cxs";
import { isArray, isNumber, isString } from "lodash";
import { ElementStyle } from "../components/types";
import {
  imgFitEnum,
  fontFormatEnum,
  sizeUnitEnum,
  hAlignEnum,
  overflowEnum,
  vAlignEnum,
} from "../constants/enums";
import {
  toCssColor,
  toCssGradientColor,
  toGradientColor,
  invertColor,
  toCssBoxShadow,
} from "../helpers/cssHelpers";

export function toCssUnit(value, unit) {
  if (value == null || value === "auto") return null;
  return `${value}${unit}`;
}

function textResizer(unit, value) {
  return unit === sizeUnitEnum.PX ? value / 1.5 : value;
}

function defaultInvertedColor(backgroundColor) {
  if (backgroundColor && backgroundColor !== "transparent") {
    const color = toCssColor(backgroundColor);
    return color ? invertColor(color, true) : undefined;
  }
}

function backgroundDataProcessor(
  img: string,
  imgFit: imgFitEnum,
  backgroundColor: string,
  opacity: number,
  color: string
) {
  const data = {
    color: null,
    background: null, // order of props matter , if background is last it will override background size for example
    opacity: null,
    backgroundImage: null,
    backgroundRepeat: null,
    backgroundPosition: null,
    backgroundSize: null,
    backgroundColor: null,
  };
  if (color) {
    if (color !== "$invert") {
      data.color = toCssColor(color);
    } else if (backgroundColor) {
      data.color = defaultInvertedColor(backgroundColor);
    }
  }

  const backgroundSizes = [];
  if (img) {
    const backgroundImages = [];
    const backgroundPositions = [];
    const backgroundRepeats = [];

    backgroundRepeats.push("no-repeat");
    backgroundImages.push(`url(${img})`);
    backgroundPositions.push("50% 50%");

    if (backgroundColor) {
      backgroundImages.push(toCssGradientColor(backgroundColor, true));
      backgroundSizes.push("auto");
      backgroundRepeats.push("repeat");
      backgroundPositions.push("0% 0%");
    }
    data.backgroundImage = backgroundImages.join(", ");
    data.backgroundRepeat = backgroundRepeats.join(", ");
    data.backgroundPosition = backgroundPositions.join(", ");
  } else if (backgroundColor) {
    const gradient = toGradientColor(backgroundColor);
    if (gradient && gradient.Colors) {
      if (gradient.Colors.length > 1) {
        data.background = toCssGradientColor(gradient);
      } else if (gradient.Colors.length) {
        data.backgroundColor = gradient.Colors[0];
      }
    } else {
      data.backgroundColor = toCssColor(backgroundColor);
    }
  }
  if (imgFit) {
    // must be here otherwise will be conflict between binding and classes
    switch (imgFit) {
      case imgFitEnum.CUSTOM:
        break;
      case imgFitEnum.CONTAIN:
      case imgFitEnum.COVER:
        // backgroundSizes.push(imgFit)
        backgroundSizes.unshift(imgFit);
        data.backgroundSize = backgroundSizes.join(", ");
        break;
      default:
        break;
    }
  }
  // && opacity !== 100, must set opacity even if 100 because of state like hover...
  if (opacity != null) {
    data.opacity = opacity / 100;
  }

  return data;
}

function typoDataProcessor({
  fontColor,
  fontSize,
  adjustFontSize,
  fontFamily,
  fontFormat,
  fontWeight,
  width,
  widthUnit = sizeUnitEnum.PERCENTAGE,
  minWidth,
  textAlign,
  lineHeight,
  letterSpace,
  textShadow,
}) {
  const data = {
    color: null,
    fontSize: null,
    fontFamily: null,
    fontStyle: null,
    fontWeight: null,
    textDecoration: null,
    width: null,
    minWidth: null,
    textAlign: null,
    lineHeight: null,
    letterSpacing: null,
    textShadow: null,
  };
  if (fontColor) data.color = toCssColor(fontColor);

  if (!adjustFontSize && fontSize != null && fontSize > 1 && fontSize < 100)
    data.fontSize = `${fontSize}px`;

  if (textAlign && textAlign !== hAlignEnum.JUSTIFY) data.textAlign = textAlign;

  if (fontFamily) data.fontFamily = fontFamily;

  if (lineHeight > 0) data.lineHeight = `${lineHeight}px`;

  if (letterSpace != null)
    data.letterSpacing = letterSpace === 0 ? "normal" : `${letterSpace}px`;

  if (isArray(fontFormat)) {
    const textDecoration = [];
    fontFormat.forEach((format) => {
      switch (format) {
        case fontFormatEnum.BOLD:
          data.fontWeight = "bold";
          break;
        case fontFormatEnum.ITALIC:
          data.fontStyle = "italic";
          break;
        case fontFormatEnum.STRIKETHROUGH:
          textDecoration.push("line-through");
          break;
        case fontFormatEnum.UNDERLINED:
          textDecoration.push("underline");
          break;
        default:
          console.warn(`fontFormat ${format} not managed`);
      }
    });
    if (textDecoration.length > 0)
      data.textDecoration = textDecoration.join(" ");
  }
  if (fontWeight != null) data.fontWeight = fontWeight;

  if (width != null) data.width = `${width}${widthUnit}`;

  if (minWidth != null) data.minWidth = `${minWidth}px`;

  if (isArray(textShadow) && textShadow.length > 0)
    data.textShadow = toCssBoxShadow(textShadow, true);

  return data;
}

function styleToClass(style) {
  return cxs({
    ":not(#\\ ) ": style,
  });
}

// Outer slot
function outerTypoCssProcessor(data) {
  return typoDataProcessor(data);
}

function outerBackgroundCssProcessor({
  img,
  imgFit,
  backgroundColor,
  opacity,
}) {
  return backgroundDataProcessor(img, imgFit, backgroundColor, opacity);
}

function outerPositionCssProcessor({
  w,
  widthUnit,
  h,
  heightUnit,
  margin,
  adjustFontSize,
}) {
  const data = {
    height: null,
    width: null,
    minHeight: null,
    minWidth: null,
    padding: null,
    fontSize: null,
  };
  if (adjustFontSize) {
    let value;
    if (h != null && w != null) {
      if (widthUnit === heightUnit) {
        if (w < h) {
          value = textResizer(widthUnit, w);
        } else {
          value = textResizer(heightUnit, h);
        }
      } else if (widthUnit === sizeUnitEnum.PX) {
        value = textResizer(widthUnit, w);
      } else {
        value = textResizer(heightUnit, h);
      }
    } else if (w) {
      value = textResizer(widthUnit, w);
    } else if (h) {
      value = textResizer(heightUnit, h);
    }
    if (value) {
      data.fontSize = `${Math.max(Math.min(value, parseFloat(1 / 0)), 12)}px`;
    }
  }
  if (h !== undefined) {
    data.height = toCssUnit(h, heightUnit);
    if (h != null) {
      data.minHeight = heightUnit !== sizeUnitEnum.PERCENTAGE ? data.height : 0;
    }
  }
  if (w !== undefined) {
    data.width = toCssUnit(w, widthUnit);
    if (w != null) {
      data.minWidth = widthUnit !== sizeUnitEnum.PERCENTAGE ? data.width : 0;
    }
  }
  if (isArray(margin) && margin.some((m) => m)) {
    data.padding = margin.map((m) => `${m || 0}px`).join(" ");
  }

  return data;
}

export function outerCssProcessor(data) {
  return (
    data &&
    styleToClass({
      ...outerTypoCssProcessor(data),
      ...outerBackgroundCssProcessor(data),
      ...outerPositionCssProcessor(data),
    })
  );
}

// Inner slot
function innerPositionCssProcessor({ maxW, maxH, hAlign, vAlign, cursor }) {
  const data = {
    maxWidth: null,
    maxHeight: null,
    height: null,
    width: null,
    marginRight: null,
    marginLeft: null,
    marginTop: null,
    marginBottom: null,
    cursor: null,
  };
  if (maxW != null) {
    data.maxWidth = `${maxW}px`;
  }
  if (maxH != null) {
    data.maxHeight = `${maxH}px`;
  }
  switch (vAlign) {
    case vAlignEnum.TOP:
      data.height = "auto";
      data.marginBottom = "auto";
      break;
    case vAlignEnum.MIDDLE:
      if (maxH == null) {
        data.marginTop = "auto";
        data.height = "auto";
        data.marginBottom = "auto";
      } else {
        data.marginTop = "auto";
        data.marginBottom = "auto";
      }
      break;
    case vAlignEnum.BOTTOM:
      data.marginTop = "auto";
      data.height = "auto";
      break;
    case vAlignEnum.JUSTIFY:
      break;
    default:
      break;
  }
  switch (hAlign) {
    case hAlignEnum.LEFT:
      data.width = "auto";
      data.marginRight = "auto";
      break;
    case hAlignEnum.CENTER:
      if (maxW == null) {
        data.marginLeft = "auto";
        data.width = "auto";
        data.marginRight = "auto";
      } else {
        data.marginLeft = "auto";
        data.marginRight = "auto";
      }
      break;
    case hAlignEnum.RIGHT:
      data.marginLeft = "auto";
      data.width = "auto";
      break;
    case hAlignEnum.JUSTIFY:
      break;
    default:
      break;
  }
  if (cursor) {
    data.cursor = cursor;
  }
  return data;
}

function innerTransformCssProcessor({
  translate,
  matrix,
  rotate,
  scale,
  clip,
}) {
  const data = {
    transform: null,
    clipPath: null,
  };
  const transformations = [];
  if (matrix) {
    transformations.push(`matrix3d(${matrix.join(",")})`);
  }
  if (isNumber(rotate)) {
    transformations.push(`rotate(${rotate}deg)`);
  }
  if (scale) {
    transformations.push(`scale(${scale[0]}, ${scale[1]})`);
  }
  if (translate) {
    transformations.push(`translate(${translate[0]}px, ${translate[1]}px)`);
  }
  if (transformations.length) {
    data.transform = transformations.join(" ");
  }
  if (clip) {
    data.clipPath = clip;
  }

  return data;
}

export function innerCssProcessor(data) {
  return (
    data &&
    styleToClass({
      ...innerPositionCssProcessor(data),
      ...innerTransformCssProcessor(data),
    })
  );
}

// Property slot
// Padding is originally an array
function propertySpaceCssProcessor({ padding }: ElementStyle) {
  let stringPadding: string | null = null;
  if (isArray(padding) && padding.some((p) => p > 0)) {
    stringPadding = padding.map((p) => `${p || 0}px`).join(" ");
  }
  return { padding: stringPadding };
}

function propertyBackgroundCssProcessor({
  innerImg,
  innerImgFit,
  innerBackgroundColor,
  innerOpacity,
  color,
}: ElementStyle) {
  return backgroundDataProcessor(
    innerImg,
    innerImgFit,
    innerBackgroundColor,
    innerOpacity,
    color
  );
}

function propertyBorderCssProcessor({
  border,
  borderColor,
  borderRadius,
  borderStyle,
  canOverflow,
}: ElementStyle) {
  const data = {
    borderWidth: null,
    borderColor: null,
    borderStyle: null,
    borderRadius: null,
    overflow: null,
  };
  if (isArray(border) && border.some((b) => b)) {
    data.borderWidth = border.map((br) => `${br || 0}px`).join(" ");
  }
  if (data.borderWidth && borderStyle) {
    data.borderStyle = borderStyle;
  }
  if (borderColor) {
    data.borderColor = toCssColor(borderColor);
  }
  if (isArray(borderRadius) && borderRadius.some((b) => b)) {
    data.borderRadius = borderRadius.map((br) => `${br || 0}px`).join(" ");
  } else if (isString(borderRadius)) {
    data.borderRadius = borderRadius;
  }
  if (data.borderRadius || canOverflow === false) {
    data.overflow = overflowEnum.HIDDEN;
  }

  return data;
}

function propertyTransformCssProcessor({ zoom }: ElementStyle) {
  const data = {
    transform: null,
    transformOrigin: null,
    width: null,
    height: null,
    flex: null,
  };
  if (zoom != null && zoom !== 100) {
    const scale = zoom / 100;
    data.transform = `scale(${scale})`;
    data.transformOrigin = "0 0";
    data.width = `${100 / scale}%`;
    data.height = `${100 / scale}%`;
    data.flex = "none";
  }

  return data;
}

function propertyBoxShadowCssProcessor({ boxShadow }: ElementStyle) {
  const data = {
    boxShadow: null,
  };
  if (isArray(boxShadow) && boxShadow.length > 0) {
    data.boxShadow = toCssBoxShadow(boxShadow);
  }
  return data;
}

export function propertyCssProcessor(style: ElementStyle) {
  return (
    style &&
    styleToClass({
      ...propertySpaceCssProcessor(style),
      ...propertyBackgroundCssProcessor(style),
      ...propertyBorderCssProcessor(style),
      ...propertyTransformCssProcessor(style),
      ...propertyBoxShadowCssProcessor(style),
    })
  );
}
// Label slot
export function labelCssProcessor(data) {
  if (data) {
    const {
      labelColor,
      labelFontSize,
      labelWidthUnit,
      labelFontFamily,
      labelFontFormat,
      labelWidth,
      minLabelWidth,
    } = data;
    return styleToClass(
      typoDataProcessor({
        fontColor: labelColor,
        fontSize: labelFontSize,
        fontFamily: labelFontFamily,
        fontFormat: labelFontFormat,
        width: labelWidth,
        widthUnit: labelWidthUnit,
        minWidth: minLabelWidth,
      })
    );
  }
}
