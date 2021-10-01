import axios from "axios";
import React from "react";
import Button from "../../components/Button";
import styles from "../../styles/Home.module.css";

class Profile extends React.Component {
  render() {
    return (
      <div className={styles.main}>
        <h1>
          {this.props.user.firstName} {this.props.user.secondName}
        </h1>
        <p>Email address: {this.props.user.email}</p>
        <Button text="Go back to index" url="/" />
      </div>
    );
  }
}

export const getStaticProps = async (context) => {
  const resp = await axios.get(
    `https://crudcrud.com/api/9d108ccecb07451a811fbf69af402ad3/users/${context.params.id}`
  );
  const user = resp.data;

  return {
    props: {
      user,
    },
  };
};

export const getStaticPaths = async () => {
  const resp = await axios.get(
    "https://crudcrud.com/api/9d108ccecb07451a811fbf69af402ad3/users"
  );
  const users = resp.data;
  //console.log(users);
  const paths = users.map((user) => ({ params: { id: user._id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default Profile;
