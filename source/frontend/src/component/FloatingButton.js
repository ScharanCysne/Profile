import './fab.css'

import * as React from 'react';

import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

import CV from './../../../static/data/CV - Nicholas Scharan Cysne.pdf'

export const openInNewTab = (url) => {
    console.log(url)
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

export const onClickUrl = (url) => openInNewTab(url);

const actions = [
  { icon: <FileCopyIcon />, name: 'Resume', url: CV },
  { icon: <GitHubIcon />, name: 'Github', url: 'https://github.com/ScharanCysne' },
  { icon: <LinkedInIcon />, name: 'LinkedIn', url: 'https://www.linkedin.com/in/scharan-cysne/' },
  { icon: <EmailIcon />, name: 'Email', url: 'mailto:nicholas.s.cysne@gmail.com' },
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
                    onClick={e => {
                        e.stopPropagation();
                        onClickUrl(action.url);
                      }}
                />
            ))}
        </SpeedDial>
    );
};