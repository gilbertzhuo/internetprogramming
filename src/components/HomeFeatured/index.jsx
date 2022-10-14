import React from "react";
import logo from "../../images/logo.png";
import {
  MainHeader,
  Main,
  MainContainer,
  Title,
  Author,
  AuthorWrapper,
  AuthorDetail,
  Soldier,
} from "./homeFeaturedElements";
export default function HomeFeatured() {
  return (
    <>
      <MainHeader>Featured</MainHeader>
      <Main>
        <MainContainer>
          <Soldier />
          <Title>Learn programming through gamified experience</Title>
          <Author>
            <AuthorWrapper>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-check"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <img className="author-img" src={logo} alt="Project" />
            </AuthorWrapper>
            <AuthorDetail>
              <p>Internet Programming</p>
              <p>Project Demo</p>
            </AuthorDetail>
          </Author>
        </MainContainer>
      </Main>
    </>
  );
}
