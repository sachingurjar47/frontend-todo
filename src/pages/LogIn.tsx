import React, { useState } from "react";
import Form from "../components/Form";
import Input from "../components/Input";
import { Alert, Box, Button, Snackbar, Typography } from "@mui/material";
import InputPassword from "../components/InputPassword";
import * as Yup from "yup";
import { LoginUser } from "../mutations/LoginUser";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { LoadingButton } from "@mui/lab";

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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  console.log(process.env);

  const dispatch = useDispatch<AppDispatch>();
  const onSubmit = (values: any) => {
    console.log(values);

    dispatch(
      LoginUser(values, {
        onLoading(loading) {
          setLoading(loading);
        },
        onError(message, error: any) {
          setError(error?.response?.data?.message!);
        },
        onSuccess(response) {},
      })
    );
  };
  return (
    <Form
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
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
          {error && (
            <Alert
              severity="error"
              onClose={() => setError("")}
              variant="outlined"
            >
              {error}
            </Alert>
          )}
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={2}
          >
            <Input label="Email" name="email" />
            <InputPassword label="Password" name="password" />
            <LoadingButton
              loading={loading}
              fullWidth
              type="submit"
              variant="contained"
            >
              Log In
            </LoadingButton>
          </Box>
        </Box>
      </Box>
    </Form>
  );
};

export default LogIn;
