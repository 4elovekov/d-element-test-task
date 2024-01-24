import OpenAndCloseModals from "../features/openAndCloseModals/model/index.js"
import Validation from "../features/validation/model/index.js"
import "./style.pcss"
import "../entities/card/style.pcss"
import "../entities/modalForm/style.pcss"
import "../entities/modalSuccess/style.pcss"
import "../pages/index/style.pcss"
import "../shared/ui/button/style.pcss"
import "../shared/ui/navigation/style.pcss"
import "../widgets/footer/style.pcss"

const runApp = async () => {
    const runFeatures = async() => {
        new OpenAndCloseModals()
        new Validation()
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