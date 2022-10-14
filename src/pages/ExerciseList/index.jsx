import React from "react";
import { useParams, Link } from "react-router-dom";
import Banner from "../../components/Banner";
import { useRecoilValue } from "recoil";
import { courseState } from "../../recoilFiles/atom";
export default function ExerciseList() {
  let { course_id, topic_id } = useParams();
  const list = useRecoilValue(courseState);
  const topics = list[course_id].topics[topic_id];
  const exercises = topics.exercises;

  return (
    <div style={{ minHeight: "120vh" }}>
      <Banner title={topics.title} description={topics.description} />
      <table>
        <thead>
          <tr>
            <th style={{ width: "80vw" }}>
              <p>Exercises</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((item, index) => {
            return (
              <tr key={index}>
                <td>
                  <Link
                    style={{ color: "black" }}
                    to={`/exercise/${course_id}/${topic_id}/${index}`}
                  >
                    Problem {index + 1}: {item.title}
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
