import { Formik, Form, Field } from "formik";
import React, { Component } from "react";
import Button from "../components/Button";
import styles from "../styles/Create.module.css";

export class Create extends Component {
  render() {
    return (
      <div className={styles.main}>
        <h1>Create</h1>
        <Formik>
          <Form>
            <label htmlFor="fullName">Full name:</label>
            <Field id="fullName" name="fullName" />
            <label htmlFor="email">Email:</label>
            <Field id="email" type="email" name="email" />
          </Form>
        </Formik>
        <Button text="Go back to index" url="/" />
      </div>
    );
  }
}

export default Create;
