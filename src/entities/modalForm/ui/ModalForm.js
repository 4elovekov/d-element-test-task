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
                <h3 class="${getClassName("title")}">SEND US MESSAGE</h3>
                <form class="${getClassName("form")}">
                    <label class="${getClassName("fullName")}" for="fullName">Full Name</label>
                    <input type="text" id="fullName" placeholder="Your Name">

                    <label class="${getClassName("email")}" for="email">Email</label>
                    <input type="text" id="email" placeholder="Your Email">

                    <label class="${getClassName("message")}" for="message">Message</label>
                    <input type="text" id="message" placeholder="Your Message">
                </form>
                ${children}
            </div>
            `

} 