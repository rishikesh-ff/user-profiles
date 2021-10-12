import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { withRouter } from "next/router";
import React, { Component } from "react";
import Button from "../components/Button";
import styles from "../styles/Create.module.css";
import * as yup from "yup";
import NavLink from "../components/NavLink";

export class Create extends Component {
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
    return (
      <div className={styles.main}>
        <h1>Create</h1>
        <Formik
          initialValues={{
            firstName: "",
            secondName: "",
            email: "",
          }}
          onSubmit={(values, { resetForm }) => {
            axios.post(process.env.url, values);
            resetForm();
            this.props.router.push("/");
          }}
          validationSchema={validationSchema}
        >
          {(formik) => (
            <div className={styles.container}>
              <Form>
                <div>
                  <div>
                    <Field
                      id="firstName"
                      name="firstName"
                      placeholder="First name"
                      className={styles.textfield}
                      autoComplete="off"
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
                      className={styles.textfield}
                      autoComplete="off"
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
                      className={styles.textfield}
                      autoComplete="off"
                    />
                    <ErrorMessage name="email" render={renderError} />
                  </div>
                </div>
                <div>
                  <Button variant="submit" type="submit" text="Submit" />
                </div>
              </Form>
            </div>
          )}
        </Formik>
        <NavLink url="/" text="Go back to index" />
      </div>
    );
  }
}

export default withRouter(Create);
