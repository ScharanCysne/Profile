import './fab.css'

import * as React from 'react';

import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const actions = [
  { icon: <FileCopyIcon />, name: 'Resume' },
  { icon: <GitHubIcon />, name: 'Github' },
  { icon: <LinkedInIcon />, name: 'LinkedIn' },
  { icon: <EmailIcon />, name: 'Email' },
];

export default function FloatingButton() {
    return (
        <SpeedDial
            ariaLabel="Contact"
            sx={{
                position: 'fixed',
                bottom: 16,
                right: 16,
            }}
            icon={<SpeedDialIcon />}
        >
            {actions.map((action) => (
                <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                />
            ))}
        </SpeedDial>
    );
};