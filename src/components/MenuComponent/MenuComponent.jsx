import React from 'react';
import {Menu, Button} from 'antd';
import { useNavigate } from 'react-router-dom';
import './MenuComponent.scss'
function MenuComponent(props) {
  const navigate =useNavigate();
const items = [
    {label: 'Home', key: '/'},
    {label: 'Products', key: '/products'},

]
const handleMenuClick = (item) => {
  console.log('click', item)
  navigate(item.key)
}
  return (
    <Menu
        defaultSelectedKeys={['/']}
        // defaultOpenKeys={['sub1']}
        mode="inline"
        theme="light"
        // inlineCollapsed={collapsed}
        items={items}
        onClick={handleMenuClick}
    />
  )
}

export default MenuComponent