import React from "react";
import { Row, Col } from "antd";
import RestorePasswordForm from "../../../components/Auth/RestorePasswordForm";
import style from "./index.module.scss";

const RestorePassword = () => {
  return (<Row>
    <Col 
      xs={{span: 14, offset: 5}}  
      sm={{span: 12, offset: 6}} 
      md={{span: 10, offset: 7}} 
      lg={{span: 8, offset: 8}} 
      xl={{span: 6, offset: 9}} 
      >
      <div className={style.restorePasswordWrapper}>
        <RestorePasswordForm />
      </div>
    </Col>
  </Row>);
};

export default RestorePassword;
