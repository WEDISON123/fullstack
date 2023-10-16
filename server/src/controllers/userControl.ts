import { context } from 'koa';
// import bcrypt from 'bcrypt'
import User from '../models/user';
import Swiper from '../models/swiper';
import { UserType } from '../models/user';
import { SwiperType } from '../models/swiper';

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

// 后台管理删除用户
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

// 获取swiper表
export const getSwiper = async (ctx: context) => {
    try {
        const swiper = await Swiper.find();
        ctx.status = 200;
        ctx.body = swiper;
    } catch (error) {
        ctx.throw(500, error);
    }
}

// 删除特定的swiper
export const deleteSwiper = async (ctx: context) => {
    const { title } = ctx.params
    // console.log(title)
    try{
        const result = await Swiper.remove({ title: title })
        if(result) {
            console.log('remove success')
        }
        ctx.status = 200;
    } catch (error) {
        ctx.status = 400;
        ctx.body = { error: error.message };
    }
}

// 写入swiper
export const creatSwiper = async (ctx: context) => {
    try {
        const { title, img } = ctx.request.body;
        const find = await Swiper.findOne({ title: title})
        if(find) {
            ctx.status = 200
            ctx.body = '标题已存在'
        } else {
            const swiper = new Swiper({
                title,
                img
            });
            await swiper.save();
            ctx.status = 201;
        }
      } catch (error) {
        ctx.status = 400;
        ctx.body = { error: error.message };
      }
}