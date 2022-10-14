import React from 'react';
import {Banner} from "./PremiumElements";
export default function PremiumArea(props) {
    return(
       
        <center>
          <Banner>
          <svg className="showmedia-free-trial-icon" width="60px" height="60px" fill="gold" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.188 17l1.667-5.606-4.26 1.864L12 7.688l-3.596 5.57-4.259-1.864L5.812 17h12.376zm-14.08 1.285L1.614 9.9a1 1 0 0 1 1.36-1.2l4.673 2.045 3.512-5.442a1 1 0 0 1 1.68 0l3.514 5.442 4.674-2.046a1 1 0 0 1 1.36 1.201l-2.494 8.386a1 1 0 0 1-.959.715H5.067a1 1 0 0 1-.959-.715z"></path>
          </svg>
          <h1>{props.h1}</h1>
          <p>{props.p}</p>
          </Banner>
        </center>
    )
};