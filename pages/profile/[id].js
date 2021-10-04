import axios from "axios";
import React from "react";
import Button from "../../components/Button";
import styles from "../../styles/Home.module.css";
import Formik, { Form, Field } from "formik";

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
  const resp = await axios.get(`${process.env.url}/${context.params.id}`);
  const user = resp.data;

  return {
    props: {
      user,
    },
  };
};

export const getStaticPaths = async () => {
  const resp = await axios.get(process.env.url);
  const users = resp.data;
  const paths = users.map((user) => ({ params: { id: user._id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default Profile;
