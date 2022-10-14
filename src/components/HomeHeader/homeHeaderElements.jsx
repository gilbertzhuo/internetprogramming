import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-shrink: 0;
    padding: 3vw;
`

export const SearchBar = styled.div`
    height: 5vh;
    display: flex;
    height: 40px;
    width: 30vw;
    input {
        width: 100%;
        height: 100%;
        border: none;
        background-color: white;
        border: 1px solid rgb(246, 245, 250);
        border-radius: 8px;
        font-size: 14px;
        font-weight: 500;
        padding: 0 40px 0 16px;
        box-shadow: 0 0 0 2px rgba(134, 140, 160, 0.02);
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56.966 56.966' fill='%23717790c7'%3e%3cpath d='M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z'/%3e%3c/svg%3e");
        background-size: 14px;
        background-repeat: no-repeat;
        background-position: 96%;
        color: black;
    }
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-shrink: 0;
    margin-left: auto;
    svg {
        width: 10px;
        flex-shrink: 0;
    }

`

export const HeaderProfile = styled.div`
    display: flex;
    align-items: center;
    padding: 0px 10px 0px 10px;
    min-height: 40px;
    &:hover {
        border-radius: 50px;
        background: #003a5c;
        div {
            color: white;
        }
        color: white;
        cursor: pointer;
    }
`
export const HeaderImage = styled.img`
    width: 2vw;
    height: 2vw;
    flex-shrink: 0;
    border-radius: 50%;
    box-sizing: border-box;
    background: #003a5c;
    border: 2px solid #003a5c;
`

export const HeaderName = styled.div`
    color: black;
    font-size: 15px;
    margin: 0 6px 0 12px;
    font-weight: 700;
`

export const Dropdown = styled.ul`  
    display: block;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 12px 16px;
    z-index: 5;
    text-decoration: none;
    list-style-type: none; 
    padding: 0;
    margin: 0;
    color: black !important;
    &:hover { 
        display: block;
        color: black !important;
    }
    li {
        padding: 10px;
        margin-top: 5px;
        font-weight: bolder;
        &:hover {
            border-radius: 5px;
            background: #003a5c !important;
            color: white !important;
            cursor: pointer;
        }
    }
`
