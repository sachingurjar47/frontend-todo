import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  IconButton,
  InputAdornment,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { useFormikContext } from "formik";
import React, { useState } from "react";

const InputPassword: React.FC<Omit<TextFieldProps, "value">> = (props) => {
  const [show, setShow] = useState(false);
  const { getFieldMeta, setFieldValue, setFieldTouched } = useFormikContext();
  const meta = getFieldMeta?.(props.name || "");
  const error = meta.error && meta.touched;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue?.(props.name!, e.target.value, true);
  };

  const onBlur = () => {
    setFieldTouched?.(props.name!, true, true);
  };
  const handleClickShowPassword = () => setShow((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <TextField
      size="small"
      fullWidth
      {...props}
      type={show ? "text" : "password"}
      onBlur={onBlur}
      onChange={onChange}
      error={Boolean(error)}
      helperText={error ? meta.error : ""}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label={show ? "hide the password" : "display the password"}
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                onMouseUp={handleMouseUpPassword}
                edge="end"
              >
                {show ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
    />
  );
};

export default InputPassword;
