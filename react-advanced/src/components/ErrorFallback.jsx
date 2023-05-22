/* eslint-disable react/prop-types */
import { Button, Stack, Typography } from "@mui/material";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <Stack
      p={2}
      spacing={2}
      bgcolor="#444"
      justifyContent="center"
      alignItems="center"
      sx={{ borderRadius: "10px" }}
    >
      <Typography variant="h4">Something went wrong:</Typography>
      <Typography color="error" variant="body1">
        {error.message}
      </Typography>
      <Button variant="contained" color="error" onClick={resetErrorBoundary}>
        Try again
      </Button>
    </Stack>
  );
}

export default ErrorFallback;
