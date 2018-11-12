import React, { Component } from 'react';
import { Link } from 'dva/router';
import { Button } from 'antd';
import { connect } from 'dva';

 
class AAA extends Component {
  render() {
    const { menu } = this.props;
    const bUrl = menu.getIn(['byId', 'bbb', 'path']);
    const cUrl = menu.getIn(['byId', 'ccc', 'path']);

    return (
      <div>
        <p>
          AAA页
        </p>
        <Link to={bUrl}>
          <Button type="primary">去BBB页面</Button>
        </Link>
        <br />
        <Link to={cUrl}>去CCC页面</Link>
      </div>
    );
  }
}
 
export default connect(({ app }) => ({
  menu: app.get('menu'),
}))(AAA)
