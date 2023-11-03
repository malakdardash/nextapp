import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { Tooltip, IconButton } from "@mui/material";

const MButton = ({
  label,
  variable_label = "",
  clicked,
  loading,
  startIcon,
  endIcon,
  onlyIcon,
  variant,
  size,
  classes,
  tooltip,
  btnType,
  disabled = false,
}) => {
  return (
    <Tooltip title={tooltip ? tooltip : ""} placement="top" arrow>
      <Button
        loading={loading}
        loadingPosition="center"
        startIcon={startIcon ? startIcon : null}
        endIcon={endIcon ? endIcon : null}
        variant={variant ? variant : ""}
        size={size || "small"}
        className={classes}
        onClick={clicked}
        disabled={disabled}
      >
        {btnType == "icon-only" ? (
          <IconButton size="small" disabled={disabled}>
            <i className={onlyIcon}></i>
          </IconButton>
        ) : (
          label && ` ${label} ${variable_label}`
        )}
      </Button>
    </Tooltip>
  );
};
Button.propTypes = {
  label: PropTypes.string,
  variable_label: PropTypes.any,
  loading: PropTypes.bool,
  startIcon: PropTypes.any,
  endIcon: PropTypes.any,
  onlyIcon: PropTypes.any,
  variant: PropTypes.string,
  size: PropTypes.string,
  classes: PropTypes.string,
  clicked: PropTypes.func,
  tooltip: PropTypes.string,
  btnType: PropTypes.string,
  disabled: PropTypes.bool,
};

export default MButton;
