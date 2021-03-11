/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */
/* eslint-disable sort-keys */
import { Overrides } from '@material-ui/core/styles/overrides';
import COLOR_PALETTE_ACT from './palette';
import COLORS from './colors';

const overrides: Overrides = {
  MuiAppBar: {
    colorPrimary: {
      backgroundColor: COLORS.PRIMARY_DARK,
    },
  },
  MuiButton: {
    label: {
      // textTransform: 'none',
    },
  },
  MuiDialogActions: {
    root: {
      backgroundColor: COLORS.OVERLAY_BACKGROUND,
    },
  },
  MuiDialogTitle: {
    root: {
      backgroundColor: COLORS.OVERLAY_BACKGROUND,
    },
  },
  MuiOutlinedInput: {
    input: {
      '&$disabled': {
        cursor: 'not-allowed',
      },
      '&::placeholder': {
        color: COLORS.PLACEHOLDER,
        opacity: 1,
      },
      fontSize: `1rem`,
      paddingBottom: '15px',
      paddingTop: '15px',
    },
    multiline: {
      paddingBottom: '15px',
      paddingTop: '15px',
    },
    notchedOutline: {
      border: `1px solid ${COLORS.PRIMARY}`,
    },
    root: {
      '&$disabled': {
        backgroundColor: COLORS.BACKGROUND_DISABLED,
        border: `1px solid ${COLOR_PALETTE_ACT.text?.disabled}`,
        color: `${COLOR_PALETTE_ACT.text?.disabled}`,
        cursor: 'not-allowed',
      },
    },
  },
  MuiInputLabel: {
    formControl: {
      position: 'relative',
      transform: undefined,
    },
    root: {
      color: `${COLOR_PALETTE_ACT.text?.primary}`,
      fontSize: `1rem`,
      marginBottom: `15px`,
    },

    shrink: {
      transform: undefined,
      transformOrigin: undefined,
    },
  },
  MuiSelect: {
    outlined: {
      backgroundColor: COLORS.WHITE,
      fontSize: '1.125rem',
      fontWeight: 'normal',
      padding: '15px 15px',
    },
  },
  MuiAlert: {
    standardError: {
      backgroundColor: COLORS.ERROR_BACKGROUND,
      color: COLORS.ERROR,
    },
    standardInfo: {
      backgroundColor: COLORS.INFO_BACKGROUND,
      color: COLORS.INFO,
    },
    standardSuccess: {
      backgroundColor: COLORS.SUCCESS_BACKGROUND,
      color: COLORS.SUCCESS,
    },
    standardWarning: {
      backgroundColor: COLORS.WARNING_BACKGROUND,
      color: COLORS.WARNING,
    },
    outlinedError: {
      color: COLORS.ERROR,
    },
    outlinedInfo: {
      color: COLORS.INFO,
    },
    outlinedSuccess: {
      color: COLORS.SUCCESS,
    },
    outlinedWarning: {
      color: COLORS.WARNING,
    },
  },
  MuiTab: {
    root: {
      textTransform: undefined,
    },
  },
  MuiTooltip: {
    tooltip: {
      color: COLORS.WHITE,
      backgroundColor: COLORS.PRIMARY_DARK,
    },
    arrow: {
      color: COLORS.PRIMARY_DARK,
    },
  },
};

export default overrides;
