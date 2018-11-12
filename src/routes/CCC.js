import React, { Component } from 'react';
import { Link } from 'dva/router'; 
import { connect } from 'dva';

class CCC extends Component {
  render() {
    const { menu } = this.props;
    const bUrl = menu.getIn(['byId', 'bbb', 'path']);
    const aUrl = menu.getIn(['byId', 'aaa', 'path']);

    return (
      <div>
        <p>
          CCC页
        </p>
        <Link to={aUrl}>去AAA页面</Link>
        <br />
        <Link to={bUrl}>去BBB页面</Link>
      </div>
    );
  }
}
 
export default connect(({ app }) => ({
  menu: app.get('menu'),
}))(CCC)
