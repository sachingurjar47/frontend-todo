import { Formik, FormikConfig } from "formik";
import React from "react";

interface Props extends FormikConfig<any> {
  children?: React.ReactNode;
}

const Form: React.FC<Props> = ({ children, ...props }) => {
  return (
    <Formik {...props}>
      {({ handleSubmit }) => (
        <form style={{ height: "100%", width: "100%" }} onSubmit={handleSubmit}>
          {children}
        </form>
      )}
    </Formik>
  );
};

export default Form;
