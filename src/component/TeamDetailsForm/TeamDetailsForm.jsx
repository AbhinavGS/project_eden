import { Box, Stack } from "@mui/material";
import React from "react";

import { BsPersonFill } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";

import "./TeamDetailsForm.scss";

const TeamDetailsForm = (props) => {
  const [data, setData] = props.functions;

  const handleClick = (details) => {
    if (details === "myself") setData("myself");
    if (details === "withMyTeam") setData("withMyTeam");
  };
  return (
    <>
      <h4 className="app__title">How are you planning to use Eden?</h4>
      <h6 className="app__sub-title">
        We'll streamline your setup experinece accordingly
      </h6>
      <div className="team-options-container">
        <Box
          className={
            data === "myself"
              ? `selected-team-tile team-options-myself`
              : `team-options-myself`
          }
          onClick={() => handleClick("myself")}
        >
          <Stack spacing={1}>
            <BsPersonFill size={20} className="team-icon" />
            <h5>For Myself</h5>
            <p>Write better. Think more clearly. Stay organized</p>
          </Stack>
        </Box>
        <Box
          className={
            data === "withMyTeam"
              ? `selected-team-tile team-options-team`
              : `team-options-team`
          }
          onClick={() => handleClick("withMyTeam")}
        >
          <Stack spacing={1}>
            <RiTeamFill size={20} className="team-icon" />
            <h5>With my team</h5>
            <p>Wikis, docs, tasks & projects, all in one place.</p>
          </Stack>
        </Box>
      </div>
    </>
  );
};

export default TeamDetailsForm;
