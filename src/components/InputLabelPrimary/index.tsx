/**
 * @prettier
 */

import * as React from 'react';
import { InputLabel, InputLabelProps } from '@material-ui/core';

import mergeClasses from '~/helpers/mergeClasses';

import useStyles from './styles';

export type Props = InputLabelProps & {
  requiredText?: string;
};

const InputLabelPrimary: React.FC<Props> = ({
  classes: classesProp,
  children,
  required,
  requiredText,
  ...otherProps
}: Props): React.ReactElement<any> => {
  const classes = useStyles();

  return (
    <InputLabel
      classes={mergeClasses(
        {
          root: classes.labelRoot,
        },
        classesProp,
      )}
      {...otherProps}
    >
      <div className="label-split">
        <span>{children}</span>

        {required && (
          <span className="required">{requiredText || 'Required'}</span>
        )}
      </div>
    </InputLabel>
  );
};

export default InputLabelPrimary;
