import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic'
import Auth from './layout/auth'
import {config} from './utils'
import Locale from './locale';
const { menuGlobal } = config
 
function RouterConfig({ history, app }) {
 
  return (
    <Auth>
      <Locale>
        <Router history={history}>
          <Switch>
            {
              menuGlobal.map(({path,...dynamics},index)=>(
                <Route
                  key={index} 
                  path={path} 
                  exact 
                  component={dynamic({
                    app,
                    ...dynamics
                  })} 
                />
              ))
            }
          </Switch>
        </Router>
      </Locale>
    </Auth>
  );
}
 
export default RouterConfig;
