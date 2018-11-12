import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { injectIntl } from 'react-intl';
import { Row, Col, Form, Button } from 'antd';
import classnames from 'classnames';
import pathToRegexp from 'path-to-regexp'
import styles from './index.css';
 
class Home extends Component{
 
    render(){
        const { menu } = this.props;
        const menuUrl = menu.getIn(['byId', 'aaa', 'path']);
        const homeEditUrl = menu.getIn(['byId','home-edit','path']);

        return(
            <Row>
                <Col className={classnames(styles.home)}>
                    欢迎您，来到首页
                </Col>
                <Col>
                    <Link to={menuUrl}><Button>去AAA页面</Button></Link>
                    <Link to={pathToRegexp.compile(homeEditUrl)({id:1})}><Button>编辑（id=1）</Button></Link>
                    <Link to={pathToRegexp.compile(homeEditUrl)({id:1})}><Button>编辑（id=1）</Button></Link>
                    <Link to={pathToRegexp.compile(homeEditUrl)({id:2})}><Button>编辑（id=2）</Button></Link>
                    <Link to={pathToRegexp.compile(homeEditUrl)({id:123})}><Button>编辑（id=123）</Button></Link>
                </Col>
            </Row>
        )
    }
}
 
export default connect(({ app }) => ({
    menu: app.get('menu'),
}))(injectIntl(Form.create()(Home)))
