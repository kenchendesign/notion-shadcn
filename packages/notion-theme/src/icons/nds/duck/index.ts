import type { IconGroup } from "../../iconUtils"
import { createIconGroup } from "../../iconUtils"

export const duckIconGroup: IconGroup<
	"default" | "small" | "fill" | "fillSmall"
> = createIconGroup(
	"duck",
	{
		default: {
			loader: () =>
				import(
					/* webpackChunkName: "icon-duck" */
					"./default.icon"
				),
		},
		small: {
			loader: () =>
				import(
					/* webpackChunkName: "icon-duck" */
					"./small.icon"
				),
		},
		fill: {
			loader: () =>
				import(
					/* webpackChunkName: "icon-duck" */
					"./fill.icon"
				),
		},
		fillSmall: {
			loader: () =>
				import(
					/* webpackChunkName: "icon-duck" */
					"./fillSmall.icon"
				),
		},
	},
	["duck", "rubber", "bird", "bath"],
)
