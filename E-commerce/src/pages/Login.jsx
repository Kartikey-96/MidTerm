import React from "react";
import { Formik, Form, Field } from "formik";

function Login() {
  return (
    <div>
      <div
        style={{
          width: "94.4%",
          backgroundColor: "#f5bae9",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          marginLeft: "33px",
        }}
      >
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form
            style={{
              width: "300px",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#ffffff",
            }}
          >
            <div style={{ marginBottom: "20px" }}>
              <label htmlFor="email">E-mail</label>
              <Field
                type="email"
                name="email"
                style={{
                  display: "block",
                  width: "100%",
                  padding: "8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  boxSizing: "border-box",
                }}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                name="password"
                style={{
                  display: "block",
                  width: "100%",
                  padding: "8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  boxSizing: "border-box",
                }}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <button
                type="submit"
                className="btn bg-primary"
                style={{
                  padding: "8px 16px",
                  borderRadius: "4px",
                  border: "none",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  cursor: "pointer",
                  width: "100%",
                }}
              >
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Login;
