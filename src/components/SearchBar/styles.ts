/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { makeStyles } from '@material-ui/core/styles';

import COLORS from '~/constants/colors';

export default makeStyles({
  '&::-ms-clear, & *::-ms-clear': {
    display: 'none',
  },
  iconClose: {
    color: COLORS.BLACK_38,
  },
  iconCloseHidden: {
    opacity: 0,
    pointerEvents: 'none',
  },
  inputAdornmentRoot: {
    color: '#8f8f8f', // FIXME: COLORS.MEDIUM_GREY,
  },
  outlinedInputNotchedOutlined: {
    borderColor: '#f1f1f1',
  },
  outlinedInputRoot: {
    backgroundColor: '#f9f9f9', // FIXME: COLORS.LIGHT_GREY,
    borderRadius: 11,
    color: '#2d2d2d', // FIXME: COLORS.TEXT_PRIMARY,
    fontSize: 14,
    height: 40,
    paddingRight: 0,
  },
});

/*

import { makeStyles } from '@material-ui/core/styles';

import COLORS from '~/constants/colors';
import DIMS from '~/constants/dims';

export default makeStyles({
  '&::-ms-clear, & *::-ms-clear': {
    display: 'none',
  },
  default: {
    height: DIMS.SECONDARY.HEIGHTS.INPUT,
  },
  iconClose: {
    color: COLORS.BLACK_38,
  },
  iconCloseHidden: {
    opacity: 0,
    pointerEvents: 'none',
  },
  inputAdornmentRoot: {
    color: COLORS.BORDER_SECONDARY,
  },
  large: {
    height: DIMS.SECONDARY.HEIGHTS.INPUT + DIMS.SECONDARY.HEIGHT_INCREMENT,
  },
  outlinedInputNotchedOutlined: {
    borderColor: COLORS.BORDER_SECONDARY,
  },
  outlinedInputRoot: {
    borderRadius: DIMS.SECONDARY.BORDER_RADIUS * 2,
    color: COLORS.DARK_SECONDARY,
    fontSize: 14,
    paddingLeft: DIMS.LAYOUT_PADDING,
    paddingRight: 0,
  },
});
*/
