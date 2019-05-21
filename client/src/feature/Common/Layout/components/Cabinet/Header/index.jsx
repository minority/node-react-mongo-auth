import React from "react";
import PropTypes from "prop-types";
import { Layout, Menu, Icon } from "antd";

import style from "./index.module.scss";

const { SubMenu } = Menu;
const { Header: AntHeader } = Layout;

const HeaderComponent = ({ user, logout }) => {
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
              {user.name} ({user.email})
            </span>
          }
        >
          <Menu.Item onClick={() => logout()} key="1">
            Logout
          </Menu.Item>
        </SubMenu>
      </Menu>
    </AntHeader>
  );
};

HeaderComponent.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

export const Header = HeaderComponent;
