import { commonComponentProps, getAttrs } from "../../../shared/lib";

export function Footer(props) {

    const {
        extraClasses = {},
        extraAttrs = {},
        baseClass = "footer",
        getCN,
        children,
        text,
    } = { ...commonComponentProps, ...props }

    const getClassName = (elem, mod) => getCN(baseClass, elem, mod)
    const defaultText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."

    return `
            <footer class="${getClassName("", extraClasses)}" ${getAttrs(extraAttrs)}>
                <div class="${getClassName("title")}">
                    <div class="${getClassName("textBlock")}">
                        <h2>Intersted to work with our team?</h2>
                        <p>${text || defaultText}</p>
                    </div>
                    ${children}
                </div>
                <div class="${getClassName("line")}"></div>
                <div class="${getClassName("main")}">
                    <div class="${getClassName("info")}">
                        <div class="${getClassName("contacts")}">
                            <div class="${getClassName("subTitle")}">
                                <img src="/images/footer_logo.png" alt="logo">
                                <h3>Afrianska</h3>
                            </div>
                            <div class="${getClassName("text")}">
                                <p>A.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                            <div class="${getClassName("text")}">
                                <p>T.</p>
                                <a href="tel:+6281273134321">+62-812-7313-4321</a>
                            </div>
                            <div class="${getClassName("text")}">
                                <p>E.</p>
                                <a href="mailto:hello.afrian@gmail.com">hello.afrian@gmail.com</a>
                            </div>
                        </div>
                        <div class="${getClassName("about")}">
                            <div class="${getClassName("subTitle")}"><h3>About US</h3></div>
                            <div class="${getClassName("text")}"><p>About</p></div>
                            <div class="${getClassName("text")}"><p>What We Do</p></div>
                            <div class="${getClassName("text")}"><p>Project</p></div>
                            <div class="${getClassName("text")}"><p>How It Work With Us</p></div>
                        </div>
                        <div class="${getClassName("follow")}">
                            <div class="${getClassName("subTitle")}"><h3>Follow US</h3></div>
                            <div class="${getClassName("text")}"><p>Instagram</p></div>
                            <div class="${getClassName("text")}"><p>Facebook</p></div>
                            <div class="${getClassName("text")}"><p>LinkedIn</p></div>
                            <div class="${getClassName("text")}"><p>Youtube</p></div>
                        </div>
                    </div>
                    <div class="${getClassName("rights")}"><p>2019 © Afrianska. All rights reserved.</p></div>
                </div>
            </footer>
            `
}