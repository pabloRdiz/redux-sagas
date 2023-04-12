import { Component } from "react";
import { connect } from "react-redux";
import {
  getUsersRequest,
  createUserRequest,
  deleteUserRequest,
  userError,
} from "../actions/users";
import UsersList from "./UsersList";
import NewUser from "./NewUser";
import { Alert } from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);

    this.props.getUsersRequest();
  }

  handleSubmit = ({ firstName, lastName }) => {
    this.props.createUserRequest({ firstName, lastName });
  };

  handleDeleteUser = (userId) => {
    this.props.deleteUserRequest(userId);
  };

  handleCloseAlert = () => {
    this.props.userError({
      error: "",
    });
  };

  render() {
    const users = this.props.users;
    return (
      <div
        style={{
          margin: "0 auto",
          padding: "20px",
          maxWidth: "600px",
        }}
      >
        <Alert
          color="danger"
          toggle={this.handleCloseAlert}
          isOpen={Boolean(users.error)}
        >
          {users.error}
        </Alert>
        <NewUser onSubmit={this.handleSubmit} />
        <UsersList users={users.items} onDeleteUser={this.handleDeleteUser} />
      </div>
    );
  }
}

export default connect(({ users }) => ({ users }), {
  getUsersRequest,
  createUserRequest,
  deleteUserRequest,
  userError,
})(App);
