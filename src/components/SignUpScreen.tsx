import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

const SignUpScreen: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="form-container">
      <h3>Sign Up</h3>
      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
          password: Yup.string()
            .min(6, "At least 6 characters")
            .matches(/[A-Z]/, "One uppercase letter")
            .matches(/[a-z]/, "One lowercase letter")
            .matches(/\d/, "One number")
            .matches(/[!@#$%^&*]/, "One special character")
            .required("Password is required"),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref("password")], "Passwords must match")
            .required("Please confirm your password"),
        })}
        onSubmit={(values) => {
          const users = JSON.parse(localStorage.getItem("users") || "[]");
          users.push(values);
          localStorage.setItem("users", JSON.stringify(users));
          alert("Account created successfully!");
          navigate("/login");
        }}
      >
        {({ values, errors, touched }) => (
          <Form>
            <label htmlFor="email">Email</label>
            <Field
              name="email"
              type="email"
              className={`input ${errors.email && touched.email ? "input-error" : ""}`}
            />
            <ErrorMessage name="email" component="div" className="error-message" />

            <label htmlFor="password">Password</label>
            <div className="password-container">
              <Field
                name="password"
                type={showPassword ? "text" : "password"}
                className={`input ${errors.password && touched.password ? "input-error" : ""}`}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="toggle-password"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <ul className="password-requirements">
              <li className={values.password.length >= 6 ? "valid" : "invalid"}>
                At least 6 characters
              </li>
              <li className={/[A-Z]/.test(values.password) ? "valid" : "invalid"}>
                One uppercase letter
              </li>
              <li className={/[a-z]/.test(values.password) ? "valid" : "invalid"}>
                One lowercase letter
              </li>
              <li className={/\d/.test(values.password) ? "valid" : "invalid"}>One number</li>
              <li
                className={/[!@#$%^&*]/.test(values.password) ? "valid" : "invalid"}
              >
                One special character
              </li>
            </ul>
            <ErrorMessage name="password" component="div" className="error-message" />

            <label htmlFor="confirmPassword">Confirm Password</label>
            <Field
              name="confirmPassword"
              type="password"
              className={`input ${
                errors.confirmPassword && touched.confirmPassword ? "input-error" : ""
              }`}
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="error-message"
            />

            <button type="submit" className="submit-button">
              Sign Up
            </button>
            <Link className="navigate-login" to="/login">Already have an account? Login</Link>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUpScreen;
