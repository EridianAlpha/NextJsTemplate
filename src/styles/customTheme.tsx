import { extendTheme } from "@chakra-ui/react"
import type { StyleFunctionProps } from "@chakra-ui/styled-system"
import { cssVar } from "@chakra-ui/theme-tools"
import { lighten, darken } from "polished"

function lightenColor(mainColor, value) {
    return lighten(value, mainColor)
}
function darkenColor(mainColor, value) {
    return darken(value, mainColor)
}

const customTheme = extendTheme({
    styles: {
        global: (props: StyleFunctionProps) => ({
            ".bgPage": {
                bg: props.colorMode === "dark" ? "pageBackground.dark" : "pageBackground.light",
            },
            ".tooltip": {
                bg:
                    props.colorMode === "dark"
                        ? `${lightenColor(props.theme.colors.pageBackground.dark, 0.1)} !important`
                        : `${darkenColor(props.theme.colors.pageBackground.light, 0.05)} !important`,
                [cssVar("popper-arrow-bg").variable]:
                    props.colorMode === "dark"
                        ? `${lightenColor(props.theme.colors.pageBackground.dark, 0.1)} !important`
                        : `${darkenColor(props.theme.colors.pageBackground.light, 0.05)} !important`,
            },
            ".tooltipLabel": {
                paddingX: "10px",
                paddingY: "5px",
                borderRadius: "7px",
                color: "var(--chakra-colors-chakra-body-text)",
            },
            // Increase the tooltip arrow size
            "div .chakra-tooltip__arrow": {
                width: "130% !important",
                height: "130% !important",
            },
        }),
    },
    components: {
        Code: {
            baseStyle: (props: StyleFunctionProps) => ({
                bg: props.colorMode === "dark" ? "pageBackgroundHover.dark" : "contentBackground.light",
            }),
        },
        Drawer: {
            variants: {
                solid: (props) => ({
                    dialog: {
                        bg: props.colorMode === "dark" ? "pageBackground.dark" : "pageBackground.light",
                    },
                }),
            },
            defaultProps: {
                variant: "solid",
            },
        },
        Button: {
            variants: {
                HeaderButton: (props: StyleFunctionProps) => ({
                    bg: props.colorMode === "dark" ? lightenColor(props.theme.colors.pageBackground.dark, 0.1) : "contentBackground.light",
                    _hover: {
                        bg:
                            props.colorMode === "dark"
                                ? lightenColor(props.theme.colors.pageBackground.dark, 0.2)
                                : darkenColor(props.theme.colors.contentBackground.light, 0.15),
                    },
                    _active: {
                        bg:
                            props.colorMode === "dark"
                                ? lightenColor(props.theme.colors.pageBackground.dark, 0.3)
                                : darkenColor(props.theme.colors.contentBackground.light, 0.2),
                    },
                }),
            },
        },
    },
    colors: {
        pageBackground: {
            light: "#FFFFFF",
            dark: "#0f0536",
        },
        pageBackgroundHover: {
            light: "#EDF2F7",
            dark: "#2a114c",
        },
        contentBackground: {
            light: "#EDF2F7",
            dark: "#0e052c",
        },
        border: {
            light: "#D3D3D3",
            dark: "#54199b",
        },
        checklistBar: {
            light: "#dfdfdf",
            dark: "#0c081b",
        },
        tableBorder: {
            light: "#EDF2F7",
            dark: "rgb(255, 255, 255, 0.2)",
        },
        divider: {
            light: "#dfdfdf",
            dark: "rgb(255, 255, 255, 0.2)",
        },
        gold: "#e7c60d",
        red: "#EC420C",
        green: "#289e33",
        blue: "#0da6d8",
        pink: "#b124b1",
        purple: "#54199b",
        orange: "#d66b13",
    },
})

export default customTheme
