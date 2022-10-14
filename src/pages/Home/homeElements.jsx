import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    border-radius: 0;
    background-color: white;
    width: 100vw;
    display: flex;
    width: 100%;
    border-radius: 20px;
    font-size: 15px;
    font-weight: 500;
    position: relative;
`

export const Wrapper = styled.div `
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`

export const SubContainer = styled.div`
    padding: 0 2vw 2vw;
    display: flex;
    flex-direction: column;
    padding: 0 3vw 3vw;
    flex-grow: 1;
    overflow: auto;
`
