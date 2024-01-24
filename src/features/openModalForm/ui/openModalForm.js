import { commonComponentProps } from "../../../shared/lib";
import { Button } from "../../../shared/ui/button";

export function OpenModalForm(props) {

    const {
        extraClasses = {},
        extraAttrs = {},
    } = { ...commonComponentProps, ...props }

    return `
            ${Button({
                label: "Let’s Talk",
                extraAttrs: extraAttrs,
                extraClasses: extraClasses
            })}
            `
} 