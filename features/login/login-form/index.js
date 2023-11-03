import React from "react";
import Box from "@mui/material/Box";
import MTextInput from "@/shared/components/inputs/m-text-input";
import MButton from "@/shared/components/m-button";
const LoginForm = ({ onEmailChange, onPasswordChange, email, password,onClickbutton }) => {
  return (
    <div>
      <Box
        component="form"
        noValidate
        sx={{
          alignSelf: "center",
          display: "grid",
          gridTemplateColumns: { sm: "1fr" },
          gap: 1,
        }}
      >
        <MTextInput
          value={email}
          onChange={onEmailChange}
          placeholder="Email"
          inputIcon="person"
          iconColor="red"
          type="text"
          classes="style-input rounded-pill border border-white border-5"
          size="small"
          id="outlined-password"
        />
        <MTextInput
          value={password}
          onChange={onPasswordChange}
          inputIcon="lock"
          iconColor="red"
          placeholder="password"
          classes="style-input rounded-pill border border-white border-5"
          size="small"
          type="password"
          id="outlined-password"
        />
        <MButton
          variant="contained"
          clicked={onClickbutton}
          label="Login Now"
          classes="style-button text-white pt-2 pb-2 rounded-pill"
        />
      </Box>
    </div>
  );
};

export default LoginForm;
