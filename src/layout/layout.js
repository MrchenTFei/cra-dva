import {connect} from 'dva';
import React from 'react';
import pathToRegexp from 'path-to-regexp'
import Helmet from 'react-helmet';
 
const Layout=({ children,dispatch,menu,locationPathname })=>{
 
  const menuList=menu.getIn(['byId']).toList();
  let menuName='';
  menuList.forEach(item=>{
    if(pathToRegexp(item.get('path')).exec(locationPathname)){
      menuName = item.get('name');
    }
  });
 
  return (
    <React.Fragment>
      <Helmet>
        <title>
          {menuName}
        </title>
      </Helmet>
      {children}
    </React.Fragment>
  );
}
 
export default connect(({
  app
})=>({
  menu:app.get('menu'),
  locationPathname:app.get('locationPathname'),
}))(Layout)
