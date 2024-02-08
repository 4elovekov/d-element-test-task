export const transformHtmlPlugin = () => ({
    name: "transform-html",
    transformIndexHtml: {
        transform(html) {
            console.debug(html)
            return html;
        }
    }
});

export default function templatePlugin() {
    return {
        name: "vite-plugin-template",
        configureServer: ({ middlewares }) => {
            // eslint-disable-next-line no-unused-vars
            middlewares.use(async (req, res, next) => {
                console.debug(req.url)
                console.debug(req)
            });
        },
    };
}