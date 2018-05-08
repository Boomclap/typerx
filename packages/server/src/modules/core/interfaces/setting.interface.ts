import { Document } from 'mongoose';
export interface Setting extends Document {
    name: string;    // 设置项目名称
    key: string;	 // 设置项键名
    value: any;			// 设置值
    description: string;   // 设置描述
}