import React, { useState, useEffect, useRef } from "react";
import Board from "./classes/board";
import Character from "./classes/character";
import Cat from "./assets/image/cat.svg";
import Milk from "./assets/image/milk.png";
import Tree from "./assets/image/tree.png";
import Rock from "./assets/image/rock.png";
import { IFrame } from "../../utils/iframe";
import { v4 as uuidv4 } from "uuid";

export default function Game(props) {
  const ans = props.ans;
  const row = props.map.length;
  const col = props.map[0].length;
  const [game] = useState(() => new Board(props.map));
  const [Miki] = useState(() => new Character(props.miki[0] % row,props.miki[1] % col));
  const [steps, setSteps] = useState(0);
  const [moveCount, setMoveCount] = useState(0);
  const accident = useRef(false);

  function move() {
    game.queue.push(0);
    Miki._move();
    if (Miki._x < 0) {
          Miki._x += col-1;
    }
    if (Miki._y < 0) {
      Miki._y += row-1;
    }
  }
  function turnLeft() {
    game.queue.push(1);
    Miki._turnLeft();
  }
  function turnRight() {
    game.queue.push(2);
    Miki._turnRight();
  }
  function removeMilk() {
    game.queue.push(3);
    game._removeMilk(Miki._y, Miki._x);
  }
  function putMilk() {
    game.queue.push(4);
    game._putMilk(Miki._y, Miki._x);
  }
  function onMilk() {
    return Miki.onMilk(game._board);
  }
  function treeFront() {
    return Miki.treeFront(game.board);
  }
  function treeLeft() {
    return Miki.treeLeft(game.board);
  }
  function treeRight() {
    return Miki.treeRight(game.board);
  }
  function headButt() {
    game.queue.push(5);
  }
  
  function CheckWin() {
    if (props.error === "" && JSON.stringify(ans) === JSON.stringify(game.board) && JSON.stringify([Miki.x % col, Miki.y % row]) === JSON.stringify([props.miki_position[1]% col, props.miki_position[0]%row])){
      props.setSuccess(true);
      props.setStats({...props.stats, steps: steps});
    } 
    else if (props.error === ""){
      props.setErrorMsg("Exercise criteria not met!");
    }
  }
  window.Miki = {
    turnLeft,
    turnRight,
    move,
    removeMilk,
    putMilk,
    treeFront,
    treeLeft,
    treeRight,
    onMilk,
    headButt,
  };
  window.game_condition = {
    queue: game.queue,
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if (game.queue.length > 0) {
        let num = parseInt(game.queue.shift());
        if (num === 0) {
          Miki.move();
          if (Miki.x < 0) {
            Miki.x += col;
          }
          if (Miki.y < 0) {
            Miki.y += row;
          }
          if (game.board[Miki.y % row][Miki.x % col] === 2) {
            game.queue = [];
            props.setErrorMsg("Miki Drowned! :(");
            accident.current = true;
          }
          else if (game.board[Miki.y % row][Miki.x % col] === 3) {
            game.queue = [];
            props.setErrorMsg("Miki crashed into a tree! :(");
            accident.current = true;
          } 
           else if (game.board[Miki.y % row][Miki.x % col] === 4) {
            game.queue = [];
            props.setErrorMsg("Miki crashed into a rock! :(");
            accident.current = true;
          }  
          setSteps(steps+1)
        } else if (num === 1) {
          Miki.turnLeft();
          setSteps(steps+1)
        } else if (num === 2) {
          Miki.turnRight();
          setSteps(steps+1)
        } else if (num === 3) {
          if (!game.removeMilk(Miki.y % row, Miki.x % col)) {
            game.queue = [];
            props.setErrorMsg("No milk to remove!");
            accident.current = true;
          }
        } else if (num === 4) {
          if (!game.putMilk(Miki.y % row, Miki.x % col)) {
            game.queue = [];
            props.setErrorMsg("Cannot put milk here!");
            accident.current = true;
          }
        } else if (num === 5) {
          if (!game.removeStone(Miki.frontPosition(game.board).y, Miki.frontPosition(game.board).x)){
            game.queue = [];
            props.setErrorMsg("No stone to hit!");
            accident.current = true;
          }
        }
        setMoveCount(moveCount + 1);
      }
    }, props.speed);
    return () => clearInterval(timer);
  }, [moveCount]);

  useEffect(() => {
    if (game.queue.length === 0) {
      props.setPlaying(false)
      CheckWin();
    }
  }, [JSON.stringify(game.queue),moveCount]);

  useEffect(()=>{
    props.setErrorMsg("");
    props.setSuccess(false);
  },[])

  return (
    <IFrame width="100%" height="100%" title="board" frameBorder="0">
      <table style={{ borderSpacing: "0" }}>
        <tbody>
          {game.board.map((_row, _y) => {
            return (
              <tr key={uuidv4()}>
                {_row.map((item, _x) => {
                  return (
                    <td
                      key={_x.toString() + "-" + _y.toString()}
                      style={{
                        height: `calc(100vw/${col})`,
                        width: `calc(100vw/${col})`,
                        background: item === 2 ? "blue" : "lightgreen",
                        border: "1px solid black",
                        boxSizing: "border-box",
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          height: "100%",
                          width: "100%",
                        }}
                      >
                        {Miki.x % col === _x && Miki.y % row === _y ? (
                          <img
                            src={Cat}
                            width="70%"
                            height="70%"
                            style={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: `translate(-50%, -50%) rotate(${(Miki.direction||0)*90}deg)`,
                              zIndex: "1",
                            }}
                            alt="cat"
                          />
                        ) : (
                          ""
                        )}
                        {item === 1 ? (
                          <img
                            src={Milk}
                            width="60%"
                            height="60%"
                            style={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                            }}
                            alt="milk"
                          />
                        ) : (
                          ""
                        )}
                        {item === 3 ? (
                          <img
                            src={Tree}
                            width="100%"
                            height="100%"
                            style={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                            }}
                            alt="Tree"
                          />
                        ) : (
                          ""
                        )}
                        {item === 4 ? (
                          <div>
                            <img
                              className="Rock"
                              src={Rock}
                              width={game.getStoneHP(_y,_x)%2 ? "90%":"100%"}
                              height={game.getStoneHP(_y,_x)%2 ? "90%":"100%"}
                              style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                              }}
                              alt="Rock"
                            />
                            <span style={{
                                position: "absolute",
                                top: "0%",
                                right: "0%",
                                color: "white",
                                height: "25%",
                                width: "25%",
                                borderRadius: "20px",
                                background: "#1e1e1e",
                                fontSize: `calc(100vw/${col*5})`,
                                display: "flex",
                                fontFamily: "monospace",
                                alignContent: "center",
                                justifyContent: "center",
                                textAlign: "center"
                                }}>
                              {game.getStoneHP(_y,_x)}
                              </span>
                           
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </IFrame>
  );
}
