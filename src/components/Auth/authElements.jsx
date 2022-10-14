import styled from "styled-components"

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    z-index: 10;
    background-color: #143a8799;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;

`

export const Title = styled.h1`
    color: #003a5c;
`

export const Close = styled.div`
    border-radius: 50%;
    border: 1px solid #d1d4dc;
    height:40px;
    width:40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: #d1d4dc;
    position: absolute;
    top: 20px;
    right: 20px;
    font-weight: 700;
    &:hover {
        cursor: pointer;
        transform: scale(1.05);
        color: white;
        border: 1px solid white;
    }
`

export const SubContainer = styled.div`
    min-height: 60vh;
    width: 80vw;
    background:#003a5c;
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-radius: 5px;
`

export const Main = styled.div`
    padding: 5vw;
    background: white;
    border-radius: 5px;
    input {
        width: 80%;
        height: 40px;
        padding-left: 10px;

    }
    form {
        display: flex;
        flex-direction: column;
        label {
            margin-top: 3vh;
            margin-bottom: 5px;
        }
        p {
            margin-top: 3vh;
        }
        button {
            margin-top: 2vh;
            border-radius: 5px;
            color: white;
            background: #003a5c;
            width: 80%;
            height: 40px;
            border: none;
            cursor: pointer;
            font-weight: bolder;
        }
        input {
            border-radius: 5px;
            border: 1px solid #dbdbdb;
        }
        span {
            color: #003a5c;
            cursor: pointer;
        }
    }
`

export const ImgContainer = styled.div`
    position: relative;
    padding: 5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 100%;
    }
`

export const Message = styled.div`
    margin-top: 10px;
    border-radius: 5px;
    height: 40px;
    padding: 10px;
    color: white;
    font-weight: bolder;
    background: #ff3d3d;
`