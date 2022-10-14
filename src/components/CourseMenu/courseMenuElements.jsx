import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Container = styled.div `
   display: flex;
   justify-content: center;
   flex-direction: column;
   box-sizing: border-box;
`
export const SubContainer = styled.div`
   padding: 5vw;
`

export const CourseHeader = styled.div`
   color: black;
   h1 {
      margin-top: 0;
   }
   p {
      line-height: 1.5;
   }
`

export const CourseInfo = styled.div`
   display: grid;
   width: 100%;
   grid-template-columns: repeat(4, 1fr);
   grid-column-gap: 20px;
   grid-row-gap: 20px;
`
export const CourseItem = styled.div`
   margin-top: 20px;
   color: black;
   ul {
      padding: 0;
      margin: 0;
      list-style-type: none;
   }
   li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;
      span {
         font-weight: 700;
      }
      &:hover {
         cursor: pointer;
      }
   }
   li:not:first-child{
      margin-top: 20px;
   }
`
export const FormCheck = styled.a`
   display: flex;
   align-items: center;
   text-decoration: none;
   color: black;
   label:hover {
      cursor: pointer;
   }
   input {
      margin-right: 10px;
   }
`

export const Exercise = styled.div`
   margin-top: 20px;
`


export const ItemWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 10vw;
    background: #003a5c;
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
    font-weight: bold;
    line-height: 1.4em;
    padding: 20px 10px 40px 20px;
    height: 40px;
    overflow: hidden;
    background-color: white;
    z-index: 9;
    position: relative;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
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
