import styled from "styled-components"

export const Container = styled.table`
  list-style-type: none;
  padding: 0;
  margin: 0 auto;
  width: 100%;
  padding: 10px;
  tbody{
    tr:first-child {
        background: gold;
        color: white;
    }
    tr:nth-child(2) {
        background: silver;
        color: white;
    }
    tr:nth-child(3) {
        background: #D2691E;
        color: white;
    }
}
  
`

export const ItemContainer = styled.div`
    height: 20px;
    display:flex;
    align-items: center;
`