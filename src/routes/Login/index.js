import React, {Component} from 'react';
import {connect} from 'dva'
import {injectIntl} from 'react-intl'
import {Row, Col, Form, Icon, Input, Button} from 'antd'
import classnames from 'classnames';
import styles from './index.less';
 
const FormItem = Form.Item
 
class Login extends Component{
 
  loginSubmit=(e)=>{
    e.preventDefault();
    const {form,dispatch} = this.props;
    form.validateFields((err, values) => {
      console.log('-=-==', values);
      if (!err) {
        dispatch({
          type: 'login/login',
          values,
        })
      }
    });
  }
 
  render() {
    const {form} = this.props;
    const {getFieldDecorator} = form;

    return(
      <Row>
        <Col className={classnames(styles.loginFormCol)}>
          <Form onSubmit={this.loginSubmit} className={classnames(styles.loginForm)}>
            <h3>登录</h3>
            <FormItem>
            {getFieldDecorator('username', {
              rules: [{ 
                  required: true, 
                  message: '请输入用户名' 
              }],
            })(
              <Input autoComplete={'off'} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
            )}
            </FormItem>
            <FormItem>
            {getFieldDecorator('password', {
              rules: [{ 
                  required: true, 
                  message: '请输入密码' 
              }],
            })(
              <Input autoComplete={'off'} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
            )}
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit" className={classnames(styles.loginBtn)}>
                  登录
              </Button>
            </FormItem>
          </Form>
        </Col>
      </Row>
    )
  }
}
 
export default connect()(injectIntl(Form.create()(Login)))