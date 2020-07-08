/**
 * @prettier
 */

import * as React from 'react';
import { ThemeProvider, ThemeProviderProps } from '@material-ui/core';

export type Props = ThemeProviderProps;

const ThemeProviderBase: React.FC<Props> = (
  props: Props,
): React.ReactElement<any> => <ThemeProvider {...props} />;

export default ThemeProviderBase;