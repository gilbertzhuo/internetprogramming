import React, { useState } from "react";
import {
  Container,
  SubContainer,
  Close,
  Title,
  Main,
  ImgContainer,
  Message,
} from "./authElements";
import wallpaper from "../../images/auth.svg";
import { userState, courseState } from "../../recoilFiles/atom";
import { useSetRecoilState } from "recoil";
import { loginInfo, courses } from "./user";
export default function Auth(props) {
  const setUser = useSetRecoilState(userState);
  const setCourse = useSetRecoilState(courseState);
  const [account, setAccount] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [register, setRegister] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function signIn(username, password) {
    const user = loginInfo.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      setUser(user);
      setCourse(courses);
      props.history.push("/");
    } else {
      throw 401;
    }
  }
  async function signUp(username, password) {}
  return (
    <Container>
      <SubContainer>
        <Main>
          {register ? (
            <form>
              <Title>Register</Title>
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                placeholder="username@website.com"
                value={account.email || ""}
                onChange={(e) =>
                  setAccount({
                    email: e.target.value,
                    password: account.password,
                    confirmPassword: account.confirmPassword,
                  })
                }
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                placeholder="Min. 8 characters"
                value={account.password || ""}
                onChange={(e) =>
                  setAccount({
                    email: account.email,
                    password: e.target.value,
                    confirmPassword: account.confirmPassword,
                  })
                }
              />
              <label htmlFor="cpassword">Confirm Password:</label>
              <input
                type="password"
                placeholder="Retype your password"
                value={account.confirmPassword || ""}
                onChange={(e) =>
                  setAccount({
                    email: account.email,
                    password: account.password,
                    confirmPassword: e.target.value,
                  })
                }
              />
              <p>
                Already have an account?{" "}
                <span
                  onClick={() => {
                    setErrorMessage("");
                    setRegister(false);
                  }}
                >
                  Click to login
                </span>
              </p>
              {errorMessage ? <Message>{errorMessage}</Message> : ""}
              <button
                onClick={async (e) => {
                  e.preventDefault();
                  if (account.password !== account.confirmPassword) {
                    return setErrorMessage("Passwords do not match!");
                  }
                  try {
                    setErrorMessage("");
                    await signUp(account.email, account.password);
                    await props.setOpen(false);
                  } catch {
                    setErrorMessage("Failed to create account!");
                  }
                }}
              >
                Submit
              </button>
            </form>
          ) : (
            <form>
              <Title>Sign in with email</Title>
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                placeholder="username@email.com"
                value={account.email || ""}
                onChange={(e) =>
                  setAccount({
                    email: e.target.value,
                    password: account.password,
                  })
                }
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                placeholder="*********"
                value={account.password || ""}
                onChange={(e) =>
                  setAccount({ email: account.email, password: e.target.value })
                }
              />
              <p>
                Not registered yet?{" "}
                <span
                  onClick={() => {
                    setErrorMessage("");
                    setRegister(true);
                  }}
                >
                  Create an account
                </span>
              </p>
              {errorMessage ? <Message>{errorMessage}</Message> : ""}
              <button
                onClick={async (e) => {
                  e.preventDefault();
                  try {
                    setErrorMessage("");
                    await signIn(account.email, account.password);
                    await props.setOpen(false);
                  } catch {
                    setErrorMessage("Failed to login!");
                  }
                }}
              >
                Submit
              </button>
            </form>
          )}
        </Main>
        <ImgContainer>
          {props.setOpen ? (
            <Close onClick={() => props.setOpen(false)}>X</Close>
          ) : (
            ""
          )}
          <img src={wallpaper} alt="auth" />
        </ImgContainer>
      </SubContainer>
    </Container>
  );
}
