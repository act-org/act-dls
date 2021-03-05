/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { Checkbox as MiuCheckbox, CheckboxProps } from '@material-ui/core';

export type { CheckboxProps };

/**
 * # Checkbox
 *
 * The Checkbox component is used to select one or more options from a list.
 * Our implementation is based on the
 * <a href="https://material-ui.com/components/checkboxes" target="_blank">Checkbox</a>
 * &nbsp;component from Material UI.
 *
 * @param props
 */
export const Checkbox: React.FC<CheckboxProps> = (
  props: CheckboxProps,
): React.ReactElement<CheckboxProps> => {
  return <MiuCheckbox {...props} />;
};

export default Checkbox;