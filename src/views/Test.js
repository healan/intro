/** @jsxImportSource @emotion/react */

import React from 'react';
import { css, keyframes } from '@emotion/react'

const floating = keyframes`
    0 {
        transform: translateY(0);    
    }
    50% {
        transform: translateY(-15px);
    }
    100% {
        transform: translateY(0);
    }
`;

const boxStyle = css`
    width: 50px; 
    height: 50px; 
    border-radius: 100%;
    background: #F6F6F6;
    animation: ${floating} 2s ease infinite;
`;

export default function Test() {
    return (
        <div>
            <h2>emotion Animation</h2>
            <div className="wrap">
                <div className="box" css={boxStyle}></div>
            </div>
        </div>
    )
};

