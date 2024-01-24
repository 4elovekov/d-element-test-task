import { commonComponentProps, getAttrs } from "../../../shared/lib";

export function ModalForm(props) {

    const {
        extraClasses = {},
        extraAttrs = {},
        baseClass = "modalForm",
        getCN,
        children,
    } = { ...commonComponentProps, ...props }

    const getClassName = (elem, mod) => getCN(baseClass, elem, mod)

    
    return `
            <div class="${getClassName("", extraClasses)}" ${getAttrs(extraAttrs)}>
                <img src="/images/cross.svg" alt="cross" class="${getClassName("cross")}">
                <h3 class="${getClassName("title")}">SEND US MESSAGE</h3>
                <form class="${getClassName("form")}">
                    <label class="${getClassName("fullName")}" for="fullName">Full Name</label>
                    <input type="text" id="fullName" autocomplete="name" placeholder="Your Name">

                    <label class="${getClassName("email")}" for="email">Email</label>
                    <input type="email" id="email" autocomplete="email" placeholder="Your Email">

                    <label class="${getClassName("message")}" for="message">Message</label>
                    <textarea rows="3" cols="1" type="text" id="message" autocomplete="off" placeholder="Your Message"></textarea>
                </form>
                ${children}
            </div>
            `

} 