import React from "react";
import UserItem from "./UserItem";

class UserList extends React.Component {
  render() { 
    return (
    <>
      {this.props.users.map(user => <UserItem key={user.id} user={user} />)}
    </>
    );
  }
}

export default UserList;