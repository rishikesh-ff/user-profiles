import axios from "axios";
import React from "react";
import Button from "../../components/Button";
import styles from "../../styles/Home.module.css";
import { Formik, Form, Field } from "formik";
import style from "../../styles/User.module.css";
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
            <div className={style.container}>
              <Form>
                <div>
                  <label htmlFor="firstName">first name:</label>
                  <div>
                    <Field id="firstName" name="firstName" disabled />
                  </div>
                </div>
                <div>
                  <label htmlFor="secondName">second name:</label>
                  <div>
                    <Field id="secondName" name="secondName" disabled />
                  </div>
                </div>
                <div>
                  <label htmlFor="email">email:</label>
                  <div>
                    <Field id="email" name="email" type="email" disabled />
                  </div>
                </div>
              </Form>
            </div>
          </Formik>
          <button
            className={style.submit}
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
            <div className={style.container}>
              <Form>
                <div>
                  <label htmlFor="firstName">first name:</label>
                  <div>
                    <Field id="firstName" name="firstName" />
                  </div>
                </div>
                <div>
                  <label htmlFor="secondName">second name:</label>
                  <div>
                    <Field id="secondName" name="secondName" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email">email:</label>
                  <div>
                    <Field id="email" name="email" type="email" />
                  </div>
                </div>
                <div>
                  <button type="submit" className={style.submit}>
                    Submit
                  </button>
                  <button className={style.delete}>Delete</button>
                </div>
              </Form>
            </div>
          </Formik>
          <button
            className={style.delete}
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
