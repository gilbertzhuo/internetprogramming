import {Container, Banner} from "./energyElements";
import Cat from "../../components/Game/assets/image/cat.svg"
export default function Energy404() {
    return(
        <Container>
            <Banner to="/">
                <img src={Cat} alt="cat"/>
                <h1><span style={{color:"orange"}}>Energy NOT FOUND</span><br/>Miki needs to rest.</h1>
            </Banner>
        </Container>
    )
}