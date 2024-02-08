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
    const defaultText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    const defaultLink = "#top";

    
    return `
            <div class="${getClassName("", extraClasses)}" ${getAttrs(extraAttrs)}>
            <div class="${getClassName("image")}"><img src="${imageSrc}" alt="card image"/></div>
                <div class="${getClassName("textBlock")}">
                    <h3 class="${getClassName("title")}">${title}</h3>
                    <p class="${getClassName("text")}">${text || defaultText}</p>
                    <a class="${getClassName("link")}" href="${link || defaultLink}">Learn more<img src="/images/arrow_right.svg" alt="card image"/></a>
                </div>
            </div>
            `

} 