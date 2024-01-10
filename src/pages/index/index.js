import { getPage } from "../../shared/lib/index.js";
import { Button } from "../../shared/ui/button/index.js";
import { Navigation } from "../../shared/ui/navigation/index.js";

export default () => {

    return getPage({
        title: "Afrianska",
        body: `
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
                <h2>What we do to help our client grow in digital era,</h2>
            </section>

        `,
    })
}