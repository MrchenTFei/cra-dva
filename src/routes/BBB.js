import React, { Component } from 'react';
import { Link } from 'dva/router';
import { connect } from 'dva';
import { Row, Col, Dropdown, Menu, Button, Pagination, Calendar } from 'antd';
import { injectIntl } from 'react-intl';


class BBB extends Component {
  changeLang = e => {
    this.props.dispatch({
      type: 'app/changeLang',
      payload: {
        value: e.key
      }
    })
  }
  render() {
    const { i18n, intl: { formatMessage } } = this.props;
    const aUrl = this.props.menu.getIn(['byId', 'aaa', 'path']);
    const cUrl = this.props.menu.getIn(['byId', 'ccc', 'path']);

    const menu = (
      <Menu 
        onClick={this.changeLang}
        selectedKeys={[i18n]}
      >
      <Menu.Item key="zh_CN">
        中文
      </Menu.Item>
      <Menu.Item key="en_US">
        英文
      </Menu.Item>
      <Menu.Item key="zh_HK">
        繁体
      </Menu.Item>
    </Menu>
    );
    return (
      <div>
        <Row>
          <Col offset={2}>
            <Dropdown trigger={['click']} overlay={menu}>
              <Button>{ i18n === 'zh_CN'?'中文' : i18n === 'en_US' ? '英文' : '繁体' }</Button>
            </Dropdown>
          </Col>
          <Col span={12}>
            <p>{formatMessage({id:'App.username'})}</p>
            <p>{formatMessage({id:'App.password'})}</p>
            <div>
              <Pagination defaultCurrent={1} total={20} showSizeChanger />
              <Calendar fullscreen={false}  />
            </div>
          </Col>
        </Row>
        <p>
          BBB页
        </p>
        <Link to={aUrl}>去AAA页面</Link>
        <br />
        <Link to={cUrl}>去CCC页面</Link>
      </div>
    );
  }
}
 
export default connect(({ app }) => ({
  i18n: app.get('i18n'),
  menu: app.get('menu'),
}))(injectIntl(BBB));
