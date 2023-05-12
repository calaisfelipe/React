import { Stack, Box, Typography, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useEffect } from "react";

function MaterialForm() {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      age: "",
    },
  });

  const { register, formState, handleSubmit, control, reset } = form;

  const { errors, isSubmitSuccessful } = formState;

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful, reset]);

  const onSubmit = (data) => {
    console.log("Form submited", data);
  };

  return (
    <Stack mt={2} spacing={2} direction="column" color="white">
      <Typography component="h1" variant="h3">
        MUI form
      </Typography>

      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          label="Name"
          id="name"
          size="small"
          error={!!errors.name}
          helperText={errors.name ? errors.name?.message : "insert your name"}
          color="success"
          {...register("name", {
            required: "Name is required",
          })}
        />
        <TextField
          label="Email"
          id="email"
          size="small"
          error={!!errors.email}
          helperText={
            errors.email
              ? errors.email?.message
              : "ex: felipecalais@hotmail.com"
          }
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i,
              message: "invalid e-mail format",
            },
          })}
          color="success"
        />
        <TextField
          label="Age"
          type="number"
          id="age"
          size="small"
          error={!!errors.age}
          helperText={
            errors.age?.message ? errors.age?.message : "Insert your age"
          }
          {...register("age", {
            min: 0,
            max: {
              value: 100,
              message: "invalid Age",
            },
          })}
          color="success"
        />

        <Button type="submit" variant="contained" color="success">
          Send Form
        </Button>
      </Box>

      <DevTool control={control} />
    </Stack>
  );
}

export default MaterialForm;
