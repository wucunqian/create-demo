/**
 * Author: wucunqian 2801531707@qq.com
 * Date: 2024-07-13 15:27:54
 * LastEditors: wucunqian 2801531707@qq.com
 * LastEditTime: 2024-07-13 15:31:36
 * FilePath: \create-demo\src\api\loginapi.ts
 * Description: 调用 loginapi 接口
 * 
 * Copyright (c) 2024 by ${wucunqian 2801531707@qq.com}, All Rights Reserved. 
 */
import request from '../utils/axios';
export const loginapi = (params) => {
  return request.post('/', params, { slientError: true, loading: true });
};
