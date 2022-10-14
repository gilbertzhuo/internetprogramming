import React, {useState,useEffect} from 'react';
import { Container, Header, Commands} from './exerciseDescriptionElements';
import ans from "../Game/assets/exercise/week1/ans.png"
import ExerciseStats from '../ExerciseStats';
import Leaderboard from '../Leaderboard';
import { Markup } from 'interweave';

export default function ExerciseDescription(props) {
    const [ranking, setRanking] = useState([]);
    useEffect(()=> {
        if (props.ranking) {
            setRanking(Object.entries(props.ranking).sort(function(a,b) {
                 if (a[1][1] < b[1][1]) {
                    return -1;
                }
                if (a[1][1] > b[1][1]) {
                    return 1;
                }
                return 0;
            }))
        }
    },[props.ranking, props.success])
    
    
    return (
        props.title ? (
            <Container>
                <ExerciseStats stats={props.stats}  error = {props.error} success={props.success}/>
                <Header>Exercise</Header>
                <h3>{props.title}</h3>
                <div>
                <Markup content={props?.description}/>
                </div>
                <img src={props.img||ans} alt="ans" width="100%"/>
                <Header style={{marginTop:"20px"}}>Available Commands</Header>
                <h3>Miki</h3>
                <Commands>
                    <li>move()</li><li>turnLeft()</li><li>turnRight()</li>
                    <li>putMilk()</li>
                    <li>removeMilk()</li>
                    <li>onMilk()</li>
                    <li>treeFront()</li>
                    <li>treeLeft()</li>
                    <li>treeRight()</li>
                    <li>headButt()</li>
                </Commands>
                <Header style={{marginTop:"20px"}}>Leaderboard</Header>
                <Leaderboard ranking={ranking}/>
                <div style={{height:"20vh"}}></div>
            </Container>)
            
        :""
        
    )
}
