import React from 'react';
import { Container } from './editorBarElements';

const EditorBar = (props) =>{

    function act(js) {
        eval(
            `
            window.game_condition.queue = []
            let count = 0;
            do{
                ${js}
                count++;
            }while(window.game_condition.queue.length < 5000 && count < 5000);
            `
        );
    }
    function main(js) {
        eval(
            `   
                window.game_condition.queue = []
                ${js}
            `
        );
    }
    function safe(js) {
        props.setPlaying(true);
        props.setErrorMsg("")
        props.setPlay(props.play+1);
        try {
            props.loop_world ? (act(js)):(main(js))
        } catch (e){
            props.setSuccess(false);
            props.setErrorMsg(e.message);
        }
    }
    function handleChange(e) {
        props.setSpeed(e.target.value);
        localStorage.setItem("gameSpeed", JSON.stringify(e.target.value));
    }
    return(
        <Container>
            <select onChange={handleChange} value={props.speed}>
                <option value={500}>Slow</option>
                <option value={100}>Medium</option>
                <option value={50}>Fast</option>
                <option value={25}>Lightning</option>
            </select>
        {props.play === 0 ? (
            <button onClick={()=>safe(props.js)}>
                <svg focusable="false" viewBox="0 0 24 24" fill="white" aria-hidden="true"><g><path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g></svg>
            </button>):
            (<button onClick={()=>window.location.reload()}>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              width="24" height="24"
              viewBox="0 0 24 24" fill="white">    <path d="M 7.1601562 3 L 8.7617188 5 L 19 5 L 19 15 L 16 15 L 20 20 L 24 15 L 21 15 L 21 3 L 7.1601562 3 z M 4 4 L 0 9 L 3 9 L 3 21 L 16.839844 21 L 15.238281 19 L 5 19 L 5 9 L 8 9 L 4 4 z"></path></svg>
            </button>)}
        </Container>
    )
}
export default EditorBar; 