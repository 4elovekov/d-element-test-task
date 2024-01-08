import { getPage } from "../../shared/lib/index.js";
import { Button } from "../../shared/ui/button/index.js";

export default () => {

    return getPage({
        title: "Afrianska",
        body: `
            ${Button({
                label: "See Our Project",
            })}
        `,
    })
}