import { commonComponentProps, getAttrs } from "../../../shared/lib";

export function Footer(props) {

    const {
        extraClasses = {},
        extraAttrs = {},
        baseClass = "footer",
        getCN
    } = { ...commonComponentProps, ...props }

    const getClassName = (elem, mod) => getCN(baseClass, elem, mod)

    return `
            <footer class="${getClassName("", extraClasses)}" ${getAttrs(extraAttrs)}>

            </footer>
            `
}