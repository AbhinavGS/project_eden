import React from "react";

import { Stack, TextField, Box } from "@mui/material";

import "./WorkspaceDetailsForm.scss";

const WorkspaceDetailsForm = (props) => {
  const [data, setData] = props.functions;

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <h4 className="app__title">Lets set up a home for all your work</h4>
      <h6 className="app__sub-title">
        You can always create another workspace later
      </h6>
      <Box className="input-container">
        <Stack spacing={2} className="form">
          <label className="form-label" htmlFor="workspace-name">
            Workspace Name
          </label>
          <TextField
            size="small"
            name="workspaceName"
            id="workspace-name"
            value={data.workspaceName}
            onChange={handleChange}
            placeholder="Eden"
          />
          <label className="form-label" htmlFor="workspace-url">
            Workspace URL
          </label>
          <div className="url-input">
            <div className="first">
              <TextField
                fullWidth
                disabled={true}
                size="small"
                name="workspaceURL"
                id="workspace-url-fixed"
                value={"www.eden.com/"}
              />
            </div>
            <div className="second">
              <TextField
                fullWidth
                size="small"
                name="workspaceURL"
                id="workspace-url"
                value={data.workspaceURL}
                onChange={handleChange}
                placeholder="Example"
              />
            </div>
          </div>
        </Stack>
      </Box>
    </>
  );
};

export default WorkspaceDetailsForm;
