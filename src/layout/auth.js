import { connect } from 'dva';
import React from 'react';
import Layout from './layout';
 
const Auth = ({ children, dispatch, token, locationPathname }) => {
 
  if(!token && locationPathname !== '/login'){
    dispatch({
      type:'app/logout'
    })
  } else if (token && locationPathname === '/login') {
    dispatch({
      type:'app/loginOk',
      payload:{
        token:token
      }
    })
  }
 
  return (
    <Layout>
      {children}
    </Layout>
  );
}
 
export default connect(({
  app
}) => ({
  token: app.get('token'),
  locationPathname: app.get('locationPathname'),
}))(Auth)
