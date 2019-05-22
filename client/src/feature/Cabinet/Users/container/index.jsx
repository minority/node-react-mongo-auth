import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { usersFetchRequest } from "../actions";
import { Loader } from "../../../Common/Loader";
import { Table } from "antd";
import style from "./index.module.scss";

export const Users = props => {
  useEffect(() => {
    props.usersFetchRequest();
    // eslint-disable-next-line
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      key: "id"
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email"
    }
  ];

  return (
    <div>
      <h1>Users</h1>
      <div className={style.usersList}>
        <Loader isLoading={props.isLoading}>
          <Table columns={columns} dataSource={props.users} rowKey="_id" />
        </Loader>
      </div>
    </div>
  );
};

Users.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  users: PropTypes.array,
  usersFetchRequest: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isLoading: state.cabinet.users.isLoading,
  users: state.cabinet.users.data
});

export const UsersContainer = withRouter(
  connect(
    mapStateToProps,
    { usersFetchRequest }
  )(Users)
);
