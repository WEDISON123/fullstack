import Router from '@koa/router';
import { getUser, 
    creatUser, 
    getUserByName, 
    deleteUserByName,
    getSwiper,
    deleteSwiper,
    creatSwiper
} from '../controllers/userControl';

const userRouter = new Router();

userRouter.get('/user', getUser)
userRouter.get('/user/:name', getUserByName)
userRouter.post('/user', creatUser)
userRouter.delete('/user/:name', deleteUserByName)
userRouter.get('/swiper', getSwiper)
userRouter.post('/swiper', creatSwiper)
userRouter.delete('/swiper/:title', deleteSwiper)

export default userRouter