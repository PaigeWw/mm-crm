import React from 'react';
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from 'antd';
const CheckboxGroup = Checkbox.Group;

import styles from './index.less';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;



class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({
      confirmDirty: this.state.confirmDirty || !!value,
    });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;

    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;

    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], {
        force: true,
      });
    }

    callback();
  };

  handleWebsiteChange = value => {
    let autoCompleteResult;

    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }

    this.setState({
      autoCompleteResult,
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;
    const formItemLayout = {
      labelCol: {
        xs: {
          span: 24,
        },
        sm: {
          span: 8,
        },
      },
      wrapperCol: {
        xs: {
          span: 24,
        },
        sm: {
          span: 16,
        },
      },
    };
    const tdSelector = getFieldDecorator('td', {
      initialValue: 'A',
    })(
      <Select style={{ width: 100 }}>
        <Option value="A">A</Option>
        <Option value="B">B</Option>
        <Option value="C">C</Option>
        <Option value="D">D</Option>
      </Select>,
    );
    
    const productorSelector = getFieldDecorator('productor', {
      initialValue: '86',
    })(
      <Select style={{ width: 100 }}>
        <Option value="86">Json</Option>
        <Option value="87">Bob</Option>
      </Select>,
    );
    const plainOptions = ['Apple', 'Pear', 'Orange'];
    const checkedList = ['Apple', 'Orange'];

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="E-mail">
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(<Input />)}
        </Form.Item>        
        <Form.Item
          label={
            <span>
              Accent&nbsp;
              <Tooltip title="What do you want others to call you?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          }
        >
          {getFieldDecorator('accent', {
            rules: [
              {
                required: true,
                message: 'Please input accent!',
                whitespace: true,
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Password" hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please input your password!',
              },
              {
                validator: this.validateToNextPassword,
              },
            ],
          })(<Input.Password />)}
          </Form.Item>
          <Form.Item label="Location">
            {getFieldDecorator('location', {
              rules: [
                {
                  required: true,
                  message: 'Please input website!',
                },
              ],
            })(
            
                <Input />
            )}
          </Form.Item>

          <Form.Item label="Remaks">
            <Input.TextArea rows={4} />
          </Form.Item> 
          <Form.Item label="TD"> 
            {tdSelector}
          </Form.Item>
          <Form.Item label="Productor">
            {productorSelector}
          </Form.Item>
        {/* */}
        </Form>     
    );
  }
}

const WrappedRegistrationForm = Form.create({
  name: 'inputProductor',
})(RegistrationForm);
export default () => (
      <WrappedRegistrationForm />
);
