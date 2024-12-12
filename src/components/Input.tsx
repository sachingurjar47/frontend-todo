import { TextField, TextFieldProps } from "@mui/material";
import { useFormikContext } from "formik";
import React from "react";

const Input: React.FC<Omit<TextFieldProps, "value">> = (props) => {
  const { getFieldMeta, setFieldValue, setFieldTouched } = useFormikContext();
  const meta = getFieldMeta?.(props.name || "");
  const error = meta.error && meta.touched;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue?.(props.name!, e.target.value, true);
  };

  const onBlur = () => {
    setFieldTouched?.(props.name!, true, true);
  };

  return (
    <TextField
      fullWidth
      size="small"
      onBlur={onBlur}
      onChange={onChange}
      error={Boolean(error)}
      helperText={error ? meta.error : ""}
      {...props}
    />
  );
};

export default Input;
