import React from "react";
import Input from "../components/Input";
import InputPassword from "../components/InputPassword";
import { Box, Button, Typography } from "@mui/material";
import Form from "../components/Form";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters long")
    .max(100, "Name must not exceed 100 characters"),

  email: Yup.string()
    .required("Email is required")
    .email("Please provide a valid email address"),

  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(/[A-Za-z]/, "Password must contain at least one letter")
    .matches(/[0-9]/, "Password must contain at least one number"),
});
const initialValues = { name: "", email: "", password: "" };
const Register = () => {
  return (
    <Form
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={() => {}}
    >
      <Box
        display="flex"
        height="100%"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="1rem"
          boxShadow={
            "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset"
          }
          p={5}
          borderRadius={3}
        >
          <Box>
            <Typography variant="h3" gutterBottom>
              Register
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={2}
          >
            <Input label="Name" name="name" />
            <Input label="Email" name="email" />
            <InputPassword label="Password" name="password" />
            <Button fullWidth type="submit" variant="contained">
              Register
            </Button>
          </Box>
        </Box>
      </Box>
    </Form>
  );
};

export default Register;
