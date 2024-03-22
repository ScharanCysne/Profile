import * as React from 'react';
import { Stack, Divider } from '@mui/material';

export default function ContactInformation() {

    return (
        <div style={{
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto'
        }}>
            <Stack
                direction="row"
                divider={<Divider style={{borderColor: 'white'}} orientation="vertical" flexItem />}
                spacing={2}
            >
                <p>LinkedIn</p>
                <p>Github</p>
                <p>Email</p>
                <p>CV</p>
            </Stack>
        </div>
    );
};