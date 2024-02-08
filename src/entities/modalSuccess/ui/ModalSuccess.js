import { commonComponentProps, getAttrs } from "../../../shared/lib";

export function ModalSuccess(props) {

    const {
        extraClasses = {},
        extraAttrs = {},
        baseClass = "modalSuccess",
        getCN,
    } = { ...commonComponentProps, ...props }

    const getClassName = (elem, mod) => getCN(baseClass, elem, mod)

    
    return `
            <div class="${getClassName("", extraClasses)}" ${getAttrs(extraAttrs)}>
                <img src="/images/cross.svg" alt="cross">
                <h2 class="${getClassName("title")}">SUCCESS!</h2>
            </div>
            `

} 