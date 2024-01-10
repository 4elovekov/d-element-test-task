import { commonComponentProps, getAttrs } from "../../../shared/lib";

export function Card(props) {

    const {
        extraClasses = {},
        extraAttrs = {},
        baseClass = "card",
        getCN,
        imageSrc,
        title,
        text,
        link,
    } = { ...commonComponentProps, ...props }

    const getClassName = (elem, mod) => getCN(baseClass, elem, mod)
    const defaultText = "xx";
    const defaultLink = "#top";

    
    return `
            <div class="${getClassName("", extraClasses)}" ${getAttrs(extraAttrs)}>
                <img src="${imageSrc}" class="${getClassName("image")}" alt="card image"/>
                <div class="${getClassName("title")}">${title}</div>
                <p class="${getClassName("text")}">${text || defaultText}</p>
                <div class="${getClassName("link")}">
                    <a href="${link || defaultLink}">Learn more</a>
                    <img src="/images/arrow_right.svg" alt="card image"/>
                </div>
            </div>
            `

} 