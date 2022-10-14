import styled from 'styled-components'

export const Container = styled.div `
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  h1 {
    font-size: 40px;
  }
  @keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
       background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
  }
`
export const SubContainer = styled.div `
  color: white;
  position: absolute;
  top: 20vh;
  padding: 50px;
`

export const Typing = styled.div`

  margin:10% 25% 0 25%;
  width:50%;

    .st0{opacity:0.42;fill:#66BBEA;}
    .st1{opacity:0.43;fill:#CDE4EC;}
    .st2{fill:#A9C5CD;}
    .st3{fill:#86AFBA;}
    .st4{fill:#66BBEA;}
    .st5{fill:#35658B;}
    .st5-1{fill:#35658B;}
    .st5-2{fill:#35658B;}
    .st5-3{fill:#35658B;}
    .st6{fill:#6CB7E6;}
    .st7{opacity:0.25;fill:#35658B;}
    .st8{fill:#CDE4EC;}
    .st9{fill:#F1BF75;}
    .st10{fill:#1E3A4C;}
    .st11{fill:#0D2A3E;}
    .st12{fill:#EA924A;}
    .st13{fill:#80A8B1;}
    .st14{opacity:0.67;fill:#EA924A;}
    .st15{opacity:0.29;fill:#35658B;}
    .st16{opacity:0.48;fill:#1E3A4C;}
    .st17{fill:#408BCA;}
    .st18{fill:#2374AB;}
    .st19{fill:#1A3651;}

    .st5-1 {
    animation: blink 1s infinite;
    animation-name: blink;
    opacity: 100;
    }
    .st5-2 {
    animation: blink 1s infinite;
    animation-name: blink;
    opacity: 100;
    animation-delay: .1s;
    }
    .st5-3 {
    animation: blink 1s infinite;
    animation-name: blink;
    opacity: 100;
    animation-delay: .2s;
    }

@keyframes blink{
  to{opacity: .0;}
}
`