import { TextField, Stack, InputAdornment } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import React, { useState } from 'react'

function MuiTextField() {
    const [info, setInfo] = useState({
        name: '',
        nickname: '',
        adress: ''
    })

    const [errorInput, setErrorInput] = useState('')

    function handle(e) {

        setInfo({
            ...info,
            [e.target.name]: e.target.value

        })

    }

    return (
        <>
            <p>Hello, im {info.name}. you can call me {info.nickname}. i live in {info.adress}</p>
            <Stack direction='column' spacing={3}>

                <TextField placeholder="Digite seu nome..." label='name' variant="standard" name='name' value={info.name} onChange={handle} required ></TextField>

                <TextField placeholder="Digite seu apelido" label='Apelido' variant="outlined" name='nickname' value={info.nickname} onChange={handle} color='secondary' size="small"></TextField>

                <TextField placeholder="Digite sua rua" label='Rua' variant="filled" name='adress' value={info.adress} onChange={handle} helperText='do not share you location with anyone' type='password'></TextField>


            </Stack>

            <Stack direction='column' spacing={3}>
                <TextField label='read Only' InputProps={{ readOnly: true }}></TextField>
                <TextField label='disabled' disabled></TextField>


            </Stack>

            <Stack direction='row' spacing={3}>

                <TextField label='Amount' 
                InputProps={{ 
                    startAdornment: <InputAdornment position='start'>$</InputAdornment>}}></TextField>

                <TextField label='Weight' InputProps={{ endAdornment: <InputAdornment position='end'>Kg</InputAdornment>}}></TextField>


            </Stack>


            <Stack direction='row' spacing={3}>

                <TextField label='password' type='password'
                InputProps={
                    {endAdornment:
                    <InputAdornment position='end'>
                <VisibilityIcon /> </InputAdornment>}}> 
                </TextField>

            </Stack>

             <br />           
            <Stack direction='row' spacing={3} >
                        <TextField label='error exemple' value={errorInput} onChange={(e) => setErrorInput(e.target.value) } error={!errorInput} helperText={!errorInput ? 'Required' : 'Do not share u password with anyone'}></TextField>

            </Stack>

        </>
    )
}

export default MuiTextField