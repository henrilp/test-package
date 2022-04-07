import { isString, isNumber, isArray } from 'lodash'
import tinycolor from 'tinycolor2'

export function toCssColor(value) {
  const gradient = toGradientColor(value)
  return gradient ? gradient.Colors[0] : value
}

function padZero(str, len) {
  len = len || 2
  const zeros = new Array(len).join('0')
  return (zeros + str).slice(-len)
}

export function invertColor(color, returnBlackOrWhite) {
  if (color) {
    try {
      color = tinycolor(color)
      if (color.isValid()) {
        let { r, g, b } = color.toRgb()
        const alpha = color.getAlpha()
        if (returnBlackOrWhite) {
          if (alpha === 0) return '#000000'
          // http://stackoverflow.com/a/3943023/112731
          return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? '#000000' : '#FFFFFF'
        }
        // invert color components
        r = (255 - r).toString(16)
        g = (255 - g).toString(16)
        b = (255 - b).toString(16)
        // pad each with zeros and return
        return `#${padZero(r)}${padZero(g)}${padZero(b)}`
      }
    } catch (e) {
      console.error('invertColor', e)
    }
  }
  return '#000000'
}

export function toCssGradientColor(value, forceGradient = false) {
  const gradient = toGradientColor(value)
  if (gradient) {
    if (gradient.Colors.length > 1) {
      return `linear-gradient(${gradient.Angle}deg,${gradient.Colors.join(
        ','
      )})`
    } else if (forceGradient === true && gradient.Colors.length > 0) {
      // causing wrong color
      return `linear-gradient(${gradient.Angle}deg,${[
        gradient.Colors[0],
        gradient.Colors[0],
      ].join(',')})`
    }
    return gradient.Colors[0] || ''
  }
  return value
}

export function toGradientColor(value) {
  if (value) {
    let gradient = value
    if (isString(value)) {
      if (value.startsWith('{') && value.endsWith('}')) {
        try {
          gradient = JSON.parse(value)
        } catch (ex) {}
      } else {
        return { Angle: 0, Colors: [value] }
      }
    }
    if (isNumber(gradient.Angle) && isArray(gradient.Colors)) return gradient
  }
  return undefined
}

export function toCssBoxShadow(value, textShadow = false) {
  if (value) {
    if (isArray(value)) {
      return value.length > 0
        ? value.map(v => toCssBoxShadow(v, textShadow)).join(', ')
        : undefined
    } else {
      const { h, v, br, sr, c, inset } = value
      return !textShadow
        ? `${inset ? 'inset ' : ''}${h}px ${v}px ${br}px ${sr}px ${c || ''}`
        : `${h}px ${v}px ${br}px ${c || ''}`
    }
  }
}
