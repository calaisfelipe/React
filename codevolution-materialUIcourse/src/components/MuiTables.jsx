import React from 'react'
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableFooter } from '@mui/material'

const persons = [{
    name: 'felipe',
    age: 30,
    job: 'web Developer',
    contact: '310992302'
},
{
    name: 'Maria',
    age: 32,
    job: 'TI tecnica',
    contact: '310992302'
},
{
    name: 'Jose',
    age: 23,
    job: 'Estagiario',
    contact: '310992302'
},
{
    name: 'Manu',
    age: 42,
    job: 'CEO',
    contact: '310992302'
},


]


function MuiTables() {
  return (
    <TableContainer  component={Paper}>
        <Table sx={{minWidth: '600px'}}>
            <TableHead>
                <TableRow hover selected>
                    <TableCell variant='head' align='center'>Name</TableCell>
                    <TableCell variant='head' align='center'>Age</TableCell>
                    <TableCell variant='head' align='center'>Job</TableCell>
                    <TableCell variant='head' align='center'>Contact</TableCell>
                </TableRow>
            </TableHead>

            <TableBody  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                {
                    persons.map((person) => 
                    <TableRow key={person.name}>
                       <TableCell align='center'>{person.name}</TableCell>     
                       <TableCell align='center'>{person.age}</TableCell>     
                       <TableCell align='center'>{person.job}</TableCell>     
                       <TableCell align='center'>{person.contact}</TableCell>     
                    </TableRow>
                    
                    )
                }

            </TableBody>

            <TableFooter>
                <TableRow>
                    <TableCell variant='footer' align='center'>Created by Felipe</TableCell>
                </TableRow>
            </TableFooter>


        </Table>

    </TableContainer>
  )
}

export default MuiTables