import React from 'react';
import { BannerContainer } from './banner';

const Banner = (props) => {
    return (
    <>
        <BannerContainer>
            <h1>
                {props.title}
            </h1>
            <p>{props.description}</p>
        </BannerContainer>
    </>
    )
}
export default Banner;