import { getPage } from "../../shared/lib/index.js";
import { Button } from "../../shared/ui/button/index.js";
import { Navigation } from "../../shared/ui/navigation/index.js";
import { Card } from "../../entities/card/index.js";
import { Footer } from "../../widgets/footer/index.js"
import { ModalForm } from "../../entities/modalForm/index.js"

export default () => {

    return getPage({
        title: "Afrianska",
        body: `
            ${ModalForm()}
            <section class="hero">
                <div class="hero__gradient"></div>
                ${Navigation()}
                <div class="hero__screen">
                    <div class="hero__textBlock">
                        <h1>New Automation Tool for Your Home</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus tristique vulputate ultrices ut mauris tellus at. Posuere sollicitudin odio tellus elit.</p>
                        ${Button({
                            label: "See Our Project",
                        })}
                    </div>
                    <img src="images/illustration.png" alt="illustration">
                </div>
            </section>
            <section class="assist">
                <div class="assist__leftSide">
                    <h2>What we do to help our client grow in digital era,</h2>
                    ${Card({
                        imageSrc: "/images/card_image2.svg",
                        title: "Make Your business To Be Better Famous In Internet",
                    })}
                </div>
                <div class="assist__rightSide">
                    ${Card({
                        imageSrc: "/images/card_image1.svg",
                        title: "Bring Technology To Your Comfrotable Home",
                    })}
                    ${Card({
                        imageSrc: "/images/card_image3.svg",
                        title: "Build Your Digital Product That Suitable For Your Need",
                    })}
                </div>
            </section>
            <section class="client">
                <div class="client__container">
                    <div class="client__title">
                        <h2>Our Beloved Client</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                    <div class="logoClients">
                        <div class="logoClients__item"><p>LOGO CLIENT 1</p></div>
                        <div class="logoClients__item"><p>LOGO CLIENT 2</p></div>
                        <div class="logoClients__item"><p>LOGO CLIENT 3</p></div>
                        <div class="logoClients__item"><p>LOGO CLIENT 4</p></div>
                        <div class="logoClients__item"><p>LOGO CLIENT 5</p></div>
                        <div class="logoClients__item"><p>LOGO CLIENT 6</p></div>
                        <div class="logoClients__item"><p>LOGO CLIENT 7</p></div>
                        <div class="logoClients__item logoClients__moreClients"><p>More Client</p></div>
                        <div class="logoClients__item"></div>
                    </div>
                </div>
                ${Footer({
                    children: Button({ label: "Let’s Talk" })
                })}
            </section>
            

        `,
    })
}