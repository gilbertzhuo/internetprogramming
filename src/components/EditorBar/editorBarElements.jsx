import styled from 'styled-components'

export const Container = styled.div `
    height: 40px;
    background-color: #00242E;
    display: flex;
    align-items: center;
    z-index: 1;
    select {
        margin-left: auto;
        height: 30px;
        margin-right: 10px;
        border-radius: 500px;
        margin-right: 20px;
        background: transparent;
        border-radius: 5px;
        color: white;
        font-weight: 700;
        padding: 5px;
        text-transform: uppercase;
        option {
            background-color: #00242E;
            color: white;
        }
    }
    button {
        height: 24px;
        width: 24px;
        border: none;
        border-radius: 500px;
        margin-right: 20px;
        background: transparent;
        border-radius: 5px;
        color: white;
        font-weight: 700;
        text-transform: uppercase;
        &:hover{
            transform: scale(1.05);
            cursor: pointer;
        }
    }
`