import React from "react";
import {
  Container,
  Header,
  Item,
  ItemWrapper,
  ListWrapper,
  Name,
  Description,
} from "./coursesElements";

import PremiumArea from "../PremiumArea";
import { useRecoilValue } from "recoil";
import { userState, courseState } from "../../recoilFiles/atom";

export default function Courses(props) {
  const list = useRecoilValue(courseState);
  const user = useRecoilValue(userState);

  return (
    <>
      <Header>COURSES</Header>
      <Container>
        {list ? (
          <ListWrapper>
            {list.map((item) => {
              return (
                <Item to={`course/${item.id}`} key={item.title}>
                  <ItemWrapper>
                    <img src={item.img} alt={item.alt} />
                  </ItemWrapper>
                  <Name>{item.title}</Name>
                  <Description>{item.language.toUpperCase()}</Description>
                </Item>
              );
            })}
          </ListWrapper>
        ) : !user ? (
          <PremiumArea
            h1="Register an account with us!"
            p="Gain Access to courses provided by IN6206"
          />
        ) : (
          ""
        )}
      </Container>
    </>
  );
}
