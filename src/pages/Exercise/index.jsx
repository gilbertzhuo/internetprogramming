import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Editor from "../../components/Editor";
import { ReflexContainer, ReflexSplitter, ReflexElement } from "react-reflex";
import "react-reflex/styles.css";
import ExerciseDescription from "../../components/ExerciseDescription";
import Game from "../../components/Game";
import EditorBar from "../../components/EditorBar";
import { Container } from "./exerciseElements";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useRecoilValue } from "recoil";
import { userState, courseState } from "../../recoilFiles/atom";

export default function Exercise() {
  const user = useRecoilValue(userState);
  const course = useRecoilValue(courseState);
  let history = useHistory();
  const [js, setJs] = useState("");
  const [play, setPlay] = useState(0);
  const [gameID, setGameID] = useState(uuidv4());
  const [success, setSuccess] = useState(false);
  const [stats, setStats] = useState({
    lines: 0,
    steps: 0,
  });
  const [error, setErrorMsg] = useState("");
  let { course_id, topic_id, exercise_id } = useParams();
  const topics = course[course_id].topics[topic_id];
  const exercise = topics.exercises[exercise_id];
  const [ranking, setRanking] = useState();
  const [playing, setPlaying] = useState(false);

  const [speed, setSpeed] = useState(
    JSON.parse(localStorage.getItem("gameSpeed")) || 500
  );
  const loop_world = course[course_id].topics[topic_id].loop_world;
  useEffect(() => {
    if (success) {
      setStats({ ...stats, lines: js.split("()").length });
    }
  }, [success, play, JSON.stringify(stats), exercise.id]);

  async function updateRanking(id, name, lines) {}
  async function consumeEnergy(id) {}

  async function getRanking(exercise_id) {}

  return (
    <Container>
      <EditorBar
        speed={speed}
        setSpeed={setSpeed}
        loop_world={loop_world}
        setPlay={setPlay}
        play={play}
        setErrorMsg={setErrorMsg}
        setSuccess={setSuccess}
        js={js}
        setPlaying={setPlaying}
      />
      <ReflexContainer orientation="vertical">
        <ReflexElement>
          <ExerciseDescription
            ranking={ranking}
            error={error}
            success={success}
            stats={stats}
            title={exercise.title}
            description={exercise.description}
            img={exercise.img}
          />
        </ReflexElement>
        <ReflexSplitter />
        <ReflexElement>
          <Editor onChange={setJs} text={js} readOnly={playing} />
        </ReflexElement>
        <ReflexSplitter />
        <ReflexElement>
          <Game
            stats={stats}
            speed={speed}
            play={play}
            setStats={setStats}
            success={success}
            setSuccess={setSuccess}
            setErrorMsg={setErrorMsg}
            error={error}
            map={JSON.parse(exercise.map)}
            ans={JSON.parse(exercise.ans)}
            miki={JSON.parse(exercise.miki)}
            miki_position={JSON.parse(exercise.miki_position)}
            gameID={gameID}
            setGameID={setGameID}
            setPlaying={setPlaying}
          />
        </ReflexElement>
      </ReflexContainer>
    </Container>
  );
}
