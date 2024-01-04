import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../style/userForm.css";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

const signUp = yup.object().shape({
  firstname: yup.string().required(" necessary to be filled"),
  lastname: yup.string().required(" necessary to be filled"),
  email: yup
    .string()
    .email("Invalid email")
    .required("Email is necessary to be filled"),
  Password: yup.string().required("Password is necessary to be filled"),
});

function UserForm() {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    Password: "",
  };

  const navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="div">
      <Formik
        validationSchema={signUp}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {(formik) => {
          return (
            <Form className="setForm">
              <h2>Sign-up</h2>
              <div className="name">
                <div>
                  <label>First-Name</label>
                  <Field
                    type="text"
                    name="firstname"
                    className={
                      formik.touched.firstname && formik.errors.firstname
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                  <ErrorMessage name="firstname" />
                </div>
                <div>
                  <label>Last-Name</label>
                  <Field
                    type="text"
                    name="lastname"
                    className={
                      formik.touched.lastname && formik.errors.lastname
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                  <ErrorMessage name="lastname" />
                </div>
                <div>
                  <label>E-mail</label>
                  <Field
                    type="email"
                    name="email"
                    className={
                      formik.touched.email && formik.errors.email
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                  <ErrorMessage name="email" />
                </div>
                <div>
                  <label>Password</label>
                  <Field type="password" name="Password" />
                  <ErrorMessage name="Password" />
                </div>
                <div className="btn" type="submit">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default UserForm;
