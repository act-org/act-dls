/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { Switch as MiuSwitch, SwitchProps } from '@material-ui/core';

export type { SwitchProps };

/**
 * # Switch
 *
 * The Switch component works like a [radio](/?path=/docs/atoms-radio--primary)
 * button, but has more visual appeal and works well on mobile devices. Our
 * implementation is based on the
 * [Switch](https://material-ui.com/components/switches) component from
 * Material UI.
 *
 * @param SwitchProps
 */
export const Switch: React.FC<SwitchProps> = (
  props: SwitchProps,
): React.ReactElement<SwitchProps> => {
  return <MiuSwitch {...props} />;
};

export default Switch;
