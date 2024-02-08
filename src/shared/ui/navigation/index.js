import { commonComponentProps, getAttrs } from "../../lib/index.js";

export function Navigation (props) {
    const { extraClasses = {}, extraAttrs = {}, baseClass = "nav", getCN, children } = { ...commonComponentProps, ...props }
    const getClassName = (elem, mod) => getCN(baseClass, elem, mod)

    return `<nav class="${getClassName("",  extraClasses)}" ${getAttrs(extraAttrs)}>
                ${children || `
                    <a href="#" target="blank"><img src="/images/logo.png" class="${getClassName("logo")}" alt="logo"/></a>
                    <img src="/images/menu.svg" class="${getClassName("menu")}" alt="menu"/>
                `}
            </nav>   
            `
}