import axios from "axios";
import React from "react";
import Button from "../../components/Button";
import styles from "../../styles/Home.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import style from "../../styles/User.module.css";
import { withRouter } from "next/router";
import * as yup from "yup";

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      editing: false,
    };
  }
  render() {
    const validationSchema = yup.object({
      firstName: yup
        .string()
        .strict(false)
        .trim()
        .required("First name cannot be empty."),
      secondName: yup
        .string()
        .strict(false)
        .trim()
        .required("Second name cannot be empty."),
      email: yup
        .string()
        .email("Invalid email address")
        .required("Email cannot be empty."),
    });
    const renderError = (message) => (
      <p className={styles.validationError}>{message}</p>
    );
    if (!this.state.editing) {
      return (
        <div className={styles.main}>
          <h1>User Profile</h1>
          <Formik initialValues={this.props.user}>
            <div className={style.container}>
              <Form>
                <div>
                  <div>
                    <Field
                      id="firstName"
                      name="firstName"
                      placeholder="First name"
                      className={style.textfield}
                      disabled
                    />
                    <ErrorMessage name="firstName" render={renderError} />
                  </div>
                </div>
                <div>
                  <div>
                    <Field
                      id="secondName"
                      name="secondName"
                      placeholder="Second name"
                      className={style.textfield}
                      disabled
                    />
                    <ErrorMessage name="secondName" render={renderError} />
                  </div>
                </div>
                <div>
                  <div>
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email address"
                      className={style.textfield}
                      disabled
                    />
                    <ErrorMessage name="email" render={renderError} />
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
            validationSchema={validationSchema}
          >
            <div className={style.container}>
              <Form>
                <div>
                  <div>
                    <Field
                      id="firstName"
                      name="firstName"
                      placeholder="First name"
                      className={style.textfield}
                    />
                    <ErrorMessage name="firstName" render={renderError} />
                  </div>
                </div>
                <div>
                  <div>
                    <Field
                      id="secondName"
                      name="secondName"
                      placeholder="Second name"
                      className={style.textfield}
                    />
                    <ErrorMessage name="secondName" render={renderError} />
                  </div>
                </div>
                <div>
                  <div>
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email address"
                      className={style.textfield}
                    />
                    <ErrorMessage name="email" render={renderError} />
                  </div>
                </div>
                <div className={style.buttons}>
                  <button type="submit" className={style.submit}>
                    Update
                  </button>
                  <button
                    className={style.delete}
                    onClick={async () => {
                      //console.log(`${process.env.url}/${this.props.user._id}`);
                      try {
                        const resp = await axios.delete(
                          `${process.env.url}/${this.props.user._id}`
                        );
                        this.props.router.push("/");
                      } catch (e) {
                        console.log(e);
                        this.props.router.push("/");
                      }
                    }}
                    type="submit"
                  >
                    Delete
                  </button>
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

export default withRouter(Profile);
