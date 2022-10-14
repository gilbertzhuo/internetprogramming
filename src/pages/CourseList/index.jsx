import React from "react";
import CourseMenu from '../../components/CourseMenu';
import {
  useParams
} from "react-router-dom";

export default function CourseList() {
   let { id } = useParams();
  return (
        <>
            <CourseMenu course={id}/>
        </>
  );
}
