"use client";
import { Formik } from "formik";
import * as Yup from "yup";

export default function Form() {
  async function test(login: string, password: string) {
    fetch("https://arthttp.ru/api/user/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ login: login, password: password }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }

  async function loginUser(login: string, password: string) {
    fetch("/admin/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        login: login,
        password: password,
        url: "https://arthttp.ru/api/user/login",
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }

  return (
    <>
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
      <button onClick={() => test("root", "Hlsdf34=")}>test</button>
    </>
  );
}
