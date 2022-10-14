import React from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import useWindowDimensions from "./utils/windowHook";
import Experience from "./components/Experience";
import Home from "./pages/Home";
import Exercise from "./pages/Exercise";
import CourseList from "./pages/CourseList";
import ExerciseList from "./pages/ExerciseList";
import PrivateRoute from "./utils/privateroute";
import Energy404 from "./pages/Energy404";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

export default function App() {
  const { width } = useWindowDimensions();

  return (
    <>
      {width <= 960 ? (
        <Experience />
      ) : (
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <PrivateRoute path="/profile">
              <Profile />
            </PrivateRoute>
            <PrivateRoute path="/course/:id">
              <CourseList />
            </PrivateRoute>
            <PrivateRoute path="/exercise_list/:course_id/:topic_id">
              <ExerciseList />
            </PrivateRoute>
            <PrivateRoute path="/exercise/:course_id/:topic_id/:exercise_id">
              <Exercise />
            </PrivateRoute>
            <PrivateRoute path="/energy_404">
              <Energy404 />
            </PrivateRoute>
          </Switch>
        </Router>
      )}
    </>
  );
}
