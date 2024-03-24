import './fab.css'

import React from 'react';

import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import IconButton from '@mui/material/IconButton';


export default function ChatButton() {
    return (
        <IconButton
            ariaLabel="Chat"
            sx={{
                backgroundColor: '#FFA800',
                position: 'fixed',
                bottom: 16,
                left: 16,
                width: '2.4em',
                height: '2.4em',
                '&:hover': {
                    backgroundColor: '#d08b02'
                }
            }}
        >
            <QuestionAnswerIcon style={{color: 'white'}} />
        </IconButton>
    );
};