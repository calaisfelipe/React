import React from 'react'
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineDot, TimelineContent, TimelineOppositeContent } from '@mui/lab'
import { Stack } from '@mui/material'
import RepeatIcon from '@mui/icons-material/Repeat';

function MuiTimeLine() {
    return (
        <Stack width='100%'>

            <Timeline position='alternate' >
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot variant='outlined' color='error' />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Eat</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        Conteúdo oposto
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color='error' />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Code</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color='error'>
                            <RepeatIcon fontSize='inherit'/> </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Sleep</TimelineContent>
                </TimelineItem>

            </Timeline>


        </Stack>
    )
}

export default MuiTimeLine