"use client";
import { Formik } from "formik";
import * as Yup from "yup";

export default function Form() {
  async function loginUser(login: string, password: string) {
    console.log(login, password);
    /* try {
      const response = await fetch("http://45.147.176.226:4000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login: login, password: password }), // body data type must match "Content-Type" header
      });
      const res = await response;
      console.log(res);
    } catch (e) {
      console.log(e);
    } */
    /* const response = await fetch(
      "https://humble-cod-4xvwx6x4vv53q9pq-4000.app.github.dev/api/posts/post"
    );
    console.log(response); */
  }

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
