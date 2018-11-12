import { OrderedSet, Map, fromJS } from 'immutable';

const menuGlobal=[
  {
      id:'aaa',
      pid:'0',
      name:'aaa页',
      icon:'user',
      path: '/aaa',
      models: () => [import('../models/aaa')], //models可多个
      component: () => import('../routes/AAA'),
  }, 
  {
      id:'bbb',
      pid:'0',
      name:'bbb页',
      icon:'user',
      path: '/aaa/bbb',
      models: () => [import('../models/bbb')], //models可多个
      component: () => import('../routes/BBB'),
  }, 
  {
      id:'ccc',
      pid:'0',
      name:'ccc页',
      icon:'user',
      path: '/ccc',
      models: () => [import('../models/ccc')], //models可多个
      component: () => import('../routes/CCC'),
  },
  {
    id:'login',
    pid:'0',
    name:'login页',
    icon:'user',
    path: '/login',
    models: () => [import('../models/login')], //models可多个
    component: () => import('../routes/Login'),
  },
  {
    id:'home',
    pid:'0',
    name:'home页',
    icon:'user',
    path: '/',
    models: () => [import('../models/home')], //models可多个
    component: () => import('../routes/home'),
  },
];

const menuMap = (() => {
  let byId = Map();
  let byPid = Map();
  menuGlobal.forEach(item => {
    byId = byId.set(item.id, fromJS(item));
    byPid = byPid.update(item.pid, obj => obj ? obj.add(item.id) : OrderedSet([item.id]))
  });
  return Map({
    byId,
    byPid,
  })
})();

export default {
  menuGlobal,
  menuMap,
}