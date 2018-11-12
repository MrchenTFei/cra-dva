import { Map, fromJS } from 'immutable';
import { routerRedux } from 'dva/router';
import { config } from '../utils';

const { menuMap } = config;

const initState = Map({
  i18n: 'zh_CN',
  token: undefined,
  locationPathname: undefined,
  menu: menuMap,
})
export default {
 
  namespace: 'app',

  state: initState,

  subscriptions: {
    setup({ dispatch, history }) {

    },
    setupHistory({ dispatch, history }) {
      history.listen((location) => {
        dispatch({
          type: 'updateLocation',
          payload:{
            locationPathname: location.pathname,
          }
        });
        dispatch({
          type: 'updateToken',
          payload: {
            token: window.sessionStorage.getItem('token')
          }
        })
      })
    }
  },

  effects: {
    * changeLang({ payload: { value } }, { put, call, select }) {
      yield put({ type: 'updateLang', payload: { value } });
    },
    * updateLocation({ payload }, { put, select }) {
      yield put({ type: 'updateStore', payload })
    },
    * updateToken({ payload }, { put, select }) {
      yield put({ type: 'updateStore', payload })
    },
    * logout({ payload }, { put, select }) {
      const loginUrl = yield select(_ => _.app.getIn(['menu', 'byId', 'login', 'path']));

      window.sessionStorage.removeItem('token');
      yield put(routerRedux.push({
        pathname: loginUrl,
      }));
    },
    * loginOk ({ payload }, {put, select}) {
      const homeUrl = yield select(_ => _.app.getIn(['menu', 'byId', 'home', 'path']));

      window.sessionStorage.setItem('token',payload.token);
      yield put(routerRedux.push({
          pathname: homeUrl,
      }));
    },
    * goBack(_, { put }) {
      yield put(routerRedux.goBack());
    },
  },

  reducers: {
    updateLang(state, { payload: { value } }) {
      return state.set('i18n', value);
    },
    updateStore (state, { payload }) {
      return  payload ? state.mergeDeep(fromJS(payload)) : initState
    },
  },

};
