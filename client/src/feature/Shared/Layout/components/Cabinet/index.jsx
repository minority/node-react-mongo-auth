import React from "react";
import { Layout } from "antd";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { Footer } from "./Footer";
import PropTypes from "prop-types";

const { Content } = Layout;

const CabinetComponent = ({ children, menuList }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header />
      <Layout>
        <Sidebar menuList={menuList} />
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
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
  menuList: PropTypes.array
};

export const Cabinet = CabinetComponent;
