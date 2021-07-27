import React from 'react';
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './css/categories.css'
import 'antd/dist/antd.css'

function Menu({items, categories}) {
   const categoryfun = (e)=>{
       if(e==="halbo'lgan") return 'primary'
       if(e==="halbo'lyapdi") return 'secondary'
       else return 'danger'
   }
   const props = {
    beforeUpload: file => {
      if (file.type !== 'application/pdf') {
        message.error(`${file.name} are not pdf file`);
      }
      return ((file.type === 'application/pdf') ? true : Upload.LIST_IGNORE);
    },
    onChange: info => {
      console.log(info.fileList);
    },
  };
    return (
        <div className="menu_items">
            {items.map((menuItem)=>{
                const {id, ism, familya, phone, desc} = menuItem
                return(
                    <div className="menu_item" key={id}>
                        <div><span>Ism</span> : {ism}</div>
                        <div><span>Familya</span> : {familya}</div>
                        <div><span>Tel</span> : {phone}</div>
                        <div><span>Muammo</span> : {desc}</div>
                        <div className={`menu_button`}>
                            {categories.map((item)=>(
                            <Upload key={item} {...props}>
                                <Button block icon={<UploadOutlined />} type={categoryfun(item)}>{item}</Button>
                            </Upload>   
                            ))}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Menu
