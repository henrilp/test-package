import { imgFitEnum } from "../constants/enums";

export interface ElementProps {
  className: string;
  value: string;
  options?: Options;

  // not used for now
  lazyValue?: string;
  deactivated?: boolean;
}

export interface Options {
  // ANIMATIONS
  animation?: string; //`left-rotation`
  animationIn?: string; // `fadeInLeftBig`
  animationOut?: string; // TODO put enum ?

  lazyOptions?: LazyOptions;
  style?: ElementStyle;

  // CSS STATE (hover etc)
  $state?: { selected?: boolean };
  $inheritState?: ElementCssState;
  $containerParent?: { [key: string]: boolean };

  labelPosition?: string; // TODO put enum
  click?: (e?: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>) => void;
  href?: string;
  hasTransform?: boolean;

  // Image Specific
  alt?: string;
  defaultImage?: string;
  imgFit?: imgFitEnum;

  // Container Specific (scroll)
  flexDirection?: string;
  overflow?: string;
  bgType?: number;
  videoOptions?: {
    src: string;
  };

  // Button Specific
  buttonIcon?: any;
}

export interface LazyOptions {
  [key: string]: any;
  // EXAMPLE
  // throttle: 1200
  // once: true
  // intersection: { threshold: 0.1 }
}

export interface ElementStyle {
  // space
  padding?: Array<number>;

  // background property
  innerImg?: string;
  innerImgFit?: imgFitEnum;
  innerBackgroundColor?: string;
  innerOpacity?: number;
  color?: string;

  // border
  border?: Array<number>;
  borderColor?: Array<number>;
  borderRadius?: any;
  borderStyle?: any;
  canOverflow?: any;

  // transform
  zoom?: number;

  // boxShadow
  boxShadow?: Array<any>;

  // EXAMPLE
  // color: `$invert`
  // innerBackgroundColor: appData.theme.primaryColor
}

export interface ElementCssState {
  hover?: boolean;
}

export interface FullComponentProps {
  code: string;
  children: string;
  options?: Options;
}
