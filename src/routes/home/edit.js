import React, { Component } from 'react';
import { connect } from 'dva';
import { injectIntl } from 'react-intl';
import { Row, Col, Form, Button } from 'antd';
import classnames from 'classnames';
import styles from './index.css';
 
class Home extends Component {
 
    goBack=()=>{
        const { dispatch } = this.props;

        dispatch({
            type:'app/goBack'
        })
    }

    render(){
        const { match} = this.props;
        const id = match.params.id;

        return(
            <Row>
                <Col className={classnames(styles.home)}>
                     欢迎您，来到home<span style={{fontSize:'24px'}}>{id?`编辑${id}`:`新增`}</span>页面
                </Col>
                <Col>
                    <Button onClick={this.goBack}>返回</Button>
                </Col>
            </Row>
        )
    }
}
 
export default connect(({
    app
})=>({
    menu:app.get('menu')
}))(injectIntl(Form.create()(Home)));
