import React from 'react';
import { Chip, Stack } from '@mui/material';
import ContactsIcon from '@mui/icons-material/Contacts';
import PageviewIcon from '@mui/icons-material/Pageview';

function HomePage() {
    return (
        <Stack direction={'column'} spacing={1} alignItems='center'>
            <Chip icon={<ContactsIcon />} label="Customer Lookup" sx={{justifyContent: 'flex-start', width: '200px' }} />
            <Chip icon={<PageviewIcon />} label="Customer Registration" sx={{justifyContent: 'flex-start', width: '200px' }} />
        </Stack>
    );
}

export default HomePage;