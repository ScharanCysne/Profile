import * as React from 'react';

import { useTheme } from '@mui/material/styles';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const fabStyle = {
    position: 'fixed',
    bottom: 16,
    right: 16,
    color: 'common.white',
    bgcolor: '#FFA800',
    '&:hover': {
        bgcolor: '#d08b02',
    },
};

export default function FloatingButton() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const transitionDuration = {
      enter: theme.transitions.duration.enteringScreen,
      exit: theme.transitions.duration.leavingScreen,
    };

    const fab = {
        color: 'primary',
        sx: { ...fabStyle },
        icon: <AddIcon />,
        label: 'Add'
    }

    return (
        <Zoom
          key={fab.color}
          in={value === 0}
          timeout={transitionDuration}
          style={{
            transitionDelay: `${transitionDuration.exit}ms`,
          }}
          unmountOnExit
        >
          <Fab sx={fab.sx} aria-label={fab.label} color={fab.color}>
            {fab.icon}
          </Fab>
        </Zoom>
    );
};