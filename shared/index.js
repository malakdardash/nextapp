import React from "react";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/router";
import { useState } from "react";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
const MyComponent = () => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const router = useRouter();
  const handleButtonClick = (e) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      alert("Please enter both email and password.");
      return;
    }
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    router.push("/dashboard");
  };

  const textFieldStyles = {
    width: "100%",
    border: "5px solid white",
    borderRadius: "50px",
    textAlign: "center",
    backgroundColor: "rgba(255,255,255, 0.5)",
  };

  const buttonStyles = {
    backgroundColor: "rgba(52, 52, 52, 0.91)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "50px",
    border: 0,
  };

  return (
    <div>
      <Box
        component="form"
        noValidate
        sx={{
          alignSelf: "center",
          display: "grid",
          gridTemplateColumns: { sm: "1fr" },
          gap: 2,
        }}
      >
        <TextField
          id="outlined-basic"
          value={email}
          onChange={handleEmailChange}
          placeholder="Username"
          variant="outlined"
          size="small"
          style={textFieldStyles}
          InputProps={{
            inputProps: { style: { textAlign: "center", color: "red" } },
            startAdornment: <PersonOutlineIcon style={{ color: "red" }} />,
          }}
        />
        <TextField
          id="outlined-password"
          placeholder="password"
          type="password"
          variant="outlined"
          size="small"
          value={password}
          onChange={handlePasswordChange}
          style={textFieldStyles}
          InputProps={{
            inputProps: { style: { textAlign: "center", color: "red" } },
            startAdornment: <LockOutlinedIcon style={{ color: "red" }} />,
          }}
        />
        <button onClick={handleButtonClick} style={buttonStyles}>
          Login Now
        </button>
      </Box>
    </div>
  );
};

export default MyComponent;
