const runApp = async () => {
    const runWidgets = async() => {
        await Promise.all(Object.keys(import.meta.glob("../**/*.pcss", { "query": "?inline" })).map(path => import(/* @vite-ignore */`${path}`).then((module) => module?.default ?? module)))
    }

    switch (process.env.NODE_ENV) {
        case "development":
            console.debug("App dev run")
            runWidgets()
            break;
            
        case "production":
            runWidgets()

    }
}

runApp()
    .catch((err) => {
        console.error(err)
    })