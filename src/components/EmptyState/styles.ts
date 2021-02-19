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
import DIMS from '~/constants/dims';

export default makeStyles({
  container: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  descriptionRoot: {
    color: COLORS.BLACK_54,
    marginBottom: DIMS.LAYOUT_PADDING * 2,
    marginTop: DIMS.LAYOUT_PADDING / 2,
    maxWidth: 350,
  },
  descriptionRootFlexibleHeight: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  descriptionRootWithoutTitle: {
    marginTop: DIMS.LAYOUT_PADDING * 2,
  },
  iconRoot: {
    fontSize: 50,
  },
  titleGridContainer: {
    marginBottom: DIMS.LAYOUT_PADDING,
    marginTop: DIMS.LAYOUT_PADDING,
    maxWidth: 300,
  },
  titleGridContainerWithDescription: {
    marginBottom: DIMS.LAYOUT_PADDING / 2,
  },
  titleGridItem: {
    display: 'flex',
  },
});
