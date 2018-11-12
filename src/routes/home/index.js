import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { injectIntl } from 'react-intl';
import { Row, Col, Form, Button } from 'antd';
import classnames from 'classnames';
import styles from './index.css';
 
class Home extends Component{
 
    render(){
        return(
            <Row>
                <Col className={classnames(styles.home)}>
                    欢迎您，来到首页
                </Col>
                <Col>
                    <Link to="/aaa"><Button>去AAA页面</Button></Link>
                </Col>
            </Row>
        )
    }
}
 
export default connect()(injectIntl(Form.create()(Home)))
