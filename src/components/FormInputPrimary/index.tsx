/**
 * @prettier
 */

import * as React from 'react';
import { get } from 'lodash';

import AlertOutline from '~/icons/AlertOutline';
import COLORS from '~/constants/colors';
import DIMS from '~/constants/dims';
import InputLabelPrimary, {
  Props as InputLabelPrimaryProps,
} from '~/components/InputLabelPrimary';
import InputPrimary, {
  Props as InputPrimaryProps,
} from '~/components/InputPrimary';
import TooltipBase from '~/components/TooltipBase';

import useStyles from './styles';

export interface Props {
  disabled?: boolean;
  errorMessage?: string;
  inputProps?: InputPrimaryProps;
  labelProps?: InputLabelPrimaryProps;
  required?: boolean;
}

const FormInputPrimary: React.FC<Props> = ({
  disabled,
  errorMessage,
  inputProps,
  labelProps,
  required,
}: Props): React.ReactElement<Props> => {
  const classes = useStyles();

  const children = (
    <div className="inputContainer">
      <InputPrimary
        disabled={disabled}
        error={!!errorMessage || get(inputProps, 'error')}
        fullWidth
        required={required}
        {...inputProps}
      />

      {errorMessage && (
        <TooltipBase arrow placement="top" title={errorMessage}>
          <AlertOutline
            classes={{
              root: classes.warning,
            }}
            htmlColor={COLORS.REQUIRED}
          />
        </TooltipBase>
      )}
    </div>
  );

  return (
    <>
      <style jsx>
        {`
          .labelContainer {
            margin-bottom: ${DIMS.LAYOUT_PADDING / 2}px;
          }
          .inputContainer {
            position: relative;
          }
        `}
      </style>

      {labelProps && (
        <div className="labelContainer">
          <InputLabelPrimary
            disabled={disabled}
            error={!!errorMessage || get(labelProps, 'error')}
            required={required}
            {...labelProps}
          />
        </div>
      )}

      {children}
    </>
  );
};

export default FormInputPrimary;
