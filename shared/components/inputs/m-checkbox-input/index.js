import React from "react";
import PropTypes from "prop-types";

import { Grid, Checkbox, FormGroup, FormControlLabel } from "@mui/material";

const MCheckBoxInput = ({ changed, group_disabled, options }) => {
  return (
    <Grid item xs={12} rowSpacing={1} alignItems="center">
      <Grid item>
        <FormGroup disabled={group_disabled}>
          {options.map((option) => {
            return (
              <FormControlLabel
                className={`text-color fs-13`}
                control={
                  <Checkbox onChange={changed} checked={option.checked} />
                }
                label={option.label}
                disabled={option.disabled}
              />
            );
          })}
        </FormGroup>
      </Grid>
    </Grid>
  );
};

MCheckBoxInput.propTypes = {
  changed: PropTypes.func,
  group_disabled: PropTypes.bool,
  options: PropTypes.array,
};

export default MCheckBoxInput;
