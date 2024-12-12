import React from "react";
import Form from "../components/Form";
import Input from "../components/Input";
import { Box, Button, Typography } from "@mui/material";
import InputPassword from "../components/InputPassword";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Please provide a valid email address"),

  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(/[A-Za-z]/, "Password must contain at least one letter")
    .matches(/[0-9]/, "Password must contain at least one number"),
});
const initialValues = { email: "", password: "" };
const LogIn = () => {
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
              Log In
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={2}
          >
            <Input label="Email" name="email" />
            <InputPassword label="Password" name="password" />
            <Button fullWidth type="submit" variant="contained">
              Log In
            </Button>
          </Box>
        </Box>
      </Box>
    </Form>
  );
};

export default LogIn;
