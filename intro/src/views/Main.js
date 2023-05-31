import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { TagCloud } from 'react-tagcloud';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
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

const test = () =>{
    return (
        <div style={{
            width: '300px', 
            height: '300px',
            position: 'relative',
            background: 'orange',
            color: 'white',
            animation: 'test 5s 0.5s ease-out infinite normal'
        }}>
           <Typography variant="h3" color="#fafafa" >Hi, I'm Lan, a front-end developer. </Typography>
        </div>
    )
}

export default function Main(){ 
    return(
        <Box>
            <Box sx={{ height:300, mt:20, ml:40 }}>
                {test()} 
            </Box>
            <Box sx={{
                height:500,
                width:500,
                ml : 150
            }}>
                <TagCloud tags={data} minSize={1} maxSize={5} renderer={customRenderer} />
            </Box>
            <Box sx={{ height:100, width:window.innerWidth*0.3, ml:40 }}>
                <Typography color="#fafafa">More About Me </Typography>
            </Box>
            <Box sx={{ height:100, width:window.innerWidth*0.3, ml:40 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sx={{mb:2}}>
                        <Typography color="#fafafa">Connect Me </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid sx={{mb:3}}>
                            <TextField
                                required
                                id="Standard warning"
                                label="Name"
                                defaultValue=""
                                variant="standard"
                                color="success"
                                focused
                            />
                        </Grid>
                        <Grid>
                            <TextField
                                required
                                id="Standard warning"
                                label="Email"
                                defaultValue=""
                                variant="standard"
                                color="success"
                                focused
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                    <TextField
                        id="filled-multiline-static"
                        label="Multiline"
                        multiline
                        rows={4}
                        defaultValue=""
                        variant="filled"
                        color="success"
                        focused
                        />
                    </Grid>
                </Grid>
            </Box>
        </Box>
       );
}