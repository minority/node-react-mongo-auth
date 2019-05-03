import React from "react";
import { Layout, Menu, Icon } from "antd";

import style from "./index.module.scss";

const { SubMenu } = Menu;
const { Header: AntHeader } = Layout;

const Header = props => {
  return (
    <AntHeader style={{ padding: "0 24px" }}>
      <div className={style.logo} />
      <Menu theme="dark" mode="horizontal" style={{ lineHeight: "64px" }}>
        <SubMenu
          style={{ float: "right" }}
          key="username"
          title={
            <span>
              <Icon type="user" />
              Username
            </span>
          }
        >
          <Menu.Item key="1">Logout</Menu.Item>
        </SubMenu>
      </Menu>
    </AntHeader>
  );
};

export default Header;
