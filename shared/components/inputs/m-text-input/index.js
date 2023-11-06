import React from "react";
import PropTypes from "prop-types";
import { Grid, TextField } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import InputAdornment from "@mui/material/InputAdornment";
const MTextInput = ({
  label,
  variant,
  placeholder,
  size,
  name,
  value,
  onChange,
  classes,
  disabled,
  error,
  type,
  required,
  max,
  min,
  cols,
  label_classes,
  onKeyDown = function () {},
  textDirection = undefined,
  inputIcon,
  iconColor,
}) => {
  const getIcon = () => {
    if (inputIcon === "lock") {
      return (
        <InputAdornment position="start">
          <LockOutlinedIcon sx={{ color: iconColor }} />
        </InputAdornment>
      );
    } else if (inputIcon === "person") {
      return (
        <InputAdornment position="start">
          <PersonOutlineIcon sx={{ color: iconColor }} />
        </InputAdornment>
      );
    }
    return null;
  };
  const handleChange = (e) => {
    if (min === 0 || min === 1) {
      if (e.target.value < min)
        e = { ...e, target: { ...e.target, value: min } };
      onChange(e);
    } else {
      onChange(e);
    }
  };
  return (
    <Grid item {...cols} rowSpacing={1}>
      {label ? (
        <Grid item xs={12}>
          <label
            className={`fs-14 font-weight-bold heading-color ${
              label_classes ? label_classes : ""
            }`}
          >
            {label}
            {required && (
              <small data-test="required-field">
                {" "}
                *
              </small>
            )}
          </label>
        </Grid>
      ) : null}
      <Grid item xs={12} className="mt-2" dir={textDirection}>
        <TextField
          type={type || "text"}
          variant={variant || "outlined"}
          placeholder={placeholder ? "  " + placeholder : ""}
          className={`${classes}`}
          size={size || "small"}
          name={name}
          value={value || ""}
          onChange={handleChange}
          disabled={disabled || false}
          error={error?.length > 0}
          InputProps={{
            startAdornment: getIcon(),
            inputProps: { min: min, max: max },
          }}
          onKeyDown={onKeyDown}
        />
      </Grid>
      {error?.length ? (
        <Grid item xs={12}>
          <small className="fs-12">{error && error}</small>
        </Grid>
      ) : null}
    </Grid>
  );
};
MTextInput.propTypes = {
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  variant: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  classes: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  type: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number,
  cols: PropTypes.object,
  onKeyDown: PropTypes.func,
  textDirection: PropTypes.string,
  label_classes: PropTypes.string,
  inputIcon: PropTypes.oneOf(["lock", "person"]),
  iconColor: PropTypes.string,
};

export default MTextInput;
