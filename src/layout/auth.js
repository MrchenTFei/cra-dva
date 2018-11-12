import {connect} from 'dva';
import React from 'react';
 
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
    <React.Fragment>
      {children}
    </React.Fragment>
  );
}
 
export default connect(({
  app
}) => ({
  token: app.get('token'),
  locationPathname: app.get('locationPathname'),
}))(Auth)
