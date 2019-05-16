import React from "react";
import { Layout } from "antd";
import menuList from "../../../../config/menu";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

const { Content } = Layout;

const Cabinet = ({ children }) => {
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

export default Cabinet;
