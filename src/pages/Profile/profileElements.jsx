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
 
export const DisplayName = styled.div`
    font-size: 2rem;
    font-weight:300;
`

export const BasicInformation = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
`
export const UserInfo = styled.div`
    padding: 2em 2em 2em 2em;
    background: #fff;
    box-shadow: rgb(0 0 0 / 10%) 0 0 0 1px;
    border-radius: 1em;
    box-sizing: border-box;
    position: relative;
    margin: 1em 1em 1em 0em;
    input {
        margin-top: 10px;
        height: 35px;
        padding: 5px;
        width: 100%;
        border: 1px solid #dbdbdb;
        border-radius: 5px;
    }
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 10px;
        height: 35px;
        padding: 5px;
        width: 125px !important;
        font-size: 14px;
        width: 100%;
        background: #003a5c;
        color: white;
        font-weight: bolder;
        border: none;
        border-radius: 5px;
        &:hover {
            cursor: pointer;
            transform: scale(1.05);
        }
        svg {
            margin-right: 5px;
        }
    }
`

export const Info = styled.div`
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    padding-bottom: 2em;
    margin-bottom: 2em;
    position: relative;
    border-bottom: 1px solid #dbdbdb;
`

export const Setting = styled.div`
    width: 120px;
`

export const Avatar = styled.div`
    flex: none;
    width: 4em;
    height: 4em;
    border-radius: 1em;
    overflow: hidden;
    box-shadow: rgb(0 0 0 / 10%) 0 0 0 1px;
    background: #003a5c;
    margin: 0.5em;
    img {
        width: 100%;
        height: 100%;
    }
`

export const User = styled.div`
    flex: auto;
    align-self: center;
    margin: 0.5em;
`

export const Name = styled.div`
    position: relative;
`

export const Member = styled.div`
    display: flex;
    align-items: center;
    svg {
        margin-left: 3px;
        margin-right: 5px;
    }
`

export const Stat = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    margin: -1em;
    li {
        display: flex;
        margin: 1em;
        font-weight: 500;
        align-items: center;
        svg {
            margin-right: 3px;
            margin-left: 3px;
        }
    }
`


export const Title = styled.div`
    margin-top: 15vh;
    font-size: 30px;
    color: black;
    background: white;
    font-weight: 700;
    position: sticky;
    top: 0;
    left: 0;
    -webkit-animation: bottom 0.8s 0.1s both;
    animation: bottom 0.8s 0.1s both;
    z-index: 1;
`

export const EditProfile = styled.div`
    padding: 2em 2em 2em 2em;
    background: #fff;
    box-shadow: rgb(0 0 0 / 10%) 0 0 0 1px;
    border-radius: 1em;
    box-sizing: border-box;
    position: relative;
    margin: 1em 1em 1em 0em;
    input {
        margin-top: 10px;
        height: 35px;
        padding: 5px;
        width: 100%;
        border: 1px solid #dbdbdb;
        border-radius: 5px;
        margin-bottom: 20px;
    }
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 10px;
        height: 35px;
        padding: 5px;
        width: 125px !important;
        font-size: 14px;
        width: 100%;
        background: #003a5c;
        color: white;
        font-weight: bolder;
        border: none;
        border-radius: 5px;
        &:hover {
            cursor: pointer;
            transform: scale(1.05);
        }
        svg {
            margin-right: 5px;
        }
    }
`