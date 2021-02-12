/** @format */

import React from 'react';
import { FormControlLabel, FormControlLabelProps } from '@material-ui/core';
import { Switch, SwitchProps } from '../Switch';

export interface FormSwitchProps extends FormControlLabelProps {
  /**
   * Unique ID for the input.  This is required
   */
  id: string;
  /**
   * Overrides default properties of the switch element
   */
  switchProps?: SwitchProps;
}

/**
 * # FormSwitch
 *
 * This molecule takes the basic switch and adds a label and various label capabilities
 *
 * @param formSwitchProps
 */
export function FormSwitch({
  switchProps,
  label,
  ...formSwitchProps
}: FormSwitchProps) {
  return (
    <FormControlLabel
      {...formSwitchProps}
      label={label}
      control={<Switch {...switchProps} />}
    ></FormControlLabel>
  );
}
