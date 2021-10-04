import axios from "axios";
import React from "react";
import Button from "../../components/Button";
import styles from "../../styles/Home.module.css";
import { Formik, Form, Field } from "formik";
import btnStyles from "../../styles/Button.module.css";
class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      editing: false,
    };
  }
  render() {
    if (!this.state.editing) {
      return (
        <div className={styles.main}>
          <h1>User Profile</h1>
          <Formik initialValues={this.props.user}>
            <Form>
              <div>
                <label htmlFor="firstName">first name:</label>
                <Field id="firstName" name="firstName" disabled />
              </div>
              <div>
                <label htmlFor="secondName">second name:</label>
                <Field id="secondName" name="secondName" disabled />
              </div>
              <div>
                <label htmlFor="email">email:</label>
                <Field id="email" name="email" type="email" disabled />
              </div>
            </Form>
          </Formik>
          <button
            onClick={() =>
              this.setState({
                ...this.state,
                editing: true,
              })
            }
          >
            Edit
          </button>
          <Button text="Go back to index" url="/" />
        </div>
      );
    } else {
      return (
        <div className={styles.main}>
          <h1>User Profile</h1>
          <Formik
            initialValues={this.props.user}
            onSubmit={(values) => {
              axios.put(`${process.env.url}/${this.props.user._id}`, {
                firstName: values.firstName,
                secondName: values.secondName,
                email: values.email,
              });
              this.setState({
                ...this.state,
                editing: false,
              });
            }}
          >
            <Form>
              <div>
                <label htmlFor="firstName">first name:</label>
                <Field id="firstName" name="firstName" />
              </div>
              <div>
                <label htmlFor="secondName">second name:</label>
                <Field id="secondName" name="secondName" />
              </div>
              <div>
                <label htmlFor="email">email:</label>
                <Field id="email" name="email" type="email" />
              </div>
              <div>
                <button type="submit" className={btnStyles.button}>
                  Submit
                </button>
              </div>
            </Form>
          </Formik>
          <button
            className={btnStyles.cancel}
            onClick={() =>
              this.setState({
                ...this.state,
                editing: false,
              })
            }
          >
            Cancel
          </button>
          <Button text="Go back to index" url="/" />
        </div>
      );
    }
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
