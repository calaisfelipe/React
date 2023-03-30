import React, {useState, forwardRef} from 'react'
import {Box, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions,Button, Slide} from '@mui/material'

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });


function MuiDialog() {
    const [open, setOpen] = useState(false)

    function handleShow(){
        setOpen(true)
    }

    function handleClose(){
        setOpen(false)
    }

  return (
    <Box>

        <Button variant='contained' color='primary' onClick={handleShow}>Open dialog</Button>

        <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        keepMounted
        
        
        >
            <DialogTitle>
                Terms of Service
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione voluptatibus veritatis est placeat similique labore ex vitae. Maxime, eos! Aut praesentium nulla veniam aliquid enim itaque similique facere dolor vitae!
                </DialogContentText>

                <DialogActions>
                    <Button variant='contained' color='success' onClick={handleClose}>Agree</Button>
                    <Button variant='contained' color='error' onClick={handleClose}>Disagree</Button>

                </DialogActions>


            </DialogContent>
        </Dialog>

    </Box>
  )
}

export default MuiDialog