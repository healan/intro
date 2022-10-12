import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { TagCloud } from 'react-tagcloud';
import '../App.css';

const data = [
    { value: 'jQuery', count: 25 },
    { value: 'MongoDB', count: 18 },
    { value: 'JavaScript', count: 38 },
    { value: 'React', count: 30 },
    { value: 'Nodejs', count: 28 },
    { value: 'Express.js', count: 25 },
    { value: 'HTML5', count: 33 },
    { value: 'CSS3', count: 20 },
    { value: 'Webpack', count: 22 },
    { value: 'Babel.js', count: 7 },
    { value: 'ECMAScript', count: 25 },
    { value: 'Jest', count: 15 },
    { value: 'Mocha', count: 17 },
    { value: 'React Native', count: 27 },
    { value: 'Angular.js', count: 30 },
    { value: 'TypeScript', count: 15 },
    { value: 'Flow', count: 30 },
    { value: 'NPM', count: 11 },
];

const customRenderer = (tag, size, color) => (
    <span
        key={tag.value}
        style={{
            animation: 'blinker 3s linear infinite',
            animationDelay: `${Math.random() * 2}s`,
            fontSize: `${size / 2}em`,
            border: `2px solid ${color}`,
            margin: '3px',
            padding: '3px',
            display: 'inline-block',
            color: 'white',
        }}
    >
        {tag.value}
    </span>
);

export default function Main(){ 
    return(
        <>
            <Box sx={{
                height:500,
                width:500,
            }}>
                <TagCloud tags={data} minSize={1} maxSize={5} renderer={customRenderer} />
            </Box>
        </>
       );
}