"use client";
import { Formik } from "formik";
import * as Yup from "yup";
import {redirect} from "next/navigation";
import React from "react";

interface FormProps {
    loginUser: any//(login: string, password: string) => void;
}
export  const Form: React.FC<FormProps> = (props ) => {

    const { loginUser } = props;

  return (
      <Formik
        initialValues={{ login: "", password: "" }}
        onSubmit={(values) => loginUser(values.login, values.password)}
        validateOnChange={false}
        validateOnBlur={false}
        validationSchema={Yup.object().shape({
          login: Yup.string().min(3).required("Обязательное поле"),
          password: Yup.string().min(3).required("Обязательное поле"),
        })}
      >
        {(props) => {
          props.submitCount > 0 && (props.validateOnChange = true);
          const { values, errors, handleChange, handleSubmit } = props;
          return (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center items-center gap-1"
            >
              <input
                id="login"
                placeholder={`enter login`}
                type="text"
                value={values.login}
                onChange={handleChange}
                className="border-2 border-black rounded-md"
              />
              {errors.login ? (
                <div style={{ color: "red" }}>{errors.login}</div>
              ) : null}

              <input
                id="password"
                placeholder={`enter password`}
                type="password"
                value={values.password}
                onChange={handleChange}
                className="border-2 border-black rounded-md"
              />
              {errors.password ? (
                <div style={{ color: "red" }}>{errors.password}</div>
              ) : null}

              <button type="submit" onClick={() => null}>
                sign in
              </button>
            </form>
          );
        }}
      </Formik>
  );
}
