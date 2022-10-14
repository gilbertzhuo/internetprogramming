import styled from "styled-components";

export const Container = styled.div `
    padding: 20px;
    h3 {
        margin-top: 20px;
    }
    p {
        padding: 10px;
        margin-top: 20px;
    }
    overflow: scroll;
`

export const Header = styled.div`
    position: sticky;
    top: 0;
    padding: 0.75rem;
    background-color: #f6f5fa;
    font-size: 1rem;
    color: #19191a;
    font-weight: 700;
    z-index: 1;
    border-top: 1px solid #fff;
`

export const Commands = styled.ul`
   width: 100%;
   padding: 10px;
   display:flex;  
   flex-wrap: wrap;
   text-decoration: none;
   list-style-type: none;
   li {
        text-decoration: none;
        background: black;
        margin-right: 5px;
        padding: 5px;
        border-radius: 5px;
        color: white;
        height: 30px;
        margin-top: 5px;
    }
`
