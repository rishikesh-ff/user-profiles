import axios from "axios";
import { Formik, Form, Field } from "formik";
import React, { Component } from "react";
import Button from "../components/Button";
import styles from "../styles/Create.module.css";

export class Create extends Component {
  render() {
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
          }}
        >
          {(formik) => (
            <div className={styles.container}>
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
                <div className={styles.inline}>
                  <div>
                    <button type="submit" className={styles.submit}>
                      Submit
                    </button>
                  </div>
                </div>
              </Form>
            </div>
          )}
        </Formik>
        <Button text="Go back to index" url="/" />
      </div>
    );
  }
}

export default Create;
