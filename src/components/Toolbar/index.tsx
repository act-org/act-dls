/** @format */

import React from 'react';
import {
  Toolbar as MuiToolbar,
  ToolbarProps as MuiToolbarProps,
} from '@material-ui/core';

export type ToolbarProps = MuiToolbarProps;

/**
 * # Toolbar Atom
 *
 * This components creates a top level header for an application navigation
 * @param appBarProps
 */
export function Toolbar(
  appBarProps: ToolbarProps,
): React.ReactElement<ToolbarProps> {
  return <MuiToolbar {...appBarProps} />;
}

Toolbar.defaultProps = {
  color: 'primary',
} as ToolbarProps;
