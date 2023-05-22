import {
    Typography,
    Stack,
    Select,
    InputLabel,
    MenuItem,
    FormControl,
  } from "@mui/material";
  import getEmployes from "../../lib/getEmployes";
  import useSWR from "swr";



// eslint-disable-next-line react/prop-types
function Header({currentUserId, setCurrentUserId}) {

  const { data: employes, isLoading } = useSWR([currentUserId,"employes"], getEmployes);


  return (
    <Stack p={2} direction="column" spacing={2} bgcolor="#222">
        <Typography variant="h4" color="#fff">
          Acme Blogs
        </Typography>

        <div style={{ width: "300px" }}>
          <FormControl fullWidth={true}>
            <InputLabel id="demo-simple-select-label">Employes</InputLabel>
            <Select
              sx={{ color: "#fff" }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Employes"
              value={currentUserId}
              onChange={(e) => setCurrentUserId(e.target.value)}>
              
                {isLoading ? <MenuItem value={0}>
                Loading...
                </MenuItem> : null}

             
              {employes ?
                employes?.map((employ) => (
                  <MenuItem value={employ.id} key={employ.id}>
                    {employ.name}
                  </MenuItem>  
                ))
                
                : null} 

              
              
              
            </Select>
          </FormControl>
        </div>
      </Stack>


  )
}

export default Header