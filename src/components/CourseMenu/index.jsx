import React, { useState, useEffect } from "react";
import {
  Container,
  SubContainer,
  CourseHeader,
  CourseInfo,
  Item,
  ItemWrapper,
  Name,
} from "./courseMenuElements";
import { useParams } from "react-router-dom";
import CourseBanner from "../Banner";
import { useRecoilValue } from "recoil";
import { courseState } from "../../recoilFiles/atom";

export default function CourseMenu() {
  const colors = [
    "#ffd2a7",
    "#0d6c7d",
    "#ffbcff",
    "#00dfba",
    "#0094f2",
    "#ffbda9",
  ];

  let { id } = useParams();
  const list = useRecoilValue(courseState);

  return (
    <>
      {list ? (
        <Container>
          <CourseHeader>
            <CourseBanner title={list.title} description={list.description} />
          </CourseHeader>
          <SubContainer>
            <CourseInfo>
              {list[id].topics.map((item, index) => {
                return (
                  <Item to={`/exercise_list/${id}/${index}`} key={item.title}>
                    <ItemWrapper style={{ background: colors[index] }}>
                      <img src={item.img} alt={item.title} />
                    </ItemWrapper>
                    <Name>{item.title}</Name>
                  </Item>
                );
              })}
            </CourseInfo>
          </SubContainer>
        </Container>
      ) : (
        ""
      )}
    </>
  );
}
