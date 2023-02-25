import { connectDB } from '../DB/dbConnection.js'
import { router as authRouter } from './modules/auth/auth.router.js'
import { router as userRouter } from './modules/user/user.router.js'
import { router as commentRouter } from './modules/comment/comment.router.js'


const initApp = (app, express) => {
    console.log('App initialized')

    // Connect to the database
    connectDB()

    // Convert Buffer to JSON
    app.use(express.json())

    // App Routing  
    app.get('/', (req, res, next) => {
        res.json({ message: 'ApiHomePage' })
    })


    app.use('/user', userRouter)
    app.use('/auth', authRouter)
    app.use('/comment', commentRouter)

    // Error Handling
    app.use('*', (req, res, next) => {
        res.status(404).json({ message: 'Page not found' })
    })
}


export {
    initApp
}