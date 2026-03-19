/* ================================================================================

	SvgIcon.

================================================================================ */

import type { CSSProperties, JSX } from "react";
import React from "react";

export interface SvgIconProps {
  children: React.ReactNode;
  viewBox: string;
  className: string;
  style?: CSSProperties;
  label?: string;
}

export function SvgIcon({
  children,
  viewBox,
  style,
  className,
  label,
}: SvgIconProps): JSX.Element {
  return (
    <svg
      /**
       * If a label is provided, we can make the icon accessible to assistive technologies. Otherwise,
       * we keep it hidden from assistive technologies using the `aria-hidden` attribute.
       */
      {...(label !== undefined
        ? { "aria-label": label }
        : { "aria-hidden": true })}
      /**
       * Set graphics-symbol role so we can easily identify icons in tests.
       */
      role="graphics-symbol"
      viewBox={viewBox}
      style={{
        width: "100%",
        height: "100%",
        display: "block", // Important for center align.
        fill: "inherit",
        flexShrink: 0,
        ...style,
      }}
      className={className}
    >
      {children}
    </svg>
  );
}
