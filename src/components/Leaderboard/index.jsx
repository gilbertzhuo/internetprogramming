import React from "react";
import {Container, ItemContainer} from "./leaderboardElements.jsx"
import Miki from "../Game/assets/image/cat.svg"
export default function Leaderboard(props){
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    return(
        <Container>  
            <thead>
                <tr>
                    <th>No</th><th>Name:</th><th>Lines of Code:</th><th></th>
                </tr>
            </thead>
            <tbody>
                {props.ranking.map((item, index)=>{
                    return(
                        <tr key={index}>
                            <td>
                                <ItemContainer>
                                    {index+1}
                                </ItemContainer>
                            </td>
                            <td>
                                <ItemContainer>
                                    {item[1][0]}
                                </ItemContainer>
                            </td>
                            <td>
                                <ItemContainer>
                                    {item[1][1]}
                                </ItemContainer>
                            </td>
                            {(item[0] === userInfo.uid)?(<td>
                                <ItemContainer>
                                <img src={Miki} style={{width:"30px"}}/>
                                </ItemContainer></td>):<td></td>}
                        </tr>
                    )
            })}
            </tbody>
        </Container>
    )
}