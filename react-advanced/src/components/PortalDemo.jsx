/* eslint-disable react/prop-types */
import {Box, Typography} from '@mui/material'

function PortalDemo({show}) {

    const style = {
        position: 'absolute',
        top: show ? '50%' : '-50%',
        left: '50%',
        transform:'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        transition: 'all 2s'
        
        
      };

  return (
    <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Text in a modal
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </Typography>
  </Box>
 
  )
}

export default PortalDemo