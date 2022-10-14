import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const Container = styled.div `
    width: 100%;
    height: 100%;
`

export const ListWrapper = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
`
export const Header = styled.div`
    font-size: 24px;
    font-weight: 500;
    color: black;
    margin: 3vw 0 2vw;
    animation: bottom 0.8s 0.03 both;
`

export const Item = styled(Link)`
    color: black;
    position: relative;
    background-color: white;
    border-radius: 20px;
    border: 1px solid #dbdbdb;
    overflow: hidden;
    transition: 0.4s;
    bottom: 0.8s 0.03s both;
    &:hover {
        transform: scale(1.05);
        cursor: pointer;
    }
`

export const ItemWrapper = styled.div`
    position: relative;
    width: 100%;
    img {
        background-repeat: no-repeat;
        background-size: 100% 100%;
        max-width: 100%;
        width: 100%;
        border-radius: 20px 20px 0 0;
        display: block;
        cursor: pointer;
        transition: 0.4s;
    }
`

export const Name = styled.div`
    color: black;
    font-size: 16px;
    line-height: 1.4em;
    padding: 12px 20px 0;
    overflow: hidden;
    background-color: white;
    z-index: 9;
    position: relative;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`

export const Description = styled.div`
    font-size: 12px;
    padding: 12px 20px 20px;
    background-color: white;
    position: relative;
`
