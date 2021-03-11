/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { Tooltip as MuiTooltip, TooltipProps } from '@material-ui/core';

export type { TooltipProps };

/**
 * # Tooltip Atom
 *
 * @param tooltipProps
 */
export function Tooltip(
  tooltipProps: TooltipProps,
): React.ReactElement<TooltipProps> {
  return <MuiTooltip {...tooltipProps} />;
}

export default Tooltip;
