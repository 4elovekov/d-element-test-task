import OpenAndCloseModals from "../features/openAndCloseModals/model/index.js"
import Validation from "../features/validation/model/index.js"

const runApp = async () => {
    const runFeatures = async() => {
        new OpenAndCloseModals()
        new Validation()
        await Promise.all(Object.keys(import.meta.glob("../**/*.pcss", { "query": "?inline" })).map(path => import(/* @vite-ignore */`${path}`).then((module) => module?.default ?? module)))
    }

    switch (process.env.NODE_ENV) {
        case "development":
            console.debug("App dev run")
            runFeatures()
            break;
            
        case "production":
            runFeatures()

    }
}

runApp()
    .catch((err) => {
        console.error(err)
    })