import React from "react";
import { Layout } from "antd";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { Footer } from "./Footer";
import PropTypes from "prop-types";
import style from "./index.module.scss";

const { Content } = Layout;

const CabinetComponent = ({ children, menuList, user, logout }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header user={user} logout={logout} />
      <Layout>
        <Sidebar menuList={menuList} />
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            className={style.cabinetContent}
            style={{
              background: "#fff",
              padding: 24,
              margin: "24px 0 0",
              minHeight: 300
            }}
          >
            {children}
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </Layout>
  );
};

CabinetComponent.propTypes = {
  menuList: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

export const Cabinet = CabinetComponent;
