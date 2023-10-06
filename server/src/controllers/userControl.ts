import { context } from 'koa';
import bcrypt from 'bcrypt'
import User from '../models/user';
import { UserType } from '../models/user';

// get请求获取数据库数据
export const getUser = async (ctx: context) => {
    try {
        const user = await User.find();
        ctx.status = 200;
        ctx.body = user;
    } catch (error) {
        ctx.throw(500, error);
    }
}

// 查找指定用户
export const getUserByName = async (ctx: context) => {
    const { name } = ctx.params;
    try {
        const user:UserType | null = await User.findOne({ name: name });
        if(!user) {
            ctx.throw(404, '用户不存在')
        }
        ctx.status = 200;
        ctx.body = user;
    } catch (error) {
        ctx.throw(500, error);
    }
}

// 注册用户
export const creatUser = async (ctx: context) => {
    try {
        const { name, password } = ctx.request.body;
        // 查询用户是否已存在，确保用户不重复
        const find = await User.findOne({name: name});
        if(!find) {  
            // 用户密码加密
            // const hashedPassword = await bcrypt.hash(password, 10);
            const user = new User({
                name,
                password: password
            });
            await user.save();
            ctx.status = 201;
        }else {
            ctx.status = 200;
            ctx.body = '用户名已存在';
        }
      } catch (error) {
        ctx.status = 400;
        ctx.body = { error: error.message };
      }
}

export const deleteUserByName = async (ctx: context) => {
    const { name } = ctx.params
    try{
        const result = await User.remove({ name: name })
        if(result) {
            console.log('remove success')
        }
        ctx.status = 200;
    } catch (error) {
        ctx.status = 400;
        ctx.body = { error: error.message };
    }
}