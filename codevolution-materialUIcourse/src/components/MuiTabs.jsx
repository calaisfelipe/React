import React, { useState } from 'react'
import { Box, Tab, Tabs } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import FavoriteIcon from '@mui/icons-material/Favorite';
import GradeIcon from '@mui/icons-material/Grade';
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';

function MuiTabs() {
    const [value, setValue] = useState('1')
    const [valueTwo, setValueTwo] = useState('1')

    return (
        <Box width='100%'>

            <TabContext value={value}>

                <Box sx={{ borderBottom: 1, borderColor: 'divider', width:'500px' }}>
                    <TabList
                        onChange={(e, newValue) => setValue(newValue)} textColor='secondary'
                        indicatorColor='secondary'
                        aria-label='tab example'
                        variant='scrollable'
                        scrollButtons='auto'

                        >

                        <Tab label='Item One' value='1' />
                        <Tab label='Item two' value='2' />
                        <Tab label='Item three' value='3' />
                        <Tab label='Item four' value='4' />
                        <Tab label='Item five' value='5' />
                        <Tab label='Item six' value='6' />

                    </TabList>
                </Box>

                <TabPanel value='1'>Item One</TabPanel>
                <TabPanel value='2'>Item two</TabPanel>
                <TabPanel value='3'>Item three</TabPanel>
                <TabPanel value='4'>Item four</TabPanel>
                <TabPanel value='5'>Item five</TabPanel>
                <TabPanel value='6'>Item Six</TabPanel>

            </TabContext>

            <Box>
                <Tabs
                    value={valueTwo}
                    onChange={(e, newValue) => setValueTwo(newValue)}
                    centered

                >
                    <Tab value='1' label='Item One' icon={<FavoriteIcon />}>Item One</Tab>

                    <Tab label='Item two' value='2' icon={<GradeIcon />} iconPosition='start'>Item two</Tab>

                    <Tab label='Item three' value='3' icon={<ThumbsUpDownIcon />} iconPosition='end' >Item three</Tab>

                </Tabs>



            </Box>







        </Box>


    )
}

export default MuiTabs