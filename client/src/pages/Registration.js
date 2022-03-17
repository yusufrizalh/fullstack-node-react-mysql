import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

function Registration() {
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(8).max(24).required("Username cannot be empty!"),
    password: Yup.string().min(8).max(24).required("Password cannot be empty!"),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:8001/auth", data).then(() => {
      console.log(data);
    });
  };

  return (
    <div className="createPostPage">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Username: </label>
          <ErrorMessage name="username" component="span" />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="username"
            placeholder="Enter username here"
          />

          <label>Password: </label>
          <ErrorMessage name="password" component="span" />
          <Field
            autoComplete="off"
            type="password"
            id="inputCreatePost"
            name="password"
            placeholder="Enter password here"
          />

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Registration;
