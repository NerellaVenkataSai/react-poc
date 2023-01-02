import React, { useState } from 'react';
import { Button, Chip, Stack } from '@mui/material';
import ContactsIcon from '@mui/icons-material/Contacts';
import PageviewIcon from '@mui/icons-material/Pageview';
import { useHistory, useLocation } from 'react-router-dom';
import { CUSTOMER_LOOKUP, CUSTOMER_REGISTRATION, PROMOTER_REGISTRATION } from './routes';
import BasicModal from './Modal';

function HomePage() {
    const history = useHistory();
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
        <Stack direction={'column'} spacing={1} alignItems='center'>
            <Chip onClick={() => history.push(PROMOTER_REGISTRATION)} icon={<PageviewIcon />} label="Promoter Registration" sx={{ justifyContent: 'flex-start', width: '200px' }} />
            <Chip onClick={() => history.push(CUSTOMER_LOOKUP)} icon={<ContactsIcon />} label="Customer Lookup" sx={{ justifyContent: 'flex-start', width: '200px' }} />
            <Chip onClick={() => history.push(CUSTOMER_REGISTRATION)} icon={<PageviewIcon />} label="Customer Registration" sx={{ justifyContent: 'flex-start', width: '200px' }} />
        </Stack>
        <Button onClick={() => setOpenModal(true)}>Open Modal</Button>
        <BasicModal openModal={openModal} setOpenModal={setOpenModal}/>
        </>
    );
}

export default HomePage;