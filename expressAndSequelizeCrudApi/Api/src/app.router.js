// import routers
import { router as userRouter } from './modules/user/user.router.js'
import { router as productRouter } from './modules/product/product.router.js'


const initApp = (app, express) => {

    // Convert Buffer to JSON
    app.use(express.json())

    // App Routing  
    app.get('/', (req, res) => res.send('Hello World!'))
    app.use('/user', userRouter)
    app.use('/product', productRouter)

    //Errors Handling
    app.use("*", (req, res) => {
        res.status(404).json({ message: '404 Not Found' })
    })

}

export {
    initApp
}