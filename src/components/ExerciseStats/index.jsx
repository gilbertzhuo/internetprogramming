import React from 'react';
import { Container, SuccessContainer, ErrorContainer, Header} from './exerciseStatsElements';
import StarRatings from 'react-star-ratings';
 
export default function ExerciseStats(props) {
    return(
        <>
        {(props.success || props.error !== "")  ? (
            <Container>
                <Header>Check Submission</Header>
                {props.success ? (
                <SuccessContainer>
                    <h3>Success</h3>
                    <div style={{marginTop: "10px", padding:"10px"}}>Rating: <StarRatings
                        rating={5}
                        starRatedColor="#FF9529"
                        numberOfStars={5} 
                        starDimension="20px"
                        starSpacing="2px"
                    /></div>
                    <p>{props.stats.lines-1} lines of code! Fabulous!</p>
                    <p>{props.stats.steps} steps! Amazing!</p>
                </SuccessContainer>
                ):(
                <ErrorContainer>
                    <h3>Status</h3>
                    <p>{props.error}</p>
                </ErrorContainer>)}
            </Container>
        ):""}
        </>
        
    )
}