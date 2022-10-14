import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.div `
    width: 100vw;
    height: 100vh !important;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`

export const Banner = styled(Link)`
    min-height: 300px;
    width: 70vw;
    background: #0c68cb;
    padding: 60px;
    color: white;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
        font-size: 3vw;
    }
    overflow: hidden;
    transition: 0.4s;
    bottom: 0.8s 0.03s both;
    &:hover {
        transform: scale(1.05);
        cursor: pointer;
    }
`
