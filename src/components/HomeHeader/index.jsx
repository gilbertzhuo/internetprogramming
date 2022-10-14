import React, { useState } from "react";
import cat from "../Game/assets/image/cat.svg";
import {
  Container,
  Header,
  SearchBar,
  HeaderImage,
  HeaderName,
  Dropdown,
  HeaderProfile,
} from "./homeHeaderElements";
import Auth from "../Auth";
import { userState, courseState } from "../../recoilFiles/atom";
import { useRecoilState, useSetRecoilState } from "recoil";

export default function HomeHeader(props) {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useRecoilState(userState);
  const setCourse = useSetRecoilState(courseState);
  return (
    <Container>
      <SearchBar>
        <input
          type="text"
          placeholder="Search"
          value={props.search}
          onChange={(e) => {
            props.setSearch(e.target.value);
          }}
        />
      </SearchBar>
      {open && !user ? <Auth setOpen={setOpen} /> : ""}
      <Header onClick={() => setOpen(!open)}>
        <HeaderProfile>
          <HeaderImage src={cat} alt="user" />
          <HeaderName>{user ? user?.name : "Sign in"}</HeaderName>
          <svg viewBox="0 0 492 492" fill="currentColor" ß>
            <path d="M484.13 124.99l-16.11-16.23a26.72 26.72 0 00-19.04-7.86c-7.2 0-13.96 2.79-19.03 7.86L246.1 292.6 62.06 108.55c-5.07-5.06-11.82-7.85-19.03-7.85s-13.97 2.79-19.04 7.85L7.87 124.68a26.94 26.94 0 000 38.06l219.14 219.93c5.06 5.06 11.81 8.63 19.08 8.63h.09c7.2 0 13.96-3.57 19.02-8.63l218.93-219.33A27.18 27.18 0 00492 144.1c0-7.2-2.8-14.06-7.87-19.12z"></path>
          </svg>
        </HeaderProfile>
        {user && open ? (
          <Dropdown>
            <li
              onClick={() => {
                setUser(null);
                setCourse(null);
              }}
            >
              Sign out
            </li>
          </Dropdown>
        ) : (
          ""
        )}
      </Header>
    </Container>
  );
}
