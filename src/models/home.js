import pathToRegexp from 'path-to-regexp'
 
export default {
 
    namespace: 'home',
  
    state: {
      name:'这是home的model'
    },
  
    subscriptions: {
      setup({ dispatch, history }) {
        return history.listen(({ pathname, query }) => {
          dispatch({type: 'dataInit', payload: {pathname}});
        });
      },
    },
  
    effects: {
      * dataInit({payload: {pathname}}, {put,call,select}){
        console.log('09999', pathname);
 
        const homeUrl = yield select(_=>_.app.getIn(['menu','byId','home','path']));
        const homeEditUrl = yield select(_=>_.app.getIn(['menu','byId','home-edit','path']));
        
        if(pathToRegexp(homeUrl).exec(pathname)){
          console.log('home页面执行')
          
        }else if(pathToRegexp(homeEditUrl.substring(0,homeEditUrl.lastIndexOf('?')-4)).exec(pathname)){
          console.log('home-新增页面执行')
          
        }else if(pathToRegexp(homeEditUrl.substring(0,homeEditUrl.lastIndexOf('?'))).exec(pathname)){
          console.log('home-编辑页面执行')
          
        }
 
      },
    },
  
    reducers: {
      
    },
  
  };
