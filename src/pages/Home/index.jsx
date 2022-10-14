import React, { useState } from "react";
import SideBar from "../../components/SideBar";
import HomeHeader from "../../components/HomeHeader";
import { Container, SubContainer, Wrapper } from "./homeElements";
import HomeFeatured from "../../components/HomeFeatured";
import Courses from "../../components/Courses";

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <Container>
      <SideBar />
      <Wrapper>
        <HomeHeader search={search} setSearch={setSearch} />
        <SubContainer>
          <HomeFeatured />
          <Courses search={search} />
        </SubContainer>
      </Wrapper>
    </Container>
  );
}
