import React, {useState} from 'react'

import { LocalizationProvider } from '@mui/x-date-pickers'
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns'

import {getBottomNavigationUtilityClass, Stack, TextField} from '@mui/material'
import { DatePicker, TimePicker, DateTimePicker} from '@mui/x-date-pickers'



function MuiDataPicker() {
const [selectedDate, setSelectedDate] = useState(null)
const [selectedTime, setSelectedTime] = useState(null)
const [selectedDateTime, setSelectedDateTime] = useState(null)

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <Stack p={2} spacing={2}>

        <Stack spacing={2} direction='row'>
        <DatePicker 
        label='Date Picker'
        value={selectedDate}
        onChange={(newValue) => setSelectedDate(newValue)}
        />
        <TextField value={selectedDate ? selectedDate.toLocaleDateString(): ''} size='small'/>
        </Stack>

        <Stack spacing={2} direction='row'>
        <TimePicker 
        label='time Picker'
        value={selectedTime}
        onChange={(newValue)=> setSelectedTime(newValue)}/>
        
        <TextField value={selectedTime ? selectedTime.toLocaleTimeString() : ''} size='small' />

        </Stack>

        <Stack spacing={2} direction='row'>
        <DateTimePicker 
        label='Date/time Picker'
        value={selectedDateTime}
        onChange={(newValue)=> setSelectedDateTime(newValue)}/>
        
        <TextField value={selectedDateTime ? selectedDateTime.toLocaleString() : ''} size='small' />

        </Stack>


        
    </Stack>
    </LocalizationProvider>
  )
}

export default MuiDataPicker