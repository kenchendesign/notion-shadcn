import type { CSSProperties } from "react";
import React from "react";

import { SvgIcon } from "./SvgIcon";

export const iconGroupVariantNames = [
  "fillSmall",
  "small",
  "fill",
  "default",
] as const;

export const logoVariantNames = ["default", "darkMode"] as const;

const deprecatedIconGroupVariantNames = [
  "micro",
  "mini",
  "small",
  "default",
  "large",
  "extraLarge",
  "max",
] as const;

export type IconGroupVariantName = (typeof iconGroupVariantNames)[number];
export type DeprecatedIconGroupVariantName =
  (typeof deprecatedIconGroupVariantNames)[number];
export type LogoVariantName = (typeof logoVariantNames)[number];

export const iconVariantNames: (
  | IconGroupVariantName
  | DeprecatedIconGroupVariantName
  | LogoVariantName
)[] = [
  ...iconGroupVariantNames,
  ...deprecatedIconGroupVariantNames,
  ...logoVariantNames,
];

export type IconVariantName = (typeof iconVariantNames)[number];

export type IconFunction = (
  /**
   * The style to apply to the icon element.
   */
  style?: CSSProperties,
  /**
   * The class name to apply to the icon element.
   */
  className?: string,
  /**
   * If a label is provided, the icon will be visible and accessible
   * to assistive technologies.
   */
  label?: string,
) => React.ReactElement<typeof SvgIcon>;

export type IconDefinition = {
  svg: React.ReactNode;
  viewBox?: string;
  fittedViewBox?: string;
  directional?: boolean;
};

/**
 * This type is the common interface for all icon functions. When this function
 * is called, it will return the SVG representation of the icon. This function
 * takes 3 parameters:
 * - style: The CSS styles to apply to the icon element.
 * - className: The class name to apply to the icon element.
 * - label: If a label is provided, the icon will be visible and accessible
 *   to assistive technologies.
 */
export type LoadedIconFunction<
  V extends IconVariantName = IconVariantName,
> = IconFunction & {
  __iconDefinition: {
    variant?: V;
    svg: React.ReactNode;
    viewBox: string;
  };
};

export const ICON_SIZE = {
  xxs: 12,
  xs: 14,
  sm: 16,
  default: 20,
  lg: 22,
  xl: 32,
} as const;

export type IconSize = keyof typeof ICON_SIZE;

export const ICON_SIZE_MOBILE: Record<IconSize, number> = {
  xxs: 14,
  xs: 16,
  sm: 18,
  default: 22,
  lg: 26,
  xl: 32,
};

export const ICON_SIZE_FOR_VARIANT: Record<IconVariantName, number> = {
  default: ICON_SIZE.default,
  small: ICON_SIZE.sm,
  fill: ICON_SIZE.default,
  fillSmall: ICON_SIZE.sm,

  // For logos
  darkMode: ICON_SIZE.default,

  // TODO: TASK-227150 - We can remove these when we've replaced iconGroup with iconSet
  micro: 14,
  mini: 14,
  large: 24,
  max: 28,
  extraLarge: 36,
};

type DeprecatedIconGroupPromise = Promise<{
  default: IconDefinition;
}>;

type IconGroupPromise = Promise<{
  iconDefinition: IconDefinition;
}>;

export type IconVariant = {
  size?: number;
  // TODO: TASK-227150 - Deprecate and replace iconGroup with iconSet
  // Having both default and svgData is a temporary compromise to allow iconGroup and iconSet
  // to coexist.
  loader: () => DeprecatedIconGroupPromise | IconGroupPromise;
};

export type IconGroup<T extends IconVariantName> = {
  name: string;
  variants: Record<T, IconVariant>;
  searchTerms?: string[];
};

/**
 * Turns an icon definition into an icon function that can be rendered.
 *
 * @see {@link LoadedIconFunction}
 */
export function createIcon<V extends IconVariantName = IconVariantName>(
  name: string,
  iconDefinition: IconDefinition,
  variant?: V,
): LoadedIconFunction<V> {
  const { viewBox, svg } = iconDefinition;
  const finalViewBox =
    viewBox ?? `0 0 ${ICON_SIZE.default} ${ICON_SIZE.default}`;

  const iconFunction: IconFunction = (style, className) => {
    const finalClassName = className ? `${name} ${className}` : name;

    return (
      <SvgIcon viewBox={finalViewBox} className={finalClassName} style={style}>
        {svg}
      </SvgIcon>
    );
  };
  return Object.assign(iconFunction, {
    __iconDefinition: { ...iconDefinition, viewBox: finalViewBox, variant },
  }) as LoadedIconFunction<V>;
}

export function createIconGroup<T extends IconVariantName>(
  iconGroupName: string,
  variants: Record<T, IconVariant>,
  searchTerms?: string[],
): IconGroup<T> {
  return {
    name: iconGroupName,
    variants,
    searchTerms,
  };
}
