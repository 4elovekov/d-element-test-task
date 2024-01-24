import { defaultMeta } from "../config/constants.js";
import { withNaming } from "@bem-react/classname";

export const getPage = ({ body = ``, title = ``, meta = [] }) => {
  return `
    <!DOCTYPE html>
    <html lang="ru">
      <head>
        ${[ ...defaultMeta, ...meta ].join("")}
        <title>${title}</title>
        <script src="src/app/App.js" defer type="module"></script>
      </head>
      <body>
        ${body}
      </body>
    </html>
  `
}

export const commonComponentProps = {
  extraClasses: {},
  extraAttrs: {},
  children: ``,
  getCN: (block = "", elem = "", mod = {}) => {
      return withNaming({
          n: "",
          e: "__",
          m: "--",
          v: "-"
      })(block, elem)(mod)
  }
}

export const getAttrs = (attrs) => {
  const result = []
  Object.entries(attrs).forEach(([ key, value ]) => {
      result.push(`${key}=${value}`);
  })
  return result.join(" ")
}