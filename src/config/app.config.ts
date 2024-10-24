export const appConfig =() => ({
    app: {
        port: parseInt(process.env.APP_PORT,10) || 8080
    },
})