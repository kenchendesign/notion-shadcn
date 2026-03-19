"use client";

import type { IconSize, LoadedIconFunction } from "./iconUtils";
import { ICON_SIZE } from "./iconUtils";

export const ICON_WEIGHT = ["regular", "bold"] as const;

export type IconWeight = (typeof ICON_WEIGHT)[number];
export type IconColor =
  | "primary"
  | "secondary"
  | "tertiary"
  | "disabled"
  | "inversePrimary"
  | "inverseSecondary"
  | "bluePrimary"
  | "blueSecondary"
  | "blueTertiary"
  | "blueDisabled"
  | "blueAccentPrimary"
  | "blueInversePrimary"
  | "blueInverseSecondary"
  | "brownPrimary"
  | "brownSecondary"
  | "brownTertiary"
  | "brownDisabled"
  | "brownAccentPrimary"
  | "brownInversePrimary"
  | "brownInverseSecondary"
  | "grayPrimary"
  | "graySecondary"
  | "grayTertiary"
  | "grayDisabled"
  | "grayAccentPrimary"
  | "grayInversePrimary"
  | "grayInverseSecondary"
  | "greenPrimary"
  | "greenSecondary"
  | "greenTertiary"
  | "greenDisabled"
  | "greenAccentPrimary"
  | "greenInversePrimary"
  | "greenInverseSecondary"
  | "lightGrayPrimary"
  | "lightGraySecondary"
  | "orangePrimary"
  | "orangeSecondary"
  | "orangeTertiary"
  | "orangeDisabled"
  | "orangeAccentPrimary"
  | "orangeInversePrimary"
  | "orangeInverseSecondary"
  | "pinkPrimary"
  | "pinkSecondary"
  | "pinkTertiary"
  | "pinkDisabled"
  | "pinkAccentPrimary"
  | "pinkInversePrimary"
  | "pinkInverseSecondary"
  | "purplePrimary"
  | "purpleSecondary"
  | "purpleTertiary"
  | "purpleDisabled"
  | "purpleAccentPrimary"
  | "purpleInversePrimary"
  | "purpleInverseSecondary"
  | "redPrimary"
  | "redSecondary"
  | "redTertiary"
  | "redDisabled"
  | "redAccentPrimary"
  | "redInversePrimary"
  | "redInverseSecondary"
  | "tealPrimary"
  | "tealSecondary"
  | "tealTertiary"
  | "tealDisabled"
  | "tealAccentPrimary"
  | "tealInversePrimary"
  | "tealInverseSecondary"
  | "yellowPrimary"
  | "yellowSecondary"
  | "yellowTertiary"
  | "yellowDisabled"
  | "yellowAccentPrimary"
  | "yellowInversePrimary"
  | "yellowInverseSecondary";

export type IconProps = {
  icon: LoadedIconFunction;
  size?: IconSize | number;
  color?: IconColor | "inherit" | "currentColor" | "white";
  weight?: IconWeight;
  style?: React.CSSProperties;
  className?: string;
};

export function Icon({
  className,
  icon,
  style,
  size = "default",
  color = "primary",
  weight = "regular",
}: IconProps): React.ReactElement {
  const iconSize = typeof size === "number" ? size : ICON_SIZE[size];
  const iconColor =
    color === "inherit"
      ? "inherit"
      : color === "currentColor"
        ? "currentColor"
        : color === "white"
          ? "#ffffff"
          : `var(--icon-color-${color.replace(/([A-Z])/g, "-$1").toLowerCase()})`;

  const styles = {
    width: iconSize,
    height: iconSize,
    fill: iconColor,
    stroke: weight === "bold" ? iconColor : undefined,
    strokeWidth: weight === "bold" ? 0.3 : undefined,
    ...style,
  };

  return icon(styles, className);
}
