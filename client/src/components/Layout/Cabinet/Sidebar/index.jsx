import React from "react";
import { Link } from 'react-router-dom'
import {
  Layout, Menu, Icon
} from "antd";

const { Sider } = Layout;

const Sidebar = (props) => {
  return (
    <Sider width={200} style={{ background: '#fff' }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        {props.menuList.map((item, i) => {
          return ( <Menu.Item key={i}>
          <Link to={item.path}>
              <Icon type={item.icon} />
              <span>{item.label}</span>
          </Link>
          </Menu.Item> )
        })}
      </Menu>
    </Sider>
  )
}

export default Sidebar
