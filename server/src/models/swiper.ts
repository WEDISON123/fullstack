import { Schema, Document, model } from "mongoose";

// 定义类型约束 继承自 Document
export interface SwiperType extends Document {
    title: string;
    img: string;
}

// 定义简单的验证规则
const swiperSchema = new Schema<SwiperType>({
    title: {
        type: String,
        require: true
    },
    img: {
        type: String,
        required: true
    }
})

// 数据库表映射模型
const Swiper = model<SwiperType>('swiper', swiperSchema);

export default Swiper