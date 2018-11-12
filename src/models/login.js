import { message } from 'antd';

export default {
 
  namespace: 'login',

  state: {
    name:'这是login的model'
  },

  subscriptions: {
    
  },

  effects: {
    * login({ payload, values }, { put }) {
      console.log('------values', values, payload);
      if (values.username === 'admin' && values.password === '123456') {
        yield put({
          type: 'app/loginOk',
          payload: {
            token: '123abc'
          }
        });
      } else {
        message.warning('用户名或者密码错误')
      }
    }
  },

  reducers: {
    
  },

};