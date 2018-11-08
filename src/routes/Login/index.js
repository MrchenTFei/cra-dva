import React, {Component} from 'react';
import {connect} from 'dva'
import {Row, Col, Form, Icon, Input, Button} from 'antd'
import classnames from 'classnames';
import styles from './index.less';
import styles_css from './index.css'
 
const FormItem = Form.Item
 
class Login extends Component{
 
    loginSubmit=(e)=>{
        e.preventDefault();
        const {form} = this.props;
        form.validateFields((err, values) => {
            if (!err) {
              console.log(values);
            }
        });
    }
 
    render(){
        const {form} = this.props;
        const {getFieldDecorator} = form;
        console.log('-=-=-', styles, styles_css)
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
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                        )}
                        </FormItem>
                        <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ 
                                required: true, 
                                message: '请输入密码' 
                            }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
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
 
export default connect()(Form.create()(Login))