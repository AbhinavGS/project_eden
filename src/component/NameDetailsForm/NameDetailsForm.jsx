import React from "react";

import { Box, Stack, TextField } from "@mui/material";

import "./NameDetailsForm.scss";

const NameDetailsForm = (props) => {
  const [data, setData] = props.functions;

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <h4 className="app__title">Welcome! First things first...</h4>
      <h6 className="app__sub-title">You can always change them later</h6>
      <Box className="input-container">
        <Stack spacing={2} className="form">
          <label className="form-label" htmlFor="full-name">
            Full Name
          </label>
          <TextField
            size="small"
            name="fullName"
            id="full-name"
            value={data.fullName}
            onChange={handleChange}
            placeholder={"Steve Jobs"}
          />
          <label className="form-label" htmlFor="display-name">
            Display Name
          </label>
          <TextField
            size="small"
            name="displayName"
            id="display-name"
            value={data.displayName}
            onChange={handleChange}
            placeholder={"Steve"}
          />
        </Stack>
      </Box>
    </>
  );
};

export default NameDetailsForm;
