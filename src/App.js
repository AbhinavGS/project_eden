import React, { useState } from "react";

import { Stack, Button } from "@mui/material";
import { Stepper } from "react-form-stepper";

import "./App.scss";

import {
  NameDetailsForm,
  WorkspaceDetailsForm,
  TeamDetailsForm,
} from "./component";

const App = () => {
  const [stage, setStage] = useState(0);
  const [nameDetails, setNameDetails] = useState({
    fullName: "",
    displayName: "",
  });
  const [workspaceDetails, setWorkspaceDetails] = useState({
    workspaceName: "",
    workspaceURL: "",
  });

  const changeStage = () => {
    setStage((prev) => prev + 1);
  };

  const getStageComponent = (stage) => {
    switch (stage) {
      case 0:
        return <NameDetailsForm functions={[nameDetails, setNameDetails]} />;
      case 1:
        return (
          <WorkspaceDetailsForm
            functions={[workspaceDetails, setWorkspaceDetails]}
          />
        );
      case 2:
        return <TeamDetailsForm />;
      default:
        return <div>Something went wrong</div>;
    }
  };

  return (
    <>
      <div className="wrapper-div">
        <Stack spacing={2}>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            <img className="app__logo-img" src="eden-logo.png" alt="logo"></img>
            <h2 className="app__logo-text">Eden</h2>
          </Stack>
          <Stepper
            connectorStyleConfig={{ activeColor: "red", size: 2 }}
            steps={[{ label: "" }, { label: "" }, { label: "" }, { label: "" }]}
            activeStep={stage}
          />
          {getStageComponent(stage)}
          <Button
            className="button-main"
            variant="contained"
            onClick={changeStage}
          >
            Create Workspace
          </Button>
        </Stack>
      </div>
    </>
  );
};

export default App;
