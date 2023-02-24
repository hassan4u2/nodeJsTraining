// import db
import { connectDB } from '../DB/dbConnection.js'
// import routers
import { router as userRouter } from './modules/user/user.router.js'
import { router as productRouter } from './modules/product/product.router.js'
import { router as authRouter } from './modules/auth/auth.router.js'

const initApp = (app, express) => {
    // Connect to the database
    connectDB()

    // Convert Buffer to JSON
    app.use(express.json())
    // App Routing  
    app.get('/', (req, res) => res.json({ message: 'ApiHomePage' }))
    app.use('/user', userRouter)
    app.use('/product', productRouter)
    app.use('/auth', authRouter)
    //Errors Handling
    app.use("*", (req, res) => {
        res.status(404).json({ message: '404 Not Found' })
    })

}

export {
    initApp
}