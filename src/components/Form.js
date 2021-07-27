import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { Form, Input, Select,  Button } from 'antd';
import './CSS/form.css'
const { Option } = Select;
const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 26,
    },
  };

const selectBefore = (
  <>
  <span>+998 </span>
  <Select defaultValue="33" className="select-before">
    <Option value="33">33</Option>
    <Option value="88">88</Option>
    <Option value="90">90</Option>
    <Option value="91">91</Option>
    <Option value="93">93</Option>
    <Option value="94">94</Option>
    <Option value="98">98</Option>
    <Option value="99">99</Option>
  </Select>
  </>
);

/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const Demo = () => {
const [user,setUser] = useState({user: '', bool: false})
const [seria,setSeria] = useState({seria: '', bool: false})
const [number,setNumber] = useState({Number: '', bool: false})
  return (
    <Form {...layout} name="nest-messages"  validateMessages={validateMessages}>
    <Form.Item
      name={['user', 'name']}
      label="FISH"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input placeholder="Your Fullname" onChange={(e)=>{setUser({user: e.target.value,bool:true})}}/>
    </Form.Item>
    <Form.Item
      name={['seria', 'Seria']}
      label="Pasport seria"
      rules={[
        { 
          required: true,
          min: 9,
          max: 9,
        },
      ]}
    >
      <Input placeholder="Your Pasport Number"  onChange={(e)=>{setSeria({seria: e.target.value, bool: e.target.value.length === 9 ? true : false})}} />
    </Form.Item>
    <Form.Item 
    name={['number','Number']}
    label='Telephone'
    rule={[
        { required: true,
            min:7,
            max:7}
    ]}>
        <Input addonBefore={selectBefore} onChange={(e)=>{setNumber({number: e.target.value, bool: e.target.value.length === 7 ? true : false})}} placeholder="Your Telepone number"/>
    </Form.Item>
    <Form.Item>
      <Button type="primary" block htmlType="submit" >
        {
        (user.bool && seria.bool && number.bool)? 
        <Link to='/textarea'>
        Submit
    </Link> : <span>Submit</span> }
      </Button>
    </Form.Item>
  </Form>

      );
};

function FormAntd() {
    return (
        <div className="form_container">
            <div className="form_container_child">
                <Demo />
            </div>
        </div>
    )
}

export default FormAntd
