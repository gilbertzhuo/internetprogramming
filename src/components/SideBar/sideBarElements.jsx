import styled from "styled-components"
import { Link } from "react-router-dom"
export const Container = styled.div`
    width: 15vw;
    height: 100%;
    padding: 3vw;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    transition-duration: 0.2s;
    overflow-y: auto;
    overflow-x: hidden;
    a {
        color: black;
    }
    
`

export const Logo = styled.a`
    text-decoration: none;
    color: black;
    font-size: 120%;
    font-weight: 600;
    line-height: 34px;
    position: sticky;
    top: 0;
`

export const SideWrapper = styled.div`
    border-bottom: 1px solid rgb(246, 245, 250);
    padding: 2vw 0;
    width: 10vw;
`

export const MenuTitle = styled.div`
    font-size: 12px;
    letter-spacing: 0.07em;
    margin-bottom: 24px;
`

export const SideMenu = styled.div`
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: #808191;
    svg {
        margin-right: 3vw;
    }
    a+a {
        margin-top: 2vw;
    }
    svg {
        width: 2vw;
        padding: 0.5vw;
        border-radius: 10px;
        background-color: #353340;
        color: white;
        flex-shrink: 0;
        margin-right: 16px;
    }
    svg:hover {
        color: #fff;
    }
    a {
        display: flex;
        align-items: center;
    }
`

export const LinkItem = styled(Link)`
    &:hover{
        color: black;
        font-weight: 600;
        svg {
            background: #003a5c;
        }
    }

`