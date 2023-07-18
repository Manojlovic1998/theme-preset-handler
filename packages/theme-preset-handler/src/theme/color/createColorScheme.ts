import Color from "color";

import {
  ColorGradient,
  ColorPalette,
  ColorScheme,
  GreyScale,
} from "./ColorScheme";

const defaultPalette: ColorPalette = {
  red: "#E06C75",
  green: "#98C379",
  yellow: "#E5C07B",
  blue: "#61AFEF",
  purple: "#C678DD",
  cyan: "#56B6C2",
  orange: "#FFBB7C",
};

const getGreyScale = (base: string): GreyScale => {
  const color = Color(base);

  const greyScale: GreyScale = {
    shade: color.darken(0.2).rgb().string(),
    base: color.rgb().string(),
    surface: color.lighten(0.2).rgb().string(),
    highlight: color.lighten(0.4).rgb().string(),
  };

  let prop: keyof GreyScale;
  for (prop in greyScale) {
    greyScale[prop] = greyScale[prop].replace("rgb(", "").replace(")", "");
  }

  return greyScale;
};

const getColorGradient = (base: string, isInverted: boolean): ColorGradient => {
  const color = Color(base);
  if (isInverted) {
    const invertedColorGradient: ColorGradient = {
      bg: color.lighten(0.5).rgb().string(),
      base: color.rgb().string(),
      fg: color.darken(0.5).rgb().string(),
    };

    let prop: keyof ColorGradient;
    for (prop in invertedColorGradient) {
      invertedColorGradient[prop] = invertedColorGradient[prop]
        .replace("rgb(", "")
        .replace(")", "");
    }
    return invertedColorGradient;
  }

  const colorGradient: ColorGradient = {
    bg: color.darken(0.5).rgb().string(),
    base: color.rgb().string(),
    fg: color.lighten(0.5).rgb().string(),
  };

  let prop: keyof ColorGradient;
  for (prop in colorGradient) {
    colorGradient[prop] = colorGradient[prop]
      .replace("rgb(", "")
      .replace(")", "");
  }

  return colorGradient;
};

export type BaseColors = {
  bg: string;
  fg: string;
  primary: string;
  secondary: string;
};

/**
 * Function to create color schemes
 *
 * @param name the name of your color scheme
 * @param base the base colors which are used to create the gradients
 * @param palette the color palette, defaults to the one from the atom theme
 *
 * @returns the color scheme object
 */

export const createColorScheme = (
  name: string,
  base: BaseColors,
  palette = defaultPalette
): ColorScheme => ({
  name: name,

  bg: getGreyScale(base.bg),
  fg: getGreyScale(base.fg),

  primary: getColorGradient(base.primary, Color(base.bg).isLight()),
  secondary: getColorGradient(base.secondary, Color(base.bg).isLight()),

  palette,
});
