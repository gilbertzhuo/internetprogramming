import styled from 'styled-components';

export const Container = styled.div `
   margin-bottom: 40px;
   p {
        padding: 10px;
        margin-top: 0px;
    }
`

export const SuccessContainer = styled.div `
    h3 {
       color: #26a69a;
       font-weight: 500;
    }
`

export const ErrorContainer = styled.div `
    h3 {
       color: #d81b60;
       font-weight: 500;
    }
`

export const Header = styled.div`
    position: sticky;
    top: 0;
    padding: 0.75rem;
    background-color: #f6f5fa;
    font-size: 1rem;
    font-weight: 700;
    z-index: 1;
    border-top: 1px solid #fff;
`