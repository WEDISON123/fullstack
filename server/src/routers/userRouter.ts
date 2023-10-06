import Router from '@koa/router';
import { getUser, creatUser, getUserByName, deleteUserByName } from '../controllers/userControl';

const userRouter = new Router();

userRouter.get('/user', getUser)
userRouter.get('/user/:name', getUserByName)
userRouter.post('/user', creatUser)
userRouter.delete('/user/:name', deleteUserByName)

export default userRouter